import nox
from nox.command import CommandFailed

nox.options.sessions = ["test"]


@nox.session
def test(session: nox.Session):
    session.env["MATURIN_PEP517_ARGS"] = "--profile=dev"
    session.run_always("python", "-m", "pip", "install", "-v", ".[dev]")
    try:
        session.install("--only-binary=numpy", "numpy>=1.16")
    except CommandFailed:
        # No binary wheel for numpy available on this platform
        pass
    session.run("pytest", *session.posargs)


@nox.session
def bench(session: nox.Session):
    session.install(".[dev]")
    session.run("pytest", "--benchmark-enable", "--benchmark-only", *session.posargs)
