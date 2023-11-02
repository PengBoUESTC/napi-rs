/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

/* auto-generated by NAPI-RS */

import * as __nodeFsPromises from 'node:fs/promises'
import * as __nodePath from 'node:path'
import { WASI as __nodeWASI } from 'node:wasi'
import { Worker } from 'node:worker_threads'
import * as __nodeURL from 'node:url'

import { instantiateNapiModule as __emnapiInstantiateNapiModule } from '@emnapi/core'
import { getDefaultContext as __emnapiGetDefaultContext } from '@emnapi/runtime'

const __wasi = new __nodeWASI({
  env: process.env,
  preopens: {
    '/': __nodePath.join(__nodeURL.fileURLToPath(import.meta.url), '..'),
  }
})

const __dirname = __nodePath.join(__nodeURL.fileURLToPath(import.meta.url), '..')

const __emnapiContext = __emnapiGetDefaultContext()

const __sharedMemory = new WebAssembly.Memory({
  initial: 1024,
  maximum: 10240,
  shared: true,
})

const { instance: __napiInstance, module: __wasiModule, napiModule: __napiModule } = await __emnapiInstantiateNapiModule(__nodeFsPromises.readFile(__nodePath.join(__dirname, 'index.wasi-wasm32.wasm')), {
  context: __emnapiContext,
  asyncWorkPoolSize: 4,
  wasi: __wasi,
  onCreateWorker() {
    return new Worker(__nodePath.join(__dirname, 'wasi-worker.mjs'), {
      env: process.env,
      execArgv: ['--experimental-wasi-unstable-preview1'],
    })
  },
  overwriteImports(importObject) {
    importObject.env = {
      ...importObject.env,
      ...importObject.napi,
      ...importObject.emnapi,
      memory: __sharedMemory,
    }
  },
  beforeInit({ instance }) {
    __napi_rs_initialize_modules(instance)
  }
})

function __napi_rs_initialize_modules(__napiInstance) {
  __napiInstance.exports['__napi_register__DEFAULT_COST_0']()
  __napiInstance.exports['__napi_register__TYPE_SKIPPED_CONST_1']()
  __napiInstance.exports['__napi_register__get_words_2']()
  __napiInstance.exports['__napi_register__get_nums_3']()
  __napiInstance.exports['__napi_register__sum_nums_4']()
  __napiInstance.exports['__napi_register__to_js_obj_5']()
  __napiInstance.exports['__napi_register__get_num_arr_6']()
  __napiInstance.exports['__napi_register__get_nested_num_arr_7']()
  __napiInstance.exports['__napi_register__read_file_async_8']()
  __napiInstance.exports['__napi_register__async_multi_two_9']()
  __napiInstance.exports['__napi_register__bigint_add_10']()
  __napiInstance.exports['__napi_register__create_big_int_11']()
  __napiInstance.exports['__napi_register__create_big_int_i64_12']()
  __napiInstance.exports['__napi_register__bigint_get_u64_as_string_13']()
  __napiInstance.exports['__napi_register__bigint_from_i64_14']()
  __napiInstance.exports['__napi_register__bigint_from_i128_15']()
  __napiInstance.exports['__napi_register__get_cwd_16']()
  __napiInstance.exports['__napi_register__option_end_17']()
  __napiInstance.exports['__napi_register__option_start_18']()
  __napiInstance.exports['__napi_register__option_start_end_19']()
  __napiInstance.exports['__napi_register__option_only_20']()
  __napiInstance.exports['__napi_register__read_file_21']()
  __napiInstance.exports['__napi_register__return_js_function_22']()
  __napiInstance.exports['__napi_register__callback_return_promise_23']()
  __napiInstance.exports['__napi_register__callback_return_promise_and_spawn_24']()
  __napiInstance.exports['__napi_register__capture_error_in_callback_25']()
  __napiInstance.exports['__napi_register__Animal_struct_26']()
  __napiInstance.exports['__napi_register__Animal_impl_27']()
  __napiInstance.exports['__napi_register__Dog_struct_28']()
  __napiInstance.exports['__napi_register__Bird_struct_29']()
  __napiInstance.exports['__napi_register__Bird_impl_30']()
  __napiInstance.exports['__napi_register__Blake2bHasher_struct_31']()
  __napiInstance.exports['__napi_register__Blake2bHasher_impl_32']()
  __napiInstance.exports['__napi_register__Blake2bHasher_impl_33']()
  __napiInstance.exports['__napi_register__Blake2bKey_struct_34']()
  __napiInstance.exports['__napi_register__Context_struct_35']()
  __napiInstance.exports['__napi_register__Context_impl_36']()
  __napiInstance.exports['__napi_register__AnimalWithDefaultConstructor_struct_37']()
  __napiInstance.exports['__napi_register__NinjaTurtle_struct_38']()
  __napiInstance.exports['__napi_register__NinjaTurtle_impl_39']()
  __napiInstance.exports['__napi_register__JsAssets_struct_40']()
  __napiInstance.exports['__napi_register__JsAssets_impl_41']()
  __napiInstance.exports['__napi_register__JsAsset_struct_42']()
  __napiInstance.exports['__napi_register__JsAsset_impl_43']()
  __napiInstance.exports['__napi_register__Optional_struct_44']()
  __napiInstance.exports['__napi_register__Optional_impl_45']()
  __napiInstance.exports['__napi_register__create_object_with_class_field_46']()
  __napiInstance.exports['__napi_register__receive_object_with_class_field_47']()
  __napiInstance.exports['__napi_register__NotWritableClass_struct_48']()
  __napiInstance.exports['__napi_register__NotWritableClass_impl_49']()
  __napiInstance.exports['__napi_register__CustomFinalize_struct_50']()
  __napiInstance.exports['__napi_register__CustomFinalize_impl_51']()
  __napiInstance.exports['__napi_register__Width_struct_52']()
  __napiInstance.exports['__napi_register__plus_one_53']()
  __napiInstance.exports['__napi_register__GetterSetterWithClosures_struct_54']()
  __napiInstance.exports['__napi_register__GetterSetterWithClosures_impl_55']()
  __napiInstance.exports['__napi_register__ClassWithFactory_struct_56']()
  __napiInstance.exports['__napi_register__ClassWithFactory_impl_57']()
  __napiInstance.exports['__napi_register__Selector_struct_58']()
  __napiInstance.exports['__napi_register__date_to_number_59']()
  __napiInstance.exports['__napi_register__chrono_date_to_millis_60']()
  __napiInstance.exports['__napi_register__chrono_date_add_1_minute_61']()
  __napiInstance.exports['__napi_register__chrono_native_date_time_62']()
  __napiInstance.exports['__napi_register__chrono_native_date_time_return_63']()
  __napiInstance.exports['__napi_register__either_string_or_number_64']()
  __napiInstance.exports['__napi_register__return_either_65']()
  __napiInstance.exports['__napi_register__either3_66']()
  __napiInstance.exports['__napi_register__either4_67']()
  __napiInstance.exports['__napi_register__JsClassForEither_struct_68']()
  __napiInstance.exports['__napi_register__JsClassForEither_impl_69']()
  __napiInstance.exports['__napi_register__AnotherClassForEither_struct_70']()
  __napiInstance.exports['__napi_register__AnotherClassForEither_impl_71']()
  __napiInstance.exports['__napi_register__receive_class_or_number_72']()
  __napiInstance.exports['__napi_register__receive_mut_class_or_number_73']()
  __napiInstance.exports['__napi_register__receive_different_class_74']()
  __napiInstance.exports['__napi_register__return_either_class_75']()
  __napiInstance.exports['__napi_register__either_from_option_76']()
  __napiInstance.exports['__napi_register__either_from_objects_77']()
  __napiInstance.exports['__napi_register__either_bool_or_function_78']()
  __napiInstance.exports['__napi_register__promise_in_either_79']()
  __napiInstance.exports['__napi_register__Kind_80']()
  __napiInstance.exports['__napi_register__Empty_81']()
  __napiInstance.exports['__napi_register__Status_82']()
  __napiInstance.exports['__napi_register__CustomNumEnum_83']()
  __napiInstance.exports['__napi_register__enum_to_i32_84']()
  __napiInstance.exports['__napi_register__SkippedEnums_85']()
  __napiInstance.exports['__napi_register__throw_error_86']()
  __napiInstance.exports['__napi_register__panic_87']()
  __napiInstance.exports['__napi_register__receive_string_88']()
  __napiInstance.exports['__napi_register__custom_status_code_89']()
  __napiInstance.exports['__napi_register__throw_async_error_90']()
  __napiInstance.exports['__napi_register__create_external_91']()
  __napiInstance.exports['__napi_register__create_external_string_92']()
  __napiInstance.exports['__napi_register__get_external_93']()
  __napiInstance.exports['__napi_register__mutate_external_94']()
  __napiInstance.exports['__napi_register__validate_array_95']()
  __napiInstance.exports['__napi_register__validate_buffer_96']()
  __napiInstance.exports['__napi_register__validate_typed_array_97']()
  __napiInstance.exports['__napi_register__validate_bigint_98']()
  __napiInstance.exports['__napi_register__validate_boolean_99']()
  __napiInstance.exports['__napi_register__validate_date_100']()
  __napiInstance.exports['__napi_register__validate_date_time_101']()
  __napiInstance.exports['__napi_register__validate_external_102']()
  __napiInstance.exports['__napi_register__validate_function_103']()
  __napiInstance.exports['__napi_register__validate_hash_map_104']()
  __napiInstance.exports['__napi_register__validate_null_105']()
  __napiInstance.exports['__napi_register__validate_undefined_106']()
  __napiInstance.exports['__napi_register__validate_number_107']()
  __napiInstance.exports['__napi_register__validate_promise_108']()
  __napiInstance.exports['__napi_register__validate_string_109']()
  __napiInstance.exports['__napi_register__validate_symbol_110']()
  __napiInstance.exports['__napi_register__validate_optional_111']()
  __napiInstance.exports['__napi_register__return_undefined_if_invalid_112']()
  __napiInstance.exports['__napi_register__return_undefined_if_invalid_promise_113']()
  __napiInstance.exports['__napi_register__ts_rename_114']()
  __napiInstance.exports['__napi_register__override_individual_arg_on_function_115']()
  __napiInstance.exports['__napi_register__override_individual_arg_on_function_with_cb_arg_116']()
  __napiInstance.exports['__napi_register__Fib_struct_117']()
  __napiInstance.exports['__napi_register__Fib_impl_118']()
  __napiInstance.exports['__napi_register__Fib_impl_119']()
  __napiInstance.exports['__napi_register__Fib2_struct_120']()
  __napiInstance.exports['__napi_register__Fib2_impl_121']()
  __napiInstance.exports['__napi_register__Fib2_impl_122']()
  __napiInstance.exports['__napi_register__Fib3_struct_123']()
  __napiInstance.exports['__napi_register__Fib3_impl_124']()
  __napiInstance.exports['__napi_register__ALIGNMENT_125']()
  __napiInstance.exports['__napi_register__xxh64_126']()
  __napiInstance.exports['__napi_register__xxh128_127']()
  __napiInstance.exports['__napi_register__Xxh3_struct_128']()
  __napiInstance.exports['__napi_register__Xxh3_impl_129']()
  __napiInstance.exports['__napi_register__xxh2_plus_130']()
  __napiInstance.exports['__napi_register__xxh3_xxh64_alias_131']()
  __napiInstance.exports['__napi_register__xxh64_alias_132']()
  __napiInstance.exports['__napi_register__get_mapping_133']()
  __napiInstance.exports['__napi_register__sum_mapping_134']()
  __napiInstance.exports['__napi_register__map_option_135']()
  __napiInstance.exports['__napi_register__return_null_136']()
  __napiInstance.exports['__napi_register__return_undefined_137']()
  __napiInstance.exports['__napi_register__add_138']()
  __napiInstance.exports['__napi_register__fibonacci_139']()
  __napiInstance.exports['__napi_register__list_obj_keys_140']()
  __napiInstance.exports['__napi_register__create_obj_141']()
  __napiInstance.exports['__napi_register__get_global_142']()
  __napiInstance.exports['__napi_register__get_undefined_143']()
  __napiInstance.exports['__napi_register__get_null_144']()
  __napiInstance.exports['__napi_register__receive_all_optional_object_145']()
  __napiInstance.exports['__napi_register__AliasedEnum_146']()
  __napiInstance.exports['__napi_register__fn_received_aliased_147']()
  __napiInstance.exports['__napi_register__receive_strict_object_148']()
  __napiInstance.exports['__napi_register__get_str_from_object_149']()
  __napiInstance.exports['__napi_register__create_obj_with_property_150']()
  __napiInstance.exports['__napi_register__getter_from_obj_151']()
  __napiInstance.exports['__napi_register__receive_object_only_from_js_152']()
  __napiInstance.exports['__napi_register__async_plus_100_153']()
  __napiInstance.exports['__napi_register__JsRepo_struct_154']()
  __napiInstance.exports['__napi_register__JsRepo_impl_155']()
  __napiInstance.exports['__napi_register__JsRemote_struct_156']()
  __napiInstance.exports['__napi_register__JsRemote_impl_157']()
  __napiInstance.exports['__napi_register__CSSRuleList_struct_158']()
  __napiInstance.exports['__napi_register__CSSRuleList_impl_159']()
  __napiInstance.exports['__napi_register__CSSStyleSheet_struct_160']()
  __napiInstance.exports['__napi_register__AnotherCSSStyleSheet_struct_161']()
  __napiInstance.exports['__napi_register__AnotherCSSStyleSheet_impl_162']()
  __napiInstance.exports['__napi_register__CSSStyleSheet_impl_163']()
  __napiInstance.exports['__napi_register__read_package_json_164']()
  __napiInstance.exports['__napi_register__get_package_json_name_165']()
  __napiInstance.exports['__napi_register__test_serde_roundtrip_166']()
  __napiInstance.exports['__napi_register__test_serde_big_number_precision_167']()
  __napiInstance.exports['__napi_register__return_from_shared_crate_168']()
  __napiInstance.exports['__napi_register__contains_169']()
  __napiInstance.exports['__napi_register__concat_str_170']()
  __napiInstance.exports['__napi_register__concat_utf16_171']()
  __napiInstance.exports['__napi_register__concat_latin1_172']()
  __napiInstance.exports['__napi_register__roundtrip_str_173']()
  __napiInstance.exports['__napi_register__set_symbol_in_obj_174']()
  __napiInstance.exports['__napi_register__create_symbol_175']()
  __napiInstance.exports['__napi_register__create_symbol_for_176']()
  __napiInstance.exports['__napi_register__DelaySum_impl_177']()
  __napiInstance.exports['__napi_register__without_abort_controller_178']()
  __napiInstance.exports['__napi_register__with_abort_controller_179']()
  __napiInstance.exports['__napi_register__call_threadsafe_function_180']()
  __napiInstance.exports['__napi_register__call_long_threadsafe_function_181']()
  __napiInstance.exports['__napi_register__threadsafe_function_throw_error_182']()
  __napiInstance.exports['__napi_register__threadsafe_function_fatal_mode_183']()
  __napiInstance.exports['__napi_register__threadsafe_function_fatal_mode_error_184']()
  __napiInstance.exports['__napi_register__threadsafe_function_closure_capture_185']()
  __napiInstance.exports['__napi_register__tsfn_call_with_callback_186']()
  __napiInstance.exports['__napi_register__tsfn_async_call_187']()
  __napiInstance.exports['__napi_register__accept_threadsafe_function_188']()
  __napiInstance.exports['__napi_register__accept_threadsafe_function_fatal_189']()
  __napiInstance.exports['__napi_register__accept_threadsafe_function_tuple_args_190']()
  __napiInstance.exports['__napi_register__tsfn_return_promise_191']()
  __napiInstance.exports['__napi_register__tsfn_return_promise_timeout_192']()
  __napiInstance.exports['__napi_register__tsfn_throw_from_js_193']()
  __napiInstance.exports['__napi_register__get_buffer_194']()
  __napiInstance.exports['__napi_register__append_buffer_195']()
  __napiInstance.exports['__napi_register__get_empty_buffer_196']()
  __napiInstance.exports['__napi_register__convert_u32_array_197']()
  __napiInstance.exports['__napi_register__create_external_typed_array_198']()
  __napiInstance.exports['__napi_register__mutate_typed_array_199']()
  __napiInstance.exports['__napi_register__deref_uint8_array_200']()
  __napiInstance.exports['__napi_register__buffer_pass_through_201']()
  __napiInstance.exports['__napi_register__array_buffer_pass_through_202']()
  __napiInstance.exports['__napi_register__AsyncBuffer_impl_203']()
  __napiInstance.exports['__napi_register__async_reduce_buffer_204']()
  __napiInstance.exports['__napi_register__run_script_205']()
}

const binding = __napiModule.exports
const { Animal, AnimalWithDefaultConstructor, AnotherClassForEither, AnotherCssStyleSheet, AnotherCSSStyleSheet, Asset, JsAsset, Assets, JsAssets, Bird, Blake2BHasher, Blake2bHasher, Blake2BKey, Blake2bKey, ClassWithFactory, Context, CssRuleList, CSSRuleList, CssStyleSheet, CSSStyleSheet, CustomFinalize, Dog, Fib, Fib2, Fib3, GetterSetterWithClosures, JsClassForEither, JsRemote, JsRepo, NinjaTurtle, NotWritableClass, Optional, Selector, Width, acceptThreadsafeFunction, acceptThreadsafeFunctionFatal, acceptThreadsafeFunctionTupleArgs, add, ALIAS, AliasedEnum, appendBuffer, arrayBufferPassThrough, asyncMultiTwo, asyncPlus100, asyncReduceBuffer, bigintAdd, bigintFromI128, bigintFromI64, bigintGetU64AsString, bufferPassThrough, callbackReturnPromise, callbackReturnPromiseAndSpawn, callLongThreadsafeFunction, callThreadsafeFunction, captureErrorInCallback, chronoDateAdd1Minute, chronoDateToMillis, chronoNativeDateTime, chronoNativeDateTimeReturn, concatLatin1, concatStr, concatUtf16, contains, convertU32Array, createBigInt, createBigIntI64, createExternal, createExternalString, createExternalTypedArray, createObj, createObjectWithClassField, createObjWithProperty, createSymbol, createSymbolFor, CustomNumEnum, customStatusCode, dateToNumber, DEFAULT_COST, derefUint8Array, either3, either4, eitherBoolOrFunction, eitherFromObjects, eitherFromOption, eitherStringOrNumber, Empty, enumToI32, fibonacci, fnReceivedAliased, getBuffer, getCwd, getEmptyBuffer, getExternal, getGlobal, getMapping, getNestedNumArr, getNull, getNumArr, getNums, getPackageJsonName, getStrFromObject, getterFromObj, getUndefined, getWords, Kind, listObjKeys, mapOption, mutateExternal, mutateTypedArray, optionEnd, optionOnly, optionStart, optionStartEnd, overrideIndividualArgOnFunction, overrideIndividualArgOnFunctionWithCbArg, panic, plusOne, promiseInEither, readFile, readFileAsync, readPackageJson, receiveAllOptionalObject, receiveClassOrNumber, receiveDifferentClass, receiveMutClassOrNumber, receiveObjectOnlyFromJs, receiveObjectWithClassField, receiveStrictObject, receiveString, returnEither, returnEitherClass, returnFromSharedCrate, returnJsFunction, returnNull, returnUndefined, returnUndefinedIfInvalid, returnUndefinedIfInvalidPromise, roundtripStr, runScript, setSymbolInObj, Status, sumMapping, sumNums, testSerdeBigNumberPrecision, testSerdeRoundtrip, threadsafeFunctionClosureCapture, threadsafeFunctionFatalMode, threadsafeFunctionFatalModeError, threadsafeFunctionThrowError, throwAsyncError, throwError, toJsObj, tsfnAsyncCall, tsfnCallWithCallback, tsfnReturnPromise, tsfnReturnPromiseTimeout, tsfnThrowFromJs, tsRename, validateArray, validateBigint, validateBoolean, validateBuffer, validateDate, validateDateTime, validateExternal, validateFunction, validateHashMap, validateNull, validateNumber, validateOptional, validatePromise, validateString, validateSymbol, validateTypedArray, validateUndefined, withAbortController, withoutAbortController, xxh64Alias, xxh2, xxh3 } = binding
export {
  Animal,
  AnimalWithDefaultConstructor,
  AnotherClassForEither,
  AnotherCssStyleSheet,
  AnotherCSSStyleSheet,
  Asset,
  JsAsset,
  Assets,
  JsAssets,
  Bird,
  Blake2BHasher,
  Blake2bHasher,
  Blake2BKey,
  Blake2bKey,
  ClassWithFactory,
  Context,
  CssRuleList,
  CSSRuleList,
  CssStyleSheet,
  CSSStyleSheet,
  CustomFinalize,
  Dog,
  Fib,
  Fib2,
  Fib3,
  GetterSetterWithClosures,
  JsClassForEither,
  JsRemote,
  JsRepo,
  NinjaTurtle,
  NotWritableClass,
  Optional,
  Selector,
  Width,
  acceptThreadsafeFunction,
  acceptThreadsafeFunctionFatal,
  acceptThreadsafeFunctionTupleArgs,
  add,
  ALIAS,
  AliasedEnum,
  appendBuffer,
  arrayBufferPassThrough,
  asyncMultiTwo,
  asyncPlus100,
  asyncReduceBuffer,
  bigintAdd,
  bigintFromI128,
  bigintFromI64,
  bigintGetU64AsString,
  bufferPassThrough,
  callbackReturnPromise,
  callbackReturnPromiseAndSpawn,
  callLongThreadsafeFunction,
  callThreadsafeFunction,
  captureErrorInCallback,
  chronoDateAdd1Minute,
  chronoDateToMillis,
  chronoNativeDateTime,
  chronoNativeDateTimeReturn,
  concatLatin1,
  concatStr,
  concatUtf16,
  contains,
  convertU32Array,
  createBigInt,
  createBigIntI64,
  createExternal,
  createExternalString,
  createExternalTypedArray,
  createObj,
  createObjectWithClassField,
  createObjWithProperty,
  createSymbol,
  createSymbolFor,
  CustomNumEnum,
  customStatusCode,
  dateToNumber,
  DEFAULT_COST,
  derefUint8Array,
  either3,
  either4,
  eitherBoolOrFunction,
  eitherFromObjects,
  eitherFromOption,
  eitherStringOrNumber,
  Empty,
  enumToI32,
  fibonacci,
  fnReceivedAliased,
  getBuffer,
  getCwd,
  getEmptyBuffer,
  getExternal,
  getGlobal,
  getMapping,
  getNestedNumArr,
  getNull,
  getNumArr,
  getNums,
  getPackageJsonName,
  getStrFromObject,
  getterFromObj,
  getUndefined,
  getWords,
  Kind,
  listObjKeys,
  mapOption,
  mutateExternal,
  mutateTypedArray,
  optionEnd,
  optionOnly,
  optionStart,
  optionStartEnd,
  overrideIndividualArgOnFunction,
  overrideIndividualArgOnFunctionWithCbArg,
  panic,
  plusOne,
  promiseInEither,
  readFile,
  readFileAsync,
  readPackageJson,
  receiveAllOptionalObject,
  receiveClassOrNumber,
  receiveDifferentClass,
  receiveMutClassOrNumber,
  receiveObjectOnlyFromJs,
  receiveObjectWithClassField,
  receiveStrictObject,
  receiveString,
  returnEither,
  returnEitherClass,
  returnFromSharedCrate,
  returnJsFunction,
  returnNull,
  returnUndefined,
  returnUndefinedIfInvalid,
  returnUndefinedIfInvalidPromise,
  roundtripStr,
  runScript,
  setSymbolInObj,
  Status,
  sumMapping,
  sumNums,
  testSerdeBigNumberPrecision,
  testSerdeRoundtrip,
  threadsafeFunctionClosureCapture,
  threadsafeFunctionFatalMode,
  threadsafeFunctionFatalModeError,
  threadsafeFunctionThrowError,
  throwAsyncError,
  throwError,
  toJsObj,
  tsfnAsyncCall,
  tsfnCallWithCallback,
  tsfnReturnPromise,
  tsfnReturnPromiseTimeout,
  tsfnThrowFromJs,
  tsRename,
  validateArray,
  validateBigint,
  validateBoolean,
  validateBuffer,
  validateDate,
  validateDateTime,
  validateExternal,
  validateFunction,
  validateHashMap,
  validateNull,
  validateNumber,
  validateOptional,
  validatePromise,
  validateString,
  validateSymbol,
  validateTypedArray,
  validateUndefined,
  withAbortController,
  withoutAbortController,
  xxh64Alias,
  xxh2,
  xxh3
}