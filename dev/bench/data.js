window.BENCHMARK_DATA = {
  "lastUpdate": 1704454969598,
  "repoUrl": "https://github.com/erikjohnston/pyo3",
  "entries": {
    "pyo3-bench": [
      {
        "commit": {
          "author": {
            "email": "mail@davidhewitt.dev",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4b172874dcbbc7402fad6124c346f1ab64b051d7",
          "message": "Merge pull request #3727 from davidhewitt/relnotes-0.20.2\n\nrelease notes for 0.20.2",
          "timestamp": "2024-01-05T07:26:23Z",
          "tree_id": "91ab45355c444daabac38bb568dfb69f5b242ab9",
          "url": "https://github.com/erikjohnston/pyo3/commit/4b172874dcbbc7402fad6124c346f1ab64b051d7"
        },
        "date": 1704454862509,
        "tool": "cargo",
        "benches": [
          {
            "name": "identify_object_type",
            "value": 475,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "collect_generic_iterator",
            "value": 11518252,
            "range": "± 56347",
            "unit": "ns/iter"
          },
          {
            "name": "extract_bigint_extract_fail",
            "value": 248,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "extract_bigint_small",
            "value": 57,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_bigint_big_negative",
            "value": 173,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "extract_bigint_big_positive",
            "value": 141,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_bigint_huge_negative",
            "value": 1280,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "extract_bigint_huge_positive",
            "value": 1029,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "call_0",
            "value": 32278,
            "range": "± 700",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 103821,
            "range": "± 4105",
            "unit": "ns/iter"
          },
          {
            "name": "ordered_dunder_methods",
            "value": 40,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "ordered_richcmp",
            "value": 38,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "decimal_via_extract",
            "value": 368,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2010693,
            "range": "± 9427",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4161233,
            "range": "± 72432",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2623372,
            "range": "± 34309",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 6726497,
            "range": "± 293098",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 9383286,
            "range": "± 122274",
            "unit": "ns/iter"
          },
          {
            "name": "mapping_from_dict",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "err_new_restore_and_fetch",
            "value": 172,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "err_new_without_gil",
            "value": 22,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "extract_str_extract_success",
            "value": 10,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_str_extract_fail",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_str_downcast_success",
            "value": 10,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_str_downcast_fail",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_int_extract_success",
            "value": 7,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_int_extract_fail",
            "value": 256,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_int_downcast_success",
            "value": 7,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_int_downcast_fail",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_float_extract_success",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_float_extract_fail",
            "value": 234,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "extract_float_downcast_success",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_float_downcast_fail",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "enum_from_pyobject",
            "value": 1005,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "list_via_downcast",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "list_via_extract",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "not_a_list_via_downcast",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "not_a_list_via_extract",
            "value": 21,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "not_a_list_via_extract_enum",
            "value": 551,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "f64_from_pyobject",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 7,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 61,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 62,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "getattr_direct",
            "value": 113,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "getattr_intern",
            "value": 27,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1627536,
            "range": "± 16975",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1121261,
            "range": "± 111226",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 958996,
            "range": "± 7927",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 864076,
            "range": "± 5061",
            "unit": "ns/iter"
          },
          {
            "name": "sequence_from_list",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 3198,
            "range": "± 337",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 2170,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "set_new",
            "value": 1686535,
            "range": "± 42847",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2039619,
            "range": "± 12298",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7424781,
            "range": "± 73794",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 3000696,
            "range": "± 14648",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1370476,
            "range": "± 1305",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1271796,
            "range": "± 104992",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 858872,
            "range": "± 1789",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 780307,
            "range": "± 3276",
            "unit": "ns/iter"
          },
          {
            "name": "sequence_from_tuple",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new_list",
            "value": 186585,
            "range": "± 2109",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_to_list",
            "value": 78570,
            "range": "± 926",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_into_py",
            "value": 87,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "pytest-bench": [
      {
        "commit": {
          "author": {
            "email": "mail@davidhewitt.dev",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4b172874dcbbc7402fad6124c346f1ab64b051d7",
          "message": "Merge pull request #3727 from davidhewitt/relnotes-0.20.2\n\nrelease notes for 0.20.2",
          "timestamp": "2024-01-05T07:26:23Z",
          "tree_id": "91ab45355c444daabac38bb568dfb69f5b242ab9",
          "url": "https://github.com/erikjohnston/pyo3/commit/4b172874dcbbc7402fad6124c346f1ab64b051d7"
        },
        "date": 1704454955946,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init",
            "value": 2545827.5518230977,
            "unit": "iter/sec",
            "range": "stddev: 1.4149157031406815e-7",
            "extra": "mean: 392.7995827069622 nsec\nrounds: 169177"
          },
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init_py",
            "value": 4728200.67852558,
            "unit": "iter/sec",
            "range": "stddev: 1.756525203813763e-8",
            "extra": "mean: 211.49694524214553 nsec\nrounds: 195351"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_py",
            "value": 10557373.645219715,
            "unit": "iter/sec",
            "range": "stddev: 6.76617816881233e-9",
            "extra": "mean: 94.72052743466091 nsec\nrounds: 105397"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_rs",
            "value": 7160707.882609287,
            "unit": "iter/sec",
            "range": "stddev: 1.4813591084793365e-8",
            "extra": "mean: 139.6509976937658 nsec\nrounds: 73720"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_py",
            "value": 3411302.0758285634,
            "unit": "iter/sec",
            "range": "stddev: 2.4698680454780558e-8",
            "extra": "mean: 293.14319804326107 nsec\nrounds: 197278"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_rs",
            "value": 2632178.5295591815,
            "unit": "iter/sec",
            "range": "stddev: 2.9578376605068344e-8",
            "extra": "mean: 379.91344005357905 nsec\nrounds: 127812"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_py",
            "value": 2788107.1463707453,
            "unit": "iter/sec",
            "range": "stddev: 2.9365221833008854e-8",
            "extra": "mean: 358.666273389705 nsec\nrounds: 189072"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_rs",
            "value": 1350866.0915822159,
            "unit": "iter/sec",
            "range": "stddev: 1.4236121728122233e-7",
            "extra": "mean: 740.2658237048053 nsec\nrounds: 175101"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_py",
            "value": 1853429.2189681607,
            "unit": "iter/sec",
            "range": "stddev: 4.4958248053271045e-8",
            "extra": "mean: 539.5404311995895 nsec\nrounds: 179824"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_rs",
            "value": 1115040.0265719104,
            "unit": "iter/sec",
            "range": "stddev: 1.840266237444186e-7",
            "extra": "mean: 896.8287919442761 nsec\nrounds: 116741"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_py",
            "value": 1798005.2473158606,
            "unit": "iter/sec",
            "range": "stddev: 6.898418597180923e-8",
            "extra": "mean: 556.1719029979712 nsec\nrounds: 157184"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_rs",
            "value": 1101115.9757884648,
            "unit": "iter/sec",
            "range": "stddev: 1.788185647492537e-7",
            "extra": "mean: 908.1695497914653 nsec\nrounds: 154751"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_py",
            "value": 2237707.350852131,
            "unit": "iter/sec",
            "range": "stddev: 3.734714091356864e-8",
            "extra": "mean: 446.8859610347146 nsec\nrounds: 190477"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_rs",
            "value": 4143124.3283031587,
            "unit": "iter/sec",
            "range": "stddev: 1.9607681480409735e-8",
            "extra": "mean: 241.36374406354247 nsec\nrounds: 196503"
          }
        ]
      }
    ]
  }
}