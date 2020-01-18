initSidebarItems({"enum":[["PyErrValue","Represents a `PyErr` value"]],"fn":[["prepare_freethreaded_python","Prepares the use of Python in a free-threaded context."]],"macro":[["create_exception","Defines a new exception type."],["create_exception_type_object","`impl $crate::type_object::PyTypeObject for $name` where `$name` is an exception newly defined in rust code."],["impl_exception_boilerplate","The boilerplate to convert between a rust type and a python exception"],["import_exception","Defines rust type for exception defined in Python code."],["import_exception_type_object","`impl $crate::type_object::PyTypeObject for $name` where `$name` is an exception defined in python code."],["py_run","A convenient macro to execute a Python code snippet, with some local variables set."],["pyobject_native_type",""],["pyobject_native_type_convert",""],["pyobject_native_type_named",""],["pyobject_native_var_type",""],["wrap_pyfunction","Returns a function that takes a [Python] instance and returns a python function."],["wrap_pymodule","Returns a function that takes a [Python] instance and returns a python module."]],"mod":[["buffer","`PyBuffer` implementation"],["class","Python object protocols"],["exceptions","Exception types defined by python."],["ffi","Raw ffi declarations for the c interface of python"],["freelist","Free allocation list"],["marshal",""],["prelude","A collection of items you most likely want to have in scope when working with pyo3"],["proc_macro","The proc macros, which are also part of the prelude"],["pyclass","Traits and structs for `#[pyclass]`."],["pyclass_init","Initialization utilities for `#[pyclass]`."],["pyclass_slots","This module contains additional fields for `#[pyclass]`.. Mainly used by our proc-macro codes."],["type_object","Python type object information"],["types","Various types defined by the python interpreter such as `int`, `str` and `tuple`"]],"struct":[["GILGuard","RAII type that represents the Global Interpreter Lock acquisition."],["ManagedPyRef","Reference to a converted [ToPyObject]."],["Py","Safe wrapper around unsafe `*mut ffi::PyObject` pointer with specified type information."],["PyDowncastError","Marker type that indicates an error while downcasting"],["PyErr","Represents a Python exception that was raised."],["PyObject","A python object"],["Python","Marker type that indicates that the GIL is currently held."]],"trait":[["AsPyPointer","This trait represents that, we can do zero-cost conversion from the object to FFI pointer."],["AsPyRef",""],["FromPy","Similar to [std::convert::From], just that it requires a gil token."],["FromPyObject","`FromPyObject` is implemented by various types that can be extracted from a Python object reference."],["FromPyPointer","Raw level conversion between `*mut ffi::PyObject` and PyO3 types."],["IntoPy","Similar to [std::convert::Into], just that it requires a gil token."],["IntoPyPointer","This trait allows retrieving the underlying FFI pointer from Python objects."],["ObjectProtocol","Python object model helper methods"],["PyErrArguments","Helper conversion trait that allows to use custom arguments for exception constructor."],["PyNativeType","Types that are built into the python interpreter."],["PyTryFrom","Trait implemented by Python object types that allow a checked downcast. This trait is similar to `std::convert::TryFrom`"],["PyTryInto","Trait implemented by Python object types that allow a checked downcast. This trait is similar to `std::convert::TryInto`"],["ToBorrowedObject","This trait has two implementations: The slow one is implemented for all [ToPyObject] and creates a new object using [ToPyObject::to_object], while the fast one is only implemented for AsPyPointer (we know that every AsPyPointer is also ToPyObject) and uses [AsPyPointer::as_ptr()]"],["ToPyObject","Conversion trait that allows various objects to be converted into `PyObject`"]],"type":[["PyResult","Represents the result of a Python call."]]});