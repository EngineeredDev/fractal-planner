var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};
// src/config.ts
import { readFile } from "fs/promises";
import { join } from "path";
import { homedir } from "os";

// node_modules/zod/v4/classic/external.js
var exports_external = {};
__export(exports_external, {
  xor: () => xor,
  xid: () => xid2,
  void: () => _void2,
  uuidv7: () => uuidv7,
  uuidv6: () => uuidv6,
  uuidv4: () => uuidv4,
  uuid: () => uuid2,
  util: () => exports_util,
  url: () => url,
  uppercase: () => _uppercase,
  unknown: () => unknown,
  union: () => union,
  undefined: () => _undefined3,
  ulid: () => ulid2,
  uint64: () => uint64,
  uint32: () => uint32,
  tuple: () => tuple,
  trim: () => _trim,
  treeifyError: () => treeifyError,
  transform: () => transform,
  toUpperCase: () => _toUpperCase,
  toLowerCase: () => _toLowerCase,
  toJSONSchema: () => toJSONSchema,
  templateLiteral: () => templateLiteral,
  symbol: () => symbol,
  superRefine: () => superRefine,
  success: () => success,
  stringbool: () => stringbool,
  stringFormat: () => stringFormat,
  string: () => string2,
  strictObject: () => strictObject,
  startsWith: () => _startsWith,
  slugify: () => _slugify,
  size: () => _size,
  setErrorMap: () => setErrorMap,
  set: () => set,
  safeParseAsync: () => safeParseAsync2,
  safeParse: () => safeParse2,
  safeEncodeAsync: () => safeEncodeAsync2,
  safeEncode: () => safeEncode2,
  safeDecodeAsync: () => safeDecodeAsync2,
  safeDecode: () => safeDecode2,
  registry: () => registry,
  regexes: () => exports_regexes,
  regex: () => _regex,
  refine: () => refine,
  record: () => record,
  readonly: () => readonly,
  property: () => _property,
  promise: () => promise,
  prettifyError: () => prettifyError,
  preprocess: () => preprocess,
  prefault: () => prefault,
  positive: () => _positive,
  pipe: () => pipe,
  partialRecord: () => partialRecord,
  parseAsync: () => parseAsync2,
  parse: () => parse3,
  overwrite: () => _overwrite,
  optional: () => optional,
  object: () => object,
  number: () => number2,
  nullish: () => nullish2,
  nullable: () => nullable,
  null: () => _null3,
  normalize: () => _normalize,
  nonpositive: () => _nonpositive,
  nonoptional: () => nonoptional,
  nonnegative: () => _nonnegative,
  never: () => never,
  negative: () => _negative,
  nativeEnum: () => nativeEnum,
  nanoid: () => nanoid2,
  nan: () => nan,
  multipleOf: () => _multipleOf,
  minSize: () => _minSize,
  minLength: () => _minLength,
  mime: () => _mime,
  meta: () => meta2,
  maxSize: () => _maxSize,
  maxLength: () => _maxLength,
  map: () => map,
  mac: () => mac2,
  lte: () => _lte,
  lt: () => _lt,
  lowercase: () => _lowercase,
  looseRecord: () => looseRecord,
  looseObject: () => looseObject,
  locales: () => exports_locales,
  literal: () => literal,
  length: () => _length,
  lazy: () => lazy,
  ksuid: () => ksuid2,
  keyof: () => keyof,
  jwt: () => jwt,
  json: () => json,
  iso: () => exports_iso,
  ipv6: () => ipv62,
  ipv4: () => ipv42,
  intersection: () => intersection,
  int64: () => int64,
  int32: () => int32,
  int: () => int,
  instanceof: () => _instanceof,
  includes: () => _includes,
  httpUrl: () => httpUrl,
  hostname: () => hostname2,
  hex: () => hex2,
  hash: () => hash,
  guid: () => guid2,
  gte: () => _gte,
  gt: () => _gt,
  globalRegistry: () => globalRegistry,
  getErrorMap: () => getErrorMap,
  function: () => _function,
  fromJSONSchema: () => fromJSONSchema,
  formatError: () => formatError,
  float64: () => float64,
  float32: () => float32,
  flattenError: () => flattenError,
  file: () => file,
  exactOptional: () => exactOptional,
  enum: () => _enum2,
  endsWith: () => _endsWith,
  encodeAsync: () => encodeAsync2,
  encode: () => encode2,
  emoji: () => emoji2,
  email: () => email2,
  e164: () => e1642,
  discriminatedUnion: () => discriminatedUnion,
  describe: () => describe2,
  decodeAsync: () => decodeAsync2,
  decode: () => decode2,
  date: () => date3,
  custom: () => custom,
  cuid2: () => cuid22,
  cuid: () => cuid3,
  core: () => exports_core2,
  config: () => config,
  coerce: () => exports_coerce,
  codec: () => codec,
  clone: () => clone,
  cidrv6: () => cidrv62,
  cidrv4: () => cidrv42,
  check: () => check,
  catch: () => _catch2,
  boolean: () => boolean2,
  bigint: () => bigint2,
  base64url: () => base64url2,
  base64: () => base642,
  array: () => array,
  any: () => any,
  _function: () => _function,
  _default: () => _default2,
  _ZodString: () => _ZodString,
  ZodXor: () => ZodXor,
  ZodXID: () => ZodXID,
  ZodVoid: () => ZodVoid,
  ZodUnknown: () => ZodUnknown,
  ZodUnion: () => ZodUnion,
  ZodUndefined: () => ZodUndefined,
  ZodUUID: () => ZodUUID,
  ZodURL: () => ZodURL,
  ZodULID: () => ZodULID,
  ZodType: () => ZodType,
  ZodTuple: () => ZodTuple,
  ZodTransform: () => ZodTransform,
  ZodTemplateLiteral: () => ZodTemplateLiteral,
  ZodSymbol: () => ZodSymbol,
  ZodSuccess: () => ZodSuccess,
  ZodStringFormat: () => ZodStringFormat,
  ZodString: () => ZodString,
  ZodSet: () => ZodSet,
  ZodRecord: () => ZodRecord,
  ZodRealError: () => ZodRealError,
  ZodReadonly: () => ZodReadonly,
  ZodPromise: () => ZodPromise,
  ZodPrefault: () => ZodPrefault,
  ZodPipe: () => ZodPipe,
  ZodOptional: () => ZodOptional,
  ZodObject: () => ZodObject,
  ZodNumberFormat: () => ZodNumberFormat,
  ZodNumber: () => ZodNumber,
  ZodNullable: () => ZodNullable,
  ZodNull: () => ZodNull,
  ZodNonOptional: () => ZodNonOptional,
  ZodNever: () => ZodNever,
  ZodNanoID: () => ZodNanoID,
  ZodNaN: () => ZodNaN,
  ZodMap: () => ZodMap,
  ZodMAC: () => ZodMAC,
  ZodLiteral: () => ZodLiteral,
  ZodLazy: () => ZodLazy,
  ZodKSUID: () => ZodKSUID,
  ZodJWT: () => ZodJWT,
  ZodIssueCode: () => ZodIssueCode,
  ZodIntersection: () => ZodIntersection,
  ZodISOTime: () => ZodISOTime,
  ZodISODuration: () => ZodISODuration,
  ZodISODateTime: () => ZodISODateTime,
  ZodISODate: () => ZodISODate,
  ZodIPv6: () => ZodIPv6,
  ZodIPv4: () => ZodIPv4,
  ZodGUID: () => ZodGUID,
  ZodFunction: () => ZodFunction,
  ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
  ZodFile: () => ZodFile,
  ZodExactOptional: () => ZodExactOptional,
  ZodError: () => ZodError,
  ZodEnum: () => ZodEnum,
  ZodEmoji: () => ZodEmoji,
  ZodEmail: () => ZodEmail,
  ZodE164: () => ZodE164,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodDefault: () => ZodDefault,
  ZodDate: () => ZodDate,
  ZodCustomStringFormat: () => ZodCustomStringFormat,
  ZodCustom: () => ZodCustom,
  ZodCodec: () => ZodCodec,
  ZodCatch: () => ZodCatch,
  ZodCUID2: () => ZodCUID2,
  ZodCUID: () => ZodCUID,
  ZodCIDRv6: () => ZodCIDRv6,
  ZodCIDRv4: () => ZodCIDRv4,
  ZodBoolean: () => ZodBoolean,
  ZodBigIntFormat: () => ZodBigIntFormat,
  ZodBigInt: () => ZodBigInt,
  ZodBase64URL: () => ZodBase64URL,
  ZodBase64: () => ZodBase64,
  ZodArray: () => ZodArray,
  ZodAny: () => ZodAny,
  TimePrecision: () => TimePrecision,
  NEVER: () => NEVER,
  $output: () => $output,
  $input: () => $input,
  $brand: () => $brand
});

// node_modules/zod/v4/core/index.js
var exports_core2 = {};
__export(exports_core2, {
  version: () => version,
  util: () => exports_util,
  treeifyError: () => treeifyError,
  toJSONSchema: () => toJSONSchema,
  toDotPath: () => toDotPath,
  safeParseAsync: () => safeParseAsync,
  safeParse: () => safeParse,
  safeEncodeAsync: () => safeEncodeAsync,
  safeEncode: () => safeEncode,
  safeDecodeAsync: () => safeDecodeAsync,
  safeDecode: () => safeDecode,
  registry: () => registry,
  regexes: () => exports_regexes,
  process: () => process2,
  prettifyError: () => prettifyError,
  parseAsync: () => parseAsync,
  parse: () => parse,
  meta: () => meta,
  locales: () => exports_locales,
  isValidJWT: () => isValidJWT,
  isValidBase64URL: () => isValidBase64URL,
  isValidBase64: () => isValidBase64,
  initializeContext: () => initializeContext,
  globalRegistry: () => globalRegistry,
  globalConfig: () => globalConfig,
  formatError: () => formatError,
  flattenError: () => flattenError,
  finalize: () => finalize,
  extractDefs: () => extractDefs,
  encodeAsync: () => encodeAsync,
  encode: () => encode,
  describe: () => describe,
  decodeAsync: () => decodeAsync,
  decode: () => decode,
  createToJSONSchemaMethod: () => createToJSONSchemaMethod,
  createStandardJSONSchemaMethod: () => createStandardJSONSchemaMethod,
  config: () => config,
  clone: () => clone,
  _xor: () => _xor,
  _xid: () => _xid,
  _void: () => _void,
  _uuidv7: () => _uuidv7,
  _uuidv6: () => _uuidv6,
  _uuidv4: () => _uuidv4,
  _uuid: () => _uuid,
  _url: () => _url,
  _uppercase: () => _uppercase,
  _unknown: () => _unknown,
  _union: () => _union,
  _undefined: () => _undefined2,
  _ulid: () => _ulid,
  _uint64: () => _uint64,
  _uint32: () => _uint32,
  _tuple: () => _tuple,
  _trim: () => _trim,
  _transform: () => _transform,
  _toUpperCase: () => _toUpperCase,
  _toLowerCase: () => _toLowerCase,
  _templateLiteral: () => _templateLiteral,
  _symbol: () => _symbol,
  _superRefine: () => _superRefine,
  _success: () => _success,
  _stringbool: () => _stringbool,
  _stringFormat: () => _stringFormat,
  _string: () => _string,
  _startsWith: () => _startsWith,
  _slugify: () => _slugify,
  _size: () => _size,
  _set: () => _set,
  _safeParseAsync: () => _safeParseAsync,
  _safeParse: () => _safeParse,
  _safeEncodeAsync: () => _safeEncodeAsync,
  _safeEncode: () => _safeEncode,
  _safeDecodeAsync: () => _safeDecodeAsync,
  _safeDecode: () => _safeDecode,
  _regex: () => _regex,
  _refine: () => _refine,
  _record: () => _record,
  _readonly: () => _readonly,
  _property: () => _property,
  _promise: () => _promise,
  _positive: () => _positive,
  _pipe: () => _pipe,
  _parseAsync: () => _parseAsync,
  _parse: () => _parse,
  _overwrite: () => _overwrite,
  _optional: () => _optional,
  _number: () => _number,
  _nullable: () => _nullable,
  _null: () => _null2,
  _normalize: () => _normalize,
  _nonpositive: () => _nonpositive,
  _nonoptional: () => _nonoptional,
  _nonnegative: () => _nonnegative,
  _never: () => _never,
  _negative: () => _negative,
  _nativeEnum: () => _nativeEnum,
  _nanoid: () => _nanoid,
  _nan: () => _nan,
  _multipleOf: () => _multipleOf,
  _minSize: () => _minSize,
  _minLength: () => _minLength,
  _min: () => _gte,
  _mime: () => _mime,
  _maxSize: () => _maxSize,
  _maxLength: () => _maxLength,
  _max: () => _lte,
  _map: () => _map,
  _mac: () => _mac,
  _lte: () => _lte,
  _lt: () => _lt,
  _lowercase: () => _lowercase,
  _literal: () => _literal,
  _length: () => _length,
  _lazy: () => _lazy,
  _ksuid: () => _ksuid,
  _jwt: () => _jwt,
  _isoTime: () => _isoTime,
  _isoDuration: () => _isoDuration,
  _isoDateTime: () => _isoDateTime,
  _isoDate: () => _isoDate,
  _ipv6: () => _ipv6,
  _ipv4: () => _ipv4,
  _intersection: () => _intersection,
  _int64: () => _int64,
  _int32: () => _int32,
  _int: () => _int,
  _includes: () => _includes,
  _guid: () => _guid,
  _gte: () => _gte,
  _gt: () => _gt,
  _float64: () => _float64,
  _float32: () => _float32,
  _file: () => _file,
  _enum: () => _enum,
  _endsWith: () => _endsWith,
  _encodeAsync: () => _encodeAsync,
  _encode: () => _encode,
  _emoji: () => _emoji2,
  _email: () => _email,
  _e164: () => _e164,
  _discriminatedUnion: () => _discriminatedUnion,
  _default: () => _default,
  _decodeAsync: () => _decodeAsync,
  _decode: () => _decode,
  _date: () => _date,
  _custom: () => _custom,
  _cuid2: () => _cuid2,
  _cuid: () => _cuid,
  _coercedString: () => _coercedString,
  _coercedNumber: () => _coercedNumber,
  _coercedDate: () => _coercedDate,
  _coercedBoolean: () => _coercedBoolean,
  _coercedBigint: () => _coercedBigint,
  _cidrv6: () => _cidrv6,
  _cidrv4: () => _cidrv4,
  _check: () => _check,
  _catch: () => _catch,
  _boolean: () => _boolean,
  _bigint: () => _bigint,
  _base64url: () => _base64url,
  _base64: () => _base64,
  _array: () => _array,
  _any: () => _any,
  TimePrecision: () => TimePrecision,
  NEVER: () => NEVER,
  JSONSchemaGenerator: () => JSONSchemaGenerator,
  JSONSchema: () => exports_json_schema,
  Doc: () => Doc,
  $output: () => $output,
  $input: () => $input,
  $constructor: () => $constructor,
  $brand: () => $brand,
  $ZodXor: () => $ZodXor,
  $ZodXID: () => $ZodXID,
  $ZodVoid: () => $ZodVoid,
  $ZodUnknown: () => $ZodUnknown,
  $ZodUnion: () => $ZodUnion,
  $ZodUndefined: () => $ZodUndefined,
  $ZodUUID: () => $ZodUUID,
  $ZodURL: () => $ZodURL,
  $ZodULID: () => $ZodULID,
  $ZodType: () => $ZodType,
  $ZodTuple: () => $ZodTuple,
  $ZodTransform: () => $ZodTransform,
  $ZodTemplateLiteral: () => $ZodTemplateLiteral,
  $ZodSymbol: () => $ZodSymbol,
  $ZodSuccess: () => $ZodSuccess,
  $ZodStringFormat: () => $ZodStringFormat,
  $ZodString: () => $ZodString,
  $ZodSet: () => $ZodSet,
  $ZodRegistry: () => $ZodRegistry,
  $ZodRecord: () => $ZodRecord,
  $ZodRealError: () => $ZodRealError,
  $ZodReadonly: () => $ZodReadonly,
  $ZodPromise: () => $ZodPromise,
  $ZodPrefault: () => $ZodPrefault,
  $ZodPipe: () => $ZodPipe,
  $ZodOptional: () => $ZodOptional,
  $ZodObjectJIT: () => $ZodObjectJIT,
  $ZodObject: () => $ZodObject,
  $ZodNumberFormat: () => $ZodNumberFormat,
  $ZodNumber: () => $ZodNumber,
  $ZodNullable: () => $ZodNullable,
  $ZodNull: () => $ZodNull,
  $ZodNonOptional: () => $ZodNonOptional,
  $ZodNever: () => $ZodNever,
  $ZodNanoID: () => $ZodNanoID,
  $ZodNaN: () => $ZodNaN,
  $ZodMap: () => $ZodMap,
  $ZodMAC: () => $ZodMAC,
  $ZodLiteral: () => $ZodLiteral,
  $ZodLazy: () => $ZodLazy,
  $ZodKSUID: () => $ZodKSUID,
  $ZodJWT: () => $ZodJWT,
  $ZodIntersection: () => $ZodIntersection,
  $ZodISOTime: () => $ZodISOTime,
  $ZodISODuration: () => $ZodISODuration,
  $ZodISODateTime: () => $ZodISODateTime,
  $ZodISODate: () => $ZodISODate,
  $ZodIPv6: () => $ZodIPv6,
  $ZodIPv4: () => $ZodIPv4,
  $ZodGUID: () => $ZodGUID,
  $ZodFunction: () => $ZodFunction,
  $ZodFile: () => $ZodFile,
  $ZodExactOptional: () => $ZodExactOptional,
  $ZodError: () => $ZodError,
  $ZodEnum: () => $ZodEnum,
  $ZodEncodeError: () => $ZodEncodeError,
  $ZodEmoji: () => $ZodEmoji,
  $ZodEmail: () => $ZodEmail,
  $ZodE164: () => $ZodE164,
  $ZodDiscriminatedUnion: () => $ZodDiscriminatedUnion,
  $ZodDefault: () => $ZodDefault,
  $ZodDate: () => $ZodDate,
  $ZodCustomStringFormat: () => $ZodCustomStringFormat,
  $ZodCustom: () => $ZodCustom,
  $ZodCodec: () => $ZodCodec,
  $ZodCheckUpperCase: () => $ZodCheckUpperCase,
  $ZodCheckStringFormat: () => $ZodCheckStringFormat,
  $ZodCheckStartsWith: () => $ZodCheckStartsWith,
  $ZodCheckSizeEquals: () => $ZodCheckSizeEquals,
  $ZodCheckRegex: () => $ZodCheckRegex,
  $ZodCheckProperty: () => $ZodCheckProperty,
  $ZodCheckOverwrite: () => $ZodCheckOverwrite,
  $ZodCheckNumberFormat: () => $ZodCheckNumberFormat,
  $ZodCheckMultipleOf: () => $ZodCheckMultipleOf,
  $ZodCheckMinSize: () => $ZodCheckMinSize,
  $ZodCheckMinLength: () => $ZodCheckMinLength,
  $ZodCheckMimeType: () => $ZodCheckMimeType,
  $ZodCheckMaxSize: () => $ZodCheckMaxSize,
  $ZodCheckMaxLength: () => $ZodCheckMaxLength,
  $ZodCheckLowerCase: () => $ZodCheckLowerCase,
  $ZodCheckLessThan: () => $ZodCheckLessThan,
  $ZodCheckLengthEquals: () => $ZodCheckLengthEquals,
  $ZodCheckIncludes: () => $ZodCheckIncludes,
  $ZodCheckGreaterThan: () => $ZodCheckGreaterThan,
  $ZodCheckEndsWith: () => $ZodCheckEndsWith,
  $ZodCheckBigIntFormat: () => $ZodCheckBigIntFormat,
  $ZodCheck: () => $ZodCheck,
  $ZodCatch: () => $ZodCatch,
  $ZodCUID2: () => $ZodCUID2,
  $ZodCUID: () => $ZodCUID,
  $ZodCIDRv6: () => $ZodCIDRv6,
  $ZodCIDRv4: () => $ZodCIDRv4,
  $ZodBoolean: () => $ZodBoolean,
  $ZodBigIntFormat: () => $ZodBigIntFormat,
  $ZodBigInt: () => $ZodBigInt,
  $ZodBase64URL: () => $ZodBase64URL,
  $ZodBase64: () => $ZodBase64,
  $ZodAsyncError: () => $ZodAsyncError,
  $ZodArray: () => $ZodArray,
  $ZodAny: () => $ZodAny
});

// node_modules/zod/v4/core/core.js
var NEVER = Object.freeze({
  status: "aborted"
});
function $constructor(name, initializer, params) {
  function init(inst, def) {
    if (!inst._zod) {
      Object.defineProperty(inst, "_zod", {
        value: {
          def,
          constr: _,
          traits: new Set
        },
        enumerable: false
      });
    }
    if (inst._zod.traits.has(name)) {
      return;
    }
    inst._zod.traits.add(name);
    initializer(inst, def);
    const proto = _.prototype;
    const keys = Object.keys(proto);
    for (let i = 0;i < keys.length; i++) {
      const k = keys[i];
      if (!(k in inst)) {
        inst[k] = proto[k].bind(inst);
      }
    }
  }
  const Parent = params?.Parent ?? Object;

  class Definition extends Parent {
  }
  Object.defineProperty(Definition, "name", { value: name });
  function _(def) {
    var _a;
    const inst = params?.Parent ? new Definition : this;
    init(inst, def);
    (_a = inst._zod).deferred ?? (_a.deferred = []);
    for (const fn of inst._zod.deferred) {
      fn();
    }
    return inst;
  }
  Object.defineProperty(_, "init", { value: init });
  Object.defineProperty(_, Symbol.hasInstance, {
    value: (inst) => {
      if (params?.Parent && inst instanceof params.Parent)
        return true;
      return inst?._zod?.traits?.has(name);
    }
  });
  Object.defineProperty(_, "name", { value: name });
  return _;
}
var $brand = Symbol("zod_brand");

class $ZodAsyncError extends Error {
  constructor() {
    super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
  }
}

class $ZodEncodeError extends Error {
  constructor(name) {
    super(`Encountered unidirectional transform during encode: ${name}`);
    this.name = "ZodEncodeError";
  }
}
var globalConfig = {};
function config(newConfig) {
  if (newConfig)
    Object.assign(globalConfig, newConfig);
  return globalConfig;
}
// node_modules/zod/v4/core/util.js
var exports_util = {};
__export(exports_util, {
  unwrapMessage: () => unwrapMessage,
  uint8ArrayToHex: () => uint8ArrayToHex,
  uint8ArrayToBase64url: () => uint8ArrayToBase64url,
  uint8ArrayToBase64: () => uint8ArrayToBase64,
  stringifyPrimitive: () => stringifyPrimitive,
  slugify: () => slugify,
  shallowClone: () => shallowClone,
  safeExtend: () => safeExtend,
  required: () => required,
  randomString: () => randomString,
  propertyKeyTypes: () => propertyKeyTypes,
  promiseAllObject: () => promiseAllObject,
  primitiveTypes: () => primitiveTypes,
  prefixIssues: () => prefixIssues,
  pick: () => pick,
  partial: () => partial,
  parsedType: () => parsedType,
  optionalKeys: () => optionalKeys,
  omit: () => omit,
  objectClone: () => objectClone,
  numKeys: () => numKeys,
  nullish: () => nullish,
  normalizeParams: () => normalizeParams,
  mergeDefs: () => mergeDefs,
  merge: () => merge,
  jsonStringifyReplacer: () => jsonStringifyReplacer,
  joinValues: () => joinValues,
  issue: () => issue,
  isPlainObject: () => isPlainObject,
  isObject: () => isObject,
  hexToUint8Array: () => hexToUint8Array,
  getSizableOrigin: () => getSizableOrigin,
  getParsedType: () => getParsedType,
  getLengthableOrigin: () => getLengthableOrigin,
  getEnumValues: () => getEnumValues,
  getElementAtPath: () => getElementAtPath,
  floatSafeRemainder: () => floatSafeRemainder,
  finalizeIssue: () => finalizeIssue,
  extend: () => extend,
  escapeRegex: () => escapeRegex,
  esc: () => esc,
  defineLazy: () => defineLazy,
  createTransparentProxy: () => createTransparentProxy,
  cloneDef: () => cloneDef,
  clone: () => clone,
  cleanRegex: () => cleanRegex,
  cleanEnum: () => cleanEnum,
  captureStackTrace: () => captureStackTrace,
  cached: () => cached,
  base64urlToUint8Array: () => base64urlToUint8Array,
  base64ToUint8Array: () => base64ToUint8Array,
  assignProp: () => assignProp,
  assertNotEqual: () => assertNotEqual,
  assertNever: () => assertNever,
  assertIs: () => assertIs,
  assertEqual: () => assertEqual,
  assert: () => assert,
  allowsEval: () => allowsEval,
  aborted: () => aborted,
  NUMBER_FORMAT_RANGES: () => NUMBER_FORMAT_RANGES,
  Class: () => Class,
  BIGINT_FORMAT_RANGES: () => BIGINT_FORMAT_RANGES
});
function assertEqual(val) {
  return val;
}
function assertNotEqual(val) {
  return val;
}
function assertIs(_arg) {}
function assertNever(_x) {
  throw new Error("Unexpected value in exhaustive check");
}
function assert(_) {}
function getEnumValues(entries) {
  const numericValues = Object.values(entries).filter((v) => typeof v === "number");
  const values = Object.entries(entries).filter(([k, _]) => numericValues.indexOf(+k) === -1).map(([_, v]) => v);
  return values;
}
function joinValues(array, separator = "|") {
  return array.map((val) => stringifyPrimitive(val)).join(separator);
}
function jsonStringifyReplacer(_, value) {
  if (typeof value === "bigint")
    return value.toString();
  return value;
}
function cached(getter) {
  const set = false;
  return {
    get value() {
      if (!set) {
        const value = getter();
        Object.defineProperty(this, "value", { value });
        return value;
      }
      throw new Error("cached value already set");
    }
  };
}
function nullish(input) {
  return input === null || input === undefined;
}
function cleanRegex(source) {
  const start = source.startsWith("^") ? 1 : 0;
  const end = source.endsWith("$") ? source.length - 1 : source.length;
  return source.slice(start, end);
}
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepString = step.toString();
  let stepDecCount = (stepString.split(".")[1] || "").length;
  if (stepDecCount === 0 && /\d?e-\d?/.test(stepString)) {
    const match = stepString.match(/\d?e-(\d?)/);
    if (match?.[1]) {
      stepDecCount = Number.parseInt(match[1]);
    }
  }
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}
var EVALUATING = Symbol("evaluating");
function defineLazy(object, key, getter) {
  let value = undefined;
  Object.defineProperty(object, key, {
    get() {
      if (value === EVALUATING) {
        return;
      }
      if (value === undefined) {
        value = EVALUATING;
        value = getter();
      }
      return value;
    },
    set(v) {
      Object.defineProperty(object, key, {
        value: v
      });
    },
    configurable: true
  });
}
function objectClone(obj) {
  return Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
}
function assignProp(target, prop, value) {
  Object.defineProperty(target, prop, {
    value,
    writable: true,
    enumerable: true,
    configurable: true
  });
}
function mergeDefs(...defs) {
  const mergedDescriptors = {};
  for (const def of defs) {
    const descriptors = Object.getOwnPropertyDescriptors(def);
    Object.assign(mergedDescriptors, descriptors);
  }
  return Object.defineProperties({}, mergedDescriptors);
}
function cloneDef(schema) {
  return mergeDefs(schema._zod.def);
}
function getElementAtPath(obj, path) {
  if (!path)
    return obj;
  return path.reduce((acc, key) => acc?.[key], obj);
}
function promiseAllObject(promisesObj) {
  const keys = Object.keys(promisesObj);
  const promises = keys.map((key) => promisesObj[key]);
  return Promise.all(promises).then((results) => {
    const resolvedObj = {};
    for (let i = 0;i < keys.length; i++) {
      resolvedObj[keys[i]] = results[i];
    }
    return resolvedObj;
  });
}
function randomString(length = 10) {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  let str = "";
  for (let i = 0;i < length; i++) {
    str += chars[Math.floor(Math.random() * chars.length)];
  }
  return str;
}
function esc(str) {
  return JSON.stringify(str);
}
function slugify(input) {
  return input.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
var captureStackTrace = "captureStackTrace" in Error ? Error.captureStackTrace : (..._args) => {};
function isObject(data) {
  return typeof data === "object" && data !== null && !Array.isArray(data);
}
var allowsEval = cached(() => {
  if (typeof navigator !== "undefined" && navigator?.userAgent?.includes("Cloudflare")) {
    return false;
  }
  try {
    const F = Function;
    new F("");
    return true;
  } catch (_) {
    return false;
  }
});
function isPlainObject(o) {
  if (isObject(o) === false)
    return false;
  const ctor = o.constructor;
  if (ctor === undefined)
    return true;
  if (typeof ctor !== "function")
    return true;
  const prot = ctor.prototype;
  if (isObject(prot) === false)
    return false;
  if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) {
    return false;
  }
  return true;
}
function shallowClone(o) {
  if (isPlainObject(o))
    return { ...o };
  if (Array.isArray(o))
    return [...o];
  return o;
}
function numKeys(data) {
  let keyCount = 0;
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      keyCount++;
    }
  }
  return keyCount;
}
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return "undefined";
    case "string":
      return "string";
    case "number":
      return Number.isNaN(data) ? "nan" : "number";
    case "boolean":
      return "boolean";
    case "function":
      return "function";
    case "bigint":
      return "bigint";
    case "symbol":
      return "symbol";
    case "object":
      if (Array.isArray(data)) {
        return "array";
      }
      if (data === null) {
        return "null";
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return "promise";
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return "map";
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return "set";
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return "date";
      }
      if (typeof File !== "undefined" && data instanceof File) {
        return "file";
      }
      return "object";
    default:
      throw new Error(`Unknown data type: ${t}`);
  }
};
var propertyKeyTypes = new Set(["string", "number", "symbol"]);
var primitiveTypes = new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function clone(inst, def, params) {
  const cl = new inst._zod.constr(def ?? inst._zod.def);
  if (!def || params?.parent)
    cl._zod.parent = inst;
  return cl;
}
function normalizeParams(_params) {
  const params = _params;
  if (!params)
    return {};
  if (typeof params === "string")
    return { error: () => params };
  if (params?.message !== undefined) {
    if (params?.error !== undefined)
      throw new Error("Cannot specify both `message` and `error` params");
    params.error = params.message;
  }
  delete params.message;
  if (typeof params.error === "string")
    return { ...params, error: () => params.error };
  return params;
}
function createTransparentProxy(getter) {
  let target;
  return new Proxy({}, {
    get(_, prop, receiver) {
      target ?? (target = getter());
      return Reflect.get(target, prop, receiver);
    },
    set(_, prop, value, receiver) {
      target ?? (target = getter());
      return Reflect.set(target, prop, value, receiver);
    },
    has(_, prop) {
      target ?? (target = getter());
      return Reflect.has(target, prop);
    },
    deleteProperty(_, prop) {
      target ?? (target = getter());
      return Reflect.deleteProperty(target, prop);
    },
    ownKeys(_) {
      target ?? (target = getter());
      return Reflect.ownKeys(target);
    },
    getOwnPropertyDescriptor(_, prop) {
      target ?? (target = getter());
      return Reflect.getOwnPropertyDescriptor(target, prop);
    },
    defineProperty(_, prop, descriptor) {
      target ?? (target = getter());
      return Reflect.defineProperty(target, prop, descriptor);
    }
  });
}
function stringifyPrimitive(value) {
  if (typeof value === "bigint")
    return value.toString() + "n";
  if (typeof value === "string")
    return `"${value}"`;
  return `${value}`;
}
function optionalKeys(shape) {
  return Object.keys(shape).filter((k) => {
    return shape[k]._zod.optin === "optional" && shape[k]._zod.optout === "optional";
  });
}
var NUMBER_FORMAT_RANGES = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-340282346638528860000000000000000000000, 340282346638528860000000000000000000000],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
var BIGINT_FORMAT_RANGES = {
  int64: [/* @__PURE__ */ BigInt("-9223372036854775808"), /* @__PURE__ */ BigInt("9223372036854775807")],
  uint64: [/* @__PURE__ */ BigInt(0), /* @__PURE__ */ BigInt("18446744073709551615")]
};
function pick(schema, mask) {
  const currDef = schema._zod.def;
  const checks = currDef.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  }
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const newShape = {};
      for (const key in mask) {
        if (!(key in currDef.shape)) {
          throw new Error(`Unrecognized key: "${key}"`);
        }
        if (!mask[key])
          continue;
        newShape[key] = currDef.shape[key];
      }
      assignProp(this, "shape", newShape);
      return newShape;
    },
    checks: []
  });
  return clone(schema, def);
}
function omit(schema, mask) {
  const currDef = schema._zod.def;
  const checks = currDef.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  }
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const newShape = { ...schema._zod.def.shape };
      for (const key in mask) {
        if (!(key in currDef.shape)) {
          throw new Error(`Unrecognized key: "${key}"`);
        }
        if (!mask[key])
          continue;
        delete newShape[key];
      }
      assignProp(this, "shape", newShape);
      return newShape;
    },
    checks: []
  });
  return clone(schema, def);
}
function extend(schema, shape) {
  if (!isPlainObject(shape)) {
    throw new Error("Invalid input to extend: expected a plain object");
  }
  const checks = schema._zod.def.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    const existingShape = schema._zod.def.shape;
    for (const key in shape) {
      if (Object.getOwnPropertyDescriptor(existingShape, key) !== undefined) {
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
      }
    }
  }
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const _shape = { ...schema._zod.def.shape, ...shape };
      assignProp(this, "shape", _shape);
      return _shape;
    }
  });
  return clone(schema, def);
}
function safeExtend(schema, shape) {
  if (!isPlainObject(shape)) {
    throw new Error("Invalid input to safeExtend: expected a plain object");
  }
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const _shape = { ...schema._zod.def.shape, ...shape };
      assignProp(this, "shape", _shape);
      return _shape;
    }
  });
  return clone(schema, def);
}
function merge(a, b) {
  const def = mergeDefs(a._zod.def, {
    get shape() {
      const _shape = { ...a._zod.def.shape, ...b._zod.def.shape };
      assignProp(this, "shape", _shape);
      return _shape;
    },
    get catchall() {
      return b._zod.def.catchall;
    },
    checks: []
  });
  return clone(a, def);
}
function partial(Class, schema, mask) {
  const currDef = schema._zod.def;
  const checks = currDef.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  }
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const oldShape = schema._zod.def.shape;
      const shape = { ...oldShape };
      if (mask) {
        for (const key in mask) {
          if (!(key in oldShape)) {
            throw new Error(`Unrecognized key: "${key}"`);
          }
          if (!mask[key])
            continue;
          shape[key] = Class ? new Class({
            type: "optional",
            innerType: oldShape[key]
          }) : oldShape[key];
        }
      } else {
        for (const key in oldShape) {
          shape[key] = Class ? new Class({
            type: "optional",
            innerType: oldShape[key]
          }) : oldShape[key];
        }
      }
      assignProp(this, "shape", shape);
      return shape;
    },
    checks: []
  });
  return clone(schema, def);
}
function required(Class, schema, mask) {
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const oldShape = schema._zod.def.shape;
      const shape = { ...oldShape };
      if (mask) {
        for (const key in mask) {
          if (!(key in shape)) {
            throw new Error(`Unrecognized key: "${key}"`);
          }
          if (!mask[key])
            continue;
          shape[key] = new Class({
            type: "nonoptional",
            innerType: oldShape[key]
          });
        }
      } else {
        for (const key in oldShape) {
          shape[key] = new Class({
            type: "nonoptional",
            innerType: oldShape[key]
          });
        }
      }
      assignProp(this, "shape", shape);
      return shape;
    }
  });
  return clone(schema, def);
}
function aborted(x, startIndex = 0) {
  if (x.aborted === true)
    return true;
  for (let i = startIndex;i < x.issues.length; i++) {
    if (x.issues[i]?.continue !== true) {
      return true;
    }
  }
  return false;
}
function prefixIssues(path, issues) {
  return issues.map((iss) => {
    var _a;
    (_a = iss).path ?? (_a.path = []);
    iss.path.unshift(path);
    return iss;
  });
}
function unwrapMessage(message) {
  return typeof message === "string" ? message : message?.message;
}
function finalizeIssue(iss, ctx, config2) {
  const full = { ...iss, path: iss.path ?? [] };
  if (!iss.message) {
    const message = unwrapMessage(iss.inst?._zod.def?.error?.(iss)) ?? unwrapMessage(ctx?.error?.(iss)) ?? unwrapMessage(config2.customError?.(iss)) ?? unwrapMessage(config2.localeError?.(iss)) ?? "Invalid input";
    full.message = message;
  }
  delete full.inst;
  delete full.continue;
  if (!ctx?.reportInput) {
    delete full.input;
  }
  return full;
}
function getSizableOrigin(input) {
  if (input instanceof Set)
    return "set";
  if (input instanceof Map)
    return "map";
  if (input instanceof File)
    return "file";
  return "unknown";
}
function getLengthableOrigin(input) {
  if (Array.isArray(input))
    return "array";
  if (typeof input === "string")
    return "string";
  return "unknown";
}
function parsedType(data) {
  const t = typeof data;
  switch (t) {
    case "number": {
      return Number.isNaN(data) ? "nan" : "number";
    }
    case "object": {
      if (data === null) {
        return "null";
      }
      if (Array.isArray(data)) {
        return "array";
      }
      const obj = data;
      if (obj && Object.getPrototypeOf(obj) !== Object.prototype && "constructor" in obj && obj.constructor) {
        return obj.constructor.name;
      }
    }
  }
  return t;
}
function issue(...args) {
  const [iss, input, inst] = args;
  if (typeof iss === "string") {
    return {
      message: iss,
      code: "custom",
      input,
      inst
    };
  }
  return { ...iss };
}
function cleanEnum(obj) {
  return Object.entries(obj).filter(([k, _]) => {
    return Number.isNaN(Number.parseInt(k, 10));
  }).map((el) => el[1]);
}
function base64ToUint8Array(base64) {
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0;i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}
function uint8ArrayToBase64(bytes) {
  let binaryString = "";
  for (let i = 0;i < bytes.length; i++) {
    binaryString += String.fromCharCode(bytes[i]);
  }
  return btoa(binaryString);
}
function base64urlToUint8Array(base64url) {
  const base64 = base64url.replace(/-/g, "+").replace(/_/g, "/");
  const padding = "=".repeat((4 - base64.length % 4) % 4);
  return base64ToUint8Array(base64 + padding);
}
function uint8ArrayToBase64url(bytes) {
  return uint8ArrayToBase64(bytes).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function hexToUint8Array(hex) {
  const cleanHex = hex.replace(/^0x/, "");
  if (cleanHex.length % 2 !== 0) {
    throw new Error("Invalid hex string length");
  }
  const bytes = new Uint8Array(cleanHex.length / 2);
  for (let i = 0;i < cleanHex.length; i += 2) {
    bytes[i / 2] = Number.parseInt(cleanHex.slice(i, i + 2), 16);
  }
  return bytes;
}
function uint8ArrayToHex(bytes) {
  return Array.from(bytes).map((b) => b.toString(16).padStart(2, "0")).join("");
}

class Class {
  constructor(..._args) {}
}

// node_modules/zod/v4/core/errors.js
var initializer = (inst, def) => {
  inst.name = "$ZodError";
  Object.defineProperty(inst, "_zod", {
    value: inst._zod,
    enumerable: false
  });
  Object.defineProperty(inst, "issues", {
    value: def,
    enumerable: false
  });
  inst.message = JSON.stringify(def, jsonStringifyReplacer, 2);
  Object.defineProperty(inst, "toString", {
    value: () => inst.message,
    enumerable: false
  });
};
var $ZodError = $constructor("$ZodError", initializer);
var $ZodRealError = $constructor("$ZodError", initializer, { Parent: Error });
function flattenError(error, mapper = (issue2) => issue2.message) {
  const fieldErrors = {};
  const formErrors = [];
  for (const sub of error.issues) {
    if (sub.path.length > 0) {
      fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
      fieldErrors[sub.path[0]].push(mapper(sub));
    } else {
      formErrors.push(mapper(sub));
    }
  }
  return { formErrors, fieldErrors };
}
function formatError(error, mapper = (issue2) => issue2.message) {
  const fieldErrors = { _errors: [] };
  const processError = (error2) => {
    for (const issue2 of error2.issues) {
      if (issue2.code === "invalid_union" && issue2.errors.length) {
        issue2.errors.map((issues) => processError({ issues }));
      } else if (issue2.code === "invalid_key") {
        processError({ issues: issue2.issues });
      } else if (issue2.code === "invalid_element") {
        processError({ issues: issue2.issues });
      } else if (issue2.path.length === 0) {
        fieldErrors._errors.push(mapper(issue2));
      } else {
        let curr = fieldErrors;
        let i = 0;
        while (i < issue2.path.length) {
          const el = issue2.path[i];
          const terminal = i === issue2.path.length - 1;
          if (!terminal) {
            curr[el] = curr[el] || { _errors: [] };
          } else {
            curr[el] = curr[el] || { _errors: [] };
            curr[el]._errors.push(mapper(issue2));
          }
          curr = curr[el];
          i++;
        }
      }
    }
  };
  processError(error);
  return fieldErrors;
}
function treeifyError(error, mapper = (issue2) => issue2.message) {
  const result = { errors: [] };
  const processError = (error2, path = []) => {
    var _a, _b;
    for (const issue2 of error2.issues) {
      if (issue2.code === "invalid_union" && issue2.errors.length) {
        issue2.errors.map((issues) => processError({ issues }, issue2.path));
      } else if (issue2.code === "invalid_key") {
        processError({ issues: issue2.issues }, issue2.path);
      } else if (issue2.code === "invalid_element") {
        processError({ issues: issue2.issues }, issue2.path);
      } else {
        const fullpath = [...path, ...issue2.path];
        if (fullpath.length === 0) {
          result.errors.push(mapper(issue2));
          continue;
        }
        let curr = result;
        let i = 0;
        while (i < fullpath.length) {
          const el = fullpath[i];
          const terminal = i === fullpath.length - 1;
          if (typeof el === "string") {
            curr.properties ?? (curr.properties = {});
            (_a = curr.properties)[el] ?? (_a[el] = { errors: [] });
            curr = curr.properties[el];
          } else {
            curr.items ?? (curr.items = []);
            (_b = curr.items)[el] ?? (_b[el] = { errors: [] });
            curr = curr.items[el];
          }
          if (terminal) {
            curr.errors.push(mapper(issue2));
          }
          i++;
        }
      }
    }
  };
  processError(error);
  return result;
}
function toDotPath(_path) {
  const segs = [];
  const path = _path.map((seg) => typeof seg === "object" ? seg.key : seg);
  for (const seg of path) {
    if (typeof seg === "number")
      segs.push(`[${seg}]`);
    else if (typeof seg === "symbol")
      segs.push(`[${JSON.stringify(String(seg))}]`);
    else if (/[^\w$]/.test(seg))
      segs.push(`[${JSON.stringify(seg)}]`);
    else {
      if (segs.length)
        segs.push(".");
      segs.push(seg);
    }
  }
  return segs.join("");
}
function prettifyError(error) {
  const lines = [];
  const issues = [...error.issues].sort((a, b) => (a.path ?? []).length - (b.path ?? []).length);
  for (const issue2 of issues) {
    lines.push(`✖ ${issue2.message}`);
    if (issue2.path?.length)
      lines.push(`  → at ${toDotPath(issue2.path)}`);
  }
  return lines.join(`
`);
}

// node_modules/zod/v4/core/parse.js
var _parse = (_Err) => (schema, value, _ctx, _params) => {
  const ctx = _ctx ? Object.assign(_ctx, { async: false }) : { async: false };
  const result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise) {
    throw new $ZodAsyncError;
  }
  if (result.issues.length) {
    const e = new (_params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
    captureStackTrace(e, _params?.callee);
    throw e;
  }
  return result.value;
};
var parse = /* @__PURE__ */ _parse($ZodRealError);
var _parseAsync = (_Err) => async (schema, value, _ctx, params) => {
  const ctx = _ctx ? Object.assign(_ctx, { async: true }) : { async: true };
  let result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise)
    result = await result;
  if (result.issues.length) {
    const e = new (params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
    captureStackTrace(e, params?.callee);
    throw e;
  }
  return result.value;
};
var parseAsync = /* @__PURE__ */ _parseAsync($ZodRealError);
var _safeParse = (_Err) => (schema, value, _ctx) => {
  const ctx = _ctx ? { ..._ctx, async: false } : { async: false };
  const result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise) {
    throw new $ZodAsyncError;
  }
  return result.issues.length ? {
    success: false,
    error: new (_Err ?? $ZodError)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
  } : { success: true, data: result.value };
};
var safeParse = /* @__PURE__ */ _safeParse($ZodRealError);
var _safeParseAsync = (_Err) => async (schema, value, _ctx) => {
  const ctx = _ctx ? Object.assign(_ctx, { async: true }) : { async: true };
  let result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise)
    result = await result;
  return result.issues.length ? {
    success: false,
    error: new _Err(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
  } : { success: true, data: result.value };
};
var safeParseAsync = /* @__PURE__ */ _safeParseAsync($ZodRealError);
var _encode = (_Err) => (schema, value, _ctx) => {
  const ctx = _ctx ? Object.assign(_ctx, { direction: "backward" }) : { direction: "backward" };
  return _parse(_Err)(schema, value, ctx);
};
var encode = /* @__PURE__ */ _encode($ZodRealError);
var _decode = (_Err) => (schema, value, _ctx) => {
  return _parse(_Err)(schema, value, _ctx);
};
var decode = /* @__PURE__ */ _decode($ZodRealError);
var _encodeAsync = (_Err) => async (schema, value, _ctx) => {
  const ctx = _ctx ? Object.assign(_ctx, { direction: "backward" }) : { direction: "backward" };
  return _parseAsync(_Err)(schema, value, ctx);
};
var encodeAsync = /* @__PURE__ */ _encodeAsync($ZodRealError);
var _decodeAsync = (_Err) => async (schema, value, _ctx) => {
  return _parseAsync(_Err)(schema, value, _ctx);
};
var decodeAsync = /* @__PURE__ */ _decodeAsync($ZodRealError);
var _safeEncode = (_Err) => (schema, value, _ctx) => {
  const ctx = _ctx ? Object.assign(_ctx, { direction: "backward" }) : { direction: "backward" };
  return _safeParse(_Err)(schema, value, ctx);
};
var safeEncode = /* @__PURE__ */ _safeEncode($ZodRealError);
var _safeDecode = (_Err) => (schema, value, _ctx) => {
  return _safeParse(_Err)(schema, value, _ctx);
};
var safeDecode = /* @__PURE__ */ _safeDecode($ZodRealError);
var _safeEncodeAsync = (_Err) => async (schema, value, _ctx) => {
  const ctx = _ctx ? Object.assign(_ctx, { direction: "backward" }) : { direction: "backward" };
  return _safeParseAsync(_Err)(schema, value, ctx);
};
var safeEncodeAsync = /* @__PURE__ */ _safeEncodeAsync($ZodRealError);
var _safeDecodeAsync = (_Err) => async (schema, value, _ctx) => {
  return _safeParseAsync(_Err)(schema, value, _ctx);
};
var safeDecodeAsync = /* @__PURE__ */ _safeDecodeAsync($ZodRealError);
// node_modules/zod/v4/core/regexes.js
var exports_regexes = {};
__export(exports_regexes, {
  xid: () => xid,
  uuid7: () => uuid7,
  uuid6: () => uuid6,
  uuid4: () => uuid4,
  uuid: () => uuid,
  uppercase: () => uppercase,
  unicodeEmail: () => unicodeEmail,
  undefined: () => _undefined,
  ulid: () => ulid,
  time: () => time,
  string: () => string,
  sha512_hex: () => sha512_hex,
  sha512_base64url: () => sha512_base64url,
  sha512_base64: () => sha512_base64,
  sha384_hex: () => sha384_hex,
  sha384_base64url: () => sha384_base64url,
  sha384_base64: () => sha384_base64,
  sha256_hex: () => sha256_hex,
  sha256_base64url: () => sha256_base64url,
  sha256_base64: () => sha256_base64,
  sha1_hex: () => sha1_hex,
  sha1_base64url: () => sha1_base64url,
  sha1_base64: () => sha1_base64,
  rfc5322Email: () => rfc5322Email,
  number: () => number,
  null: () => _null,
  nanoid: () => nanoid,
  md5_hex: () => md5_hex,
  md5_base64url: () => md5_base64url,
  md5_base64: () => md5_base64,
  mac: () => mac,
  lowercase: () => lowercase,
  ksuid: () => ksuid,
  ipv6: () => ipv6,
  ipv4: () => ipv4,
  integer: () => integer,
  idnEmail: () => idnEmail,
  html5Email: () => html5Email,
  hostname: () => hostname,
  hex: () => hex,
  guid: () => guid,
  extendedDuration: () => extendedDuration,
  emoji: () => emoji,
  email: () => email,
  e164: () => e164,
  duration: () => duration,
  domain: () => domain,
  datetime: () => datetime,
  date: () => date,
  cuid2: () => cuid2,
  cuid: () => cuid,
  cidrv6: () => cidrv6,
  cidrv4: () => cidrv4,
  browserEmail: () => browserEmail,
  boolean: () => boolean,
  bigint: () => bigint,
  base64url: () => base64url,
  base64: () => base64
});
var cuid = /^[cC][^\s-]{8,}$/;
var cuid2 = /^[0-9a-z]+$/;
var ulid = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
var xid = /^[0-9a-vA-V]{20}$/;
var ksuid = /^[A-Za-z0-9]{27}$/;
var nanoid = /^[a-zA-Z0-9_-]{21}$/;
var duration = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
var extendedDuration = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var guid = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
var uuid = (version) => {
  if (!version)
    return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
  return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${version}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
};
var uuid4 = /* @__PURE__ */ uuid(4);
var uuid6 = /* @__PURE__ */ uuid(6);
var uuid7 = /* @__PURE__ */ uuid(7);
var email = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
var html5Email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var rfc5322Email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var unicodeEmail = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u;
var idnEmail = unicodeEmail;
var browserEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var _emoji = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
function emoji() {
  return new RegExp(_emoji, "u");
}
var ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
var mac = (delimiter) => {
  const escapedDelim = escapeRegex(delimiter ?? ":");
  return new RegExp(`^(?:[0-9A-F]{2}${escapedDelim}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${escapedDelim}){5}[0-9a-f]{2}$`);
};
var cidrv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
var cidrv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
var base64url = /^[A-Za-z0-9_-]*$/;
var hostname = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/;
var domain = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
var e164 = /^\+[1-9]\d{6,14}$/;
var dateSource = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;
var date = /* @__PURE__ */ new RegExp(`^${dateSource}$`);
function timeSource(args) {
  const hhmm = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
  const regex = typeof args.precision === "number" ? args.precision === -1 ? `${hhmm}` : args.precision === 0 ? `${hhmm}:[0-5]\\d` : `${hhmm}:[0-5]\\d\\.\\d{${args.precision}}` : `${hhmm}(?::[0-5]\\d(?:\\.\\d+)?)?`;
  return regex;
}
function time(args) {
  return new RegExp(`^${timeSource(args)}$`);
}
function datetime(args) {
  const time2 = timeSource({ precision: args.precision });
  const opts = ["Z"];
  if (args.local)
    opts.push("");
  if (args.offset)
    opts.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);
  const timeRegex = `${time2}(?:${opts.join("|")})`;
  return new RegExp(`^${dateSource}T(?:${timeRegex})$`);
}
var string = (params) => {
  const regex = params ? `[\\s\\S]{${params?.minimum ?? 0},${params?.maximum ?? ""}}` : `[\\s\\S]*`;
  return new RegExp(`^${regex}$`);
};
var bigint = /^-?\d+n?$/;
var integer = /^-?\d+$/;
var number = /^-?\d+(?:\.\d+)?$/;
var boolean = /^(?:true|false)$/i;
var _null = /^null$/i;
var _undefined = /^undefined$/i;
var lowercase = /^[^A-Z]*$/;
var uppercase = /^[^a-z]*$/;
var hex = /^[0-9a-fA-F]*$/;
function fixedBase64(bodyLength, padding) {
  return new RegExp(`^[A-Za-z0-9+/]{${bodyLength}}${padding}$`);
}
function fixedBase64url(length) {
  return new RegExp(`^[A-Za-z0-9_-]{${length}}$`);
}
var md5_hex = /^[0-9a-fA-F]{32}$/;
var md5_base64 = /* @__PURE__ */ fixedBase64(22, "==");
var md5_base64url = /* @__PURE__ */ fixedBase64url(22);
var sha1_hex = /^[0-9a-fA-F]{40}$/;
var sha1_base64 = /* @__PURE__ */ fixedBase64(27, "=");
var sha1_base64url = /* @__PURE__ */ fixedBase64url(27);
var sha256_hex = /^[0-9a-fA-F]{64}$/;
var sha256_base64 = /* @__PURE__ */ fixedBase64(43, "=");
var sha256_base64url = /* @__PURE__ */ fixedBase64url(43);
var sha384_hex = /^[0-9a-fA-F]{96}$/;
var sha384_base64 = /* @__PURE__ */ fixedBase64(64, "");
var sha384_base64url = /* @__PURE__ */ fixedBase64url(64);
var sha512_hex = /^[0-9a-fA-F]{128}$/;
var sha512_base64 = /* @__PURE__ */ fixedBase64(86, "==");
var sha512_base64url = /* @__PURE__ */ fixedBase64url(86);

// node_modules/zod/v4/core/checks.js
var $ZodCheck = /* @__PURE__ */ $constructor("$ZodCheck", (inst, def) => {
  var _a;
  inst._zod ?? (inst._zod = {});
  inst._zod.def = def;
  (_a = inst._zod).onattach ?? (_a.onattach = []);
});
var numericOriginMap = {
  number: "number",
  bigint: "bigint",
  object: "date"
};
var $ZodCheckLessThan = /* @__PURE__ */ $constructor("$ZodCheckLessThan", (inst, def) => {
  $ZodCheck.init(inst, def);
  const origin = numericOriginMap[typeof def.value];
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    const curr = (def.inclusive ? bag.maximum : bag.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    if (def.value < curr) {
      if (def.inclusive)
        bag.maximum = def.value;
      else
        bag.exclusiveMaximum = def.value;
    }
  });
  inst._zod.check = (payload) => {
    if (def.inclusive ? payload.value <= def.value : payload.value < def.value) {
      return;
    }
    payload.issues.push({
      origin,
      code: "too_big",
      maximum: typeof def.value === "object" ? def.value.getTime() : def.value,
      input: payload.value,
      inclusive: def.inclusive,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckGreaterThan = /* @__PURE__ */ $constructor("$ZodCheckGreaterThan", (inst, def) => {
  $ZodCheck.init(inst, def);
  const origin = numericOriginMap[typeof def.value];
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    const curr = (def.inclusive ? bag.minimum : bag.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    if (def.value > curr) {
      if (def.inclusive)
        bag.minimum = def.value;
      else
        bag.exclusiveMinimum = def.value;
    }
  });
  inst._zod.check = (payload) => {
    if (def.inclusive ? payload.value >= def.value : payload.value > def.value) {
      return;
    }
    payload.issues.push({
      origin,
      code: "too_small",
      minimum: typeof def.value === "object" ? def.value.getTime() : def.value,
      input: payload.value,
      inclusive: def.inclusive,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckMultipleOf = /* @__PURE__ */ $constructor("$ZodCheckMultipleOf", (inst, def) => {
  $ZodCheck.init(inst, def);
  inst._zod.onattach.push((inst2) => {
    var _a;
    (_a = inst2._zod.bag).multipleOf ?? (_a.multipleOf = def.value);
  });
  inst._zod.check = (payload) => {
    if (typeof payload.value !== typeof def.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    const isMultiple = typeof payload.value === "bigint" ? payload.value % def.value === BigInt(0) : floatSafeRemainder(payload.value, def.value) === 0;
    if (isMultiple)
      return;
    payload.issues.push({
      origin: typeof payload.value,
      code: "not_multiple_of",
      divisor: def.value,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckNumberFormat = /* @__PURE__ */ $constructor("$ZodCheckNumberFormat", (inst, def) => {
  $ZodCheck.init(inst, def);
  def.format = def.format || "float64";
  const isInt = def.format?.includes("int");
  const origin = isInt ? "int" : "number";
  const [minimum, maximum] = NUMBER_FORMAT_RANGES[def.format];
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.format = def.format;
    bag.minimum = minimum;
    bag.maximum = maximum;
    if (isInt)
      bag.pattern = integer;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    if (isInt) {
      if (!Number.isInteger(input)) {
        payload.issues.push({
          expected: origin,
          format: def.format,
          code: "invalid_type",
          continue: false,
          input,
          inst
        });
        return;
      }
      if (!Number.isSafeInteger(input)) {
        if (input > 0) {
          payload.issues.push({
            input,
            code: "too_big",
            maximum: Number.MAX_SAFE_INTEGER,
            note: "Integers must be within the safe integer range.",
            inst,
            origin,
            inclusive: true,
            continue: !def.abort
          });
        } else {
          payload.issues.push({
            input,
            code: "too_small",
            minimum: Number.MIN_SAFE_INTEGER,
            note: "Integers must be within the safe integer range.",
            inst,
            origin,
            inclusive: true,
            continue: !def.abort
          });
        }
        return;
      }
    }
    if (input < minimum) {
      payload.issues.push({
        origin: "number",
        input,
        code: "too_small",
        minimum,
        inclusive: true,
        inst,
        continue: !def.abort
      });
    }
    if (input > maximum) {
      payload.issues.push({
        origin: "number",
        input,
        code: "too_big",
        maximum,
        inclusive: true,
        inst,
        continue: !def.abort
      });
    }
  };
});
var $ZodCheckBigIntFormat = /* @__PURE__ */ $constructor("$ZodCheckBigIntFormat", (inst, def) => {
  $ZodCheck.init(inst, def);
  const [minimum, maximum] = BIGINT_FORMAT_RANGES[def.format];
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.format = def.format;
    bag.minimum = minimum;
    bag.maximum = maximum;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    if (input < minimum) {
      payload.issues.push({
        origin: "bigint",
        input,
        code: "too_small",
        minimum,
        inclusive: true,
        inst,
        continue: !def.abort
      });
    }
    if (input > maximum) {
      payload.issues.push({
        origin: "bigint",
        input,
        code: "too_big",
        maximum,
        inclusive: true,
        inst,
        continue: !def.abort
      });
    }
  };
});
var $ZodCheckMaxSize = /* @__PURE__ */ $constructor("$ZodCheckMaxSize", (inst, def) => {
  var _a;
  $ZodCheck.init(inst, def);
  (_a = inst._zod.def).when ?? (_a.when = (payload) => {
    const val = payload.value;
    return !nullish(val) && val.size !== undefined;
  });
  inst._zod.onattach.push((inst2) => {
    const curr = inst2._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    if (def.maximum < curr)
      inst2._zod.bag.maximum = def.maximum;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const size = input.size;
    if (size <= def.maximum)
      return;
    payload.issues.push({
      origin: getSizableOrigin(input),
      code: "too_big",
      maximum: def.maximum,
      inclusive: true,
      input,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckMinSize = /* @__PURE__ */ $constructor("$ZodCheckMinSize", (inst, def) => {
  var _a;
  $ZodCheck.init(inst, def);
  (_a = inst._zod.def).when ?? (_a.when = (payload) => {
    const val = payload.value;
    return !nullish(val) && val.size !== undefined;
  });
  inst._zod.onattach.push((inst2) => {
    const curr = inst2._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    if (def.minimum > curr)
      inst2._zod.bag.minimum = def.minimum;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const size = input.size;
    if (size >= def.minimum)
      return;
    payload.issues.push({
      origin: getSizableOrigin(input),
      code: "too_small",
      minimum: def.minimum,
      inclusive: true,
      input,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckSizeEquals = /* @__PURE__ */ $constructor("$ZodCheckSizeEquals", (inst, def) => {
  var _a;
  $ZodCheck.init(inst, def);
  (_a = inst._zod.def).when ?? (_a.when = (payload) => {
    const val = payload.value;
    return !nullish(val) && val.size !== undefined;
  });
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.minimum = def.size;
    bag.maximum = def.size;
    bag.size = def.size;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const size = input.size;
    if (size === def.size)
      return;
    const tooBig = size > def.size;
    payload.issues.push({
      origin: getSizableOrigin(input),
      ...tooBig ? { code: "too_big", maximum: def.size } : { code: "too_small", minimum: def.size },
      inclusive: true,
      exact: true,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckMaxLength = /* @__PURE__ */ $constructor("$ZodCheckMaxLength", (inst, def) => {
  var _a;
  $ZodCheck.init(inst, def);
  (_a = inst._zod.def).when ?? (_a.when = (payload) => {
    const val = payload.value;
    return !nullish(val) && val.length !== undefined;
  });
  inst._zod.onattach.push((inst2) => {
    const curr = inst2._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    if (def.maximum < curr)
      inst2._zod.bag.maximum = def.maximum;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const length = input.length;
    if (length <= def.maximum)
      return;
    const origin = getLengthableOrigin(input);
    payload.issues.push({
      origin,
      code: "too_big",
      maximum: def.maximum,
      inclusive: true,
      input,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckMinLength = /* @__PURE__ */ $constructor("$ZodCheckMinLength", (inst, def) => {
  var _a;
  $ZodCheck.init(inst, def);
  (_a = inst._zod.def).when ?? (_a.when = (payload) => {
    const val = payload.value;
    return !nullish(val) && val.length !== undefined;
  });
  inst._zod.onattach.push((inst2) => {
    const curr = inst2._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    if (def.minimum > curr)
      inst2._zod.bag.minimum = def.minimum;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const length = input.length;
    if (length >= def.minimum)
      return;
    const origin = getLengthableOrigin(input);
    payload.issues.push({
      origin,
      code: "too_small",
      minimum: def.minimum,
      inclusive: true,
      input,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckLengthEquals = /* @__PURE__ */ $constructor("$ZodCheckLengthEquals", (inst, def) => {
  var _a;
  $ZodCheck.init(inst, def);
  (_a = inst._zod.def).when ?? (_a.when = (payload) => {
    const val = payload.value;
    return !nullish(val) && val.length !== undefined;
  });
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.minimum = def.length;
    bag.maximum = def.length;
    bag.length = def.length;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const length = input.length;
    if (length === def.length)
      return;
    const origin = getLengthableOrigin(input);
    const tooBig = length > def.length;
    payload.issues.push({
      origin,
      ...tooBig ? { code: "too_big", maximum: def.length } : { code: "too_small", minimum: def.length },
      inclusive: true,
      exact: true,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckStringFormat = /* @__PURE__ */ $constructor("$ZodCheckStringFormat", (inst, def) => {
  var _a, _b;
  $ZodCheck.init(inst, def);
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.format = def.format;
    if (def.pattern) {
      bag.patterns ?? (bag.patterns = new Set);
      bag.patterns.add(def.pattern);
    }
  });
  if (def.pattern)
    (_a = inst._zod).check ?? (_a.check = (payload) => {
      def.pattern.lastIndex = 0;
      if (def.pattern.test(payload.value))
        return;
      payload.issues.push({
        origin: "string",
        code: "invalid_format",
        format: def.format,
        input: payload.value,
        ...def.pattern ? { pattern: def.pattern.toString() } : {},
        inst,
        continue: !def.abort
      });
    });
  else
    (_b = inst._zod).check ?? (_b.check = () => {});
});
var $ZodCheckRegex = /* @__PURE__ */ $constructor("$ZodCheckRegex", (inst, def) => {
  $ZodCheckStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    def.pattern.lastIndex = 0;
    if (def.pattern.test(payload.value))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: payload.value,
      pattern: def.pattern.toString(),
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckLowerCase = /* @__PURE__ */ $constructor("$ZodCheckLowerCase", (inst, def) => {
  def.pattern ?? (def.pattern = lowercase);
  $ZodCheckStringFormat.init(inst, def);
});
var $ZodCheckUpperCase = /* @__PURE__ */ $constructor("$ZodCheckUpperCase", (inst, def) => {
  def.pattern ?? (def.pattern = uppercase);
  $ZodCheckStringFormat.init(inst, def);
});
var $ZodCheckIncludes = /* @__PURE__ */ $constructor("$ZodCheckIncludes", (inst, def) => {
  $ZodCheck.init(inst, def);
  const escapedRegex = escapeRegex(def.includes);
  const pattern = new RegExp(typeof def.position === "number" ? `^.{${def.position}}${escapedRegex}` : escapedRegex);
  def.pattern = pattern;
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.patterns ?? (bag.patterns = new Set);
    bag.patterns.add(pattern);
  });
  inst._zod.check = (payload) => {
    if (payload.value.includes(def.includes, def.position))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: def.includes,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckStartsWith = /* @__PURE__ */ $constructor("$ZodCheckStartsWith", (inst, def) => {
  $ZodCheck.init(inst, def);
  const pattern = new RegExp(`^${escapeRegex(def.prefix)}.*`);
  def.pattern ?? (def.pattern = pattern);
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.patterns ?? (bag.patterns = new Set);
    bag.patterns.add(pattern);
  });
  inst._zod.check = (payload) => {
    if (payload.value.startsWith(def.prefix))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: def.prefix,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckEndsWith = /* @__PURE__ */ $constructor("$ZodCheckEndsWith", (inst, def) => {
  $ZodCheck.init(inst, def);
  const pattern = new RegExp(`.*${escapeRegex(def.suffix)}$`);
  def.pattern ?? (def.pattern = pattern);
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.patterns ?? (bag.patterns = new Set);
    bag.patterns.add(pattern);
  });
  inst._zod.check = (payload) => {
    if (payload.value.endsWith(def.suffix))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: def.suffix,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
function handleCheckPropertyResult(result, payload, property) {
  if (result.issues.length) {
    payload.issues.push(...prefixIssues(property, result.issues));
  }
}
var $ZodCheckProperty = /* @__PURE__ */ $constructor("$ZodCheckProperty", (inst, def) => {
  $ZodCheck.init(inst, def);
  inst._zod.check = (payload) => {
    const result = def.schema._zod.run({
      value: payload.value[def.property],
      issues: []
    }, {});
    if (result instanceof Promise) {
      return result.then((result2) => handleCheckPropertyResult(result2, payload, def.property));
    }
    handleCheckPropertyResult(result, payload, def.property);
    return;
  };
});
var $ZodCheckMimeType = /* @__PURE__ */ $constructor("$ZodCheckMimeType", (inst, def) => {
  $ZodCheck.init(inst, def);
  const mimeSet = new Set(def.mime);
  inst._zod.onattach.push((inst2) => {
    inst2._zod.bag.mime = def.mime;
  });
  inst._zod.check = (payload) => {
    if (mimeSet.has(payload.value.type))
      return;
    payload.issues.push({
      code: "invalid_value",
      values: def.mime,
      input: payload.value.type,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckOverwrite = /* @__PURE__ */ $constructor("$ZodCheckOverwrite", (inst, def) => {
  $ZodCheck.init(inst, def);
  inst._zod.check = (payload) => {
    payload.value = def.tx(payload.value);
  };
});

// node_modules/zod/v4/core/doc.js
class Doc {
  constructor(args = []) {
    this.content = [];
    this.indent = 0;
    if (this)
      this.args = args;
  }
  indented(fn) {
    this.indent += 1;
    fn(this);
    this.indent -= 1;
  }
  write(arg) {
    if (typeof arg === "function") {
      arg(this, { execution: "sync" });
      arg(this, { execution: "async" });
      return;
    }
    const content = arg;
    const lines = content.split(`
`).filter((x) => x);
    const minIndent = Math.min(...lines.map((x) => x.length - x.trimStart().length));
    const dedented = lines.map((x) => x.slice(minIndent)).map((x) => " ".repeat(this.indent * 2) + x);
    for (const line of dedented) {
      this.content.push(line);
    }
  }
  compile() {
    const F = Function;
    const args = this?.args;
    const content = this?.content ?? [``];
    const lines = [...content.map((x) => `  ${x}`)];
    return new F(...args, lines.join(`
`));
  }
}

// node_modules/zod/v4/core/versions.js
var version = {
  major: 4,
  minor: 3,
  patch: 6
};

// node_modules/zod/v4/core/schemas.js
var $ZodType = /* @__PURE__ */ $constructor("$ZodType", (inst, def) => {
  var _a;
  inst ?? (inst = {});
  inst._zod.def = def;
  inst._zod.bag = inst._zod.bag || {};
  inst._zod.version = version;
  const checks = [...inst._zod.def.checks ?? []];
  if (inst._zod.traits.has("$ZodCheck")) {
    checks.unshift(inst);
  }
  for (const ch of checks) {
    for (const fn of ch._zod.onattach) {
      fn(inst);
    }
  }
  if (checks.length === 0) {
    (_a = inst._zod).deferred ?? (_a.deferred = []);
    inst._zod.deferred?.push(() => {
      inst._zod.run = inst._zod.parse;
    });
  } else {
    const runChecks = (payload, checks2, ctx) => {
      let isAborted = aborted(payload);
      let asyncResult;
      for (const ch of checks2) {
        if (ch._zod.def.when) {
          const shouldRun = ch._zod.def.when(payload);
          if (!shouldRun)
            continue;
        } else if (isAborted) {
          continue;
        }
        const currLen = payload.issues.length;
        const _ = ch._zod.check(payload);
        if (_ instanceof Promise && ctx?.async === false) {
          throw new $ZodAsyncError;
        }
        if (asyncResult || _ instanceof Promise) {
          asyncResult = (asyncResult ?? Promise.resolve()).then(async () => {
            await _;
            const nextLen = payload.issues.length;
            if (nextLen === currLen)
              return;
            if (!isAborted)
              isAborted = aborted(payload, currLen);
          });
        } else {
          const nextLen = payload.issues.length;
          if (nextLen === currLen)
            continue;
          if (!isAborted)
            isAborted = aborted(payload, currLen);
        }
      }
      if (asyncResult) {
        return asyncResult.then(() => {
          return payload;
        });
      }
      return payload;
    };
    const handleCanaryResult = (canary, payload, ctx) => {
      if (aborted(canary)) {
        canary.aborted = true;
        return canary;
      }
      const checkResult = runChecks(payload, checks, ctx);
      if (checkResult instanceof Promise) {
        if (ctx.async === false)
          throw new $ZodAsyncError;
        return checkResult.then((checkResult2) => inst._zod.parse(checkResult2, ctx));
      }
      return inst._zod.parse(checkResult, ctx);
    };
    inst._zod.run = (payload, ctx) => {
      if (ctx.skipChecks) {
        return inst._zod.parse(payload, ctx);
      }
      if (ctx.direction === "backward") {
        const canary = inst._zod.parse({ value: payload.value, issues: [] }, { ...ctx, skipChecks: true });
        if (canary instanceof Promise) {
          return canary.then((canary2) => {
            return handleCanaryResult(canary2, payload, ctx);
          });
        }
        return handleCanaryResult(canary, payload, ctx);
      }
      const result = inst._zod.parse(payload, ctx);
      if (result instanceof Promise) {
        if (ctx.async === false)
          throw new $ZodAsyncError;
        return result.then((result2) => runChecks(result2, checks, ctx));
      }
      return runChecks(result, checks, ctx);
    };
  }
  defineLazy(inst, "~standard", () => ({
    validate: (value) => {
      try {
        const r = safeParse(inst, value);
        return r.success ? { value: r.data } : { issues: r.error?.issues };
      } catch (_) {
        return safeParseAsync(inst, value).then((r) => r.success ? { value: r.data } : { issues: r.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  }));
});
var $ZodString = /* @__PURE__ */ $constructor("$ZodString", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = [...inst?._zod.bag?.patterns ?? []].pop() ?? string(inst._zod.bag);
  inst._zod.parse = (payload, _) => {
    if (def.coerce)
      try {
        payload.value = String(payload.value);
      } catch (_2) {}
    if (typeof payload.value === "string")
      return payload;
    payload.issues.push({
      expected: "string",
      code: "invalid_type",
      input: payload.value,
      inst
    });
    return payload;
  };
});
var $ZodStringFormat = /* @__PURE__ */ $constructor("$ZodStringFormat", (inst, def) => {
  $ZodCheckStringFormat.init(inst, def);
  $ZodString.init(inst, def);
});
var $ZodGUID = /* @__PURE__ */ $constructor("$ZodGUID", (inst, def) => {
  def.pattern ?? (def.pattern = guid);
  $ZodStringFormat.init(inst, def);
});
var $ZodUUID = /* @__PURE__ */ $constructor("$ZodUUID", (inst, def) => {
  if (def.version) {
    const versionMap = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    };
    const v = versionMap[def.version];
    if (v === undefined)
      throw new Error(`Invalid UUID version: "${def.version}"`);
    def.pattern ?? (def.pattern = uuid(v));
  } else
    def.pattern ?? (def.pattern = uuid());
  $ZodStringFormat.init(inst, def);
});
var $ZodEmail = /* @__PURE__ */ $constructor("$ZodEmail", (inst, def) => {
  def.pattern ?? (def.pattern = email);
  $ZodStringFormat.init(inst, def);
});
var $ZodURL = /* @__PURE__ */ $constructor("$ZodURL", (inst, def) => {
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    try {
      const trimmed = payload.value.trim();
      const url = new URL(trimmed);
      if (def.hostname) {
        def.hostname.lastIndex = 0;
        if (!def.hostname.test(url.hostname)) {
          payload.issues.push({
            code: "invalid_format",
            format: "url",
            note: "Invalid hostname",
            pattern: def.hostname.source,
            input: payload.value,
            inst,
            continue: !def.abort
          });
        }
      }
      if (def.protocol) {
        def.protocol.lastIndex = 0;
        if (!def.protocol.test(url.protocol.endsWith(":") ? url.protocol.slice(0, -1) : url.protocol)) {
          payload.issues.push({
            code: "invalid_format",
            format: "url",
            note: "Invalid protocol",
            pattern: def.protocol.source,
            input: payload.value,
            inst,
            continue: !def.abort
          });
        }
      }
      if (def.normalize) {
        payload.value = url.href;
      } else {
        payload.value = trimmed;
      }
      return;
    } catch (_) {
      payload.issues.push({
        code: "invalid_format",
        format: "url",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    }
  };
});
var $ZodEmoji = /* @__PURE__ */ $constructor("$ZodEmoji", (inst, def) => {
  def.pattern ?? (def.pattern = emoji());
  $ZodStringFormat.init(inst, def);
});
var $ZodNanoID = /* @__PURE__ */ $constructor("$ZodNanoID", (inst, def) => {
  def.pattern ?? (def.pattern = nanoid);
  $ZodStringFormat.init(inst, def);
});
var $ZodCUID = /* @__PURE__ */ $constructor("$ZodCUID", (inst, def) => {
  def.pattern ?? (def.pattern = cuid);
  $ZodStringFormat.init(inst, def);
});
var $ZodCUID2 = /* @__PURE__ */ $constructor("$ZodCUID2", (inst, def) => {
  def.pattern ?? (def.pattern = cuid2);
  $ZodStringFormat.init(inst, def);
});
var $ZodULID = /* @__PURE__ */ $constructor("$ZodULID", (inst, def) => {
  def.pattern ?? (def.pattern = ulid);
  $ZodStringFormat.init(inst, def);
});
var $ZodXID = /* @__PURE__ */ $constructor("$ZodXID", (inst, def) => {
  def.pattern ?? (def.pattern = xid);
  $ZodStringFormat.init(inst, def);
});
var $ZodKSUID = /* @__PURE__ */ $constructor("$ZodKSUID", (inst, def) => {
  def.pattern ?? (def.pattern = ksuid);
  $ZodStringFormat.init(inst, def);
});
var $ZodISODateTime = /* @__PURE__ */ $constructor("$ZodISODateTime", (inst, def) => {
  def.pattern ?? (def.pattern = datetime(def));
  $ZodStringFormat.init(inst, def);
});
var $ZodISODate = /* @__PURE__ */ $constructor("$ZodISODate", (inst, def) => {
  def.pattern ?? (def.pattern = date);
  $ZodStringFormat.init(inst, def);
});
var $ZodISOTime = /* @__PURE__ */ $constructor("$ZodISOTime", (inst, def) => {
  def.pattern ?? (def.pattern = time(def));
  $ZodStringFormat.init(inst, def);
});
var $ZodISODuration = /* @__PURE__ */ $constructor("$ZodISODuration", (inst, def) => {
  def.pattern ?? (def.pattern = duration);
  $ZodStringFormat.init(inst, def);
});
var $ZodIPv4 = /* @__PURE__ */ $constructor("$ZodIPv4", (inst, def) => {
  def.pattern ?? (def.pattern = ipv4);
  $ZodStringFormat.init(inst, def);
  inst._zod.bag.format = `ipv4`;
});
var $ZodIPv6 = /* @__PURE__ */ $constructor("$ZodIPv6", (inst, def) => {
  def.pattern ?? (def.pattern = ipv6);
  $ZodStringFormat.init(inst, def);
  inst._zod.bag.format = `ipv6`;
  inst._zod.check = (payload) => {
    try {
      new URL(`http://[${payload.value}]`);
    } catch {
      payload.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    }
  };
});
var $ZodMAC = /* @__PURE__ */ $constructor("$ZodMAC", (inst, def) => {
  def.pattern ?? (def.pattern = mac(def.delimiter));
  $ZodStringFormat.init(inst, def);
  inst._zod.bag.format = `mac`;
});
var $ZodCIDRv4 = /* @__PURE__ */ $constructor("$ZodCIDRv4", (inst, def) => {
  def.pattern ?? (def.pattern = cidrv4);
  $ZodStringFormat.init(inst, def);
});
var $ZodCIDRv6 = /* @__PURE__ */ $constructor("$ZodCIDRv6", (inst, def) => {
  def.pattern ?? (def.pattern = cidrv6);
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    const parts = payload.value.split("/");
    try {
      if (parts.length !== 2)
        throw new Error;
      const [address, prefix] = parts;
      if (!prefix)
        throw new Error;
      const prefixNum = Number(prefix);
      if (`${prefixNum}` !== prefix)
        throw new Error;
      if (prefixNum < 0 || prefixNum > 128)
        throw new Error;
      new URL(`http://[${address}]`);
    } catch {
      payload.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    }
  };
});
function isValidBase64(data) {
  if (data === "")
    return true;
  if (data.length % 4 !== 0)
    return false;
  try {
    atob(data);
    return true;
  } catch {
    return false;
  }
}
var $ZodBase64 = /* @__PURE__ */ $constructor("$ZodBase64", (inst, def) => {
  def.pattern ?? (def.pattern = base64);
  $ZodStringFormat.init(inst, def);
  inst._zod.bag.contentEncoding = "base64";
  inst._zod.check = (payload) => {
    if (isValidBase64(payload.value))
      return;
    payload.issues.push({
      code: "invalid_format",
      format: "base64",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
function isValidBase64URL(data) {
  if (!base64url.test(data))
    return false;
  const base642 = data.replace(/[-_]/g, (c) => c === "-" ? "+" : "/");
  const padded = base642.padEnd(Math.ceil(base642.length / 4) * 4, "=");
  return isValidBase64(padded);
}
var $ZodBase64URL = /* @__PURE__ */ $constructor("$ZodBase64URL", (inst, def) => {
  def.pattern ?? (def.pattern = base64url);
  $ZodStringFormat.init(inst, def);
  inst._zod.bag.contentEncoding = "base64url";
  inst._zod.check = (payload) => {
    if (isValidBase64URL(payload.value))
      return;
    payload.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodE164 = /* @__PURE__ */ $constructor("$ZodE164", (inst, def) => {
  def.pattern ?? (def.pattern = e164);
  $ZodStringFormat.init(inst, def);
});
function isValidJWT(token, algorithm = null) {
  try {
    const tokensParts = token.split(".");
    if (tokensParts.length !== 3)
      return false;
    const [header] = tokensParts;
    if (!header)
      return false;
    const parsedHeader = JSON.parse(atob(header));
    if ("typ" in parsedHeader && parsedHeader?.typ !== "JWT")
      return false;
    if (!parsedHeader.alg)
      return false;
    if (algorithm && (!("alg" in parsedHeader) || parsedHeader.alg !== algorithm))
      return false;
    return true;
  } catch {
    return false;
  }
}
var $ZodJWT = /* @__PURE__ */ $constructor("$ZodJWT", (inst, def) => {
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    if (isValidJWT(payload.value, def.alg))
      return;
    payload.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCustomStringFormat = /* @__PURE__ */ $constructor("$ZodCustomStringFormat", (inst, def) => {
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    if (def.fn(payload.value))
      return;
    payload.issues.push({
      code: "invalid_format",
      format: def.format,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodNumber = /* @__PURE__ */ $constructor("$ZodNumber", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = inst._zod.bag.pattern ?? number;
  inst._zod.parse = (payload, _ctx) => {
    if (def.coerce)
      try {
        payload.value = Number(payload.value);
      } catch (_) {}
    const input = payload.value;
    if (typeof input === "number" && !Number.isNaN(input) && Number.isFinite(input)) {
      return payload;
    }
    const received = typeof input === "number" ? Number.isNaN(input) ? "NaN" : !Number.isFinite(input) ? "Infinity" : undefined : undefined;
    payload.issues.push({
      expected: "number",
      code: "invalid_type",
      input,
      inst,
      ...received ? { received } : {}
    });
    return payload;
  };
});
var $ZodNumberFormat = /* @__PURE__ */ $constructor("$ZodNumberFormat", (inst, def) => {
  $ZodCheckNumberFormat.init(inst, def);
  $ZodNumber.init(inst, def);
});
var $ZodBoolean = /* @__PURE__ */ $constructor("$ZodBoolean", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = boolean;
  inst._zod.parse = (payload, _ctx) => {
    if (def.coerce)
      try {
        payload.value = Boolean(payload.value);
      } catch (_) {}
    const input = payload.value;
    if (typeof input === "boolean")
      return payload;
    payload.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input,
      inst
    });
    return payload;
  };
});
var $ZodBigInt = /* @__PURE__ */ $constructor("$ZodBigInt", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = bigint;
  inst._zod.parse = (payload, _ctx) => {
    if (def.coerce)
      try {
        payload.value = BigInt(payload.value);
      } catch (_) {}
    if (typeof payload.value === "bigint")
      return payload;
    payload.issues.push({
      expected: "bigint",
      code: "invalid_type",
      input: payload.value,
      inst
    });
    return payload;
  };
});
var $ZodBigIntFormat = /* @__PURE__ */ $constructor("$ZodBigIntFormat", (inst, def) => {
  $ZodCheckBigIntFormat.init(inst, def);
  $ZodBigInt.init(inst, def);
});
var $ZodSymbol = /* @__PURE__ */ $constructor("$ZodSymbol", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (typeof input === "symbol")
      return payload;
    payload.issues.push({
      expected: "symbol",
      code: "invalid_type",
      input,
      inst
    });
    return payload;
  };
});
var $ZodUndefined = /* @__PURE__ */ $constructor("$ZodUndefined", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = _undefined;
  inst._zod.values = new Set([undefined]);
  inst._zod.optin = "optional";
  inst._zod.optout = "optional";
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (typeof input === "undefined")
      return payload;
    payload.issues.push({
      expected: "undefined",
      code: "invalid_type",
      input,
      inst
    });
    return payload;
  };
});
var $ZodNull = /* @__PURE__ */ $constructor("$ZodNull", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = _null;
  inst._zod.values = new Set([null]);
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (input === null)
      return payload;
    payload.issues.push({
      expected: "null",
      code: "invalid_type",
      input,
      inst
    });
    return payload;
  };
});
var $ZodAny = /* @__PURE__ */ $constructor("$ZodAny", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload) => payload;
});
var $ZodUnknown = /* @__PURE__ */ $constructor("$ZodUnknown", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload) => payload;
});
var $ZodNever = /* @__PURE__ */ $constructor("$ZodNever", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    payload.issues.push({
      expected: "never",
      code: "invalid_type",
      input: payload.value,
      inst
    });
    return payload;
  };
});
var $ZodVoid = /* @__PURE__ */ $constructor("$ZodVoid", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (typeof input === "undefined")
      return payload;
    payload.issues.push({
      expected: "void",
      code: "invalid_type",
      input,
      inst
    });
    return payload;
  };
});
var $ZodDate = /* @__PURE__ */ $constructor("$ZodDate", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    if (def.coerce) {
      try {
        payload.value = new Date(payload.value);
      } catch (_err) {}
    }
    const input = payload.value;
    const isDate = input instanceof Date;
    const isValidDate = isDate && !Number.isNaN(input.getTime());
    if (isValidDate)
      return payload;
    payload.issues.push({
      expected: "date",
      code: "invalid_type",
      input,
      ...isDate ? { received: "Invalid Date" } : {},
      inst
    });
    return payload;
  };
});
function handleArrayResult(result, final, index) {
  if (result.issues.length) {
    final.issues.push(...prefixIssues(index, result.issues));
  }
  final.value[index] = result.value;
}
var $ZodArray = /* @__PURE__ */ $constructor("$ZodArray", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!Array.isArray(input)) {
      payload.issues.push({
        expected: "array",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    payload.value = Array(input.length);
    const proms = [];
    for (let i = 0;i < input.length; i++) {
      const item = input[i];
      const result = def.element._zod.run({
        value: item,
        issues: []
      }, ctx);
      if (result instanceof Promise) {
        proms.push(result.then((result2) => handleArrayResult(result2, payload, i)));
      } else {
        handleArrayResult(result, payload, i);
      }
    }
    if (proms.length) {
      return Promise.all(proms).then(() => payload);
    }
    return payload;
  };
});
function handlePropertyResult(result, final, key, input, isOptionalOut) {
  if (result.issues.length) {
    if (isOptionalOut && !(key in input)) {
      return;
    }
    final.issues.push(...prefixIssues(key, result.issues));
  }
  if (result.value === undefined) {
    if (key in input) {
      final.value[key] = undefined;
    }
  } else {
    final.value[key] = result.value;
  }
}
function normalizeDef(def) {
  const keys = Object.keys(def.shape);
  for (const k of keys) {
    if (!def.shape?.[k]?._zod?.traits?.has("$ZodType")) {
      throw new Error(`Invalid element at key "${k}": expected a Zod schema`);
    }
  }
  const okeys = optionalKeys(def.shape);
  return {
    ...def,
    keys,
    keySet: new Set(keys),
    numKeys: keys.length,
    optionalKeys: new Set(okeys)
  };
}
function handleCatchall(proms, input, payload, ctx, def, inst) {
  const unrecognized = [];
  const keySet = def.keySet;
  const _catchall = def.catchall._zod;
  const t = _catchall.def.type;
  const isOptionalOut = _catchall.optout === "optional";
  for (const key in input) {
    if (keySet.has(key))
      continue;
    if (t === "never") {
      unrecognized.push(key);
      continue;
    }
    const r = _catchall.run({ value: input[key], issues: [] }, ctx);
    if (r instanceof Promise) {
      proms.push(r.then((r2) => handlePropertyResult(r2, payload, key, input, isOptionalOut)));
    } else {
      handlePropertyResult(r, payload, key, input, isOptionalOut);
    }
  }
  if (unrecognized.length) {
    payload.issues.push({
      code: "unrecognized_keys",
      keys: unrecognized,
      input,
      inst
    });
  }
  if (!proms.length)
    return payload;
  return Promise.all(proms).then(() => {
    return payload;
  });
}
var $ZodObject = /* @__PURE__ */ $constructor("$ZodObject", (inst, def) => {
  $ZodType.init(inst, def);
  const desc = Object.getOwnPropertyDescriptor(def, "shape");
  if (!desc?.get) {
    const sh = def.shape;
    Object.defineProperty(def, "shape", {
      get: () => {
        const newSh = { ...sh };
        Object.defineProperty(def, "shape", {
          value: newSh
        });
        return newSh;
      }
    });
  }
  const _normalized = cached(() => normalizeDef(def));
  defineLazy(inst._zod, "propValues", () => {
    const shape = def.shape;
    const propValues = {};
    for (const key in shape) {
      const field = shape[key]._zod;
      if (field.values) {
        propValues[key] ?? (propValues[key] = new Set);
        for (const v of field.values)
          propValues[key].add(v);
      }
    }
    return propValues;
  });
  const isObject2 = isObject;
  const catchall = def.catchall;
  let value;
  inst._zod.parse = (payload, ctx) => {
    value ?? (value = _normalized.value);
    const input = payload.value;
    if (!isObject2(input)) {
      payload.issues.push({
        expected: "object",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    payload.value = {};
    const proms = [];
    const shape = value.shape;
    for (const key of value.keys) {
      const el = shape[key];
      const isOptionalOut = el._zod.optout === "optional";
      const r = el._zod.run({ value: input[key], issues: [] }, ctx);
      if (r instanceof Promise) {
        proms.push(r.then((r2) => handlePropertyResult(r2, payload, key, input, isOptionalOut)));
      } else {
        handlePropertyResult(r, payload, key, input, isOptionalOut);
      }
    }
    if (!catchall) {
      return proms.length ? Promise.all(proms).then(() => payload) : payload;
    }
    return handleCatchall(proms, input, payload, ctx, _normalized.value, inst);
  };
});
var $ZodObjectJIT = /* @__PURE__ */ $constructor("$ZodObjectJIT", (inst, def) => {
  $ZodObject.init(inst, def);
  const superParse = inst._zod.parse;
  const _normalized = cached(() => normalizeDef(def));
  const generateFastpass = (shape) => {
    const doc = new Doc(["shape", "payload", "ctx"]);
    const normalized = _normalized.value;
    const parseStr = (key) => {
      const k = esc(key);
      return `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`;
    };
    doc.write(`const input = payload.value;`);
    const ids = Object.create(null);
    let counter = 0;
    for (const key of normalized.keys) {
      ids[key] = `key_${counter++}`;
    }
    doc.write(`const newResult = {};`);
    for (const key of normalized.keys) {
      const id = ids[key];
      const k = esc(key);
      const schema = shape[key];
      const isOptionalOut = schema?._zod?.optout === "optional";
      doc.write(`const ${id} = ${parseStr(key)};`);
      if (isOptionalOut) {
        doc.write(`
        if (${id}.issues.length) {
          if (${k} in input) {
            payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${k}, ...iss.path] : [${k}]
            })));
          }
        }
        
        if (${id}.value === undefined) {
          if (${k} in input) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${id}.value;
        }
        
      `);
      } else {
        doc.write(`
        if (${id}.issues.length) {
          payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${k}, ...iss.path] : [${k}]
          })));
        }
        
        if (${id}.value === undefined) {
          if (${k} in input) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${id}.value;
        }
        
      `);
      }
    }
    doc.write(`payload.value = newResult;`);
    doc.write(`return payload;`);
    const fn = doc.compile();
    return (payload, ctx) => fn(shape, payload, ctx);
  };
  let fastpass;
  const isObject2 = isObject;
  const jit = !globalConfig.jitless;
  const allowsEval2 = allowsEval;
  const fastEnabled = jit && allowsEval2.value;
  const catchall = def.catchall;
  let value;
  inst._zod.parse = (payload, ctx) => {
    value ?? (value = _normalized.value);
    const input = payload.value;
    if (!isObject2(input)) {
      payload.issues.push({
        expected: "object",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    if (jit && fastEnabled && ctx?.async === false && ctx.jitless !== true) {
      if (!fastpass)
        fastpass = generateFastpass(def.shape);
      payload = fastpass(payload, ctx);
      if (!catchall)
        return payload;
      return handleCatchall([], input, payload, ctx, value, inst);
    }
    return superParse(payload, ctx);
  };
});
function handleUnionResults(results, final, inst, ctx) {
  for (const result of results) {
    if (result.issues.length === 0) {
      final.value = result.value;
      return final;
    }
  }
  const nonaborted = results.filter((r) => !aborted(r));
  if (nonaborted.length === 1) {
    final.value = nonaborted[0].value;
    return nonaborted[0];
  }
  final.issues.push({
    code: "invalid_union",
    input: final.value,
    inst,
    errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
  });
  return final;
}
var $ZodUnion = /* @__PURE__ */ $constructor("$ZodUnion", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "optin", () => def.options.some((o) => o._zod.optin === "optional") ? "optional" : undefined);
  defineLazy(inst._zod, "optout", () => def.options.some((o) => o._zod.optout === "optional") ? "optional" : undefined);
  defineLazy(inst._zod, "values", () => {
    if (def.options.every((o) => o._zod.values)) {
      return new Set(def.options.flatMap((option) => Array.from(option._zod.values)));
    }
    return;
  });
  defineLazy(inst._zod, "pattern", () => {
    if (def.options.every((o) => o._zod.pattern)) {
      const patterns = def.options.map((o) => o._zod.pattern);
      return new RegExp(`^(${patterns.map((p) => cleanRegex(p.source)).join("|")})$`);
    }
    return;
  });
  const single = def.options.length === 1;
  const first = def.options[0]._zod.run;
  inst._zod.parse = (payload, ctx) => {
    if (single) {
      return first(payload, ctx);
    }
    let async = false;
    const results = [];
    for (const option of def.options) {
      const result = option._zod.run({
        value: payload.value,
        issues: []
      }, ctx);
      if (result instanceof Promise) {
        results.push(result);
        async = true;
      } else {
        if (result.issues.length === 0)
          return result;
        results.push(result);
      }
    }
    if (!async)
      return handleUnionResults(results, payload, inst, ctx);
    return Promise.all(results).then((results2) => {
      return handleUnionResults(results2, payload, inst, ctx);
    });
  };
});
function handleExclusiveUnionResults(results, final, inst, ctx) {
  const successes = results.filter((r) => r.issues.length === 0);
  if (successes.length === 1) {
    final.value = successes[0].value;
    return final;
  }
  if (successes.length === 0) {
    final.issues.push({
      code: "invalid_union",
      input: final.value,
      inst,
      errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
    });
  } else {
    final.issues.push({
      code: "invalid_union",
      input: final.value,
      inst,
      errors: [],
      inclusive: false
    });
  }
  return final;
}
var $ZodXor = /* @__PURE__ */ $constructor("$ZodXor", (inst, def) => {
  $ZodUnion.init(inst, def);
  def.inclusive = false;
  const single = def.options.length === 1;
  const first = def.options[0]._zod.run;
  inst._zod.parse = (payload, ctx) => {
    if (single) {
      return first(payload, ctx);
    }
    let async = false;
    const results = [];
    for (const option of def.options) {
      const result = option._zod.run({
        value: payload.value,
        issues: []
      }, ctx);
      if (result instanceof Promise) {
        results.push(result);
        async = true;
      } else {
        results.push(result);
      }
    }
    if (!async)
      return handleExclusiveUnionResults(results, payload, inst, ctx);
    return Promise.all(results).then((results2) => {
      return handleExclusiveUnionResults(results2, payload, inst, ctx);
    });
  };
});
var $ZodDiscriminatedUnion = /* @__PURE__ */ $constructor("$ZodDiscriminatedUnion", (inst, def) => {
  def.inclusive = false;
  $ZodUnion.init(inst, def);
  const _super = inst._zod.parse;
  defineLazy(inst._zod, "propValues", () => {
    const propValues = {};
    for (const option of def.options) {
      const pv = option._zod.propValues;
      if (!pv || Object.keys(pv).length === 0)
        throw new Error(`Invalid discriminated union option at index "${def.options.indexOf(option)}"`);
      for (const [k, v] of Object.entries(pv)) {
        if (!propValues[k])
          propValues[k] = new Set;
        for (const val of v) {
          propValues[k].add(val);
        }
      }
    }
    return propValues;
  });
  const disc = cached(() => {
    const opts = def.options;
    const map = new Map;
    for (const o of opts) {
      const values = o._zod.propValues?.[def.discriminator];
      if (!values || values.size === 0)
        throw new Error(`Invalid discriminated union option at index "${def.options.indexOf(o)}"`);
      for (const v of values) {
        if (map.has(v)) {
          throw new Error(`Duplicate discriminator value "${String(v)}"`);
        }
        map.set(v, o);
      }
    }
    return map;
  });
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!isObject(input)) {
      payload.issues.push({
        code: "invalid_type",
        expected: "object",
        input,
        inst
      });
      return payload;
    }
    const opt = disc.value.get(input?.[def.discriminator]);
    if (opt) {
      return opt._zod.run(payload, ctx);
    }
    if (def.unionFallback) {
      return _super(payload, ctx);
    }
    payload.issues.push({
      code: "invalid_union",
      errors: [],
      note: "No matching discriminator",
      discriminator: def.discriminator,
      input,
      path: [def.discriminator],
      inst
    });
    return payload;
  };
});
var $ZodIntersection = /* @__PURE__ */ $constructor("$ZodIntersection", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    const left = def.left._zod.run({ value: input, issues: [] }, ctx);
    const right = def.right._zod.run({ value: input, issues: [] }, ctx);
    const async = left instanceof Promise || right instanceof Promise;
    if (async) {
      return Promise.all([left, right]).then(([left2, right2]) => {
        return handleIntersectionResults(payload, left2, right2);
      });
    }
    return handleIntersectionResults(payload, left, right);
  };
});
function mergeValues(a, b) {
  if (a === b) {
    return { valid: true, data: a };
  }
  if (a instanceof Date && b instanceof Date && +a === +b) {
    return { valid: true, data: a };
  }
  if (isPlainObject(a) && isPlainObject(b)) {
    const bKeys = Object.keys(b);
    const sharedKeys = Object.keys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return {
          valid: false,
          mergeErrorPath: [key, ...sharedValue.mergeErrorPath]
        };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return { valid: false, mergeErrorPath: [] };
    }
    const newArray = [];
    for (let index = 0;index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return {
          valid: false,
          mergeErrorPath: [index, ...sharedValue.mergeErrorPath]
        };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  }
  return { valid: false, mergeErrorPath: [] };
}
function handleIntersectionResults(result, left, right) {
  const unrecKeys = new Map;
  let unrecIssue;
  for (const iss of left.issues) {
    if (iss.code === "unrecognized_keys") {
      unrecIssue ?? (unrecIssue = iss);
      for (const k of iss.keys) {
        if (!unrecKeys.has(k))
          unrecKeys.set(k, {});
        unrecKeys.get(k).l = true;
      }
    } else {
      result.issues.push(iss);
    }
  }
  for (const iss of right.issues) {
    if (iss.code === "unrecognized_keys") {
      for (const k of iss.keys) {
        if (!unrecKeys.has(k))
          unrecKeys.set(k, {});
        unrecKeys.get(k).r = true;
      }
    } else {
      result.issues.push(iss);
    }
  }
  const bothKeys = [...unrecKeys].filter(([, f]) => f.l && f.r).map(([k]) => k);
  if (bothKeys.length && unrecIssue) {
    result.issues.push({ ...unrecIssue, keys: bothKeys });
  }
  if (aborted(result))
    return result;
  const merged = mergeValues(left.value, right.value);
  if (!merged.valid) {
    throw new Error(`Unmergable intersection. Error path: ` + `${JSON.stringify(merged.mergeErrorPath)}`);
  }
  result.value = merged.data;
  return result;
}
var $ZodTuple = /* @__PURE__ */ $constructor("$ZodTuple", (inst, def) => {
  $ZodType.init(inst, def);
  const items = def.items;
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!Array.isArray(input)) {
      payload.issues.push({
        input,
        inst,
        expected: "tuple",
        code: "invalid_type"
      });
      return payload;
    }
    payload.value = [];
    const proms = [];
    const reversedIndex = [...items].reverse().findIndex((item) => item._zod.optin !== "optional");
    const optStart = reversedIndex === -1 ? 0 : items.length - reversedIndex;
    if (!def.rest) {
      const tooBig = input.length > items.length;
      const tooSmall = input.length < optStart - 1;
      if (tooBig || tooSmall) {
        payload.issues.push({
          ...tooBig ? { code: "too_big", maximum: items.length, inclusive: true } : { code: "too_small", minimum: items.length },
          input,
          inst,
          origin: "array"
        });
        return payload;
      }
    }
    let i = -1;
    for (const item of items) {
      i++;
      if (i >= input.length) {
        if (i >= optStart)
          continue;
      }
      const result = item._zod.run({
        value: input[i],
        issues: []
      }, ctx);
      if (result instanceof Promise) {
        proms.push(result.then((result2) => handleTupleResult(result2, payload, i)));
      } else {
        handleTupleResult(result, payload, i);
      }
    }
    if (def.rest) {
      const rest = input.slice(items.length);
      for (const el of rest) {
        i++;
        const result = def.rest._zod.run({
          value: el,
          issues: []
        }, ctx);
        if (result instanceof Promise) {
          proms.push(result.then((result2) => handleTupleResult(result2, payload, i)));
        } else {
          handleTupleResult(result, payload, i);
        }
      }
    }
    if (proms.length)
      return Promise.all(proms).then(() => payload);
    return payload;
  };
});
function handleTupleResult(result, final, index) {
  if (result.issues.length) {
    final.issues.push(...prefixIssues(index, result.issues));
  }
  final.value[index] = result.value;
}
var $ZodRecord = /* @__PURE__ */ $constructor("$ZodRecord", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!isPlainObject(input)) {
      payload.issues.push({
        expected: "record",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    const proms = [];
    const values = def.keyType._zod.values;
    if (values) {
      payload.value = {};
      const recordKeys = new Set;
      for (const key of values) {
        if (typeof key === "string" || typeof key === "number" || typeof key === "symbol") {
          recordKeys.add(typeof key === "number" ? key.toString() : key);
          const result = def.valueType._zod.run({ value: input[key], issues: [] }, ctx);
          if (result instanceof Promise) {
            proms.push(result.then((result2) => {
              if (result2.issues.length) {
                payload.issues.push(...prefixIssues(key, result2.issues));
              }
              payload.value[key] = result2.value;
            }));
          } else {
            if (result.issues.length) {
              payload.issues.push(...prefixIssues(key, result.issues));
            }
            payload.value[key] = result.value;
          }
        }
      }
      let unrecognized;
      for (const key in input) {
        if (!recordKeys.has(key)) {
          unrecognized = unrecognized ?? [];
          unrecognized.push(key);
        }
      }
      if (unrecognized && unrecognized.length > 0) {
        payload.issues.push({
          code: "unrecognized_keys",
          input,
          inst,
          keys: unrecognized
        });
      }
    } else {
      payload.value = {};
      for (const key of Reflect.ownKeys(input)) {
        if (key === "__proto__")
          continue;
        let keyResult = def.keyType._zod.run({ value: key, issues: [] }, ctx);
        if (keyResult instanceof Promise) {
          throw new Error("Async schemas not supported in object keys currently");
        }
        const checkNumericKey = typeof key === "string" && number.test(key) && keyResult.issues.length;
        if (checkNumericKey) {
          const retryResult = def.keyType._zod.run({ value: Number(key), issues: [] }, ctx);
          if (retryResult instanceof Promise) {
            throw new Error("Async schemas not supported in object keys currently");
          }
          if (retryResult.issues.length === 0) {
            keyResult = retryResult;
          }
        }
        if (keyResult.issues.length) {
          if (def.mode === "loose") {
            payload.value[key] = input[key];
          } else {
            payload.issues.push({
              code: "invalid_key",
              origin: "record",
              issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config())),
              input: key,
              path: [key],
              inst
            });
          }
          continue;
        }
        const result = def.valueType._zod.run({ value: input[key], issues: [] }, ctx);
        if (result instanceof Promise) {
          proms.push(result.then((result2) => {
            if (result2.issues.length) {
              payload.issues.push(...prefixIssues(key, result2.issues));
            }
            payload.value[keyResult.value] = result2.value;
          }));
        } else {
          if (result.issues.length) {
            payload.issues.push(...prefixIssues(key, result.issues));
          }
          payload.value[keyResult.value] = result.value;
        }
      }
    }
    if (proms.length) {
      return Promise.all(proms).then(() => payload);
    }
    return payload;
  };
});
var $ZodMap = /* @__PURE__ */ $constructor("$ZodMap", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!(input instanceof Map)) {
      payload.issues.push({
        expected: "map",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    const proms = [];
    payload.value = new Map;
    for (const [key, value] of input) {
      const keyResult = def.keyType._zod.run({ value: key, issues: [] }, ctx);
      const valueResult = def.valueType._zod.run({ value, issues: [] }, ctx);
      if (keyResult instanceof Promise || valueResult instanceof Promise) {
        proms.push(Promise.all([keyResult, valueResult]).then(([keyResult2, valueResult2]) => {
          handleMapResult(keyResult2, valueResult2, payload, key, input, inst, ctx);
        }));
      } else {
        handleMapResult(keyResult, valueResult, payload, key, input, inst, ctx);
      }
    }
    if (proms.length)
      return Promise.all(proms).then(() => payload);
    return payload;
  };
});
function handleMapResult(keyResult, valueResult, final, key, input, inst, ctx) {
  if (keyResult.issues.length) {
    if (propertyKeyTypes.has(typeof key)) {
      final.issues.push(...prefixIssues(key, keyResult.issues));
    } else {
      final.issues.push({
        code: "invalid_key",
        origin: "map",
        input,
        inst,
        issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config()))
      });
    }
  }
  if (valueResult.issues.length) {
    if (propertyKeyTypes.has(typeof key)) {
      final.issues.push(...prefixIssues(key, valueResult.issues));
    } else {
      final.issues.push({
        origin: "map",
        code: "invalid_element",
        input,
        inst,
        key,
        issues: valueResult.issues.map((iss) => finalizeIssue(iss, ctx, config()))
      });
    }
  }
  final.value.set(keyResult.value, valueResult.value);
}
var $ZodSet = /* @__PURE__ */ $constructor("$ZodSet", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!(input instanceof Set)) {
      payload.issues.push({
        input,
        inst,
        expected: "set",
        code: "invalid_type"
      });
      return payload;
    }
    const proms = [];
    payload.value = new Set;
    for (const item of input) {
      const result = def.valueType._zod.run({ value: item, issues: [] }, ctx);
      if (result instanceof Promise) {
        proms.push(result.then((result2) => handleSetResult(result2, payload)));
      } else
        handleSetResult(result, payload);
    }
    if (proms.length)
      return Promise.all(proms).then(() => payload);
    return payload;
  };
});
function handleSetResult(result, final) {
  if (result.issues.length) {
    final.issues.push(...result.issues);
  }
  final.value.add(result.value);
}
var $ZodEnum = /* @__PURE__ */ $constructor("$ZodEnum", (inst, def) => {
  $ZodType.init(inst, def);
  const values = getEnumValues(def.entries);
  const valuesSet = new Set(values);
  inst._zod.values = valuesSet;
  inst._zod.pattern = new RegExp(`^(${values.filter((k) => propertyKeyTypes.has(typeof k)).map((o) => typeof o === "string" ? escapeRegex(o) : o.toString()).join("|")})$`);
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (valuesSet.has(input)) {
      return payload;
    }
    payload.issues.push({
      code: "invalid_value",
      values,
      input,
      inst
    });
    return payload;
  };
});
var $ZodLiteral = /* @__PURE__ */ $constructor("$ZodLiteral", (inst, def) => {
  $ZodType.init(inst, def);
  if (def.values.length === 0) {
    throw new Error("Cannot create literal schema with no valid values");
  }
  const values = new Set(def.values);
  inst._zod.values = values;
  inst._zod.pattern = new RegExp(`^(${def.values.map((o) => typeof o === "string" ? escapeRegex(o) : o ? escapeRegex(o.toString()) : String(o)).join("|")})$`);
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (values.has(input)) {
      return payload;
    }
    payload.issues.push({
      code: "invalid_value",
      values: def.values,
      input,
      inst
    });
    return payload;
  };
});
var $ZodFile = /* @__PURE__ */ $constructor("$ZodFile", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (input instanceof File)
      return payload;
    payload.issues.push({
      expected: "file",
      code: "invalid_type",
      input,
      inst
    });
    return payload;
  };
});
var $ZodTransform = /* @__PURE__ */ $constructor("$ZodTransform", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      throw new $ZodEncodeError(inst.constructor.name);
    }
    const _out = def.transform(payload.value, payload);
    if (ctx.async) {
      const output = _out instanceof Promise ? _out : Promise.resolve(_out);
      return output.then((output2) => {
        payload.value = output2;
        return payload;
      });
    }
    if (_out instanceof Promise) {
      throw new $ZodAsyncError;
    }
    payload.value = _out;
    return payload;
  };
});
function handleOptionalResult(result, input) {
  if (result.issues.length && input === undefined) {
    return { issues: [], value: undefined };
  }
  return result;
}
var $ZodOptional = /* @__PURE__ */ $constructor("$ZodOptional", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.optin = "optional";
  inst._zod.optout = "optional";
  defineLazy(inst._zod, "values", () => {
    return def.innerType._zod.values ? new Set([...def.innerType._zod.values, undefined]) : undefined;
  });
  defineLazy(inst._zod, "pattern", () => {
    const pattern = def.innerType._zod.pattern;
    return pattern ? new RegExp(`^(${cleanRegex(pattern.source)})?$`) : undefined;
  });
  inst._zod.parse = (payload, ctx) => {
    if (def.innerType._zod.optin === "optional") {
      const result = def.innerType._zod.run(payload, ctx);
      if (result instanceof Promise)
        return result.then((r) => handleOptionalResult(r, payload.value));
      return handleOptionalResult(result, payload.value);
    }
    if (payload.value === undefined) {
      return payload;
    }
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodExactOptional = /* @__PURE__ */ $constructor("$ZodExactOptional", (inst, def) => {
  $ZodOptional.init(inst, def);
  defineLazy(inst._zod, "values", () => def.innerType._zod.values);
  defineLazy(inst._zod, "pattern", () => def.innerType._zod.pattern);
  inst._zod.parse = (payload, ctx) => {
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodNullable = /* @__PURE__ */ $constructor("$ZodNullable", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
  defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
  defineLazy(inst._zod, "pattern", () => {
    const pattern = def.innerType._zod.pattern;
    return pattern ? new RegExp(`^(${cleanRegex(pattern.source)}|null)$`) : undefined;
  });
  defineLazy(inst._zod, "values", () => {
    return def.innerType._zod.values ? new Set([...def.innerType._zod.values, null]) : undefined;
  });
  inst._zod.parse = (payload, ctx) => {
    if (payload.value === null)
      return payload;
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodDefault = /* @__PURE__ */ $constructor("$ZodDefault", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.optin = "optional";
  defineLazy(inst._zod, "values", () => def.innerType._zod.values);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    if (payload.value === undefined) {
      payload.value = def.defaultValue;
      return payload;
    }
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then((result2) => handleDefaultResult(result2, def));
    }
    return handleDefaultResult(result, def);
  };
});
function handleDefaultResult(payload, def) {
  if (payload.value === undefined) {
    payload.value = def.defaultValue;
  }
  return payload;
}
var $ZodPrefault = /* @__PURE__ */ $constructor("$ZodPrefault", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.optin = "optional";
  defineLazy(inst._zod, "values", () => def.innerType._zod.values);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    if (payload.value === undefined) {
      payload.value = def.defaultValue;
    }
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodNonOptional = /* @__PURE__ */ $constructor("$ZodNonOptional", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "values", () => {
    const v = def.innerType._zod.values;
    return v ? new Set([...v].filter((x) => x !== undefined)) : undefined;
  });
  inst._zod.parse = (payload, ctx) => {
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then((result2) => handleNonOptionalResult(result2, inst));
    }
    return handleNonOptionalResult(result, inst);
  };
});
function handleNonOptionalResult(payload, inst) {
  if (!payload.issues.length && payload.value === undefined) {
    payload.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: payload.value,
      inst
    });
  }
  return payload;
}
var $ZodSuccess = /* @__PURE__ */ $constructor("$ZodSuccess", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      throw new $ZodEncodeError("ZodSuccess");
    }
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then((result2) => {
        payload.value = result2.issues.length === 0;
        return payload;
      });
    }
    payload.value = result.issues.length === 0;
    return payload;
  };
});
var $ZodCatch = /* @__PURE__ */ $constructor("$ZodCatch", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
  defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
  defineLazy(inst._zod, "values", () => def.innerType._zod.values);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then((result2) => {
        payload.value = result2.value;
        if (result2.issues.length) {
          payload.value = def.catchValue({
            ...payload,
            error: {
              issues: result2.issues.map((iss) => finalizeIssue(iss, ctx, config()))
            },
            input: payload.value
          });
          payload.issues = [];
        }
        return payload;
      });
    }
    payload.value = result.value;
    if (result.issues.length) {
      payload.value = def.catchValue({
        ...payload,
        error: {
          issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config()))
        },
        input: payload.value
      });
      payload.issues = [];
    }
    return payload;
  };
});
var $ZodNaN = /* @__PURE__ */ $constructor("$ZodNaN", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    if (typeof payload.value !== "number" || !Number.isNaN(payload.value)) {
      payload.issues.push({
        input: payload.value,
        inst,
        expected: "nan",
        code: "invalid_type"
      });
      return payload;
    }
    return payload;
  };
});
var $ZodPipe = /* @__PURE__ */ $constructor("$ZodPipe", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "values", () => def.in._zod.values);
  defineLazy(inst._zod, "optin", () => def.in._zod.optin);
  defineLazy(inst._zod, "optout", () => def.out._zod.optout);
  defineLazy(inst._zod, "propValues", () => def.in._zod.propValues);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      const right = def.out._zod.run(payload, ctx);
      if (right instanceof Promise) {
        return right.then((right2) => handlePipeResult(right2, def.in, ctx));
      }
      return handlePipeResult(right, def.in, ctx);
    }
    const left = def.in._zod.run(payload, ctx);
    if (left instanceof Promise) {
      return left.then((left2) => handlePipeResult(left2, def.out, ctx));
    }
    return handlePipeResult(left, def.out, ctx);
  };
});
function handlePipeResult(left, next, ctx) {
  if (left.issues.length) {
    left.aborted = true;
    return left;
  }
  return next._zod.run({ value: left.value, issues: left.issues }, ctx);
}
var $ZodCodec = /* @__PURE__ */ $constructor("$ZodCodec", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "values", () => def.in._zod.values);
  defineLazy(inst._zod, "optin", () => def.in._zod.optin);
  defineLazy(inst._zod, "optout", () => def.out._zod.optout);
  defineLazy(inst._zod, "propValues", () => def.in._zod.propValues);
  inst._zod.parse = (payload, ctx) => {
    const direction = ctx.direction || "forward";
    if (direction === "forward") {
      const left = def.in._zod.run(payload, ctx);
      if (left instanceof Promise) {
        return left.then((left2) => handleCodecAResult(left2, def, ctx));
      }
      return handleCodecAResult(left, def, ctx);
    } else {
      const right = def.out._zod.run(payload, ctx);
      if (right instanceof Promise) {
        return right.then((right2) => handleCodecAResult(right2, def, ctx));
      }
      return handleCodecAResult(right, def, ctx);
    }
  };
});
function handleCodecAResult(result, def, ctx) {
  if (result.issues.length) {
    result.aborted = true;
    return result;
  }
  const direction = ctx.direction || "forward";
  if (direction === "forward") {
    const transformed = def.transform(result.value, result);
    if (transformed instanceof Promise) {
      return transformed.then((value) => handleCodecTxResult(result, value, def.out, ctx));
    }
    return handleCodecTxResult(result, transformed, def.out, ctx);
  } else {
    const transformed = def.reverseTransform(result.value, result);
    if (transformed instanceof Promise) {
      return transformed.then((value) => handleCodecTxResult(result, value, def.in, ctx));
    }
    return handleCodecTxResult(result, transformed, def.in, ctx);
  }
}
function handleCodecTxResult(left, value, nextSchema, ctx) {
  if (left.issues.length) {
    left.aborted = true;
    return left;
  }
  return nextSchema._zod.run({ value, issues: left.issues }, ctx);
}
var $ZodReadonly = /* @__PURE__ */ $constructor("$ZodReadonly", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "propValues", () => def.innerType._zod.propValues);
  defineLazy(inst._zod, "values", () => def.innerType._zod.values);
  defineLazy(inst._zod, "optin", () => def.innerType?._zod?.optin);
  defineLazy(inst._zod, "optout", () => def.innerType?._zod?.optout);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then(handleReadonlyResult);
    }
    return handleReadonlyResult(result);
  };
});
function handleReadonlyResult(payload) {
  payload.value = Object.freeze(payload.value);
  return payload;
}
var $ZodTemplateLiteral = /* @__PURE__ */ $constructor("$ZodTemplateLiteral", (inst, def) => {
  $ZodType.init(inst, def);
  const regexParts = [];
  for (const part of def.parts) {
    if (typeof part === "object" && part !== null) {
      if (!part._zod.pattern) {
        throw new Error(`Invalid template literal part, no pattern found: ${[...part._zod.traits].shift()}`);
      }
      const source = part._zod.pattern instanceof RegExp ? part._zod.pattern.source : part._zod.pattern;
      if (!source)
        throw new Error(`Invalid template literal part: ${part._zod.traits}`);
      const start = source.startsWith("^") ? 1 : 0;
      const end = source.endsWith("$") ? source.length - 1 : source.length;
      regexParts.push(source.slice(start, end));
    } else if (part === null || primitiveTypes.has(typeof part)) {
      regexParts.push(escapeRegex(`${part}`));
    } else {
      throw new Error(`Invalid template literal part: ${part}`);
    }
  }
  inst._zod.pattern = new RegExp(`^${regexParts.join("")}$`);
  inst._zod.parse = (payload, _ctx) => {
    if (typeof payload.value !== "string") {
      payload.issues.push({
        input: payload.value,
        inst,
        expected: "string",
        code: "invalid_type"
      });
      return payload;
    }
    inst._zod.pattern.lastIndex = 0;
    if (!inst._zod.pattern.test(payload.value)) {
      payload.issues.push({
        input: payload.value,
        inst,
        code: "invalid_format",
        format: def.format ?? "template_literal",
        pattern: inst._zod.pattern.source
      });
      return payload;
    }
    return payload;
  };
});
var $ZodFunction = /* @__PURE__ */ $constructor("$ZodFunction", (inst, def) => {
  $ZodType.init(inst, def);
  inst._def = def;
  inst._zod.def = def;
  inst.implement = (func) => {
    if (typeof func !== "function") {
      throw new Error("implement() must be called with a function");
    }
    return function(...args) {
      const parsedArgs = inst._def.input ? parse(inst._def.input, args) : args;
      const result = Reflect.apply(func, this, parsedArgs);
      if (inst._def.output) {
        return parse(inst._def.output, result);
      }
      return result;
    };
  };
  inst.implementAsync = (func) => {
    if (typeof func !== "function") {
      throw new Error("implementAsync() must be called with a function");
    }
    return async function(...args) {
      const parsedArgs = inst._def.input ? await parseAsync(inst._def.input, args) : args;
      const result = await Reflect.apply(func, this, parsedArgs);
      if (inst._def.output) {
        return await parseAsync(inst._def.output, result);
      }
      return result;
    };
  };
  inst._zod.parse = (payload, _ctx) => {
    if (typeof payload.value !== "function") {
      payload.issues.push({
        code: "invalid_type",
        expected: "function",
        input: payload.value,
        inst
      });
      return payload;
    }
    const hasPromiseOutput = inst._def.output && inst._def.output._zod.def.type === "promise";
    if (hasPromiseOutput) {
      payload.value = inst.implementAsync(payload.value);
    } else {
      payload.value = inst.implement(payload.value);
    }
    return payload;
  };
  inst.input = (...args) => {
    const F = inst.constructor;
    if (Array.isArray(args[0])) {
      return new F({
        type: "function",
        input: new $ZodTuple({
          type: "tuple",
          items: args[0],
          rest: args[1]
        }),
        output: inst._def.output
      });
    }
    return new F({
      type: "function",
      input: args[0],
      output: inst._def.output
    });
  };
  inst.output = (output) => {
    const F = inst.constructor;
    return new F({
      type: "function",
      input: inst._def.input,
      output
    });
  };
  return inst;
});
var $ZodPromise = /* @__PURE__ */ $constructor("$ZodPromise", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    return Promise.resolve(payload.value).then((inner) => def.innerType._zod.run({ value: inner, issues: [] }, ctx));
  };
});
var $ZodLazy = /* @__PURE__ */ $constructor("$ZodLazy", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "innerType", () => def.getter());
  defineLazy(inst._zod, "pattern", () => inst._zod.innerType?._zod?.pattern);
  defineLazy(inst._zod, "propValues", () => inst._zod.innerType?._zod?.propValues);
  defineLazy(inst._zod, "optin", () => inst._zod.innerType?._zod?.optin ?? undefined);
  defineLazy(inst._zod, "optout", () => inst._zod.innerType?._zod?.optout ?? undefined);
  inst._zod.parse = (payload, ctx) => {
    const inner = inst._zod.innerType;
    return inner._zod.run(payload, ctx);
  };
});
var $ZodCustom = /* @__PURE__ */ $constructor("$ZodCustom", (inst, def) => {
  $ZodCheck.init(inst, def);
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _) => {
    return payload;
  };
  inst._zod.check = (payload) => {
    const input = payload.value;
    const r = def.fn(input);
    if (r instanceof Promise) {
      return r.then((r2) => handleRefineResult(r2, payload, input, inst));
    }
    handleRefineResult(r, payload, input, inst);
    return;
  };
});
function handleRefineResult(result, payload, input, inst) {
  if (!result) {
    const _iss = {
      code: "custom",
      input,
      inst,
      path: [...inst._zod.def.path ?? []],
      continue: !inst._zod.def.abort
    };
    if (inst._zod.def.params)
      _iss.params = inst._zod.def.params;
    payload.issues.push(issue(_iss));
  }
}
// node_modules/zod/v4/locales/index.js
var exports_locales = {};
__export(exports_locales, {
  zhTW: () => zh_TW_default,
  zhCN: () => zh_CN_default,
  yo: () => yo_default,
  vi: () => vi_default,
  uz: () => uz_default,
  ur: () => ur_default,
  uk: () => uk_default,
  ua: () => ua_default,
  tr: () => tr_default,
  th: () => th_default,
  ta: () => ta_default,
  sv: () => sv_default,
  sl: () => sl_default,
  ru: () => ru_default,
  pt: () => pt_default,
  ps: () => ps_default,
  pl: () => pl_default,
  ota: () => ota_default,
  no: () => no_default,
  nl: () => nl_default,
  ms: () => ms_default,
  mk: () => mk_default,
  lt: () => lt_default,
  ko: () => ko_default,
  km: () => km_default,
  kh: () => kh_default,
  ka: () => ka_default,
  ja: () => ja_default,
  it: () => it_default,
  is: () => is_default,
  id: () => id_default,
  hy: () => hy_default,
  hu: () => hu_default,
  he: () => he_default,
  frCA: () => fr_CA_default,
  fr: () => fr_default,
  fi: () => fi_default,
  fa: () => fa_default,
  es: () => es_default,
  eo: () => eo_default,
  en: () => en_default,
  de: () => de_default,
  da: () => da_default,
  cs: () => cs_default,
  ca: () => ca_default,
  bg: () => bg_default,
  be: () => be_default,
  az: () => az_default,
  ar: () => ar_default
});

// node_modules/zod/v4/locales/ar.js
var error = () => {
  const Sizable = {
    string: { unit: "حرف", verb: "أن يحوي" },
    file: { unit: "بايت", verb: "أن يحوي" },
    array: { unit: "عنصر", verb: "أن يحوي" },
    set: { unit: "عنصر", verb: "أن يحوي" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "مدخل",
    email: "بريد إلكتروني",
    url: "رابط",
    emoji: "إيموجي",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "تاريخ ووقت بمعيار ISO",
    date: "تاريخ بمعيار ISO",
    time: "وقت بمعيار ISO",
    duration: "مدة بمعيار ISO",
    ipv4: "عنوان IPv4",
    ipv6: "عنوان IPv6",
    cidrv4: "مدى عناوين بصيغة IPv4",
    cidrv6: "مدى عناوين بصيغة IPv6",
    base64: "نَص بترميز base64-encoded",
    base64url: "نَص بترميز base64url-encoded",
    json_string: "نَص على هيئة JSON",
    e164: "رقم هاتف بمعيار E.164",
    jwt: "JWT",
    template_literal: "مدخل"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `مدخلات غير مقبولة: يفترض إدخال instanceof ${issue2.expected}، ولكن تم إدخال ${received}`;
        }
        return `مدخلات غير مقبولة: يفترض إدخال ${expected}، ولكن تم إدخال ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `مدخلات غير مقبولة: يفترض إدخال ${stringifyPrimitive(issue2.values[0])}`;
        return `اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return ` أكبر من اللازم: يفترض أن تكون ${issue2.origin ?? "القيمة"} ${adj} ${issue2.maximum.toString()} ${sizing.unit ?? "عنصر"}`;
        return `أكبر من اللازم: يفترض أن تكون ${issue2.origin ?? "القيمة"} ${adj} ${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `أصغر من اللازم: يفترض لـ ${issue2.origin} أن يكون ${adj} ${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `أصغر من اللازم: يفترض لـ ${issue2.origin} أن يكون ${adj} ${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `نَص غير مقبول: يجب أن يبدأ بـ "${issue2.prefix}"`;
        if (_issue.format === "ends_with")
          return `نَص غير مقبول: يجب أن ينتهي بـ "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `نَص غير مقبول: يجب أن يتضمَّن "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `نَص غير مقبول: يجب أن يطابق النمط ${_issue.pattern}`;
        return `${FormatDictionary[_issue.format] ?? issue2.format} غير مقبول`;
      }
      case "not_multiple_of":
        return `رقم غير مقبول: يجب أن يكون من مضاعفات ${issue2.divisor}`;
      case "unrecognized_keys":
        return `معرف${issue2.keys.length > 1 ? "ات" : ""} غريب${issue2.keys.length > 1 ? "ة" : ""}: ${joinValues(issue2.keys, "، ")}`;
      case "invalid_key":
        return `معرف غير مقبول في ${issue2.origin}`;
      case "invalid_union":
        return "مدخل غير مقبول";
      case "invalid_element":
        return `مدخل غير مقبول في ${issue2.origin}`;
      default:
        return "مدخل غير مقبول";
    }
  };
};
function ar_default() {
  return {
    localeError: error()
  };
}
// node_modules/zod/v4/locales/az.js
var error2 = () => {
  const Sizable = {
    string: { unit: "simvol", verb: "olmalıdır" },
    file: { unit: "bayt", verb: "olmalıdır" },
    array: { unit: "element", verb: "olmalıdır" },
    set: { unit: "element", verb: "olmalıdır" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "email address",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datetime",
    date: "ISO date",
    time: "ISO time",
    duration: "ISO duration",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded string",
    base64url: "base64url-encoded string",
    json_string: "JSON string",
    e164: "E.164 number",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Yanlış dəyər: gözlənilən instanceof ${issue2.expected}, daxil olan ${received}`;
        }
        return `Yanlış dəyər: gözlənilən ${expected}, daxil olan ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Yanlış dəyər: gözlənilən ${stringifyPrimitive(issue2.values[0])}`;
        return `Yanlış seçim: aşağıdakılardan biri olmalıdır: ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Çox böyük: gözlənilən ${issue2.origin ?? "dəyər"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "element"}`;
        return `Çox böyük: gözlənilən ${issue2.origin ?? "dəyər"} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Çox kiçik: gözlənilən ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        return `Çox kiçik: gözlənilən ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Yanlış mətn: "${_issue.prefix}" ilə başlamalıdır`;
        if (_issue.format === "ends_with")
          return `Yanlış mətn: "${_issue.suffix}" ilə bitməlidir`;
        if (_issue.format === "includes")
          return `Yanlış mətn: "${_issue.includes}" daxil olmalıdır`;
        if (_issue.format === "regex")
          return `Yanlış mətn: ${_issue.pattern} şablonuna uyğun olmalıdır`;
        return `Yanlış ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Yanlış ədəd: ${issue2.divisor} ilə bölünə bilən olmalıdır`;
      case "unrecognized_keys":
        return `Tanınmayan açar${issue2.keys.length > 1 ? "lar" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `${issue2.origin} daxilində yanlış açar`;
      case "invalid_union":
        return "Yanlış dəyər";
      case "invalid_element":
        return `${issue2.origin} daxilində yanlış dəyər`;
      default:
        return `Yanlış dəyər`;
    }
  };
};
function az_default() {
  return {
    localeError: error2()
  };
}
// node_modules/zod/v4/locales/be.js
function getBelarusianPlural(count, one, few, many) {
  const absCount = Math.abs(count);
  const lastDigit = absCount % 10;
  const lastTwoDigits = absCount % 100;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return many;
  }
  if (lastDigit === 1) {
    return one;
  }
  if (lastDigit >= 2 && lastDigit <= 4) {
    return few;
  }
  return many;
}
var error3 = () => {
  const Sizable = {
    string: {
      unit: {
        one: "сімвал",
        few: "сімвалы",
        many: "сімвалаў"
      },
      verb: "мець"
    },
    array: {
      unit: {
        one: "элемент",
        few: "элементы",
        many: "элементаў"
      },
      verb: "мець"
    },
    set: {
      unit: {
        one: "элемент",
        few: "элементы",
        many: "элементаў"
      },
      verb: "мець"
    },
    file: {
      unit: {
        one: "байт",
        few: "байты",
        many: "байтаў"
      },
      verb: "мець"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "увод",
    email: "email адрас",
    url: "URL",
    emoji: "эмодзі",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO дата і час",
    date: "ISO дата",
    time: "ISO час",
    duration: "ISO працягласць",
    ipv4: "IPv4 адрас",
    ipv6: "IPv6 адрас",
    cidrv4: "IPv4 дыяпазон",
    cidrv6: "IPv6 дыяпазон",
    base64: "радок у фармаце base64",
    base64url: "радок у фармаце base64url",
    json_string: "JSON радок",
    e164: "нумар E.164",
    jwt: "JWT",
    template_literal: "увод"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "лік",
    array: "масіў"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Няправільны ўвод: чакаўся instanceof ${issue2.expected}, атрымана ${received}`;
        }
        return `Няправільны ўвод: чакаўся ${expected}, атрымана ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Няправільны ўвод: чакалася ${stringifyPrimitive(issue2.values[0])}`;
        return `Няправільны варыянт: чакаўся адзін з ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          const maxValue = Number(issue2.maximum);
          const unit = getBelarusianPlural(maxValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
          return `Занадта вялікі: чакалася, што ${issue2.origin ?? "значэнне"} павінна ${sizing.verb} ${adj}${issue2.maximum.toString()} ${unit}`;
        }
        return `Занадта вялікі: чакалася, што ${issue2.origin ?? "значэнне"} павінна быць ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          const minValue = Number(issue2.minimum);
          const unit = getBelarusianPlural(minValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
          return `Занадта малы: чакалася, што ${issue2.origin} павінна ${sizing.verb} ${adj}${issue2.minimum.toString()} ${unit}`;
        }
        return `Занадта малы: чакалася, што ${issue2.origin} павінна быць ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Няправільны радок: павінен пачынацца з "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Няправільны радок: павінен заканчвацца на "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Няправільны радок: павінен змяшчаць "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Няправільны радок: павінен адпавядаць шаблону ${_issue.pattern}`;
        return `Няправільны ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Няправільны лік: павінен быць кратным ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Нераспазнаны ${issue2.keys.length > 1 ? "ключы" : "ключ"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Няправільны ключ у ${issue2.origin}`;
      case "invalid_union":
        return "Няправільны ўвод";
      case "invalid_element":
        return `Няправільнае значэнне ў ${issue2.origin}`;
      default:
        return `Няправільны ўвод`;
    }
  };
};
function be_default() {
  return {
    localeError: error3()
  };
}
// node_modules/zod/v4/locales/bg.js
var error4 = () => {
  const Sizable = {
    string: { unit: "символа", verb: "да съдържа" },
    file: { unit: "байта", verb: "да съдържа" },
    array: { unit: "елемента", verb: "да съдържа" },
    set: { unit: "елемента", verb: "да съдържа" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "вход",
    email: "имейл адрес",
    url: "URL",
    emoji: "емоджи",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO време",
    date: "ISO дата",
    time: "ISO време",
    duration: "ISO продължителност",
    ipv4: "IPv4 адрес",
    ipv6: "IPv6 адрес",
    cidrv4: "IPv4 диапазон",
    cidrv6: "IPv6 диапазон",
    base64: "base64-кодиран низ",
    base64url: "base64url-кодиран низ",
    json_string: "JSON низ",
    e164: "E.164 номер",
    jwt: "JWT",
    template_literal: "вход"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "число",
    array: "масив"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Невалиден вход: очакван instanceof ${issue2.expected}, получен ${received}`;
        }
        return `Невалиден вход: очакван ${expected}, получен ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Невалиден вход: очакван ${stringifyPrimitive(issue2.values[0])}`;
        return `Невалидна опция: очаквано едно от ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Твърде голямо: очаква се ${issue2.origin ?? "стойност"} да съдържа ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "елемента"}`;
        return `Твърде голямо: очаква се ${issue2.origin ?? "стойност"} да бъде ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Твърде малко: очаква се ${issue2.origin} да съдържа ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Твърде малко: очаква се ${issue2.origin} да бъде ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Невалиден низ: трябва да започва с "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Невалиден низ: трябва да завършва с "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Невалиден низ: трябва да включва "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Невалиден низ: трябва да съвпада с ${_issue.pattern}`;
        let invalid_adj = "Невалиден";
        if (_issue.format === "emoji")
          invalid_adj = "Невалидно";
        if (_issue.format === "datetime")
          invalid_adj = "Невалидно";
        if (_issue.format === "date")
          invalid_adj = "Невалидна";
        if (_issue.format === "time")
          invalid_adj = "Невалидно";
        if (_issue.format === "duration")
          invalid_adj = "Невалидна";
        return `${invalid_adj} ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Невалидно число: трябва да бъде кратно на ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Неразпознат${issue2.keys.length > 1 ? "и" : ""} ключ${issue2.keys.length > 1 ? "ове" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Невалиден ключ в ${issue2.origin}`;
      case "invalid_union":
        return "Невалиден вход";
      case "invalid_element":
        return `Невалидна стойност в ${issue2.origin}`;
      default:
        return `Невалиден вход`;
    }
  };
};
function bg_default() {
  return {
    localeError: error4()
  };
}
// node_modules/zod/v4/locales/ca.js
var error5 = () => {
  const Sizable = {
    string: { unit: "caràcters", verb: "contenir" },
    file: { unit: "bytes", verb: "contenir" },
    array: { unit: "elements", verb: "contenir" },
    set: { unit: "elements", verb: "contenir" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "entrada",
    email: "adreça electrònica",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data i hora ISO",
    date: "data ISO",
    time: "hora ISO",
    duration: "durada ISO",
    ipv4: "adreça IPv4",
    ipv6: "adreça IPv6",
    cidrv4: "rang IPv4",
    cidrv6: "rang IPv6",
    base64: "cadena codificada en base64",
    base64url: "cadena codificada en base64url",
    json_string: "cadena JSON",
    e164: "número E.164",
    jwt: "JWT",
    template_literal: "entrada"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Tipus invàlid: s'esperava instanceof ${issue2.expected}, s'ha rebut ${received}`;
        }
        return `Tipus invàlid: s'esperava ${expected}, s'ha rebut ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Valor invàlid: s'esperava ${stringifyPrimitive(issue2.values[0])}`;
        return `Opció invàlida: s'esperava una de ${joinValues(issue2.values, " o ")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "com a màxim" : "menys de";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Massa gran: s'esperava que ${issue2.origin ?? "el valor"} contingués ${adj} ${issue2.maximum.toString()} ${sizing.unit ?? "elements"}`;
        return `Massa gran: s'esperava que ${issue2.origin ?? "el valor"} fos ${adj} ${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? "com a mínim" : "més de";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Massa petit: s'esperava que ${issue2.origin} contingués ${adj} ${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Massa petit: s'esperava que ${issue2.origin} fos ${adj} ${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Format invàlid: ha de començar amb "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Format invàlid: ha d'acabar amb "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Format invàlid: ha d'incloure "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Format invàlid: ha de coincidir amb el patró ${_issue.pattern}`;
        return `Format invàlid per a ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Número invàlid: ha de ser múltiple de ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Clau${issue2.keys.length > 1 ? "s" : ""} no reconeguda${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Clau invàlida a ${issue2.origin}`;
      case "invalid_union":
        return "Entrada invàlida";
      case "invalid_element":
        return `Element invàlid a ${issue2.origin}`;
      default:
        return `Entrada invàlida`;
    }
  };
};
function ca_default() {
  return {
    localeError: error5()
  };
}
// node_modules/zod/v4/locales/cs.js
var error6 = () => {
  const Sizable = {
    string: { unit: "znaků", verb: "mít" },
    file: { unit: "bajtů", verb: "mít" },
    array: { unit: "prvků", verb: "mít" },
    set: { unit: "prvků", verb: "mít" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "regulární výraz",
    email: "e-mailová adresa",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "datum a čas ve formátu ISO",
    date: "datum ve formátu ISO",
    time: "čas ve formátu ISO",
    duration: "doba trvání ISO",
    ipv4: "IPv4 adresa",
    ipv6: "IPv6 adresa",
    cidrv4: "rozsah IPv4",
    cidrv6: "rozsah IPv6",
    base64: "řetězec zakódovaný ve formátu base64",
    base64url: "řetězec zakódovaný ve formátu base64url",
    json_string: "řetězec ve formátu JSON",
    e164: "číslo E.164",
    jwt: "JWT",
    template_literal: "vstup"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "číslo",
    string: "řetězec",
    function: "funkce",
    array: "pole"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Neplatný vstup: očekáváno instanceof ${issue2.expected}, obdrženo ${received}`;
        }
        return `Neplatný vstup: očekáváno ${expected}, obdrženo ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Neplatný vstup: očekáváno ${stringifyPrimitive(issue2.values[0])}`;
        return `Neplatná možnost: očekávána jedna z hodnot ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Hodnota je příliš velká: ${issue2.origin ?? "hodnota"} musí mít ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "prvků"}`;
        }
        return `Hodnota je příliš velká: ${issue2.origin ?? "hodnota"} musí být ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Hodnota je příliš malá: ${issue2.origin ?? "hodnota"} musí mít ${adj}${issue2.minimum.toString()} ${sizing.unit ?? "prvků"}`;
        }
        return `Hodnota je příliš malá: ${issue2.origin ?? "hodnota"} musí být ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Neplatný řetězec: musí začínat na "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Neplatný řetězec: musí končit na "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Neplatný řetězec: musí obsahovat "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Neplatný řetězec: musí odpovídat vzoru ${_issue.pattern}`;
        return `Neplatný formát ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Neplatné číslo: musí být násobkem ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Neznámé klíče: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Neplatný klíč v ${issue2.origin}`;
      case "invalid_union":
        return "Neplatný vstup";
      case "invalid_element":
        return `Neplatná hodnota v ${issue2.origin}`;
      default:
        return `Neplatný vstup`;
    }
  };
};
function cs_default() {
  return {
    localeError: error6()
  };
}
// node_modules/zod/v4/locales/da.js
var error7 = () => {
  const Sizable = {
    string: { unit: "tegn", verb: "havde" },
    file: { unit: "bytes", verb: "havde" },
    array: { unit: "elementer", verb: "indeholdt" },
    set: { unit: "elementer", verb: "indeholdt" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "e-mailadresse",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO dato- og klokkeslæt",
    date: "ISO-dato",
    time: "ISO-klokkeslæt",
    duration: "ISO-varighed",
    ipv4: "IPv4-område",
    ipv6: "IPv6-område",
    cidrv4: "IPv4-spektrum",
    cidrv6: "IPv6-spektrum",
    base64: "base64-kodet streng",
    base64url: "base64url-kodet streng",
    json_string: "JSON-streng",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN",
    string: "streng",
    number: "tal",
    boolean: "boolean",
    array: "liste",
    object: "objekt",
    set: "sæt",
    file: "fil"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Ugyldigt input: forventede instanceof ${issue2.expected}, fik ${received}`;
        }
        return `Ugyldigt input: forventede ${expected}, fik ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Ugyldig værdi: forventede ${stringifyPrimitive(issue2.values[0])}`;
        return `Ugyldigt valg: forventede en af følgende ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        if (sizing)
          return `For stor: forventede ${origin ?? "value"} ${sizing.verb} ${adj} ${issue2.maximum.toString()} ${sizing.unit ?? "elementer"}`;
        return `For stor: forventede ${origin ?? "value"} havde ${adj} ${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        if (sizing) {
          return `For lille: forventede ${origin} ${sizing.verb} ${adj} ${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `For lille: forventede ${origin} havde ${adj} ${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Ugyldig streng: skal starte med "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Ugyldig streng: skal ende med "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Ugyldig streng: skal indeholde "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Ugyldig streng: skal matche mønsteret ${_issue.pattern}`;
        return `Ugyldig ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Ugyldigt tal: skal være deleligt med ${issue2.divisor}`;
      case "unrecognized_keys":
        return `${issue2.keys.length > 1 ? "Ukendte nøgler" : "Ukendt nøgle"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Ugyldig nøgle i ${issue2.origin}`;
      case "invalid_union":
        return "Ugyldigt input: matcher ingen af de tilladte typer";
      case "invalid_element":
        return `Ugyldig værdi i ${issue2.origin}`;
      default:
        return `Ugyldigt input`;
    }
  };
};
function da_default() {
  return {
    localeError: error7()
  };
}
// node_modules/zod/v4/locales/de.js
var error8 = () => {
  const Sizable = {
    string: { unit: "Zeichen", verb: "zu haben" },
    file: { unit: "Bytes", verb: "zu haben" },
    array: { unit: "Elemente", verb: "zu haben" },
    set: { unit: "Elemente", verb: "zu haben" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "Eingabe",
    email: "E-Mail-Adresse",
    url: "URL",
    emoji: "Emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-Datum und -Uhrzeit",
    date: "ISO-Datum",
    time: "ISO-Uhrzeit",
    duration: "ISO-Dauer",
    ipv4: "IPv4-Adresse",
    ipv6: "IPv6-Adresse",
    cidrv4: "IPv4-Bereich",
    cidrv6: "IPv6-Bereich",
    base64: "Base64-codierter String",
    base64url: "Base64-URL-codierter String",
    json_string: "JSON-String",
    e164: "E.164-Nummer",
    jwt: "JWT",
    template_literal: "Eingabe"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "Zahl",
    array: "Array"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Ungültige Eingabe: erwartet instanceof ${issue2.expected}, erhalten ${received}`;
        }
        return `Ungültige Eingabe: erwartet ${expected}, erhalten ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Ungültige Eingabe: erwartet ${stringifyPrimitive(issue2.values[0])}`;
        return `Ungültige Option: erwartet eine von ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Zu groß: erwartet, dass ${issue2.origin ?? "Wert"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "Elemente"} hat`;
        return `Zu groß: erwartet, dass ${issue2.origin ?? "Wert"} ${adj}${issue2.maximum.toString()} ist`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Zu klein: erwartet, dass ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit} hat`;
        }
        return `Zu klein: erwartet, dass ${issue2.origin} ${adj}${issue2.minimum.toString()} ist`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Ungültiger String: muss mit "${_issue.prefix}" beginnen`;
        if (_issue.format === "ends_with")
          return `Ungültiger String: muss mit "${_issue.suffix}" enden`;
        if (_issue.format === "includes")
          return `Ungültiger String: muss "${_issue.includes}" enthalten`;
        if (_issue.format === "regex")
          return `Ungültiger String: muss dem Muster ${_issue.pattern} entsprechen`;
        return `Ungültig: ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Ungültige Zahl: muss ein Vielfaches von ${issue2.divisor} sein`;
      case "unrecognized_keys":
        return `${issue2.keys.length > 1 ? "Unbekannte Schlüssel" : "Unbekannter Schlüssel"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Ungültiger Schlüssel in ${issue2.origin}`;
      case "invalid_union":
        return "Ungültige Eingabe";
      case "invalid_element":
        return `Ungültiger Wert in ${issue2.origin}`;
      default:
        return `Ungültige Eingabe`;
    }
  };
};
function de_default() {
  return {
    localeError: error8()
  };
}
// node_modules/zod/v4/locales/en.js
var error9 = () => {
  const Sizable = {
    string: { unit: "characters", verb: "to have" },
    file: { unit: "bytes", verb: "to have" },
    array: { unit: "items", verb: "to have" },
    set: { unit: "items", verb: "to have" },
    map: { unit: "entries", verb: "to have" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "email address",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datetime",
    date: "ISO date",
    time: "ISO time",
    duration: "ISO duration",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    mac: "MAC address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded string",
    base64url: "base64url-encoded string",
    json_string: "JSON string",
    e164: "E.164 number",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        return `Invalid input: expected ${expected}, received ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Invalid input: expected ${stringifyPrimitive(issue2.values[0])}`;
        return `Invalid option: expected one of ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Too big: expected ${issue2.origin ?? "value"} to have ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elements"}`;
        return `Too big: expected ${issue2.origin ?? "value"} to be ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Too small: expected ${issue2.origin} to have ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Too small: expected ${issue2.origin} to be ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Invalid string: must start with "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Invalid string: must end with "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Invalid string: must include "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Invalid string: must match pattern ${_issue.pattern}`;
        return `Invalid ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Invalid number: must be a multiple of ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Unrecognized key${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Invalid key in ${issue2.origin}`;
      case "invalid_union":
        return "Invalid input";
      case "invalid_element":
        return `Invalid value in ${issue2.origin}`;
      default:
        return `Invalid input`;
    }
  };
};
function en_default() {
  return {
    localeError: error9()
  };
}
// node_modules/zod/v4/locales/eo.js
var error10 = () => {
  const Sizable = {
    string: { unit: "karaktrojn", verb: "havi" },
    file: { unit: "bajtojn", verb: "havi" },
    array: { unit: "elementojn", verb: "havi" },
    set: { unit: "elementojn", verb: "havi" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "enigo",
    email: "retadreso",
    url: "URL",
    emoji: "emoĝio",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-datotempo",
    date: "ISO-dato",
    time: "ISO-tempo",
    duration: "ISO-daŭro",
    ipv4: "IPv4-adreso",
    ipv6: "IPv6-adreso",
    cidrv4: "IPv4-rango",
    cidrv6: "IPv6-rango",
    base64: "64-ume kodita karaktraro",
    base64url: "URL-64-ume kodita karaktraro",
    json_string: "JSON-karaktraro",
    e164: "E.164-nombro",
    jwt: "JWT",
    template_literal: "enigo"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "nombro",
    array: "tabelo",
    null: "senvalora"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Nevalida enigo: atendiĝis instanceof ${issue2.expected}, riceviĝis ${received}`;
        }
        return `Nevalida enigo: atendiĝis ${expected}, riceviĝis ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Nevalida enigo: atendiĝis ${stringifyPrimitive(issue2.values[0])}`;
        return `Nevalida opcio: atendiĝis unu el ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Tro granda: atendiĝis ke ${issue2.origin ?? "valoro"} havu ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementojn"}`;
        return `Tro granda: atendiĝis ke ${issue2.origin ?? "valoro"} havu ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Tro malgranda: atendiĝis ke ${issue2.origin} havu ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Tro malgranda: atendiĝis ke ${issue2.origin} estu ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Nevalida karaktraro: devas komenciĝi per "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Nevalida karaktraro: devas finiĝi per "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Nevalida karaktraro: devas inkluzivi "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Nevalida karaktraro: devas kongrui kun la modelo ${_issue.pattern}`;
        return `Nevalida ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Nevalida nombro: devas esti oblo de ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Nekonata${issue2.keys.length > 1 ? "j" : ""} ŝlosilo${issue2.keys.length > 1 ? "j" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Nevalida ŝlosilo en ${issue2.origin}`;
      case "invalid_union":
        return "Nevalida enigo";
      case "invalid_element":
        return `Nevalida valoro en ${issue2.origin}`;
      default:
        return `Nevalida enigo`;
    }
  };
};
function eo_default() {
  return {
    localeError: error10()
  };
}
// node_modules/zod/v4/locales/es.js
var error11 = () => {
  const Sizable = {
    string: { unit: "caracteres", verb: "tener" },
    file: { unit: "bytes", verb: "tener" },
    array: { unit: "elementos", verb: "tener" },
    set: { unit: "elementos", verb: "tener" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "entrada",
    email: "dirección de correo electrónico",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "fecha y hora ISO",
    date: "fecha ISO",
    time: "hora ISO",
    duration: "duración ISO",
    ipv4: "dirección IPv4",
    ipv6: "dirección IPv6",
    cidrv4: "rango IPv4",
    cidrv6: "rango IPv6",
    base64: "cadena codificada en base64",
    base64url: "URL codificada en base64",
    json_string: "cadena JSON",
    e164: "número E.164",
    jwt: "JWT",
    template_literal: "entrada"
  };
  const TypeDictionary = {
    nan: "NaN",
    string: "texto",
    number: "número",
    boolean: "booleano",
    array: "arreglo",
    object: "objeto",
    set: "conjunto",
    file: "archivo",
    date: "fecha",
    bigint: "número grande",
    symbol: "símbolo",
    undefined: "indefinido",
    null: "nulo",
    function: "función",
    map: "mapa",
    record: "registro",
    tuple: "tupla",
    enum: "enumeración",
    union: "unión",
    literal: "literal",
    promise: "promesa",
    void: "vacío",
    never: "nunca",
    unknown: "desconocido",
    any: "cualquiera"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Entrada inválida: se esperaba instanceof ${issue2.expected}, recibido ${received}`;
        }
        return `Entrada inválida: se esperaba ${expected}, recibido ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Entrada inválida: se esperaba ${stringifyPrimitive(issue2.values[0])}`;
        return `Opción inválida: se esperaba una de ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        if (sizing)
          return `Demasiado grande: se esperaba que ${origin ?? "valor"} tuviera ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementos"}`;
        return `Demasiado grande: se esperaba que ${origin ?? "valor"} fuera ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        if (sizing) {
          return `Demasiado pequeño: se esperaba que ${origin} tuviera ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Demasiado pequeño: se esperaba que ${origin} fuera ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Cadena inválida: debe comenzar con "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Cadena inválida: debe terminar en "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Cadena inválida: debe incluir "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Cadena inválida: debe coincidir con el patrón ${_issue.pattern}`;
        return `Inválido ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Número inválido: debe ser múltiplo de ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Llave${issue2.keys.length > 1 ? "s" : ""} desconocida${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Llave inválida en ${TypeDictionary[issue2.origin] ?? issue2.origin}`;
      case "invalid_union":
        return "Entrada inválida";
      case "invalid_element":
        return `Valor inválido en ${TypeDictionary[issue2.origin] ?? issue2.origin}`;
      default:
        return `Entrada inválida`;
    }
  };
};
function es_default() {
  return {
    localeError: error11()
  };
}
// node_modules/zod/v4/locales/fa.js
var error12 = () => {
  const Sizable = {
    string: { unit: "کاراکتر", verb: "داشته باشد" },
    file: { unit: "بایت", verb: "داشته باشد" },
    array: { unit: "آیتم", verb: "داشته باشد" },
    set: { unit: "آیتم", verb: "داشته باشد" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "ورودی",
    email: "آدرس ایمیل",
    url: "URL",
    emoji: "ایموجی",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "تاریخ و زمان ایزو",
    date: "تاریخ ایزو",
    time: "زمان ایزو",
    duration: "مدت زمان ایزو",
    ipv4: "IPv4 آدرس",
    ipv6: "IPv6 آدرس",
    cidrv4: "IPv4 دامنه",
    cidrv6: "IPv6 دامنه",
    base64: "base64-encoded رشته",
    base64url: "base64url-encoded رشته",
    json_string: "JSON رشته",
    e164: "E.164 عدد",
    jwt: "JWT",
    template_literal: "ورودی"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "عدد",
    array: "آرایه"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `ورودی نامعتبر: می‌بایست instanceof ${issue2.expected} می‌بود، ${received} دریافت شد`;
        }
        return `ورودی نامعتبر: می‌بایست ${expected} می‌بود، ${received} دریافت شد`;
      }
      case "invalid_value":
        if (issue2.values.length === 1) {
          return `ورودی نامعتبر: می‌بایست ${stringifyPrimitive(issue2.values[0])} می‌بود`;
        }
        return `گزینه نامعتبر: می‌بایست یکی از ${joinValues(issue2.values, "|")} می‌بود`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `خیلی بزرگ: ${issue2.origin ?? "مقدار"} باید ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "عنصر"} باشد`;
        }
        return `خیلی بزرگ: ${issue2.origin ?? "مقدار"} باید ${adj}${issue2.maximum.toString()} باشد`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `خیلی کوچک: ${issue2.origin} باید ${adj}${issue2.minimum.toString()} ${sizing.unit} باشد`;
        }
        return `خیلی کوچک: ${issue2.origin} باید ${adj}${issue2.minimum.toString()} باشد`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `رشته نامعتبر: باید با "${_issue.prefix}" شروع شود`;
        }
        if (_issue.format === "ends_with") {
          return `رشته نامعتبر: باید با "${_issue.suffix}" تمام شود`;
        }
        if (_issue.format === "includes") {
          return `رشته نامعتبر: باید شامل "${_issue.includes}" باشد`;
        }
        if (_issue.format === "regex") {
          return `رشته نامعتبر: باید با الگوی ${_issue.pattern} مطابقت داشته باشد`;
        }
        return `${FormatDictionary[_issue.format] ?? issue2.format} نامعتبر`;
      }
      case "not_multiple_of":
        return `عدد نامعتبر: باید مضرب ${issue2.divisor} باشد`;
      case "unrecognized_keys":
        return `کلید${issue2.keys.length > 1 ? "های" : ""} ناشناس: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `کلید ناشناس در ${issue2.origin}`;
      case "invalid_union":
        return `ورودی نامعتبر`;
      case "invalid_element":
        return `مقدار نامعتبر در ${issue2.origin}`;
      default:
        return `ورودی نامعتبر`;
    }
  };
};
function fa_default() {
  return {
    localeError: error12()
  };
}
// node_modules/zod/v4/locales/fi.js
var error13 = () => {
  const Sizable = {
    string: { unit: "merkkiä", subject: "merkkijonon" },
    file: { unit: "tavua", subject: "tiedoston" },
    array: { unit: "alkiota", subject: "listan" },
    set: { unit: "alkiota", subject: "joukon" },
    number: { unit: "", subject: "luvun" },
    bigint: { unit: "", subject: "suuren kokonaisluvun" },
    int: { unit: "", subject: "kokonaisluvun" },
    date: { unit: "", subject: "päivämäärän" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "säännöllinen lauseke",
    email: "sähköpostiosoite",
    url: "URL-osoite",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-aikaleima",
    date: "ISO-päivämäärä",
    time: "ISO-aika",
    duration: "ISO-kesto",
    ipv4: "IPv4-osoite",
    ipv6: "IPv6-osoite",
    cidrv4: "IPv4-alue",
    cidrv6: "IPv6-alue",
    base64: "base64-koodattu merkkijono",
    base64url: "base64url-koodattu merkkijono",
    json_string: "JSON-merkkijono",
    e164: "E.164-luku",
    jwt: "JWT",
    template_literal: "templaattimerkkijono"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Virheellinen tyyppi: odotettiin instanceof ${issue2.expected}, oli ${received}`;
        }
        return `Virheellinen tyyppi: odotettiin ${expected}, oli ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Virheellinen syöte: täytyy olla ${stringifyPrimitive(issue2.values[0])}`;
        return `Virheellinen valinta: täytyy olla yksi seuraavista: ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Liian suuri: ${sizing.subject} täytyy olla ${adj}${issue2.maximum.toString()} ${sizing.unit}`.trim();
        }
        return `Liian suuri: arvon täytyy olla ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Liian pieni: ${sizing.subject} täytyy olla ${adj}${issue2.minimum.toString()} ${sizing.unit}`.trim();
        }
        return `Liian pieni: arvon täytyy olla ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Virheellinen syöte: täytyy alkaa "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Virheellinen syöte: täytyy loppua "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Virheellinen syöte: täytyy sisältää "${_issue.includes}"`;
        if (_issue.format === "regex") {
          return `Virheellinen syöte: täytyy vastata säännöllistä lauseketta ${_issue.pattern}`;
        }
        return `Virheellinen ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Virheellinen luku: täytyy olla luvun ${issue2.divisor} monikerta`;
      case "unrecognized_keys":
        return `${issue2.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return "Virheellinen avain tietueessa";
      case "invalid_union":
        return "Virheellinen unioni";
      case "invalid_element":
        return "Virheellinen arvo joukossa";
      default:
        return `Virheellinen syöte`;
    }
  };
};
function fi_default() {
  return {
    localeError: error13()
  };
}
// node_modules/zod/v4/locales/fr.js
var error14 = () => {
  const Sizable = {
    string: { unit: "caractères", verb: "avoir" },
    file: { unit: "octets", verb: "avoir" },
    array: { unit: "éléments", verb: "avoir" },
    set: { unit: "éléments", verb: "avoir" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "entrée",
    email: "adresse e-mail",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "date et heure ISO",
    date: "date ISO",
    time: "heure ISO",
    duration: "durée ISO",
    ipv4: "adresse IPv4",
    ipv6: "adresse IPv6",
    cidrv4: "plage IPv4",
    cidrv6: "plage IPv6",
    base64: "chaîne encodée en base64",
    base64url: "chaîne encodée en base64url",
    json_string: "chaîne JSON",
    e164: "numéro E.164",
    jwt: "JWT",
    template_literal: "entrée"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "nombre",
    array: "tableau"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Entrée invalide : instanceof ${issue2.expected} attendu, ${received} reçu`;
        }
        return `Entrée invalide : ${expected} attendu, ${received} reçu`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Entrée invalide : ${stringifyPrimitive(issue2.values[0])} attendu`;
        return `Option invalide : une valeur parmi ${joinValues(issue2.values, "|")} attendue`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Trop grand : ${issue2.origin ?? "valeur"} doit ${sizing.verb} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "élément(s)"}`;
        return `Trop grand : ${issue2.origin ?? "valeur"} doit être ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Trop petit : ${issue2.origin} doit ${sizing.verb} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Trop petit : ${issue2.origin} doit être ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Chaîne invalide : doit commencer par "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Chaîne invalide : doit se terminer par "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Chaîne invalide : doit inclure "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Chaîne invalide : doit correspondre au modèle ${_issue.pattern}`;
        return `${FormatDictionary[_issue.format] ?? issue2.format} invalide`;
      }
      case "not_multiple_of":
        return `Nombre invalide : doit être un multiple de ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Clé${issue2.keys.length > 1 ? "s" : ""} non reconnue${issue2.keys.length > 1 ? "s" : ""} : ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Clé invalide dans ${issue2.origin}`;
      case "invalid_union":
        return "Entrée invalide";
      case "invalid_element":
        return `Valeur invalide dans ${issue2.origin}`;
      default:
        return `Entrée invalide`;
    }
  };
};
function fr_default() {
  return {
    localeError: error14()
  };
}
// node_modules/zod/v4/locales/fr-CA.js
var error15 = () => {
  const Sizable = {
    string: { unit: "caractères", verb: "avoir" },
    file: { unit: "octets", verb: "avoir" },
    array: { unit: "éléments", verb: "avoir" },
    set: { unit: "éléments", verb: "avoir" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "entrée",
    email: "adresse courriel",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "date-heure ISO",
    date: "date ISO",
    time: "heure ISO",
    duration: "durée ISO",
    ipv4: "adresse IPv4",
    ipv6: "adresse IPv6",
    cidrv4: "plage IPv4",
    cidrv6: "plage IPv6",
    base64: "chaîne encodée en base64",
    base64url: "chaîne encodée en base64url",
    json_string: "chaîne JSON",
    e164: "numéro E.164",
    jwt: "JWT",
    template_literal: "entrée"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Entrée invalide : attendu instanceof ${issue2.expected}, reçu ${received}`;
        }
        return `Entrée invalide : attendu ${expected}, reçu ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Entrée invalide : attendu ${stringifyPrimitive(issue2.values[0])}`;
        return `Option invalide : attendu l'une des valeurs suivantes ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "≤" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Trop grand : attendu que ${issue2.origin ?? "la valeur"} ait ${adj}${issue2.maximum.toString()} ${sizing.unit}`;
        return `Trop grand : attendu que ${issue2.origin ?? "la valeur"} soit ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? "≥" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Trop petit : attendu que ${issue2.origin} ait ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Trop petit : attendu que ${issue2.origin} soit ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Chaîne invalide : doit commencer par "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Chaîne invalide : doit se terminer par "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Chaîne invalide : doit inclure "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Chaîne invalide : doit correspondre au motif ${_issue.pattern}`;
        return `${FormatDictionary[_issue.format] ?? issue2.format} invalide`;
      }
      case "not_multiple_of":
        return `Nombre invalide : doit être un multiple de ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Clé${issue2.keys.length > 1 ? "s" : ""} non reconnue${issue2.keys.length > 1 ? "s" : ""} : ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Clé invalide dans ${issue2.origin}`;
      case "invalid_union":
        return "Entrée invalide";
      case "invalid_element":
        return `Valeur invalide dans ${issue2.origin}`;
      default:
        return `Entrée invalide`;
    }
  };
};
function fr_CA_default() {
  return {
    localeError: error15()
  };
}
// node_modules/zod/v4/locales/he.js
var error16 = () => {
  const TypeNames = {
    string: { label: "מחרוזת", gender: "f" },
    number: { label: "מספר", gender: "m" },
    boolean: { label: "ערך בוליאני", gender: "m" },
    bigint: { label: "BigInt", gender: "m" },
    date: { label: "תאריך", gender: "m" },
    array: { label: "מערך", gender: "m" },
    object: { label: "אובייקט", gender: "m" },
    null: { label: "ערך ריק (null)", gender: "m" },
    undefined: { label: "ערך לא מוגדר (undefined)", gender: "m" },
    symbol: { label: "סימבול (Symbol)", gender: "m" },
    function: { label: "פונקציה", gender: "f" },
    map: { label: "מפה (Map)", gender: "f" },
    set: { label: "קבוצה (Set)", gender: "f" },
    file: { label: "קובץ", gender: "m" },
    promise: { label: "Promise", gender: "m" },
    NaN: { label: "NaN", gender: "m" },
    unknown: { label: "ערך לא ידוע", gender: "m" },
    value: { label: "ערך", gender: "m" }
  };
  const Sizable = {
    string: { unit: "תווים", shortLabel: "קצר", longLabel: "ארוך" },
    file: { unit: "בייטים", shortLabel: "קטן", longLabel: "גדול" },
    array: { unit: "פריטים", shortLabel: "קטן", longLabel: "גדול" },
    set: { unit: "פריטים", shortLabel: "קטן", longLabel: "גדול" },
    number: { unit: "", shortLabel: "קטן", longLabel: "גדול" }
  };
  const typeEntry = (t) => t ? TypeNames[t] : undefined;
  const typeLabel = (t) => {
    const e = typeEntry(t);
    if (e)
      return e.label;
    return t ?? TypeNames.unknown.label;
  };
  const withDefinite = (t) => `ה${typeLabel(t)}`;
  const verbFor = (t) => {
    const e = typeEntry(t);
    const gender = e?.gender ?? "m";
    return gender === "f" ? "צריכה להיות" : "צריך להיות";
  };
  const getSizing = (origin) => {
    if (!origin)
      return null;
    return Sizable[origin] ?? null;
  };
  const FormatDictionary = {
    regex: { label: "קלט", gender: "m" },
    email: { label: "כתובת אימייל", gender: "f" },
    url: { label: "כתובת רשת", gender: "f" },
    emoji: { label: "אימוג'י", gender: "m" },
    uuid: { label: "UUID", gender: "m" },
    nanoid: { label: "nanoid", gender: "m" },
    guid: { label: "GUID", gender: "m" },
    cuid: { label: "cuid", gender: "m" },
    cuid2: { label: "cuid2", gender: "m" },
    ulid: { label: "ULID", gender: "m" },
    xid: { label: "XID", gender: "m" },
    ksuid: { label: "KSUID", gender: "m" },
    datetime: { label: "תאריך וזמן ISO", gender: "m" },
    date: { label: "תאריך ISO", gender: "m" },
    time: { label: "זמן ISO", gender: "m" },
    duration: { label: "משך זמן ISO", gender: "m" },
    ipv4: { label: "כתובת IPv4", gender: "f" },
    ipv6: { label: "כתובת IPv6", gender: "f" },
    cidrv4: { label: "טווח IPv4", gender: "m" },
    cidrv6: { label: "טווח IPv6", gender: "m" },
    base64: { label: "מחרוזת בבסיס 64", gender: "f" },
    base64url: { label: "מחרוזת בבסיס 64 לכתובות רשת", gender: "f" },
    json_string: { label: "מחרוזת JSON", gender: "f" },
    e164: { label: "מספר E.164", gender: "m" },
    jwt: { label: "JWT", gender: "m" },
    ends_with: { label: "קלט", gender: "m" },
    includes: { label: "קלט", gender: "m" },
    lowercase: { label: "קלט", gender: "m" },
    starts_with: { label: "קלט", gender: "m" },
    uppercase: { label: "קלט", gender: "m" }
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expectedKey = issue2.expected;
        const expected = TypeDictionary[expectedKey ?? ""] ?? typeLabel(expectedKey);
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? TypeNames[receivedType]?.label ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `קלט לא תקין: צריך להיות instanceof ${issue2.expected}, התקבל ${received}`;
        }
        return `קלט לא תקין: צריך להיות ${expected}, התקבל ${received}`;
      }
      case "invalid_value": {
        if (issue2.values.length === 1) {
          return `ערך לא תקין: הערך חייב להיות ${stringifyPrimitive(issue2.values[0])}`;
        }
        const stringified = issue2.values.map((v) => stringifyPrimitive(v));
        if (issue2.values.length === 2) {
          return `ערך לא תקין: האפשרויות המתאימות הן ${stringified[0]} או ${stringified[1]}`;
        }
        const lastValue = stringified[stringified.length - 1];
        const restValues = stringified.slice(0, -1).join(", ");
        return `ערך לא תקין: האפשרויות המתאימות הן ${restValues} או ${lastValue}`;
      }
      case "too_big": {
        const sizing = getSizing(issue2.origin);
        const subject = withDefinite(issue2.origin ?? "value");
        if (issue2.origin === "string") {
          return `${sizing?.longLabel ?? "ארוך"} מדי: ${subject} צריכה להכיל ${issue2.maximum.toString()} ${sizing?.unit ?? ""} ${issue2.inclusive ? "או פחות" : "לכל היותר"}`.trim();
        }
        if (issue2.origin === "number") {
          const comparison = issue2.inclusive ? `קטן או שווה ל-${issue2.maximum}` : `קטן מ-${issue2.maximum}`;
          return `גדול מדי: ${subject} צריך להיות ${comparison}`;
        }
        if (issue2.origin === "array" || issue2.origin === "set") {
          const verb = issue2.origin === "set" ? "צריכה" : "צריך";
          const comparison = issue2.inclusive ? `${issue2.maximum} ${sizing?.unit ?? ""} או פחות` : `פחות מ-${issue2.maximum} ${sizing?.unit ?? ""}`;
          return `גדול מדי: ${subject} ${verb} להכיל ${comparison}`.trim();
        }
        const adj = issue2.inclusive ? "<=" : "<";
        const be = verbFor(issue2.origin ?? "value");
        if (sizing?.unit) {
          return `${sizing.longLabel} מדי: ${subject} ${be} ${adj}${issue2.maximum.toString()} ${sizing.unit}`;
        }
        return `${sizing?.longLabel ?? "גדול"} מדי: ${subject} ${be} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const sizing = getSizing(issue2.origin);
        const subject = withDefinite(issue2.origin ?? "value");
        if (issue2.origin === "string") {
          return `${sizing?.shortLabel ?? "קצר"} מדי: ${subject} צריכה להכיל ${issue2.minimum.toString()} ${sizing?.unit ?? ""} ${issue2.inclusive ? "או יותר" : "לפחות"}`.trim();
        }
        if (issue2.origin === "number") {
          const comparison = issue2.inclusive ? `גדול או שווה ל-${issue2.minimum}` : `גדול מ-${issue2.minimum}`;
          return `קטן מדי: ${subject} צריך להיות ${comparison}`;
        }
        if (issue2.origin === "array" || issue2.origin === "set") {
          const verb = issue2.origin === "set" ? "צריכה" : "צריך";
          if (issue2.minimum === 1 && issue2.inclusive) {
            const singularPhrase = issue2.origin === "set" ? "לפחות פריט אחד" : "לפחות פריט אחד";
            return `קטן מדי: ${subject} ${verb} להכיל ${singularPhrase}`;
          }
          const comparison = issue2.inclusive ? `${issue2.minimum} ${sizing?.unit ?? ""} או יותר` : `יותר מ-${issue2.minimum} ${sizing?.unit ?? ""}`;
          return `קטן מדי: ${subject} ${verb} להכיל ${comparison}`.trim();
        }
        const adj = issue2.inclusive ? ">=" : ">";
        const be = verbFor(issue2.origin ?? "value");
        if (sizing?.unit) {
          return `${sizing.shortLabel} מדי: ${subject} ${be} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `${sizing?.shortLabel ?? "קטן"} מדי: ${subject} ${be} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `המחרוזת חייבת להתחיל ב "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `המחרוזת חייבת להסתיים ב "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `המחרוזת חייבת לכלול "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `המחרוזת חייבת להתאים לתבנית ${_issue.pattern}`;
        const nounEntry = FormatDictionary[_issue.format];
        const noun = nounEntry?.label ?? _issue.format;
        const gender = nounEntry?.gender ?? "m";
        const adjective = gender === "f" ? "תקינה" : "תקין";
        return `${noun} לא ${adjective}`;
      }
      case "not_multiple_of":
        return `מספר לא תקין: חייב להיות מכפלה של ${issue2.divisor}`;
      case "unrecognized_keys":
        return `מפתח${issue2.keys.length > 1 ? "ות" : ""} לא מזוה${issue2.keys.length > 1 ? "ים" : "ה"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key": {
        return `שדה לא תקין באובייקט`;
      }
      case "invalid_union":
        return "קלט לא תקין";
      case "invalid_element": {
        const place = withDefinite(issue2.origin ?? "array");
        return `ערך לא תקין ב${place}`;
      }
      default:
        return `קלט לא תקין`;
    }
  };
};
function he_default() {
  return {
    localeError: error16()
  };
}
// node_modules/zod/v4/locales/hu.js
var error17 = () => {
  const Sizable = {
    string: { unit: "karakter", verb: "legyen" },
    file: { unit: "byte", verb: "legyen" },
    array: { unit: "elem", verb: "legyen" },
    set: { unit: "elem", verb: "legyen" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "bemenet",
    email: "email cím",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO időbélyeg",
    date: "ISO dátum",
    time: "ISO idő",
    duration: "ISO időintervallum",
    ipv4: "IPv4 cím",
    ipv6: "IPv6 cím",
    cidrv4: "IPv4 tartomány",
    cidrv6: "IPv6 tartomány",
    base64: "base64-kódolt string",
    base64url: "base64url-kódolt string",
    json_string: "JSON string",
    e164: "E.164 szám",
    jwt: "JWT",
    template_literal: "bemenet"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "szám",
    array: "tömb"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Érvénytelen bemenet: a várt érték instanceof ${issue2.expected}, a kapott érték ${received}`;
        }
        return `Érvénytelen bemenet: a várt érték ${expected}, a kapott érték ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Érvénytelen bemenet: a várt érték ${stringifyPrimitive(issue2.values[0])}`;
        return `Érvénytelen opció: valamelyik érték várt ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Túl nagy: ${issue2.origin ?? "érték"} mérete túl nagy ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elem"}`;
        return `Túl nagy: a bemeneti érték ${issue2.origin ?? "érték"} túl nagy: ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Túl kicsi: a bemeneti érték ${issue2.origin} mérete túl kicsi ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Túl kicsi: a bemeneti érték ${issue2.origin} túl kicsi ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Érvénytelen string: "${_issue.prefix}" értékkel kell kezdődnie`;
        if (_issue.format === "ends_with")
          return `Érvénytelen string: "${_issue.suffix}" értékkel kell végződnie`;
        if (_issue.format === "includes")
          return `Érvénytelen string: "${_issue.includes}" értéket kell tartalmaznia`;
        if (_issue.format === "regex")
          return `Érvénytelen string: ${_issue.pattern} mintának kell megfelelnie`;
        return `Érvénytelen ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Érvénytelen szám: ${issue2.divisor} többszörösének kell lennie`;
      case "unrecognized_keys":
        return `Ismeretlen kulcs${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Érvénytelen kulcs ${issue2.origin}`;
      case "invalid_union":
        return "Érvénytelen bemenet";
      case "invalid_element":
        return `Érvénytelen érték: ${issue2.origin}`;
      default:
        return `Érvénytelen bemenet`;
    }
  };
};
function hu_default() {
  return {
    localeError: error17()
  };
}
// node_modules/zod/v4/locales/hy.js
function getArmenianPlural(count, one, many) {
  return Math.abs(count) === 1 ? one : many;
}
function withDefiniteArticle(word) {
  if (!word)
    return "";
  const vowels = ["ա", "ե", "ը", "ի", "ո", "ու", "օ"];
  const lastChar = word[word.length - 1];
  return word + (vowels.includes(lastChar) ? "ն" : "ը");
}
var error18 = () => {
  const Sizable = {
    string: {
      unit: {
        one: "նշան",
        many: "նշաններ"
      },
      verb: "ունենալ"
    },
    file: {
      unit: {
        one: "բայթ",
        many: "բայթեր"
      },
      verb: "ունենալ"
    },
    array: {
      unit: {
        one: "տարր",
        many: "տարրեր"
      },
      verb: "ունենալ"
    },
    set: {
      unit: {
        one: "տարր",
        many: "տարրեր"
      },
      verb: "ունենալ"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "մուտք",
    email: "էլ. հասցե",
    url: "URL",
    emoji: "էմոջի",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO ամսաթիվ և ժամ",
    date: "ISO ամսաթիվ",
    time: "ISO ժամ",
    duration: "ISO տևողություն",
    ipv4: "IPv4 հասցե",
    ipv6: "IPv6 հասցե",
    cidrv4: "IPv4 միջակայք",
    cidrv6: "IPv6 միջակայք",
    base64: "base64 ձևաչափով տող",
    base64url: "base64url ձևաչափով տող",
    json_string: "JSON տող",
    e164: "E.164 համար",
    jwt: "JWT",
    template_literal: "մուտք"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "թիվ",
    array: "զանգված"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Սխալ մուտքագրում․ սպասվում էր instanceof ${issue2.expected}, ստացվել է ${received}`;
        }
        return `Սխալ մուտքագրում․ սպասվում էր ${expected}, ստացվել է ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Սխալ մուտքագրում․ սպասվում էր ${stringifyPrimitive(issue2.values[1])}`;
        return `Սխալ տարբերակ․ սպասվում էր հետևյալներից մեկը՝ ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          const maxValue = Number(issue2.maximum);
          const unit = getArmenianPlural(maxValue, sizing.unit.one, sizing.unit.many);
          return `Չափազանց մեծ արժեք․ սպասվում է, որ ${withDefiniteArticle(issue2.origin ?? "արժեք")} կունենա ${adj}${issue2.maximum.toString()} ${unit}`;
        }
        return `Չափազանց մեծ արժեք․ սպասվում է, որ ${withDefiniteArticle(issue2.origin ?? "արժեք")} լինի ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          const minValue = Number(issue2.minimum);
          const unit = getArmenianPlural(minValue, sizing.unit.one, sizing.unit.many);
          return `Չափազանց փոքր արժեք․ սպասվում է, որ ${withDefiniteArticle(issue2.origin)} կունենա ${adj}${issue2.minimum.toString()} ${unit}`;
        }
        return `Չափազանց փոքր արժեք․ սպասվում է, որ ${withDefiniteArticle(issue2.origin)} լինի ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Սխալ տող․ պետք է սկսվի "${_issue.prefix}"-ով`;
        if (_issue.format === "ends_with")
          return `Սխալ տող․ պետք է ավարտվի "${_issue.suffix}"-ով`;
        if (_issue.format === "includes")
          return `Սխալ տող․ պետք է պարունակի "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Սխալ տող․ պետք է համապատասխանի ${_issue.pattern} ձևաչափին`;
        return `Սխալ ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Սխալ թիվ․ պետք է բազմապատիկ լինի ${issue2.divisor}-ի`;
      case "unrecognized_keys":
        return `Չճանաչված բանալի${issue2.keys.length > 1 ? "ներ" : ""}. ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Սխալ բանալի ${withDefiniteArticle(issue2.origin)}-ում`;
      case "invalid_union":
        return "Սխալ մուտքագրում";
      case "invalid_element":
        return `Սխալ արժեք ${withDefiniteArticle(issue2.origin)}-ում`;
      default:
        return `Սխալ մուտքագրում`;
    }
  };
};
function hy_default() {
  return {
    localeError: error18()
  };
}
// node_modules/zod/v4/locales/id.js
var error19 = () => {
  const Sizable = {
    string: { unit: "karakter", verb: "memiliki" },
    file: { unit: "byte", verb: "memiliki" },
    array: { unit: "item", verb: "memiliki" },
    set: { unit: "item", verb: "memiliki" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "alamat email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "tanggal dan waktu format ISO",
    date: "tanggal format ISO",
    time: "jam format ISO",
    duration: "durasi format ISO",
    ipv4: "alamat IPv4",
    ipv6: "alamat IPv6",
    cidrv4: "rentang alamat IPv4",
    cidrv6: "rentang alamat IPv6",
    base64: "string dengan enkode base64",
    base64url: "string dengan enkode base64url",
    json_string: "string JSON",
    e164: "angka E.164",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Input tidak valid: diharapkan instanceof ${issue2.expected}, diterima ${received}`;
        }
        return `Input tidak valid: diharapkan ${expected}, diterima ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Input tidak valid: diharapkan ${stringifyPrimitive(issue2.values[0])}`;
        return `Pilihan tidak valid: diharapkan salah satu dari ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Terlalu besar: diharapkan ${issue2.origin ?? "value"} memiliki ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elemen"}`;
        return `Terlalu besar: diharapkan ${issue2.origin ?? "value"} menjadi ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Terlalu kecil: diharapkan ${issue2.origin} memiliki ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Terlalu kecil: diharapkan ${issue2.origin} menjadi ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `String tidak valid: harus dimulai dengan "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `String tidak valid: harus berakhir dengan "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `String tidak valid: harus menyertakan "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `String tidak valid: harus sesuai pola ${_issue.pattern}`;
        return `${FormatDictionary[_issue.format] ?? issue2.format} tidak valid`;
      }
      case "not_multiple_of":
        return `Angka tidak valid: harus kelipatan dari ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali ${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Kunci tidak valid di ${issue2.origin}`;
      case "invalid_union":
        return "Input tidak valid";
      case "invalid_element":
        return `Nilai tidak valid di ${issue2.origin}`;
      default:
        return `Input tidak valid`;
    }
  };
};
function id_default() {
  return {
    localeError: error19()
  };
}
// node_modules/zod/v4/locales/is.js
var error20 = () => {
  const Sizable = {
    string: { unit: "stafi", verb: "að hafa" },
    file: { unit: "bæti", verb: "að hafa" },
    array: { unit: "hluti", verb: "að hafa" },
    set: { unit: "hluti", verb: "að hafa" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "gildi",
    email: "netfang",
    url: "vefslóð",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO dagsetning og tími",
    date: "ISO dagsetning",
    time: "ISO tími",
    duration: "ISO tímalengd",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded strengur",
    base64url: "base64url-encoded strengur",
    json_string: "JSON strengur",
    e164: "E.164 tölugildi",
    jwt: "JWT",
    template_literal: "gildi"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "númer",
    array: "fylki"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Rangt gildi: Þú slóst inn ${received} þar sem á að vera instanceof ${issue2.expected}`;
        }
        return `Rangt gildi: Þú slóst inn ${received} þar sem á að vera ${expected}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Rangt gildi: gert ráð fyrir ${stringifyPrimitive(issue2.values[0])}`;
        return `Ógilt val: má vera eitt af eftirfarandi ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Of stórt: gert er ráð fyrir að ${issue2.origin ?? "gildi"} hafi ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "hluti"}`;
        return `Of stórt: gert er ráð fyrir að ${issue2.origin ?? "gildi"} sé ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Of lítið: gert er ráð fyrir að ${issue2.origin} hafi ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Of lítið: gert er ráð fyrir að ${issue2.origin} sé ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Ógildur strengur: verður að byrja á "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Ógildur strengur: verður að enda á "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Ógildur strengur: verður að innihalda "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Ógildur strengur: verður að fylgja mynstri ${_issue.pattern}`;
        return `Rangt ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Röng tala: verður að vera margfeldi af ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Óþekkt ${issue2.keys.length > 1 ? "ir lyklar" : "ur lykill"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Rangur lykill í ${issue2.origin}`;
      case "invalid_union":
        return "Rangt gildi";
      case "invalid_element":
        return `Rangt gildi í ${issue2.origin}`;
      default:
        return `Rangt gildi`;
    }
  };
};
function is_default() {
  return {
    localeError: error20()
  };
}
// node_modules/zod/v4/locales/it.js
var error21 = () => {
  const Sizable = {
    string: { unit: "caratteri", verb: "avere" },
    file: { unit: "byte", verb: "avere" },
    array: { unit: "elementi", verb: "avere" },
    set: { unit: "elementi", verb: "avere" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "indirizzo email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data e ora ISO",
    date: "data ISO",
    time: "ora ISO",
    duration: "durata ISO",
    ipv4: "indirizzo IPv4",
    ipv6: "indirizzo IPv6",
    cidrv4: "intervallo IPv4",
    cidrv6: "intervallo IPv6",
    base64: "stringa codificata in base64",
    base64url: "URL codificata in base64",
    json_string: "stringa JSON",
    e164: "numero E.164",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "numero",
    array: "vettore"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Input non valido: atteso instanceof ${issue2.expected}, ricevuto ${received}`;
        }
        return `Input non valido: atteso ${expected}, ricevuto ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Input non valido: atteso ${stringifyPrimitive(issue2.values[0])}`;
        return `Opzione non valida: atteso uno tra ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Troppo grande: ${issue2.origin ?? "valore"} deve avere ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementi"}`;
        return `Troppo grande: ${issue2.origin ?? "valore"} deve essere ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Troppo piccolo: ${issue2.origin} deve avere ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Troppo piccolo: ${issue2.origin} deve essere ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Stringa non valida: deve iniziare con "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Stringa non valida: deve terminare con "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Stringa non valida: deve includere "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Stringa non valida: deve corrispondere al pattern ${_issue.pattern}`;
        return `Invalid ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Numero non valido: deve essere un multiplo di ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Chiav${issue2.keys.length > 1 ? "i" : "e"} non riconosciut${issue2.keys.length > 1 ? "e" : "a"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Chiave non valida in ${issue2.origin}`;
      case "invalid_union":
        return "Input non valido";
      case "invalid_element":
        return `Valore non valido in ${issue2.origin}`;
      default:
        return `Input non valido`;
    }
  };
};
function it_default() {
  return {
    localeError: error21()
  };
}
// node_modules/zod/v4/locales/ja.js
var error22 = () => {
  const Sizable = {
    string: { unit: "文字", verb: "である" },
    file: { unit: "バイト", verb: "である" },
    array: { unit: "要素", verb: "である" },
    set: { unit: "要素", verb: "である" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "入力値",
    email: "メールアドレス",
    url: "URL",
    emoji: "絵文字",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO日時",
    date: "ISO日付",
    time: "ISO時刻",
    duration: "ISO期間",
    ipv4: "IPv4アドレス",
    ipv6: "IPv6アドレス",
    cidrv4: "IPv4範囲",
    cidrv6: "IPv6範囲",
    base64: "base64エンコード文字列",
    base64url: "base64urlエンコード文字列",
    json_string: "JSON文字列",
    e164: "E.164番号",
    jwt: "JWT",
    template_literal: "入力値"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "数値",
    array: "配列"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `無効な入力: instanceof ${issue2.expected}が期待されましたが、${received}が入力されました`;
        }
        return `無効な入力: ${expected}が期待されましたが、${received}が入力されました`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `無効な入力: ${stringifyPrimitive(issue2.values[0])}が期待されました`;
        return `無効な選択: ${joinValues(issue2.values, "、")}のいずれかである必要があります`;
      case "too_big": {
        const adj = issue2.inclusive ? "以下である" : "より小さい";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `大きすぎる値: ${issue2.origin ?? "値"}は${issue2.maximum.toString()}${sizing.unit ?? "要素"}${adj}必要があります`;
        return `大きすぎる値: ${issue2.origin ?? "値"}は${issue2.maximum.toString()}${adj}必要があります`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? "以上である" : "より大きい";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `小さすぎる値: ${issue2.origin}は${issue2.minimum.toString()}${sizing.unit}${adj}必要があります`;
        return `小さすぎる値: ${issue2.origin}は${issue2.minimum.toString()}${adj}必要があります`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `無効な文字列: "${_issue.prefix}"で始まる必要があります`;
        if (_issue.format === "ends_with")
          return `無効な文字列: "${_issue.suffix}"で終わる必要があります`;
        if (_issue.format === "includes")
          return `無効な文字列: "${_issue.includes}"を含む必要があります`;
        if (_issue.format === "regex")
          return `無効な文字列: パターン${_issue.pattern}に一致する必要があります`;
        return `無効な${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `無効な数値: ${issue2.divisor}の倍数である必要があります`;
      case "unrecognized_keys":
        return `認識されていないキー${issue2.keys.length > 1 ? "群" : ""}: ${joinValues(issue2.keys, "、")}`;
      case "invalid_key":
        return `${issue2.origin}内の無効なキー`;
      case "invalid_union":
        return "無効な入力";
      case "invalid_element":
        return `${issue2.origin}内の無効な値`;
      default:
        return `無効な入力`;
    }
  };
};
function ja_default() {
  return {
    localeError: error22()
  };
}
// node_modules/zod/v4/locales/ka.js
var error23 = () => {
  const Sizable = {
    string: { unit: "სიმბოლო", verb: "უნდა შეიცავდეს" },
    file: { unit: "ბაიტი", verb: "უნდა შეიცავდეს" },
    array: { unit: "ელემენტი", verb: "უნდა შეიცავდეს" },
    set: { unit: "ელემენტი", verb: "უნდა შეიცავდეს" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "შეყვანა",
    email: "ელ-ფოსტის მისამართი",
    url: "URL",
    emoji: "ემოჯი",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "თარიღი-დრო",
    date: "თარიღი",
    time: "დრო",
    duration: "ხანგრძლივობა",
    ipv4: "IPv4 მისამართი",
    ipv6: "IPv6 მისამართი",
    cidrv4: "IPv4 დიაპაზონი",
    cidrv6: "IPv6 დიაპაზონი",
    base64: "base64-კოდირებული სტრინგი",
    base64url: "base64url-კოდირებული სტრინგი",
    json_string: "JSON სტრინგი",
    e164: "E.164 ნომერი",
    jwt: "JWT",
    template_literal: "შეყვანა"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "რიცხვი",
    string: "სტრინგი",
    boolean: "ბულეანი",
    function: "ფუნქცია",
    array: "მასივი"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `არასწორი შეყვანა: მოსალოდნელი instanceof ${issue2.expected}, მიღებული ${received}`;
        }
        return `არასწორი შეყვანა: მოსალოდნელი ${expected}, მიღებული ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `არასწორი შეყვანა: მოსალოდნელი ${stringifyPrimitive(issue2.values[0])}`;
        return `არასწორი ვარიანტი: მოსალოდნელია ერთ-ერთი ${joinValues(issue2.values, "|")}-დან`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `ზედმეტად დიდი: მოსალოდნელი ${issue2.origin ?? "მნიშვნელობა"} ${sizing.verb} ${adj}${issue2.maximum.toString()} ${sizing.unit}`;
        return `ზედმეტად დიდი: მოსალოდნელი ${issue2.origin ?? "მნიშვნელობა"} იყოს ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `ზედმეტად პატარა: მოსალოდნელი ${issue2.origin} ${sizing.verb} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `ზედმეტად პატარა: მოსალოდნელი ${issue2.origin} იყოს ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `არასწორი სტრინგი: უნდა იწყებოდეს "${_issue.prefix}"-ით`;
        }
        if (_issue.format === "ends_with")
          return `არასწორი სტრინგი: უნდა მთავრდებოდეს "${_issue.suffix}"-ით`;
        if (_issue.format === "includes")
          return `არასწორი სტრინგი: უნდა შეიცავდეს "${_issue.includes}"-ს`;
        if (_issue.format === "regex")
          return `არასწორი სტრინგი: უნდა შეესაბამებოდეს შაბლონს ${_issue.pattern}`;
        return `არასწორი ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `არასწორი რიცხვი: უნდა იყოს ${issue2.divisor}-ის ჯერადი`;
      case "unrecognized_keys":
        return `უცნობი გასაღებ${issue2.keys.length > 1 ? "ები" : "ი"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `არასწორი გასაღები ${issue2.origin}-ში`;
      case "invalid_union":
        return "არასწორი შეყვანა";
      case "invalid_element":
        return `არასწორი მნიშვნელობა ${issue2.origin}-ში`;
      default:
        return `არასწორი შეყვანა`;
    }
  };
};
function ka_default() {
  return {
    localeError: error23()
  };
}
// node_modules/zod/v4/locales/km.js
var error24 = () => {
  const Sizable = {
    string: { unit: "តួអក្សរ", verb: "គួរមាន" },
    file: { unit: "បៃ", verb: "គួរមាន" },
    array: { unit: "ធាតុ", verb: "គួរមាន" },
    set: { unit: "ធាតុ", verb: "គួរមាន" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "ទិន្នន័យបញ្ចូល",
    email: "អាសយដ្ឋានអ៊ីមែល",
    url: "URL",
    emoji: "សញ្ញាអារម្មណ៍",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "កាលបរិច្ឆេទ និងម៉ោង ISO",
    date: "កាលបរិច្ឆេទ ISO",
    time: "ម៉ោង ISO",
    duration: "រយៈពេល ISO",
    ipv4: "អាសយដ្ឋាន IPv4",
    ipv6: "អាសយដ្ឋាន IPv6",
    cidrv4: "ដែនអាសយដ្ឋាន IPv4",
    cidrv6: "ដែនអាសយដ្ឋាន IPv6",
    base64: "ខ្សែអក្សរអ៊ិកូដ base64",
    base64url: "ខ្សែអក្សរអ៊ិកូដ base64url",
    json_string: "ខ្សែអក្សរ JSON",
    e164: "លេខ E.164",
    jwt: "JWT",
    template_literal: "ទិន្នន័យបញ្ចូល"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "លេខ",
    array: "អារេ (Array)",
    null: "គ្មានតម្លៃ (null)"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ instanceof ${issue2.expected} ប៉ុន្តែទទួលបាន ${received}`;
        }
        return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${expected} ប៉ុន្តែទទួលបាន ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${stringifyPrimitive(issue2.values[0])}`;
        return `ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `ធំពេក៖ ត្រូវការ ${issue2.origin ?? "តម្លៃ"} ${adj} ${issue2.maximum.toString()} ${sizing.unit ?? "ធាតុ"}`;
        return `ធំពេក៖ ត្រូវការ ${issue2.origin ?? "តម្លៃ"} ${adj} ${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `តូចពេក៖ ត្រូវការ ${issue2.origin} ${adj} ${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `តូចពេក៖ ត្រូវការ ${issue2.origin} ${adj} ${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវចាប់ផ្តើមដោយ "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវបញ្ចប់ដោយ "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវមាន "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវតែផ្គូផ្គងនឹងទម្រង់ដែលបានកំណត់ ${_issue.pattern}`;
        return `មិនត្រឹមត្រូវ៖ ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `លេខមិនត្រឹមត្រូវ៖ ត្រូវតែជាពហុគុណនៃ ${issue2.divisor}`;
      case "unrecognized_keys":
        return `រកឃើញសោមិនស្គាល់៖ ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `សោមិនត្រឹមត្រូវនៅក្នុង ${issue2.origin}`;
      case "invalid_union":
        return `ទិន្នន័យមិនត្រឹមត្រូវ`;
      case "invalid_element":
        return `ទិន្នន័យមិនត្រឹមត្រូវនៅក្នុង ${issue2.origin}`;
      default:
        return `ទិន្នន័យមិនត្រឹមត្រូវ`;
    }
  };
};
function km_default() {
  return {
    localeError: error24()
  };
}

// node_modules/zod/v4/locales/kh.js
function kh_default() {
  return km_default();
}
// node_modules/zod/v4/locales/ko.js
var error25 = () => {
  const Sizable = {
    string: { unit: "문자", verb: "to have" },
    file: { unit: "바이트", verb: "to have" },
    array: { unit: "개", verb: "to have" },
    set: { unit: "개", verb: "to have" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "입력",
    email: "이메일 주소",
    url: "URL",
    emoji: "이모지",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO 날짜시간",
    date: "ISO 날짜",
    time: "ISO 시간",
    duration: "ISO 기간",
    ipv4: "IPv4 주소",
    ipv6: "IPv6 주소",
    cidrv4: "IPv4 범위",
    cidrv6: "IPv6 범위",
    base64: "base64 인코딩 문자열",
    base64url: "base64url 인코딩 문자열",
    json_string: "JSON 문자열",
    e164: "E.164 번호",
    jwt: "JWT",
    template_literal: "입력"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `잘못된 입력: 예상 타입은 instanceof ${issue2.expected}, 받은 타입은 ${received}입니다`;
        }
        return `잘못된 입력: 예상 타입은 ${expected}, 받은 타입은 ${received}입니다`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `잘못된 입력: 값은 ${stringifyPrimitive(issue2.values[0])} 이어야 합니다`;
        return `잘못된 옵션: ${joinValues(issue2.values, "또는 ")} 중 하나여야 합니다`;
      case "too_big": {
        const adj = issue2.inclusive ? "이하" : "미만";
        const suffix = adj === "미만" ? "이어야 합니다" : "여야 합니다";
        const sizing = getSizing(issue2.origin);
        const unit = sizing?.unit ?? "요소";
        if (sizing)
          return `${issue2.origin ?? "값"}이 너무 큽니다: ${issue2.maximum.toString()}${unit} ${adj}${suffix}`;
        return `${issue2.origin ?? "값"}이 너무 큽니다: ${issue2.maximum.toString()} ${adj}${suffix}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? "이상" : "초과";
        const suffix = adj === "이상" ? "이어야 합니다" : "여야 합니다";
        const sizing = getSizing(issue2.origin);
        const unit = sizing?.unit ?? "요소";
        if (sizing) {
          return `${issue2.origin ?? "값"}이 너무 작습니다: ${issue2.minimum.toString()}${unit} ${adj}${suffix}`;
        }
        return `${issue2.origin ?? "값"}이 너무 작습니다: ${issue2.minimum.toString()} ${adj}${suffix}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `잘못된 문자열: "${_issue.prefix}"(으)로 시작해야 합니다`;
        }
        if (_issue.format === "ends_with")
          return `잘못된 문자열: "${_issue.suffix}"(으)로 끝나야 합니다`;
        if (_issue.format === "includes")
          return `잘못된 문자열: "${_issue.includes}"을(를) 포함해야 합니다`;
        if (_issue.format === "regex")
          return `잘못된 문자열: 정규식 ${_issue.pattern} 패턴과 일치해야 합니다`;
        return `잘못된 ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `잘못된 숫자: ${issue2.divisor}의 배수여야 합니다`;
      case "unrecognized_keys":
        return `인식할 수 없는 키: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `잘못된 키: ${issue2.origin}`;
      case "invalid_union":
        return `잘못된 입력`;
      case "invalid_element":
        return `잘못된 값: ${issue2.origin}`;
      default:
        return `잘못된 입력`;
    }
  };
};
function ko_default() {
  return {
    localeError: error25()
  };
}
// node_modules/zod/v4/locales/lt.js
var capitalizeFirstCharacter = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
function getUnitTypeFromNumber(number2) {
  const abs = Math.abs(number2);
  const last = abs % 10;
  const last2 = abs % 100;
  if (last2 >= 11 && last2 <= 19 || last === 0)
    return "many";
  if (last === 1)
    return "one";
  return "few";
}
var error26 = () => {
  const Sizable = {
    string: {
      unit: {
        one: "simbolis",
        few: "simboliai",
        many: "simbolių"
      },
      verb: {
        smaller: {
          inclusive: "turi būti ne ilgesnė kaip",
          notInclusive: "turi būti trumpesnė kaip"
        },
        bigger: {
          inclusive: "turi būti ne trumpesnė kaip",
          notInclusive: "turi būti ilgesnė kaip"
        }
      }
    },
    file: {
      unit: {
        one: "baitas",
        few: "baitai",
        many: "baitų"
      },
      verb: {
        smaller: {
          inclusive: "turi būti ne didesnis kaip",
          notInclusive: "turi būti mažesnis kaip"
        },
        bigger: {
          inclusive: "turi būti ne mažesnis kaip",
          notInclusive: "turi būti didesnis kaip"
        }
      }
    },
    array: {
      unit: {
        one: "elementą",
        few: "elementus",
        many: "elementų"
      },
      verb: {
        smaller: {
          inclusive: "turi turėti ne daugiau kaip",
          notInclusive: "turi turėti mažiau kaip"
        },
        bigger: {
          inclusive: "turi turėti ne mažiau kaip",
          notInclusive: "turi turėti daugiau kaip"
        }
      }
    },
    set: {
      unit: {
        one: "elementą",
        few: "elementus",
        many: "elementų"
      },
      verb: {
        smaller: {
          inclusive: "turi turėti ne daugiau kaip",
          notInclusive: "turi turėti mažiau kaip"
        },
        bigger: {
          inclusive: "turi turėti ne mažiau kaip",
          notInclusive: "turi turėti daugiau kaip"
        }
      }
    }
  };
  function getSizing(origin, unitType, inclusive, targetShouldBe) {
    const result = Sizable[origin] ?? null;
    if (result === null)
      return result;
    return {
      unit: result.unit[unitType],
      verb: result.verb[targetShouldBe][inclusive ? "inclusive" : "notInclusive"]
    };
  }
  const FormatDictionary = {
    regex: "įvestis",
    email: "el. pašto adresas",
    url: "URL",
    emoji: "jaustukas",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO data ir laikas",
    date: "ISO data",
    time: "ISO laikas",
    duration: "ISO trukmė",
    ipv4: "IPv4 adresas",
    ipv6: "IPv6 adresas",
    cidrv4: "IPv4 tinklo prefiksas (CIDR)",
    cidrv6: "IPv6 tinklo prefiksas (CIDR)",
    base64: "base64 užkoduota eilutė",
    base64url: "base64url užkoduota eilutė",
    json_string: "JSON eilutė",
    e164: "E.164 numeris",
    jwt: "JWT",
    template_literal: "įvestis"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "skaičius",
    bigint: "sveikasis skaičius",
    string: "eilutė",
    boolean: "loginė reikšmė",
    undefined: "neapibrėžta reikšmė",
    function: "funkcija",
    symbol: "simbolis",
    array: "masyvas",
    object: "objektas",
    null: "nulinė reikšmė"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Gautas tipas ${received}, o tikėtasi - instanceof ${issue2.expected}`;
        }
        return `Gautas tipas ${received}, o tikėtasi - ${expected}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Privalo būti ${stringifyPrimitive(issue2.values[0])}`;
        return `Privalo būti vienas iš ${joinValues(issue2.values, "|")} pasirinkimų`;
      case "too_big": {
        const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        const sizing = getSizing(issue2.origin, getUnitTypeFromNumber(Number(issue2.maximum)), issue2.inclusive ?? false, "smaller");
        if (sizing?.verb)
          return `${capitalizeFirstCharacter(origin ?? issue2.origin ?? "reikšmė")} ${sizing.verb} ${issue2.maximum.toString()} ${sizing.unit ?? "elementų"}`;
        const adj = issue2.inclusive ? "ne didesnis kaip" : "mažesnis kaip";
        return `${capitalizeFirstCharacter(origin ?? issue2.origin ?? "reikšmė")} turi būti ${adj} ${issue2.maximum.toString()} ${sizing?.unit}`;
      }
      case "too_small": {
        const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        const sizing = getSizing(issue2.origin, getUnitTypeFromNumber(Number(issue2.minimum)), issue2.inclusive ?? false, "bigger");
        if (sizing?.verb)
          return `${capitalizeFirstCharacter(origin ?? issue2.origin ?? "reikšmė")} ${sizing.verb} ${issue2.minimum.toString()} ${sizing.unit ?? "elementų"}`;
        const adj = issue2.inclusive ? "ne mažesnis kaip" : "didesnis kaip";
        return `${capitalizeFirstCharacter(origin ?? issue2.origin ?? "reikšmė")} turi būti ${adj} ${issue2.minimum.toString()} ${sizing?.unit}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Eilutė privalo prasidėti "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Eilutė privalo pasibaigti "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Eilutė privalo įtraukti "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Eilutė privalo atitikti ${_issue.pattern}`;
        return `Neteisingas ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Skaičius privalo būti ${issue2.divisor} kartotinis.`;
      case "unrecognized_keys":
        return `Neatpažint${issue2.keys.length > 1 ? "i" : "as"} rakt${issue2.keys.length > 1 ? "ai" : "as"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return "Rastas klaidingas raktas";
      case "invalid_union":
        return "Klaidinga įvestis";
      case "invalid_element": {
        const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        return `${capitalizeFirstCharacter(origin ?? issue2.origin ?? "reikšmė")} turi klaidingą įvestį`;
      }
      default:
        return "Klaidinga įvestis";
    }
  };
};
function lt_default() {
  return {
    localeError: error26()
  };
}
// node_modules/zod/v4/locales/mk.js
var error27 = () => {
  const Sizable = {
    string: { unit: "знаци", verb: "да имаат" },
    file: { unit: "бајти", verb: "да имаат" },
    array: { unit: "ставки", verb: "да имаат" },
    set: { unit: "ставки", verb: "да имаат" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "внес",
    email: "адреса на е-пошта",
    url: "URL",
    emoji: "емоџи",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO датум и време",
    date: "ISO датум",
    time: "ISO време",
    duration: "ISO времетраење",
    ipv4: "IPv4 адреса",
    ipv6: "IPv6 адреса",
    cidrv4: "IPv4 опсег",
    cidrv6: "IPv6 опсег",
    base64: "base64-енкодирана низа",
    base64url: "base64url-енкодирана низа",
    json_string: "JSON низа",
    e164: "E.164 број",
    jwt: "JWT",
    template_literal: "внес"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "број",
    array: "низа"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Грешен внес: се очекува instanceof ${issue2.expected}, примено ${received}`;
        }
        return `Грешен внес: се очекува ${expected}, примено ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Invalid input: expected ${stringifyPrimitive(issue2.values[0])}`;
        return `Грешана опција: се очекува една ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Премногу голем: се очекува ${issue2.origin ?? "вредноста"} да има ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "елементи"}`;
        return `Премногу голем: се очекува ${issue2.origin ?? "вредноста"} да биде ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Премногу мал: се очекува ${issue2.origin} да има ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Премногу мал: се очекува ${issue2.origin} да биде ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Неважечка низа: мора да започнува со "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Неважечка низа: мора да завршува со "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Неважечка низа: мора да вклучува "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Неважечка низа: мора да одгоара на патернот ${_issue.pattern}`;
        return `Invalid ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Грешен број: мора да биде делив со ${issue2.divisor}`;
      case "unrecognized_keys":
        return `${issue2.keys.length > 1 ? "Непрепознаени клучеви" : "Непрепознаен клуч"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Грешен клуч во ${issue2.origin}`;
      case "invalid_union":
        return "Грешен внес";
      case "invalid_element":
        return `Грешна вредност во ${issue2.origin}`;
      default:
        return `Грешен внес`;
    }
  };
};
function mk_default() {
  return {
    localeError: error27()
  };
}
// node_modules/zod/v4/locales/ms.js
var error28 = () => {
  const Sizable = {
    string: { unit: "aksara", verb: "mempunyai" },
    file: { unit: "bait", verb: "mempunyai" },
    array: { unit: "elemen", verb: "mempunyai" },
    set: { unit: "elemen", verb: "mempunyai" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "alamat e-mel",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "tarikh masa ISO",
    date: "tarikh ISO",
    time: "masa ISO",
    duration: "tempoh ISO",
    ipv4: "alamat IPv4",
    ipv6: "alamat IPv6",
    cidrv4: "julat IPv4",
    cidrv6: "julat IPv6",
    base64: "string dikodkan base64",
    base64url: "string dikodkan base64url",
    json_string: "string JSON",
    e164: "nombor E.164",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "nombor"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Input tidak sah: dijangka instanceof ${issue2.expected}, diterima ${received}`;
        }
        return `Input tidak sah: dijangka ${expected}, diterima ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Input tidak sah: dijangka ${stringifyPrimitive(issue2.values[0])}`;
        return `Pilihan tidak sah: dijangka salah satu daripada ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Terlalu besar: dijangka ${issue2.origin ?? "nilai"} ${sizing.verb} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elemen"}`;
        return `Terlalu besar: dijangka ${issue2.origin ?? "nilai"} adalah ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Terlalu kecil: dijangka ${issue2.origin} ${sizing.verb} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Terlalu kecil: dijangka ${issue2.origin} adalah ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `String tidak sah: mesti bermula dengan "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `String tidak sah: mesti berakhir dengan "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `String tidak sah: mesti mengandungi "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `String tidak sah: mesti sepadan dengan corak ${_issue.pattern}`;
        return `${FormatDictionary[_issue.format] ?? issue2.format} tidak sah`;
      }
      case "not_multiple_of":
        return `Nombor tidak sah: perlu gandaan ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Kunci tidak sah dalam ${issue2.origin}`;
      case "invalid_union":
        return "Input tidak sah";
      case "invalid_element":
        return `Nilai tidak sah dalam ${issue2.origin}`;
      default:
        return `Input tidak sah`;
    }
  };
};
function ms_default() {
  return {
    localeError: error28()
  };
}
// node_modules/zod/v4/locales/nl.js
var error29 = () => {
  const Sizable = {
    string: { unit: "tekens", verb: "heeft" },
    file: { unit: "bytes", verb: "heeft" },
    array: { unit: "elementen", verb: "heeft" },
    set: { unit: "elementen", verb: "heeft" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "invoer",
    email: "emailadres",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datum en tijd",
    date: "ISO datum",
    time: "ISO tijd",
    duration: "ISO duur",
    ipv4: "IPv4-adres",
    ipv6: "IPv6-adres",
    cidrv4: "IPv4-bereik",
    cidrv6: "IPv6-bereik",
    base64: "base64-gecodeerde tekst",
    base64url: "base64 URL-gecodeerde tekst",
    json_string: "JSON string",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "invoer"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "getal"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Ongeldige invoer: verwacht instanceof ${issue2.expected}, ontving ${received}`;
        }
        return `Ongeldige invoer: verwacht ${expected}, ontving ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Ongeldige invoer: verwacht ${stringifyPrimitive(issue2.values[0])}`;
        return `Ongeldige optie: verwacht één van ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        const longName = issue2.origin === "date" ? "laat" : issue2.origin === "string" ? "lang" : "groot";
        if (sizing)
          return `Te ${longName}: verwacht dat ${issue2.origin ?? "waarde"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementen"} ${sizing.verb}`;
        return `Te ${longName}: verwacht dat ${issue2.origin ?? "waarde"} ${adj}${issue2.maximum.toString()} is`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        const shortName = issue2.origin === "date" ? "vroeg" : issue2.origin === "string" ? "kort" : "klein";
        if (sizing) {
          return `Te ${shortName}: verwacht dat ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit} ${sizing.verb}`;
        }
        return `Te ${shortName}: verwacht dat ${issue2.origin} ${adj}${issue2.minimum.toString()} is`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Ongeldige tekst: moet met "${_issue.prefix}" beginnen`;
        }
        if (_issue.format === "ends_with")
          return `Ongeldige tekst: moet op "${_issue.suffix}" eindigen`;
        if (_issue.format === "includes")
          return `Ongeldige tekst: moet "${_issue.includes}" bevatten`;
        if (_issue.format === "regex")
          return `Ongeldige tekst: moet overeenkomen met patroon ${_issue.pattern}`;
        return `Ongeldig: ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Ongeldig getal: moet een veelvoud van ${issue2.divisor} zijn`;
      case "unrecognized_keys":
        return `Onbekende key${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Ongeldige key in ${issue2.origin}`;
      case "invalid_union":
        return "Ongeldige invoer";
      case "invalid_element":
        return `Ongeldige waarde in ${issue2.origin}`;
      default:
        return `Ongeldige invoer`;
    }
  };
};
function nl_default() {
  return {
    localeError: error29()
  };
}
// node_modules/zod/v4/locales/no.js
var error30 = () => {
  const Sizable = {
    string: { unit: "tegn", verb: "å ha" },
    file: { unit: "bytes", verb: "å ha" },
    array: { unit: "elementer", verb: "å inneholde" },
    set: { unit: "elementer", verb: "å inneholde" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "e-postadresse",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO dato- og klokkeslett",
    date: "ISO-dato",
    time: "ISO-klokkeslett",
    duration: "ISO-varighet",
    ipv4: "IPv4-område",
    ipv6: "IPv6-område",
    cidrv4: "IPv4-spekter",
    cidrv6: "IPv6-spekter",
    base64: "base64-enkodet streng",
    base64url: "base64url-enkodet streng",
    json_string: "JSON-streng",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "tall",
    array: "liste"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Ugyldig input: forventet instanceof ${issue2.expected}, fikk ${received}`;
        }
        return `Ugyldig input: forventet ${expected}, fikk ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Ugyldig verdi: forventet ${stringifyPrimitive(issue2.values[0])}`;
        return `Ugyldig valg: forventet en av ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `For stor(t): forventet ${issue2.origin ?? "value"} til å ha ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementer"}`;
        return `For stor(t): forventet ${issue2.origin ?? "value"} til å ha ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `For lite(n): forventet ${issue2.origin} til å ha ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `For lite(n): forventet ${issue2.origin} til å ha ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Ugyldig streng: må starte med "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Ugyldig streng: må ende med "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Ugyldig streng: må inneholde "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Ugyldig streng: må matche mønsteret ${_issue.pattern}`;
        return `Ugyldig ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Ugyldig tall: må være et multiplum av ${issue2.divisor}`;
      case "unrecognized_keys":
        return `${issue2.keys.length > 1 ? "Ukjente nøkler" : "Ukjent nøkkel"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Ugyldig nøkkel i ${issue2.origin}`;
      case "invalid_union":
        return "Ugyldig input";
      case "invalid_element":
        return `Ugyldig verdi i ${issue2.origin}`;
      default:
        return `Ugyldig input`;
    }
  };
};
function no_default() {
  return {
    localeError: error30()
  };
}
// node_modules/zod/v4/locales/ota.js
var error31 = () => {
  const Sizable = {
    string: { unit: "harf", verb: "olmalıdır" },
    file: { unit: "bayt", verb: "olmalıdır" },
    array: { unit: "unsur", verb: "olmalıdır" },
    set: { unit: "unsur", verb: "olmalıdır" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "giren",
    email: "epostagâh",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO hengâmı",
    date: "ISO tarihi",
    time: "ISO zamanı",
    duration: "ISO müddeti",
    ipv4: "IPv4 nişânı",
    ipv6: "IPv6 nişânı",
    cidrv4: "IPv4 menzili",
    cidrv6: "IPv6 menzili",
    base64: "base64-şifreli metin",
    base64url: "base64url-şifreli metin",
    json_string: "JSON metin",
    e164: "E.164 sayısı",
    jwt: "JWT",
    template_literal: "giren"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "numara",
    array: "saf",
    null: "gayb"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Fâsit giren: umulan instanceof ${issue2.expected}, alınan ${received}`;
        }
        return `Fâsit giren: umulan ${expected}, alınan ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Fâsit giren: umulan ${stringifyPrimitive(issue2.values[0])}`;
        return `Fâsit tercih: mûteberler ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Fazla büyük: ${issue2.origin ?? "value"}, ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elements"} sahip olmalıydı.`;
        return `Fazla büyük: ${issue2.origin ?? "value"}, ${adj}${issue2.maximum.toString()} olmalıydı.`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Fazla küçük: ${issue2.origin}, ${adj}${issue2.minimum.toString()} ${sizing.unit} sahip olmalıydı.`;
        }
        return `Fazla küçük: ${issue2.origin}, ${adj}${issue2.minimum.toString()} olmalıydı.`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Fâsit metin: "${_issue.prefix}" ile başlamalı.`;
        if (_issue.format === "ends_with")
          return `Fâsit metin: "${_issue.suffix}" ile bitmeli.`;
        if (_issue.format === "includes")
          return `Fâsit metin: "${_issue.includes}" ihtivâ etmeli.`;
        if (_issue.format === "regex")
          return `Fâsit metin: ${_issue.pattern} nakşına uymalı.`;
        return `Fâsit ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Fâsit sayı: ${issue2.divisor} katı olmalıydı.`;
      case "unrecognized_keys":
        return `Tanınmayan anahtar ${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `${issue2.origin} için tanınmayan anahtar var.`;
      case "invalid_union":
        return "Giren tanınamadı.";
      case "invalid_element":
        return `${issue2.origin} için tanınmayan kıymet var.`;
      default:
        return `Kıymet tanınamadı.`;
    }
  };
};
function ota_default() {
  return {
    localeError: error31()
  };
}
// node_modules/zod/v4/locales/ps.js
var error32 = () => {
  const Sizable = {
    string: { unit: "توکي", verb: "ولري" },
    file: { unit: "بایټس", verb: "ولري" },
    array: { unit: "توکي", verb: "ولري" },
    set: { unit: "توکي", verb: "ولري" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "ورودي",
    email: "بریښنالیک",
    url: "یو آر ال",
    emoji: "ایموجي",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "نیټه او وخت",
    date: "نېټه",
    time: "وخت",
    duration: "موده",
    ipv4: "د IPv4 پته",
    ipv6: "د IPv6 پته",
    cidrv4: "د IPv4 ساحه",
    cidrv6: "د IPv6 ساحه",
    base64: "base64-encoded متن",
    base64url: "base64url-encoded متن",
    json_string: "JSON متن",
    e164: "د E.164 شمېره",
    jwt: "JWT",
    template_literal: "ورودي"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "عدد",
    array: "ارې"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `ناسم ورودي: باید instanceof ${issue2.expected} وای, مګر ${received} ترلاسه شو`;
        }
        return `ناسم ورودي: باید ${expected} وای, مګر ${received} ترلاسه شو`;
      }
      case "invalid_value":
        if (issue2.values.length === 1) {
          return `ناسم ورودي: باید ${stringifyPrimitive(issue2.values[0])} وای`;
        }
        return `ناسم انتخاب: باید یو له ${joinValues(issue2.values, "|")} څخه وای`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `ډیر لوی: ${issue2.origin ?? "ارزښت"} باید ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "عنصرونه"} ولري`;
        }
        return `ډیر لوی: ${issue2.origin ?? "ارزښت"} باید ${adj}${issue2.maximum.toString()} وي`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `ډیر کوچنی: ${issue2.origin} باید ${adj}${issue2.minimum.toString()} ${sizing.unit} ولري`;
        }
        return `ډیر کوچنی: ${issue2.origin} باید ${adj}${issue2.minimum.toString()} وي`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `ناسم متن: باید د "${_issue.prefix}" سره پیل شي`;
        }
        if (_issue.format === "ends_with") {
          return `ناسم متن: باید د "${_issue.suffix}" سره پای ته ورسيږي`;
        }
        if (_issue.format === "includes") {
          return `ناسم متن: باید "${_issue.includes}" ولري`;
        }
        if (_issue.format === "regex") {
          return `ناسم متن: باید د ${_issue.pattern} سره مطابقت ولري`;
        }
        return `${FormatDictionary[_issue.format] ?? issue2.format} ناسم دی`;
      }
      case "not_multiple_of":
        return `ناسم عدد: باید د ${issue2.divisor} مضرب وي`;
      case "unrecognized_keys":
        return `ناسم ${issue2.keys.length > 1 ? "کلیډونه" : "کلیډ"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `ناسم کلیډ په ${issue2.origin} کې`;
      case "invalid_union":
        return `ناسمه ورودي`;
      case "invalid_element":
        return `ناسم عنصر په ${issue2.origin} کې`;
      default:
        return `ناسمه ورودي`;
    }
  };
};
function ps_default() {
  return {
    localeError: error32()
  };
}
// node_modules/zod/v4/locales/pl.js
var error33 = () => {
  const Sizable = {
    string: { unit: "znaków", verb: "mieć" },
    file: { unit: "bajtów", verb: "mieć" },
    array: { unit: "elementów", verb: "mieć" },
    set: { unit: "elementów", verb: "mieć" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "wyrażenie",
    email: "adres email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data i godzina w formacie ISO",
    date: "data w formacie ISO",
    time: "godzina w formacie ISO",
    duration: "czas trwania ISO",
    ipv4: "adres IPv4",
    ipv6: "adres IPv6",
    cidrv4: "zakres IPv4",
    cidrv6: "zakres IPv6",
    base64: "ciąg znaków zakodowany w formacie base64",
    base64url: "ciąg znaków zakodowany w formacie base64url",
    json_string: "ciąg znaków w formacie JSON",
    e164: "liczba E.164",
    jwt: "JWT",
    template_literal: "wejście"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "liczba",
    array: "tablica"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Nieprawidłowe dane wejściowe: oczekiwano instanceof ${issue2.expected}, otrzymano ${received}`;
        }
        return `Nieprawidłowe dane wejściowe: oczekiwano ${expected}, otrzymano ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Nieprawidłowe dane wejściowe: oczekiwano ${stringifyPrimitive(issue2.values[0])}`;
        return `Nieprawidłowa opcja: oczekiwano jednej z wartości ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Za duża wartość: oczekiwano, że ${issue2.origin ?? "wartość"} będzie mieć ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementów"}`;
        }
        return `Zbyt duż(y/a/e): oczekiwano, że ${issue2.origin ?? "wartość"} będzie wynosić ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Za mała wartość: oczekiwano, że ${issue2.origin ?? "wartość"} będzie mieć ${adj}${issue2.minimum.toString()} ${sizing.unit ?? "elementów"}`;
        }
        return `Zbyt mał(y/a/e): oczekiwano, że ${issue2.origin ?? "wartość"} będzie wynosić ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Nieprawidłowy ciąg znaków: musi zaczynać się od "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Nieprawidłowy ciąg znaków: musi kończyć się na "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Nieprawidłowy ciąg znaków: musi zawierać "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Nieprawidłowy ciąg znaków: musi odpowiadać wzorcowi ${_issue.pattern}`;
        return `Nieprawidłow(y/a/e) ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Nieprawidłowa liczba: musi być wielokrotnością ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Nierozpoznane klucze${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Nieprawidłowy klucz w ${issue2.origin}`;
      case "invalid_union":
        return "Nieprawidłowe dane wejściowe";
      case "invalid_element":
        return `Nieprawidłowa wartość w ${issue2.origin}`;
      default:
        return `Nieprawidłowe dane wejściowe`;
    }
  };
};
function pl_default() {
  return {
    localeError: error33()
  };
}
// node_modules/zod/v4/locales/pt.js
var error34 = () => {
  const Sizable = {
    string: { unit: "caracteres", verb: "ter" },
    file: { unit: "bytes", verb: "ter" },
    array: { unit: "itens", verb: "ter" },
    set: { unit: "itens", verb: "ter" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "padrão",
    email: "endereço de e-mail",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data e hora ISO",
    date: "data ISO",
    time: "hora ISO",
    duration: "duração ISO",
    ipv4: "endereço IPv4",
    ipv6: "endereço IPv6",
    cidrv4: "faixa de IPv4",
    cidrv6: "faixa de IPv6",
    base64: "texto codificado em base64",
    base64url: "URL codificada em base64",
    json_string: "texto JSON",
    e164: "número E.164",
    jwt: "JWT",
    template_literal: "entrada"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "número",
    null: "nulo"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Tipo inválido: esperado instanceof ${issue2.expected}, recebido ${received}`;
        }
        return `Tipo inválido: esperado ${expected}, recebido ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Entrada inválida: esperado ${stringifyPrimitive(issue2.values[0])}`;
        return `Opção inválida: esperada uma das ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Muito grande: esperado que ${issue2.origin ?? "valor"} tivesse ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementos"}`;
        return `Muito grande: esperado que ${issue2.origin ?? "valor"} fosse ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Muito pequeno: esperado que ${issue2.origin} tivesse ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Muito pequeno: esperado que ${issue2.origin} fosse ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Texto inválido: deve começar com "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Texto inválido: deve terminar com "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Texto inválido: deve incluir "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Texto inválido: deve corresponder ao padrão ${_issue.pattern}`;
        return `${FormatDictionary[_issue.format] ?? issue2.format} inválido`;
      }
      case "not_multiple_of":
        return `Número inválido: deve ser múltiplo de ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Chave${issue2.keys.length > 1 ? "s" : ""} desconhecida${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Chave inválida em ${issue2.origin}`;
      case "invalid_union":
        return "Entrada inválida";
      case "invalid_element":
        return `Valor inválido em ${issue2.origin}`;
      default:
        return `Campo inválido`;
    }
  };
};
function pt_default() {
  return {
    localeError: error34()
  };
}
// node_modules/zod/v4/locales/ru.js
function getRussianPlural(count, one, few, many) {
  const absCount = Math.abs(count);
  const lastDigit = absCount % 10;
  const lastTwoDigits = absCount % 100;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return many;
  }
  if (lastDigit === 1) {
    return one;
  }
  if (lastDigit >= 2 && lastDigit <= 4) {
    return few;
  }
  return many;
}
var error35 = () => {
  const Sizable = {
    string: {
      unit: {
        one: "символ",
        few: "символа",
        many: "символов"
      },
      verb: "иметь"
    },
    file: {
      unit: {
        one: "байт",
        few: "байта",
        many: "байт"
      },
      verb: "иметь"
    },
    array: {
      unit: {
        one: "элемент",
        few: "элемента",
        many: "элементов"
      },
      verb: "иметь"
    },
    set: {
      unit: {
        one: "элемент",
        few: "элемента",
        many: "элементов"
      },
      verb: "иметь"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "ввод",
    email: "email адрес",
    url: "URL",
    emoji: "эмодзи",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO дата и время",
    date: "ISO дата",
    time: "ISO время",
    duration: "ISO длительность",
    ipv4: "IPv4 адрес",
    ipv6: "IPv6 адрес",
    cidrv4: "IPv4 диапазон",
    cidrv6: "IPv6 диапазон",
    base64: "строка в формате base64",
    base64url: "строка в формате base64url",
    json_string: "JSON строка",
    e164: "номер E.164",
    jwt: "JWT",
    template_literal: "ввод"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "число",
    array: "массив"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Неверный ввод: ожидалось instanceof ${issue2.expected}, получено ${received}`;
        }
        return `Неверный ввод: ожидалось ${expected}, получено ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Неверный ввод: ожидалось ${stringifyPrimitive(issue2.values[0])}`;
        return `Неверный вариант: ожидалось одно из ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          const maxValue = Number(issue2.maximum);
          const unit = getRussianPlural(maxValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
          return `Слишком большое значение: ожидалось, что ${issue2.origin ?? "значение"} будет иметь ${adj}${issue2.maximum.toString()} ${unit}`;
        }
        return `Слишком большое значение: ожидалось, что ${issue2.origin ?? "значение"} будет ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          const minValue = Number(issue2.minimum);
          const unit = getRussianPlural(minValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
          return `Слишком маленькое значение: ожидалось, что ${issue2.origin} будет иметь ${adj}${issue2.minimum.toString()} ${unit}`;
        }
        return `Слишком маленькое значение: ожидалось, что ${issue2.origin} будет ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Неверная строка: должна начинаться с "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Неверная строка: должна заканчиваться на "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Неверная строка: должна содержать "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Неверная строка: должна соответствовать шаблону ${_issue.pattern}`;
        return `Неверный ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Неверное число: должно быть кратным ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Нераспознанн${issue2.keys.length > 1 ? "ые" : "ый"} ключ${issue2.keys.length > 1 ? "и" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Неверный ключ в ${issue2.origin}`;
      case "invalid_union":
        return "Неверные входные данные";
      case "invalid_element":
        return `Неверное значение в ${issue2.origin}`;
      default:
        return `Неверные входные данные`;
    }
  };
};
function ru_default() {
  return {
    localeError: error35()
  };
}
// node_modules/zod/v4/locales/sl.js
var error36 = () => {
  const Sizable = {
    string: { unit: "znakov", verb: "imeti" },
    file: { unit: "bajtov", verb: "imeti" },
    array: { unit: "elementov", verb: "imeti" },
    set: { unit: "elementov", verb: "imeti" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "vnos",
    email: "e-poštni naslov",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datum in čas",
    date: "ISO datum",
    time: "ISO čas",
    duration: "ISO trajanje",
    ipv4: "IPv4 naslov",
    ipv6: "IPv6 naslov",
    cidrv4: "obseg IPv4",
    cidrv6: "obseg IPv6",
    base64: "base64 kodiran niz",
    base64url: "base64url kodiran niz",
    json_string: "JSON niz",
    e164: "E.164 številka",
    jwt: "JWT",
    template_literal: "vnos"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "število",
    array: "tabela"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Neveljaven vnos: pričakovano instanceof ${issue2.expected}, prejeto ${received}`;
        }
        return `Neveljaven vnos: pričakovano ${expected}, prejeto ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Neveljaven vnos: pričakovano ${stringifyPrimitive(issue2.values[0])}`;
        return `Neveljavna možnost: pričakovano eno izmed ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Preveliko: pričakovano, da bo ${issue2.origin ?? "vrednost"} imelo ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementov"}`;
        return `Preveliko: pričakovano, da bo ${issue2.origin ?? "vrednost"} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Premajhno: pričakovano, da bo ${issue2.origin} imelo ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Premajhno: pričakovano, da bo ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Neveljaven niz: mora se začeti z "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Neveljaven niz: mora se končati z "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Neveljaven niz: mora vsebovati "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Neveljaven niz: mora ustrezati vzorcu ${_issue.pattern}`;
        return `Neveljaven ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Neveljavno število: mora biti večkratnik ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Neprepoznan${issue2.keys.length > 1 ? "i ključi" : " ključ"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Neveljaven ključ v ${issue2.origin}`;
      case "invalid_union":
        return "Neveljaven vnos";
      case "invalid_element":
        return `Neveljavna vrednost v ${issue2.origin}`;
      default:
        return "Neveljaven vnos";
    }
  };
};
function sl_default() {
  return {
    localeError: error36()
  };
}
// node_modules/zod/v4/locales/sv.js
var error37 = () => {
  const Sizable = {
    string: { unit: "tecken", verb: "att ha" },
    file: { unit: "bytes", verb: "att ha" },
    array: { unit: "objekt", verb: "att innehålla" },
    set: { unit: "objekt", verb: "att innehålla" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "reguljärt uttryck",
    email: "e-postadress",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-datum och tid",
    date: "ISO-datum",
    time: "ISO-tid",
    duration: "ISO-varaktighet",
    ipv4: "IPv4-intervall",
    ipv6: "IPv6-intervall",
    cidrv4: "IPv4-spektrum",
    cidrv6: "IPv6-spektrum",
    base64: "base64-kodad sträng",
    base64url: "base64url-kodad sträng",
    json_string: "JSON-sträng",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "mall-literal"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "antal",
    array: "lista"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Ogiltig inmatning: förväntat instanceof ${issue2.expected}, fick ${received}`;
        }
        return `Ogiltig inmatning: förväntat ${expected}, fick ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Ogiltig inmatning: förväntat ${stringifyPrimitive(issue2.values[0])}`;
        return `Ogiltigt val: förväntade en av ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `För stor(t): förväntade ${issue2.origin ?? "värdet"} att ha ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "element"}`;
        }
        return `För stor(t): förväntat ${issue2.origin ?? "värdet"} att ha ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `För lite(t): förväntade ${issue2.origin ?? "värdet"} att ha ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `För lite(t): förväntade ${issue2.origin ?? "värdet"} att ha ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Ogiltig sträng: måste börja med "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Ogiltig sträng: måste sluta med "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Ogiltig sträng: måste innehålla "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Ogiltig sträng: måste matcha mönstret "${_issue.pattern}"`;
        return `Ogiltig(t) ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Ogiltigt tal: måste vara en multipel av ${issue2.divisor}`;
      case "unrecognized_keys":
        return `${issue2.keys.length > 1 ? "Okända nycklar" : "Okänd nyckel"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Ogiltig nyckel i ${issue2.origin ?? "värdet"}`;
      case "invalid_union":
        return "Ogiltig input";
      case "invalid_element":
        return `Ogiltigt värde i ${issue2.origin ?? "värdet"}`;
      default:
        return `Ogiltig input`;
    }
  };
};
function sv_default() {
  return {
    localeError: error37()
  };
}
// node_modules/zod/v4/locales/ta.js
var error38 = () => {
  const Sizable = {
    string: { unit: "எழுத்துக்கள்", verb: "கொண்டிருக்க வேண்டும்" },
    file: { unit: "பைட்டுகள்", verb: "கொண்டிருக்க வேண்டும்" },
    array: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" },
    set: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "உள்ளீடு",
    email: "மின்னஞ்சல் முகவரி",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO தேதி நேரம்",
    date: "ISO தேதி",
    time: "ISO நேரம்",
    duration: "ISO கால அளவு",
    ipv4: "IPv4 முகவரி",
    ipv6: "IPv6 முகவரி",
    cidrv4: "IPv4 வரம்பு",
    cidrv6: "IPv6 வரம்பு",
    base64: "base64-encoded சரம்",
    base64url: "base64url-encoded சரம்",
    json_string: "JSON சரம்",
    e164: "E.164 எண்",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "எண்",
    array: "அணி",
    null: "வெறுமை"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது instanceof ${issue2.expected}, பெறப்பட்டது ${received}`;
        }
        return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${expected}, பெறப்பட்டது ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${stringifyPrimitive(issue2.values[0])}`;
        return `தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${joinValues(issue2.values, "|")} இல் ஒன்று`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${issue2.origin ?? "மதிப்பு"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "உறுப்புகள்"} ஆக இருக்க வேண்டும்`;
        }
        return `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${issue2.origin ?? "மதிப்பு"} ${adj}${issue2.maximum.toString()} ஆக இருக்க வேண்டும்`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit} ஆக இருக்க வேண்டும்`;
        }
        return `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${issue2.origin} ${adj}${issue2.minimum.toString()} ஆக இருக்க வேண்டும்`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `தவறான சரம்: "${_issue.prefix}" இல் தொடங்க வேண்டும்`;
        if (_issue.format === "ends_with")
          return `தவறான சரம்: "${_issue.suffix}" இல் முடிவடைய வேண்டும்`;
        if (_issue.format === "includes")
          return `தவறான சரம்: "${_issue.includes}" ஐ உள்ளடக்க வேண்டும்`;
        if (_issue.format === "regex")
          return `தவறான சரம்: ${_issue.pattern} முறைபாட்டுடன் பொருந்த வேண்டும்`;
        return `தவறான ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `தவறான எண்: ${issue2.divisor} இன் பலமாக இருக்க வேண்டும்`;
      case "unrecognized_keys":
        return `அடையாளம் தெரியாத விசை${issue2.keys.length > 1 ? "கள்" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `${issue2.origin} இல் தவறான விசை`;
      case "invalid_union":
        return "தவறான உள்ளீடு";
      case "invalid_element":
        return `${issue2.origin} இல் தவறான மதிப்பு`;
      default:
        return `தவறான உள்ளீடு`;
    }
  };
};
function ta_default() {
  return {
    localeError: error38()
  };
}
// node_modules/zod/v4/locales/th.js
var error39 = () => {
  const Sizable = {
    string: { unit: "ตัวอักษร", verb: "ควรมี" },
    file: { unit: "ไบต์", verb: "ควรมี" },
    array: { unit: "รายการ", verb: "ควรมี" },
    set: { unit: "รายการ", verb: "ควรมี" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "ข้อมูลที่ป้อน",
    email: "ที่อยู่อีเมล",
    url: "URL",
    emoji: "อิโมจิ",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "วันที่เวลาแบบ ISO",
    date: "วันที่แบบ ISO",
    time: "เวลาแบบ ISO",
    duration: "ช่วงเวลาแบบ ISO",
    ipv4: "ที่อยู่ IPv4",
    ipv6: "ที่อยู่ IPv6",
    cidrv4: "ช่วง IP แบบ IPv4",
    cidrv6: "ช่วง IP แบบ IPv6",
    base64: "ข้อความแบบ Base64",
    base64url: "ข้อความแบบ Base64 สำหรับ URL",
    json_string: "ข้อความแบบ JSON",
    e164: "เบอร์โทรศัพท์ระหว่างประเทศ (E.164)",
    jwt: "โทเคน JWT",
    template_literal: "ข้อมูลที่ป้อน"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "ตัวเลข",
    array: "อาร์เรย์ (Array)",
    null: "ไม่มีค่า (null)"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น instanceof ${issue2.expected} แต่ได้รับ ${received}`;
        }
        return `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น ${expected} แต่ได้รับ ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `ค่าไม่ถูกต้อง: ควรเป็น ${stringifyPrimitive(issue2.values[0])}`;
        return `ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "ไม่เกิน" : "น้อยกว่า";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `เกินกำหนด: ${issue2.origin ?? "ค่า"} ควรมี${adj} ${issue2.maximum.toString()} ${sizing.unit ?? "รายการ"}`;
        return `เกินกำหนด: ${issue2.origin ?? "ค่า"} ควรมี${adj} ${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? "อย่างน้อย" : "มากกว่า";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `น้อยกว่ากำหนด: ${issue2.origin} ควรมี${adj} ${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `น้อยกว่ากำหนด: ${issue2.origin} ควรมี${adj} ${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `รูปแบบไม่ถูกต้อง: ข้อความต้องขึ้นต้นด้วย "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `รูปแบบไม่ถูกต้อง: ข้อความต้องลงท้ายด้วย "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `รูปแบบไม่ถูกต้อง: ข้อความต้องมี "${_issue.includes}" อยู่ในข้อความ`;
        if (_issue.format === "regex")
          return `รูปแบบไม่ถูกต้อง: ต้องตรงกับรูปแบบที่กำหนด ${_issue.pattern}`;
        return `รูปแบบไม่ถูกต้อง: ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `ตัวเลขไม่ถูกต้อง: ต้องเป็นจำนวนที่หารด้วย ${issue2.divisor} ได้ลงตัว`;
      case "unrecognized_keys":
        return `พบคีย์ที่ไม่รู้จัก: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `คีย์ไม่ถูกต้องใน ${issue2.origin}`;
      case "invalid_union":
        return "ข้อมูลไม่ถูกต้อง: ไม่ตรงกับรูปแบบยูเนียนที่กำหนดไว้";
      case "invalid_element":
        return `ข้อมูลไม่ถูกต้องใน ${issue2.origin}`;
      default:
        return `ข้อมูลไม่ถูกต้อง`;
    }
  };
};
function th_default() {
  return {
    localeError: error39()
  };
}
// node_modules/zod/v4/locales/tr.js
var error40 = () => {
  const Sizable = {
    string: { unit: "karakter", verb: "olmalı" },
    file: { unit: "bayt", verb: "olmalı" },
    array: { unit: "öğe", verb: "olmalı" },
    set: { unit: "öğe", verb: "olmalı" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "girdi",
    email: "e-posta adresi",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO tarih ve saat",
    date: "ISO tarih",
    time: "ISO saat",
    duration: "ISO süre",
    ipv4: "IPv4 adresi",
    ipv6: "IPv6 adresi",
    cidrv4: "IPv4 aralığı",
    cidrv6: "IPv6 aralığı",
    base64: "base64 ile şifrelenmiş metin",
    base64url: "base64url ile şifrelenmiş metin",
    json_string: "JSON dizesi",
    e164: "E.164 sayısı",
    jwt: "JWT",
    template_literal: "Şablon dizesi"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Geçersiz değer: beklenen instanceof ${issue2.expected}, alınan ${received}`;
        }
        return `Geçersiz değer: beklenen ${expected}, alınan ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Geçersiz değer: beklenen ${stringifyPrimitive(issue2.values[0])}`;
        return `Geçersiz seçenek: aşağıdakilerden biri olmalı: ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Çok büyük: beklenen ${issue2.origin ?? "değer"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "öğe"}`;
        return `Çok büyük: beklenen ${issue2.origin ?? "değer"} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Çok küçük: beklenen ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        return `Çok küçük: beklenen ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Geçersiz metin: "${_issue.prefix}" ile başlamalı`;
        if (_issue.format === "ends_with")
          return `Geçersiz metin: "${_issue.suffix}" ile bitmeli`;
        if (_issue.format === "includes")
          return `Geçersiz metin: "${_issue.includes}" içermeli`;
        if (_issue.format === "regex")
          return `Geçersiz metin: ${_issue.pattern} desenine uymalı`;
        return `Geçersiz ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Geçersiz sayı: ${issue2.divisor} ile tam bölünebilmeli`;
      case "unrecognized_keys":
        return `Tanınmayan anahtar${issue2.keys.length > 1 ? "lar" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `${issue2.origin} içinde geçersiz anahtar`;
      case "invalid_union":
        return "Geçersiz değer";
      case "invalid_element":
        return `${issue2.origin} içinde geçersiz değer`;
      default:
        return `Geçersiz değer`;
    }
  };
};
function tr_default() {
  return {
    localeError: error40()
  };
}
// node_modules/zod/v4/locales/uk.js
var error41 = () => {
  const Sizable = {
    string: { unit: "символів", verb: "матиме" },
    file: { unit: "байтів", verb: "матиме" },
    array: { unit: "елементів", verb: "матиме" },
    set: { unit: "елементів", verb: "матиме" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "вхідні дані",
    email: "адреса електронної пошти",
    url: "URL",
    emoji: "емодзі",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "дата та час ISO",
    date: "дата ISO",
    time: "час ISO",
    duration: "тривалість ISO",
    ipv4: "адреса IPv4",
    ipv6: "адреса IPv6",
    cidrv4: "діапазон IPv4",
    cidrv6: "діапазон IPv6",
    base64: "рядок у кодуванні base64",
    base64url: "рядок у кодуванні base64url",
    json_string: "рядок JSON",
    e164: "номер E.164",
    jwt: "JWT",
    template_literal: "вхідні дані"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "число",
    array: "масив"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Неправильні вхідні дані: очікується instanceof ${issue2.expected}, отримано ${received}`;
        }
        return `Неправильні вхідні дані: очікується ${expected}, отримано ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Неправильні вхідні дані: очікується ${stringifyPrimitive(issue2.values[0])}`;
        return `Неправильна опція: очікується одне з ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Занадто велике: очікується, що ${issue2.origin ?? "значення"} ${sizing.verb} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "елементів"}`;
        return `Занадто велике: очікується, що ${issue2.origin ?? "значення"} буде ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Занадто мале: очікується, що ${issue2.origin} ${sizing.verb} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Занадто мале: очікується, що ${issue2.origin} буде ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Неправильний рядок: повинен починатися з "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Неправильний рядок: повинен закінчуватися на "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Неправильний рядок: повинен містити "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Неправильний рядок: повинен відповідати шаблону ${_issue.pattern}`;
        return `Неправильний ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Неправильне число: повинно бути кратним ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Нерозпізнаний ключ${issue2.keys.length > 1 ? "і" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Неправильний ключ у ${issue2.origin}`;
      case "invalid_union":
        return "Неправильні вхідні дані";
      case "invalid_element":
        return `Неправильне значення у ${issue2.origin}`;
      default:
        return `Неправильні вхідні дані`;
    }
  };
};
function uk_default() {
  return {
    localeError: error41()
  };
}

// node_modules/zod/v4/locales/ua.js
function ua_default() {
  return uk_default();
}
// node_modules/zod/v4/locales/ur.js
var error42 = () => {
  const Sizable = {
    string: { unit: "حروف", verb: "ہونا" },
    file: { unit: "بائٹس", verb: "ہونا" },
    array: { unit: "آئٹمز", verb: "ہونا" },
    set: { unit: "آئٹمز", verb: "ہونا" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "ان پٹ",
    email: "ای میل ایڈریس",
    url: "یو آر ایل",
    emoji: "ایموجی",
    uuid: "یو یو آئی ڈی",
    uuidv4: "یو یو آئی ڈی وی 4",
    uuidv6: "یو یو آئی ڈی وی 6",
    nanoid: "نینو آئی ڈی",
    guid: "جی یو آئی ڈی",
    cuid: "سی یو آئی ڈی",
    cuid2: "سی یو آئی ڈی 2",
    ulid: "یو ایل آئی ڈی",
    xid: "ایکس آئی ڈی",
    ksuid: "کے ایس یو آئی ڈی",
    datetime: "آئی ایس او ڈیٹ ٹائم",
    date: "آئی ایس او تاریخ",
    time: "آئی ایس او وقت",
    duration: "آئی ایس او مدت",
    ipv4: "آئی پی وی 4 ایڈریس",
    ipv6: "آئی پی وی 6 ایڈریس",
    cidrv4: "آئی پی وی 4 رینج",
    cidrv6: "آئی پی وی 6 رینج",
    base64: "بیس 64 ان کوڈڈ سٹرنگ",
    base64url: "بیس 64 یو آر ایل ان کوڈڈ سٹرنگ",
    json_string: "جے ایس او این سٹرنگ",
    e164: "ای 164 نمبر",
    jwt: "جے ڈبلیو ٹی",
    template_literal: "ان پٹ"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "نمبر",
    array: "آرے",
    null: "نل"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `غلط ان پٹ: instanceof ${issue2.expected} متوقع تھا، ${received} موصول ہوا`;
        }
        return `غلط ان پٹ: ${expected} متوقع تھا، ${received} موصول ہوا`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `غلط ان پٹ: ${stringifyPrimitive(issue2.values[0])} متوقع تھا`;
        return `غلط آپشن: ${joinValues(issue2.values, "|")} میں سے ایک متوقع تھا`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `بہت بڑا: ${issue2.origin ?? "ویلیو"} کے ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "عناصر"} ہونے متوقع تھے`;
        return `بہت بڑا: ${issue2.origin ?? "ویلیو"} کا ${adj}${issue2.maximum.toString()} ہونا متوقع تھا`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `بہت چھوٹا: ${issue2.origin} کے ${adj}${issue2.minimum.toString()} ${sizing.unit} ہونے متوقع تھے`;
        }
        return `بہت چھوٹا: ${issue2.origin} کا ${adj}${issue2.minimum.toString()} ہونا متوقع تھا`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `غلط سٹرنگ: "${_issue.prefix}" سے شروع ہونا چاہیے`;
        }
        if (_issue.format === "ends_with")
          return `غلط سٹرنگ: "${_issue.suffix}" پر ختم ہونا چاہیے`;
        if (_issue.format === "includes")
          return `غلط سٹرنگ: "${_issue.includes}" شامل ہونا چاہیے`;
        if (_issue.format === "regex")
          return `غلط سٹرنگ: پیٹرن ${_issue.pattern} سے میچ ہونا چاہیے`;
        return `غلط ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `غلط نمبر: ${issue2.divisor} کا مضاعف ہونا چاہیے`;
      case "unrecognized_keys":
        return `غیر تسلیم شدہ کی${issue2.keys.length > 1 ? "ز" : ""}: ${joinValues(issue2.keys, "، ")}`;
      case "invalid_key":
        return `${issue2.origin} میں غلط کی`;
      case "invalid_union":
        return "غلط ان پٹ";
      case "invalid_element":
        return `${issue2.origin} میں غلط ویلیو`;
      default:
        return `غلط ان پٹ`;
    }
  };
};
function ur_default() {
  return {
    localeError: error42()
  };
}
// node_modules/zod/v4/locales/uz.js
var error43 = () => {
  const Sizable = {
    string: { unit: "belgi", verb: "bo‘lishi kerak" },
    file: { unit: "bayt", verb: "bo‘lishi kerak" },
    array: { unit: "element", verb: "bo‘lishi kerak" },
    set: { unit: "element", verb: "bo‘lishi kerak" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "kirish",
    email: "elektron pochta manzili",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO sana va vaqti",
    date: "ISO sana",
    time: "ISO vaqt",
    duration: "ISO davomiylik",
    ipv4: "IPv4 manzil",
    ipv6: "IPv6 manzil",
    mac: "MAC manzil",
    cidrv4: "IPv4 diapazon",
    cidrv6: "IPv6 diapazon",
    base64: "base64 kodlangan satr",
    base64url: "base64url kodlangan satr",
    json_string: "JSON satr",
    e164: "E.164 raqam",
    jwt: "JWT",
    template_literal: "kirish"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "raqam",
    array: "massiv"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Noto‘g‘ri kirish: kutilgan instanceof ${issue2.expected}, qabul qilingan ${received}`;
        }
        return `Noto‘g‘ri kirish: kutilgan ${expected}, qabul qilingan ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Noto‘g‘ri kirish: kutilgan ${stringifyPrimitive(issue2.values[0])}`;
        return `Noto‘g‘ri variant: quyidagilardan biri kutilgan ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Juda katta: kutilgan ${issue2.origin ?? "qiymat"} ${adj}${issue2.maximum.toString()} ${sizing.unit} ${sizing.verb}`;
        return `Juda katta: kutilgan ${issue2.origin ?? "qiymat"} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Juda kichik: kutilgan ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit} ${sizing.verb}`;
        }
        return `Juda kichik: kutilgan ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Noto‘g‘ri satr: "${_issue.prefix}" bilan boshlanishi kerak`;
        if (_issue.format === "ends_with")
          return `Noto‘g‘ri satr: "${_issue.suffix}" bilan tugashi kerak`;
        if (_issue.format === "includes")
          return `Noto‘g‘ri satr: "${_issue.includes}" ni o‘z ichiga olishi kerak`;
        if (_issue.format === "regex")
          return `Noto‘g‘ri satr: ${_issue.pattern} shabloniga mos kelishi kerak`;
        return `Noto‘g‘ri ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Noto‘g‘ri raqam: ${issue2.divisor} ning karralisi bo‘lishi kerak`;
      case "unrecognized_keys":
        return `Noma’lum kalit${issue2.keys.length > 1 ? "lar" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `${issue2.origin} dagi kalit noto‘g‘ri`;
      case "invalid_union":
        return "Noto‘g‘ri kirish";
      case "invalid_element":
        return `${issue2.origin} da noto‘g‘ri qiymat`;
      default:
        return `Noto‘g‘ri kirish`;
    }
  };
};
function uz_default() {
  return {
    localeError: error43()
  };
}
// node_modules/zod/v4/locales/vi.js
var error44 = () => {
  const Sizable = {
    string: { unit: "ký tự", verb: "có" },
    file: { unit: "byte", verb: "có" },
    array: { unit: "phần tử", verb: "có" },
    set: { unit: "phần tử", verb: "có" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "đầu vào",
    email: "địa chỉ email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ngày giờ ISO",
    date: "ngày ISO",
    time: "giờ ISO",
    duration: "khoảng thời gian ISO",
    ipv4: "địa chỉ IPv4",
    ipv6: "địa chỉ IPv6",
    cidrv4: "dải IPv4",
    cidrv6: "dải IPv6",
    base64: "chuỗi mã hóa base64",
    base64url: "chuỗi mã hóa base64url",
    json_string: "chuỗi JSON",
    e164: "số E.164",
    jwt: "JWT",
    template_literal: "đầu vào"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "số",
    array: "mảng"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Đầu vào không hợp lệ: mong đợi instanceof ${issue2.expected}, nhận được ${received}`;
        }
        return `Đầu vào không hợp lệ: mong đợi ${expected}, nhận được ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Đầu vào không hợp lệ: mong đợi ${stringifyPrimitive(issue2.values[0])}`;
        return `Tùy chọn không hợp lệ: mong đợi một trong các giá trị ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Quá lớn: mong đợi ${issue2.origin ?? "giá trị"} ${sizing.verb} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "phần tử"}`;
        return `Quá lớn: mong đợi ${issue2.origin ?? "giá trị"} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Quá nhỏ: mong đợi ${issue2.origin} ${sizing.verb} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Quá nhỏ: mong đợi ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Chuỗi không hợp lệ: phải bắt đầu bằng "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Chuỗi không hợp lệ: phải kết thúc bằng "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Chuỗi không hợp lệ: phải bao gồm "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Chuỗi không hợp lệ: phải khớp với mẫu ${_issue.pattern}`;
        return `${FormatDictionary[_issue.format] ?? issue2.format} không hợp lệ`;
      }
      case "not_multiple_of":
        return `Số không hợp lệ: phải là bội số của ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Khóa không được nhận dạng: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Khóa không hợp lệ trong ${issue2.origin}`;
      case "invalid_union":
        return "Đầu vào không hợp lệ";
      case "invalid_element":
        return `Giá trị không hợp lệ trong ${issue2.origin}`;
      default:
        return `Đầu vào không hợp lệ`;
    }
  };
};
function vi_default() {
  return {
    localeError: error44()
  };
}
// node_modules/zod/v4/locales/zh-CN.js
var error45 = () => {
  const Sizable = {
    string: { unit: "字符", verb: "包含" },
    file: { unit: "字节", verb: "包含" },
    array: { unit: "项", verb: "包含" },
    set: { unit: "项", verb: "包含" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "输入",
    email: "电子邮件",
    url: "URL",
    emoji: "表情符号",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO日期时间",
    date: "ISO日期",
    time: "ISO时间",
    duration: "ISO时长",
    ipv4: "IPv4地址",
    ipv6: "IPv6地址",
    cidrv4: "IPv4网段",
    cidrv6: "IPv6网段",
    base64: "base64编码字符串",
    base64url: "base64url编码字符串",
    json_string: "JSON字符串",
    e164: "E.164号码",
    jwt: "JWT",
    template_literal: "输入"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "数字",
    array: "数组",
    null: "空值(null)"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `无效输入：期望 instanceof ${issue2.expected}，实际接收 ${received}`;
        }
        return `无效输入：期望 ${expected}，实际接收 ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `无效输入：期望 ${stringifyPrimitive(issue2.values[0])}`;
        return `无效选项：期望以下之一 ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `数值过大：期望 ${issue2.origin ?? "值"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "个元素"}`;
        return `数值过大：期望 ${issue2.origin ?? "值"} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `数值过小：期望 ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `数值过小：期望 ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `无效字符串：必须以 "${_issue.prefix}" 开头`;
        if (_issue.format === "ends_with")
          return `无效字符串：必须以 "${_issue.suffix}" 结尾`;
        if (_issue.format === "includes")
          return `无效字符串：必须包含 "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `无效字符串：必须满足正则表达式 ${_issue.pattern}`;
        return `无效${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `无效数字：必须是 ${issue2.divisor} 的倍数`;
      case "unrecognized_keys":
        return `出现未知的键(key): ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `${issue2.origin} 中的键(key)无效`;
      case "invalid_union":
        return "无效输入";
      case "invalid_element":
        return `${issue2.origin} 中包含无效值(value)`;
      default:
        return `无效输入`;
    }
  };
};
function zh_CN_default() {
  return {
    localeError: error45()
  };
}
// node_modules/zod/v4/locales/zh-TW.js
var error46 = () => {
  const Sizable = {
    string: { unit: "字元", verb: "擁有" },
    file: { unit: "位元組", verb: "擁有" },
    array: { unit: "項目", verb: "擁有" },
    set: { unit: "項目", verb: "擁有" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "輸入",
    email: "郵件地址",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO 日期時間",
    date: "ISO 日期",
    time: "ISO 時間",
    duration: "ISO 期間",
    ipv4: "IPv4 位址",
    ipv6: "IPv6 位址",
    cidrv4: "IPv4 範圍",
    cidrv6: "IPv6 範圍",
    base64: "base64 編碼字串",
    base64url: "base64url 編碼字串",
    json_string: "JSON 字串",
    e164: "E.164 數值",
    jwt: "JWT",
    template_literal: "輸入"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `無效的輸入值：預期為 instanceof ${issue2.expected}，但收到 ${received}`;
        }
        return `無效的輸入值：預期為 ${expected}，但收到 ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `無效的輸入值：預期為 ${stringifyPrimitive(issue2.values[0])}`;
        return `無效的選項：預期為以下其中之一 ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `數值過大：預期 ${issue2.origin ?? "值"} 應為 ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "個元素"}`;
        return `數值過大：預期 ${issue2.origin ?? "值"} 應為 ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `數值過小：預期 ${issue2.origin} 應為 ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `數值過小：預期 ${issue2.origin} 應為 ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `無效的字串：必須以 "${_issue.prefix}" 開頭`;
        }
        if (_issue.format === "ends_with")
          return `無效的字串：必須以 "${_issue.suffix}" 結尾`;
        if (_issue.format === "includes")
          return `無效的字串：必須包含 "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `無效的字串：必須符合格式 ${_issue.pattern}`;
        return `無效的 ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `無效的數字：必須為 ${issue2.divisor} 的倍數`;
      case "unrecognized_keys":
        return `無法識別的鍵值${issue2.keys.length > 1 ? "們" : ""}：${joinValues(issue2.keys, "、")}`;
      case "invalid_key":
        return `${issue2.origin} 中有無效的鍵值`;
      case "invalid_union":
        return "無效的輸入值";
      case "invalid_element":
        return `${issue2.origin} 中有無效的值`;
      default:
        return `無效的輸入值`;
    }
  };
};
function zh_TW_default() {
  return {
    localeError: error46()
  };
}
// node_modules/zod/v4/locales/yo.js
var error47 = () => {
  const Sizable = {
    string: { unit: "àmi", verb: "ní" },
    file: { unit: "bytes", verb: "ní" },
    array: { unit: "nkan", verb: "ní" },
    set: { unit: "nkan", verb: "ní" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "ẹ̀rọ ìbáwọlé",
    email: "àdírẹ́sì ìmẹ́lì",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "àkókò ISO",
    date: "ọjọ́ ISO",
    time: "àkókò ISO",
    duration: "àkókò tó pé ISO",
    ipv4: "àdírẹ́sì IPv4",
    ipv6: "àdírẹ́sì IPv6",
    cidrv4: "àgbègbè IPv4",
    cidrv6: "àgbègbè IPv6",
    base64: "ọ̀rọ̀ tí a kọ́ ní base64",
    base64url: "ọ̀rọ̀ base64url",
    json_string: "ọ̀rọ̀ JSON",
    e164: "nọ́mbà E.164",
    jwt: "JWT",
    template_literal: "ẹ̀rọ ìbáwọlé"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "nọ́mbà",
    array: "akopọ"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Ìbáwọlé aṣìṣe: a ní láti fi instanceof ${issue2.expected}, àmọ̀ a rí ${received}`;
        }
        return `Ìbáwọlé aṣìṣe: a ní láti fi ${expected}, àmọ̀ a rí ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Ìbáwọlé aṣìṣe: a ní láti fi ${stringifyPrimitive(issue2.values[0])}`;
        return `Àṣàyàn aṣìṣe: yan ọ̀kan lára ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Tó pọ̀ jù: a ní láti jẹ́ pé ${issue2.origin ?? "iye"} ${sizing.verb} ${adj}${issue2.maximum} ${sizing.unit}`;
        return `Tó pọ̀ jù: a ní láti jẹ́ ${adj}${issue2.maximum}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Kéré ju: a ní láti jẹ́ pé ${issue2.origin} ${sizing.verb} ${adj}${issue2.minimum} ${sizing.unit}`;
        return `Kéré ju: a ní láti jẹ́ ${adj}${issue2.minimum}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bẹ̀rẹ̀ pẹ̀lú "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ parí pẹ̀lú "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ ní "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bá àpẹẹrẹ mu ${_issue.pattern}`;
        return `Aṣìṣe: ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Nọ́mbà aṣìṣe: gbọ́dọ̀ jẹ́ èyà pípín ti ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Bọtìnì àìmọ̀: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Bọtìnì aṣìṣe nínú ${issue2.origin}`;
      case "invalid_union":
        return "Ìbáwọlé aṣìṣe";
      case "invalid_element":
        return `Iye aṣìṣe nínú ${issue2.origin}`;
      default:
        return "Ìbáwọlé aṣìṣe";
    }
  };
};
function yo_default() {
  return {
    localeError: error47()
  };
}
// node_modules/zod/v4/core/registries.js
var _a;
var $output = Symbol("ZodOutput");
var $input = Symbol("ZodInput");

class $ZodRegistry {
  constructor() {
    this._map = new WeakMap;
    this._idmap = new Map;
  }
  add(schema, ..._meta) {
    const meta = _meta[0];
    this._map.set(schema, meta);
    if (meta && typeof meta === "object" && "id" in meta) {
      this._idmap.set(meta.id, schema);
    }
    return this;
  }
  clear() {
    this._map = new WeakMap;
    this._idmap = new Map;
    return this;
  }
  remove(schema) {
    const meta = this._map.get(schema);
    if (meta && typeof meta === "object" && "id" in meta) {
      this._idmap.delete(meta.id);
    }
    this._map.delete(schema);
    return this;
  }
  get(schema) {
    const p = schema._zod.parent;
    if (p) {
      const pm = { ...this.get(p) ?? {} };
      delete pm.id;
      const f = { ...pm, ...this._map.get(schema) };
      return Object.keys(f).length ? f : undefined;
    }
    return this._map.get(schema);
  }
  has(schema) {
    return this._map.has(schema);
  }
}
function registry() {
  return new $ZodRegistry;
}
(_a = globalThis).__zod_globalRegistry ?? (_a.__zod_globalRegistry = registry());
var globalRegistry = globalThis.__zod_globalRegistry;
// node_modules/zod/v4/core/api.js
function _string(Class2, params) {
  return new Class2({
    type: "string",
    ...normalizeParams(params)
  });
}
function _coercedString(Class2, params) {
  return new Class2({
    type: "string",
    coerce: true,
    ...normalizeParams(params)
  });
}
function _email(Class2, params) {
  return new Class2({
    type: "string",
    format: "email",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _guid(Class2, params) {
  return new Class2({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _uuid(Class2, params) {
  return new Class2({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _uuidv4(Class2, params) {
  return new Class2({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v4",
    ...normalizeParams(params)
  });
}
function _uuidv6(Class2, params) {
  return new Class2({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v6",
    ...normalizeParams(params)
  });
}
function _uuidv7(Class2, params) {
  return new Class2({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v7",
    ...normalizeParams(params)
  });
}
function _url(Class2, params) {
  return new Class2({
    type: "string",
    format: "url",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _emoji2(Class2, params) {
  return new Class2({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _nanoid(Class2, params) {
  return new Class2({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _cuid(Class2, params) {
  return new Class2({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _cuid2(Class2, params) {
  return new Class2({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _ulid(Class2, params) {
  return new Class2({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _xid(Class2, params) {
  return new Class2({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _ksuid(Class2, params) {
  return new Class2({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _ipv4(Class2, params) {
  return new Class2({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _ipv6(Class2, params) {
  return new Class2({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _mac(Class2, params) {
  return new Class2({
    type: "string",
    format: "mac",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _cidrv4(Class2, params) {
  return new Class2({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _cidrv6(Class2, params) {
  return new Class2({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _base64(Class2, params) {
  return new Class2({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _base64url(Class2, params) {
  return new Class2({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _e164(Class2, params) {
  return new Class2({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _jwt(Class2, params) {
  return new Class2({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
var TimePrecision = {
  Any: null,
  Minute: -1,
  Second: 0,
  Millisecond: 3,
  Microsecond: 6
};
function _isoDateTime(Class2, params) {
  return new Class2({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: false,
    local: false,
    precision: null,
    ...normalizeParams(params)
  });
}
function _isoDate(Class2, params) {
  return new Class2({
    type: "string",
    format: "date",
    check: "string_format",
    ...normalizeParams(params)
  });
}
function _isoTime(Class2, params) {
  return new Class2({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...normalizeParams(params)
  });
}
function _isoDuration(Class2, params) {
  return new Class2({
    type: "string",
    format: "duration",
    check: "string_format",
    ...normalizeParams(params)
  });
}
function _number(Class2, params) {
  return new Class2({
    type: "number",
    checks: [],
    ...normalizeParams(params)
  });
}
function _coercedNumber(Class2, params) {
  return new Class2({
    type: "number",
    coerce: true,
    checks: [],
    ...normalizeParams(params)
  });
}
function _int(Class2, params) {
  return new Class2({
    type: "number",
    check: "number_format",
    abort: false,
    format: "safeint",
    ...normalizeParams(params)
  });
}
function _float32(Class2, params) {
  return new Class2({
    type: "number",
    check: "number_format",
    abort: false,
    format: "float32",
    ...normalizeParams(params)
  });
}
function _float64(Class2, params) {
  return new Class2({
    type: "number",
    check: "number_format",
    abort: false,
    format: "float64",
    ...normalizeParams(params)
  });
}
function _int32(Class2, params) {
  return new Class2({
    type: "number",
    check: "number_format",
    abort: false,
    format: "int32",
    ...normalizeParams(params)
  });
}
function _uint32(Class2, params) {
  return new Class2({
    type: "number",
    check: "number_format",
    abort: false,
    format: "uint32",
    ...normalizeParams(params)
  });
}
function _boolean(Class2, params) {
  return new Class2({
    type: "boolean",
    ...normalizeParams(params)
  });
}
function _coercedBoolean(Class2, params) {
  return new Class2({
    type: "boolean",
    coerce: true,
    ...normalizeParams(params)
  });
}
function _bigint(Class2, params) {
  return new Class2({
    type: "bigint",
    ...normalizeParams(params)
  });
}
function _coercedBigint(Class2, params) {
  return new Class2({
    type: "bigint",
    coerce: true,
    ...normalizeParams(params)
  });
}
function _int64(Class2, params) {
  return new Class2({
    type: "bigint",
    check: "bigint_format",
    abort: false,
    format: "int64",
    ...normalizeParams(params)
  });
}
function _uint64(Class2, params) {
  return new Class2({
    type: "bigint",
    check: "bigint_format",
    abort: false,
    format: "uint64",
    ...normalizeParams(params)
  });
}
function _symbol(Class2, params) {
  return new Class2({
    type: "symbol",
    ...normalizeParams(params)
  });
}
function _undefined2(Class2, params) {
  return new Class2({
    type: "undefined",
    ...normalizeParams(params)
  });
}
function _null2(Class2, params) {
  return new Class2({
    type: "null",
    ...normalizeParams(params)
  });
}
function _any(Class2) {
  return new Class2({
    type: "any"
  });
}
function _unknown(Class2) {
  return new Class2({
    type: "unknown"
  });
}
function _never(Class2, params) {
  return new Class2({
    type: "never",
    ...normalizeParams(params)
  });
}
function _void(Class2, params) {
  return new Class2({
    type: "void",
    ...normalizeParams(params)
  });
}
function _date(Class2, params) {
  return new Class2({
    type: "date",
    ...normalizeParams(params)
  });
}
function _coercedDate(Class2, params) {
  return new Class2({
    type: "date",
    coerce: true,
    ...normalizeParams(params)
  });
}
function _nan(Class2, params) {
  return new Class2({
    type: "nan",
    ...normalizeParams(params)
  });
}
function _lt(value, params) {
  return new $ZodCheckLessThan({
    check: "less_than",
    ...normalizeParams(params),
    value,
    inclusive: false
  });
}
function _lte(value, params) {
  return new $ZodCheckLessThan({
    check: "less_than",
    ...normalizeParams(params),
    value,
    inclusive: true
  });
}
function _gt(value, params) {
  return new $ZodCheckGreaterThan({
    check: "greater_than",
    ...normalizeParams(params),
    value,
    inclusive: false
  });
}
function _gte(value, params) {
  return new $ZodCheckGreaterThan({
    check: "greater_than",
    ...normalizeParams(params),
    value,
    inclusive: true
  });
}
function _positive(params) {
  return _gt(0, params);
}
function _negative(params) {
  return _lt(0, params);
}
function _nonpositive(params) {
  return _lte(0, params);
}
function _nonnegative(params) {
  return _gte(0, params);
}
function _multipleOf(value, params) {
  return new $ZodCheckMultipleOf({
    check: "multiple_of",
    ...normalizeParams(params),
    value
  });
}
function _maxSize(maximum, params) {
  return new $ZodCheckMaxSize({
    check: "max_size",
    ...normalizeParams(params),
    maximum
  });
}
function _minSize(minimum, params) {
  return new $ZodCheckMinSize({
    check: "min_size",
    ...normalizeParams(params),
    minimum
  });
}
function _size(size, params) {
  return new $ZodCheckSizeEquals({
    check: "size_equals",
    ...normalizeParams(params),
    size
  });
}
function _maxLength(maximum, params) {
  const ch = new $ZodCheckMaxLength({
    check: "max_length",
    ...normalizeParams(params),
    maximum
  });
  return ch;
}
function _minLength(minimum, params) {
  return new $ZodCheckMinLength({
    check: "min_length",
    ...normalizeParams(params),
    minimum
  });
}
function _length(length, params) {
  return new $ZodCheckLengthEquals({
    check: "length_equals",
    ...normalizeParams(params),
    length
  });
}
function _regex(pattern, params) {
  return new $ZodCheckRegex({
    check: "string_format",
    format: "regex",
    ...normalizeParams(params),
    pattern
  });
}
function _lowercase(params) {
  return new $ZodCheckLowerCase({
    check: "string_format",
    format: "lowercase",
    ...normalizeParams(params)
  });
}
function _uppercase(params) {
  return new $ZodCheckUpperCase({
    check: "string_format",
    format: "uppercase",
    ...normalizeParams(params)
  });
}
function _includes(includes, params) {
  return new $ZodCheckIncludes({
    check: "string_format",
    format: "includes",
    ...normalizeParams(params),
    includes
  });
}
function _startsWith(prefix, params) {
  return new $ZodCheckStartsWith({
    check: "string_format",
    format: "starts_with",
    ...normalizeParams(params),
    prefix
  });
}
function _endsWith(suffix, params) {
  return new $ZodCheckEndsWith({
    check: "string_format",
    format: "ends_with",
    ...normalizeParams(params),
    suffix
  });
}
function _property(property, schema, params) {
  return new $ZodCheckProperty({
    check: "property",
    property,
    schema,
    ...normalizeParams(params)
  });
}
function _mime(types, params) {
  return new $ZodCheckMimeType({
    check: "mime_type",
    mime: types,
    ...normalizeParams(params)
  });
}
function _overwrite(tx) {
  return new $ZodCheckOverwrite({
    check: "overwrite",
    tx
  });
}
function _normalize(form) {
  return _overwrite((input) => input.normalize(form));
}
function _trim() {
  return _overwrite((input) => input.trim());
}
function _toLowerCase() {
  return _overwrite((input) => input.toLowerCase());
}
function _toUpperCase() {
  return _overwrite((input) => input.toUpperCase());
}
function _slugify() {
  return _overwrite((input) => slugify(input));
}
function _array(Class2, element, params) {
  return new Class2({
    type: "array",
    element,
    ...normalizeParams(params)
  });
}
function _union(Class2, options, params) {
  return new Class2({
    type: "union",
    options,
    ...normalizeParams(params)
  });
}
function _xor(Class2, options, params) {
  return new Class2({
    type: "union",
    options,
    inclusive: false,
    ...normalizeParams(params)
  });
}
function _discriminatedUnion(Class2, discriminator, options, params) {
  return new Class2({
    type: "union",
    options,
    discriminator,
    ...normalizeParams(params)
  });
}
function _intersection(Class2, left, right) {
  return new Class2({
    type: "intersection",
    left,
    right
  });
}
function _tuple(Class2, items, _paramsOrRest, _params) {
  const hasRest = _paramsOrRest instanceof $ZodType;
  const params = hasRest ? _params : _paramsOrRest;
  const rest = hasRest ? _paramsOrRest : null;
  return new Class2({
    type: "tuple",
    items,
    rest,
    ...normalizeParams(params)
  });
}
function _record(Class2, keyType, valueType, params) {
  return new Class2({
    type: "record",
    keyType,
    valueType,
    ...normalizeParams(params)
  });
}
function _map(Class2, keyType, valueType, params) {
  return new Class2({
    type: "map",
    keyType,
    valueType,
    ...normalizeParams(params)
  });
}
function _set(Class2, valueType, params) {
  return new Class2({
    type: "set",
    valueType,
    ...normalizeParams(params)
  });
}
function _enum(Class2, values, params) {
  const entries = Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values;
  return new Class2({
    type: "enum",
    entries,
    ...normalizeParams(params)
  });
}
function _nativeEnum(Class2, entries, params) {
  return new Class2({
    type: "enum",
    entries,
    ...normalizeParams(params)
  });
}
function _literal(Class2, value, params) {
  return new Class2({
    type: "literal",
    values: Array.isArray(value) ? value : [value],
    ...normalizeParams(params)
  });
}
function _file(Class2, params) {
  return new Class2({
    type: "file",
    ...normalizeParams(params)
  });
}
function _transform(Class2, fn) {
  return new Class2({
    type: "transform",
    transform: fn
  });
}
function _optional(Class2, innerType) {
  return new Class2({
    type: "optional",
    innerType
  });
}
function _nullable(Class2, innerType) {
  return new Class2({
    type: "nullable",
    innerType
  });
}
function _default(Class2, innerType, defaultValue) {
  return new Class2({
    type: "default",
    innerType,
    get defaultValue() {
      return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
    }
  });
}
function _nonoptional(Class2, innerType, params) {
  return new Class2({
    type: "nonoptional",
    innerType,
    ...normalizeParams(params)
  });
}
function _success(Class2, innerType) {
  return new Class2({
    type: "success",
    innerType
  });
}
function _catch(Class2, innerType, catchValue) {
  return new Class2({
    type: "catch",
    innerType,
    catchValue: typeof catchValue === "function" ? catchValue : () => catchValue
  });
}
function _pipe(Class2, in_, out) {
  return new Class2({
    type: "pipe",
    in: in_,
    out
  });
}
function _readonly(Class2, innerType) {
  return new Class2({
    type: "readonly",
    innerType
  });
}
function _templateLiteral(Class2, parts, params) {
  return new Class2({
    type: "template_literal",
    parts,
    ...normalizeParams(params)
  });
}
function _lazy(Class2, getter) {
  return new Class2({
    type: "lazy",
    getter
  });
}
function _promise(Class2, innerType) {
  return new Class2({
    type: "promise",
    innerType
  });
}
function _custom(Class2, fn, _params) {
  const norm = normalizeParams(_params);
  norm.abort ?? (norm.abort = true);
  const schema = new Class2({
    type: "custom",
    check: "custom",
    fn,
    ...norm
  });
  return schema;
}
function _refine(Class2, fn, _params) {
  const schema = new Class2({
    type: "custom",
    check: "custom",
    fn,
    ...normalizeParams(_params)
  });
  return schema;
}
function _superRefine(fn) {
  const ch = _check((payload) => {
    payload.addIssue = (issue2) => {
      if (typeof issue2 === "string") {
        payload.issues.push(issue(issue2, payload.value, ch._zod.def));
      } else {
        const _issue = issue2;
        if (_issue.fatal)
          _issue.continue = false;
        _issue.code ?? (_issue.code = "custom");
        _issue.input ?? (_issue.input = payload.value);
        _issue.inst ?? (_issue.inst = ch);
        _issue.continue ?? (_issue.continue = !ch._zod.def.abort);
        payload.issues.push(issue(_issue));
      }
    };
    return fn(payload.value, payload);
  });
  return ch;
}
function _check(fn, params) {
  const ch = new $ZodCheck({
    check: "custom",
    ...normalizeParams(params)
  });
  ch._zod.check = fn;
  return ch;
}
function describe(description) {
  const ch = new $ZodCheck({ check: "describe" });
  ch._zod.onattach = [
    (inst) => {
      const existing = globalRegistry.get(inst) ?? {};
      globalRegistry.add(inst, { ...existing, description });
    }
  ];
  ch._zod.check = () => {};
  return ch;
}
function meta(metadata) {
  const ch = new $ZodCheck({ check: "meta" });
  ch._zod.onattach = [
    (inst) => {
      const existing = globalRegistry.get(inst) ?? {};
      globalRegistry.add(inst, { ...existing, ...metadata });
    }
  ];
  ch._zod.check = () => {};
  return ch;
}
function _stringbool(Classes, _params) {
  const params = normalizeParams(_params);
  let truthyArray = params.truthy ?? ["true", "1", "yes", "on", "y", "enabled"];
  let falsyArray = params.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
  if (params.case !== "sensitive") {
    truthyArray = truthyArray.map((v) => typeof v === "string" ? v.toLowerCase() : v);
    falsyArray = falsyArray.map((v) => typeof v === "string" ? v.toLowerCase() : v);
  }
  const truthySet = new Set(truthyArray);
  const falsySet = new Set(falsyArray);
  const _Codec = Classes.Codec ?? $ZodCodec;
  const _Boolean = Classes.Boolean ?? $ZodBoolean;
  const _String = Classes.String ?? $ZodString;
  const stringSchema = new _String({ type: "string", error: params.error });
  const booleanSchema = new _Boolean({ type: "boolean", error: params.error });
  const codec = new _Codec({
    type: "pipe",
    in: stringSchema,
    out: booleanSchema,
    transform: (input, payload) => {
      let data = input;
      if (params.case !== "sensitive")
        data = data.toLowerCase();
      if (truthySet.has(data)) {
        return true;
      } else if (falsySet.has(data)) {
        return false;
      } else {
        payload.issues.push({
          code: "invalid_value",
          expected: "stringbool",
          values: [...truthySet, ...falsySet],
          input: payload.value,
          inst: codec,
          continue: false
        });
        return {};
      }
    },
    reverseTransform: (input, _payload) => {
      if (input === true) {
        return truthyArray[0] || "true";
      } else {
        return falsyArray[0] || "false";
      }
    },
    error: params.error
  });
  return codec;
}
function _stringFormat(Class2, format, fnOrRegex, _params = {}) {
  const params = normalizeParams(_params);
  const def = {
    ...normalizeParams(_params),
    check: "string_format",
    type: "string",
    format,
    fn: typeof fnOrRegex === "function" ? fnOrRegex : (val) => fnOrRegex.test(val),
    ...params
  };
  if (fnOrRegex instanceof RegExp) {
    def.pattern = fnOrRegex;
  }
  const inst = new Class2(def);
  return inst;
}
// node_modules/zod/v4/core/to-json-schema.js
function initializeContext(params) {
  let target = params?.target ?? "draft-2020-12";
  if (target === "draft-4")
    target = "draft-04";
  if (target === "draft-7")
    target = "draft-07";
  return {
    processors: params.processors ?? {},
    metadataRegistry: params?.metadata ?? globalRegistry,
    target,
    unrepresentable: params?.unrepresentable ?? "throw",
    override: params?.override ?? (() => {}),
    io: params?.io ?? "output",
    counter: 0,
    seen: new Map,
    cycles: params?.cycles ?? "ref",
    reused: params?.reused ?? "inline",
    external: params?.external ?? undefined
  };
}
function process2(schema, ctx, _params = { path: [], schemaPath: [] }) {
  var _a2;
  const def = schema._zod.def;
  const seen = ctx.seen.get(schema);
  if (seen) {
    seen.count++;
    const isCycle = _params.schemaPath.includes(schema);
    if (isCycle) {
      seen.cycle = _params.path;
    }
    return seen.schema;
  }
  const result = { schema: {}, count: 1, cycle: undefined, path: _params.path };
  ctx.seen.set(schema, result);
  const overrideSchema = schema._zod.toJSONSchema?.();
  if (overrideSchema) {
    result.schema = overrideSchema;
  } else {
    const params = {
      ..._params,
      schemaPath: [..._params.schemaPath, schema],
      path: _params.path
    };
    if (schema._zod.processJSONSchema) {
      schema._zod.processJSONSchema(ctx, result.schema, params);
    } else {
      const _json = result.schema;
      const processor = ctx.processors[def.type];
      if (!processor) {
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${def.type}`);
      }
      processor(schema, ctx, _json, params);
    }
    const parent = schema._zod.parent;
    if (parent) {
      if (!result.ref)
        result.ref = parent;
      process2(parent, ctx, params);
      ctx.seen.get(parent).isParent = true;
    }
  }
  const meta2 = ctx.metadataRegistry.get(schema);
  if (meta2)
    Object.assign(result.schema, meta2);
  if (ctx.io === "input" && isTransforming(schema)) {
    delete result.schema.examples;
    delete result.schema.default;
  }
  if (ctx.io === "input" && result.schema._prefault)
    (_a2 = result.schema).default ?? (_a2.default = result.schema._prefault);
  delete result.schema._prefault;
  const _result = ctx.seen.get(schema);
  return _result.schema;
}
function extractDefs(ctx, schema) {
  const root = ctx.seen.get(schema);
  if (!root)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const idToSchema = new Map;
  for (const entry of ctx.seen.entries()) {
    const id = ctx.metadataRegistry.get(entry[0])?.id;
    if (id) {
      const existing = idToSchema.get(id);
      if (existing && existing !== entry[0]) {
        throw new Error(`Duplicate schema id "${id}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      }
      idToSchema.set(id, entry[0]);
    }
  }
  const makeURI = (entry) => {
    const defsSegment = ctx.target === "draft-2020-12" ? "$defs" : "definitions";
    if (ctx.external) {
      const externalId = ctx.external.registry.get(entry[0])?.id;
      const uriGenerator = ctx.external.uri ?? ((id2) => id2);
      if (externalId) {
        return { ref: uriGenerator(externalId) };
      }
      const id = entry[1].defId ?? entry[1].schema.id ?? `schema${ctx.counter++}`;
      entry[1].defId = id;
      return { defId: id, ref: `${uriGenerator("__shared")}#/${defsSegment}/${id}` };
    }
    if (entry[1] === root) {
      return { ref: "#" };
    }
    const uriPrefix = `#`;
    const defUriPrefix = `${uriPrefix}/${defsSegment}/`;
    const defId = entry[1].schema.id ?? `__schema${ctx.counter++}`;
    return { defId, ref: defUriPrefix + defId };
  };
  const extractToDef = (entry) => {
    if (entry[1].schema.$ref) {
      return;
    }
    const seen = entry[1];
    const { ref, defId } = makeURI(entry);
    seen.def = { ...seen.schema };
    if (defId)
      seen.defId = defId;
    const schema2 = seen.schema;
    for (const key in schema2) {
      delete schema2[key];
    }
    schema2.$ref = ref;
  };
  if (ctx.cycles === "throw") {
    for (const entry of ctx.seen.entries()) {
      const seen = entry[1];
      if (seen.cycle) {
        throw new Error("Cycle detected: " + `#/${seen.cycle?.join("/")}/<root>` + '\n\nSet the `cycles` parameter to `"ref"` to resolve cyclical schemas with defs.');
      }
    }
  }
  for (const entry of ctx.seen.entries()) {
    const seen = entry[1];
    if (schema === entry[0]) {
      extractToDef(entry);
      continue;
    }
    if (ctx.external) {
      const ext = ctx.external.registry.get(entry[0])?.id;
      if (schema !== entry[0] && ext) {
        extractToDef(entry);
        continue;
      }
    }
    const id = ctx.metadataRegistry.get(entry[0])?.id;
    if (id) {
      extractToDef(entry);
      continue;
    }
    if (seen.cycle) {
      extractToDef(entry);
      continue;
    }
    if (seen.count > 1) {
      if (ctx.reused === "ref") {
        extractToDef(entry);
        continue;
      }
    }
  }
}
function finalize(ctx, schema) {
  const root = ctx.seen.get(schema);
  if (!root)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const flattenRef = (zodSchema) => {
    const seen = ctx.seen.get(zodSchema);
    if (seen.ref === null)
      return;
    const schema2 = seen.def ?? seen.schema;
    const _cached = { ...schema2 };
    const ref = seen.ref;
    seen.ref = null;
    if (ref) {
      flattenRef(ref);
      const refSeen = ctx.seen.get(ref);
      const refSchema = refSeen.schema;
      if (refSchema.$ref && (ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0")) {
        schema2.allOf = schema2.allOf ?? [];
        schema2.allOf.push(refSchema);
      } else {
        Object.assign(schema2, refSchema);
      }
      Object.assign(schema2, _cached);
      const isParentRef = zodSchema._zod.parent === ref;
      if (isParentRef) {
        for (const key in schema2) {
          if (key === "$ref" || key === "allOf")
            continue;
          if (!(key in _cached)) {
            delete schema2[key];
          }
        }
      }
      if (refSchema.$ref && refSeen.def) {
        for (const key in schema2) {
          if (key === "$ref" || key === "allOf")
            continue;
          if (key in refSeen.def && JSON.stringify(schema2[key]) === JSON.stringify(refSeen.def[key])) {
            delete schema2[key];
          }
        }
      }
    }
    const parent = zodSchema._zod.parent;
    if (parent && parent !== ref) {
      flattenRef(parent);
      const parentSeen = ctx.seen.get(parent);
      if (parentSeen?.schema.$ref) {
        schema2.$ref = parentSeen.schema.$ref;
        if (parentSeen.def) {
          for (const key in schema2) {
            if (key === "$ref" || key === "allOf")
              continue;
            if (key in parentSeen.def && JSON.stringify(schema2[key]) === JSON.stringify(parentSeen.def[key])) {
              delete schema2[key];
            }
          }
        }
      }
    }
    ctx.override({
      zodSchema,
      jsonSchema: schema2,
      path: seen.path ?? []
    });
  };
  for (const entry of [...ctx.seen.entries()].reverse()) {
    flattenRef(entry[0]);
  }
  const result = {};
  if (ctx.target === "draft-2020-12") {
    result.$schema = "https://json-schema.org/draft/2020-12/schema";
  } else if (ctx.target === "draft-07") {
    result.$schema = "http://json-schema.org/draft-07/schema#";
  } else if (ctx.target === "draft-04") {
    result.$schema = "http://json-schema.org/draft-04/schema#";
  } else if (ctx.target === "openapi-3.0") {} else {}
  if (ctx.external?.uri) {
    const id = ctx.external.registry.get(schema)?.id;
    if (!id)
      throw new Error("Schema is missing an `id` property");
    result.$id = ctx.external.uri(id);
  }
  Object.assign(result, root.def ?? root.schema);
  const defs = ctx.external?.defs ?? {};
  for (const entry of ctx.seen.entries()) {
    const seen = entry[1];
    if (seen.def && seen.defId) {
      defs[seen.defId] = seen.def;
    }
  }
  if (ctx.external) {} else {
    if (Object.keys(defs).length > 0) {
      if (ctx.target === "draft-2020-12") {
        result.$defs = defs;
      } else {
        result.definitions = defs;
      }
    }
  }
  try {
    const finalized = JSON.parse(JSON.stringify(result));
    Object.defineProperty(finalized, "~standard", {
      value: {
        ...schema["~standard"],
        jsonSchema: {
          input: createStandardJSONSchemaMethod(schema, "input", ctx.processors),
          output: createStandardJSONSchemaMethod(schema, "output", ctx.processors)
        }
      },
      enumerable: false,
      writable: false
    });
    return finalized;
  } catch (_err) {
    throw new Error("Error converting schema to JSON.");
  }
}
function isTransforming(_schema, _ctx) {
  const ctx = _ctx ?? { seen: new Set };
  if (ctx.seen.has(_schema))
    return false;
  ctx.seen.add(_schema);
  const def = _schema._zod.def;
  if (def.type === "transform")
    return true;
  if (def.type === "array")
    return isTransforming(def.element, ctx);
  if (def.type === "set")
    return isTransforming(def.valueType, ctx);
  if (def.type === "lazy")
    return isTransforming(def.getter(), ctx);
  if (def.type === "promise" || def.type === "optional" || def.type === "nonoptional" || def.type === "nullable" || def.type === "readonly" || def.type === "default" || def.type === "prefault") {
    return isTransforming(def.innerType, ctx);
  }
  if (def.type === "intersection") {
    return isTransforming(def.left, ctx) || isTransforming(def.right, ctx);
  }
  if (def.type === "record" || def.type === "map") {
    return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
  }
  if (def.type === "pipe") {
    return isTransforming(def.in, ctx) || isTransforming(def.out, ctx);
  }
  if (def.type === "object") {
    for (const key in def.shape) {
      if (isTransforming(def.shape[key], ctx))
        return true;
    }
    return false;
  }
  if (def.type === "union") {
    for (const option of def.options) {
      if (isTransforming(option, ctx))
        return true;
    }
    return false;
  }
  if (def.type === "tuple") {
    for (const item of def.items) {
      if (isTransforming(item, ctx))
        return true;
    }
    if (def.rest && isTransforming(def.rest, ctx))
      return true;
    return false;
  }
  return false;
}
var createToJSONSchemaMethod = (schema, processors = {}) => (params) => {
  const ctx = initializeContext({ ...params, processors });
  process2(schema, ctx);
  extractDefs(ctx, schema);
  return finalize(ctx, schema);
};
var createStandardJSONSchemaMethod = (schema, io, processors = {}) => (params) => {
  const { libraryOptions, target } = params ?? {};
  const ctx = initializeContext({ ...libraryOptions ?? {}, target, io, processors });
  process2(schema, ctx);
  extractDefs(ctx, schema);
  return finalize(ctx, schema);
};
// node_modules/zod/v4/core/json-schema-processors.js
var formatMap = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
};
var stringProcessor = (schema, ctx, _json, _params) => {
  const json = _json;
  json.type = "string";
  const { minimum, maximum, format, patterns, contentEncoding } = schema._zod.bag;
  if (typeof minimum === "number")
    json.minLength = minimum;
  if (typeof maximum === "number")
    json.maxLength = maximum;
  if (format) {
    json.format = formatMap[format] ?? format;
    if (json.format === "")
      delete json.format;
    if (format === "time") {
      delete json.format;
    }
  }
  if (contentEncoding)
    json.contentEncoding = contentEncoding;
  if (patterns && patterns.size > 0) {
    const regexes = [...patterns];
    if (regexes.length === 1)
      json.pattern = regexes[0].source;
    else if (regexes.length > 1) {
      json.allOf = [
        ...regexes.map((regex) => ({
          ...ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0" ? { type: "string" } : {},
          pattern: regex.source
        }))
      ];
    }
  }
};
var numberProcessor = (schema, ctx, _json, _params) => {
  const json = _json;
  const { minimum, maximum, format, multipleOf, exclusiveMaximum, exclusiveMinimum } = schema._zod.bag;
  if (typeof format === "string" && format.includes("int"))
    json.type = "integer";
  else
    json.type = "number";
  if (typeof exclusiveMinimum === "number") {
    if (ctx.target === "draft-04" || ctx.target === "openapi-3.0") {
      json.minimum = exclusiveMinimum;
      json.exclusiveMinimum = true;
    } else {
      json.exclusiveMinimum = exclusiveMinimum;
    }
  }
  if (typeof minimum === "number") {
    json.minimum = minimum;
    if (typeof exclusiveMinimum === "number" && ctx.target !== "draft-04") {
      if (exclusiveMinimum >= minimum)
        delete json.minimum;
      else
        delete json.exclusiveMinimum;
    }
  }
  if (typeof exclusiveMaximum === "number") {
    if (ctx.target === "draft-04" || ctx.target === "openapi-3.0") {
      json.maximum = exclusiveMaximum;
      json.exclusiveMaximum = true;
    } else {
      json.exclusiveMaximum = exclusiveMaximum;
    }
  }
  if (typeof maximum === "number") {
    json.maximum = maximum;
    if (typeof exclusiveMaximum === "number" && ctx.target !== "draft-04") {
      if (exclusiveMaximum <= maximum)
        delete json.maximum;
      else
        delete json.exclusiveMaximum;
    }
  }
  if (typeof multipleOf === "number")
    json.multipleOf = multipleOf;
};
var booleanProcessor = (_schema, _ctx, json, _params) => {
  json.type = "boolean";
};
var bigintProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("BigInt cannot be represented in JSON Schema");
  }
};
var symbolProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Symbols cannot be represented in JSON Schema");
  }
};
var nullProcessor = (_schema, ctx, json, _params) => {
  if (ctx.target === "openapi-3.0") {
    json.type = "string";
    json.nullable = true;
    json.enum = [null];
  } else {
    json.type = "null";
  }
};
var undefinedProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Undefined cannot be represented in JSON Schema");
  }
};
var voidProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Void cannot be represented in JSON Schema");
  }
};
var neverProcessor = (_schema, _ctx, json, _params) => {
  json.not = {};
};
var anyProcessor = (_schema, _ctx, _json, _params) => {};
var unknownProcessor = (_schema, _ctx, _json, _params) => {};
var dateProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Date cannot be represented in JSON Schema");
  }
};
var enumProcessor = (schema, _ctx, json, _params) => {
  const def = schema._zod.def;
  const values = getEnumValues(def.entries);
  if (values.every((v) => typeof v === "number"))
    json.type = "number";
  if (values.every((v) => typeof v === "string"))
    json.type = "string";
  json.enum = values;
};
var literalProcessor = (schema, ctx, json, _params) => {
  const def = schema._zod.def;
  const vals = [];
  for (const val of def.values) {
    if (val === undefined) {
      if (ctx.unrepresentable === "throw") {
        throw new Error("Literal `undefined` cannot be represented in JSON Schema");
      } else {}
    } else if (typeof val === "bigint") {
      if (ctx.unrepresentable === "throw") {
        throw new Error("BigInt literals cannot be represented in JSON Schema");
      } else {
        vals.push(Number(val));
      }
    } else {
      vals.push(val);
    }
  }
  if (vals.length === 0) {} else if (vals.length === 1) {
    const val = vals[0];
    json.type = val === null ? "null" : typeof val;
    if (ctx.target === "draft-04" || ctx.target === "openapi-3.0") {
      json.enum = [val];
    } else {
      json.const = val;
    }
  } else {
    if (vals.every((v) => typeof v === "number"))
      json.type = "number";
    if (vals.every((v) => typeof v === "string"))
      json.type = "string";
    if (vals.every((v) => typeof v === "boolean"))
      json.type = "boolean";
    if (vals.every((v) => v === null))
      json.type = "null";
    json.enum = vals;
  }
};
var nanProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("NaN cannot be represented in JSON Schema");
  }
};
var templateLiteralProcessor = (schema, _ctx, json, _params) => {
  const _json = json;
  const pattern = schema._zod.pattern;
  if (!pattern)
    throw new Error("Pattern not found in template literal");
  _json.type = "string";
  _json.pattern = pattern.source;
};
var fileProcessor = (schema, _ctx, json, _params) => {
  const _json = json;
  const file = {
    type: "string",
    format: "binary",
    contentEncoding: "binary"
  };
  const { minimum, maximum, mime } = schema._zod.bag;
  if (minimum !== undefined)
    file.minLength = minimum;
  if (maximum !== undefined)
    file.maxLength = maximum;
  if (mime) {
    if (mime.length === 1) {
      file.contentMediaType = mime[0];
      Object.assign(_json, file);
    } else {
      Object.assign(_json, file);
      _json.anyOf = mime.map((m) => ({ contentMediaType: m }));
    }
  } else {
    Object.assign(_json, file);
  }
};
var successProcessor = (_schema, _ctx, json, _params) => {
  json.type = "boolean";
};
var customProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Custom types cannot be represented in JSON Schema");
  }
};
var functionProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Function types cannot be represented in JSON Schema");
  }
};
var transformProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Transforms cannot be represented in JSON Schema");
  }
};
var mapProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Map cannot be represented in JSON Schema");
  }
};
var setProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Set cannot be represented in JSON Schema");
  }
};
var arrayProcessor = (schema, ctx, _json, params) => {
  const json = _json;
  const def = schema._zod.def;
  const { minimum, maximum } = schema._zod.bag;
  if (typeof minimum === "number")
    json.minItems = minimum;
  if (typeof maximum === "number")
    json.maxItems = maximum;
  json.type = "array";
  json.items = process2(def.element, ctx, { ...params, path: [...params.path, "items"] });
};
var objectProcessor = (schema, ctx, _json, params) => {
  const json = _json;
  const def = schema._zod.def;
  json.type = "object";
  json.properties = {};
  const shape = def.shape;
  for (const key in shape) {
    json.properties[key] = process2(shape[key], ctx, {
      ...params,
      path: [...params.path, "properties", key]
    });
  }
  const allKeys = new Set(Object.keys(shape));
  const requiredKeys = new Set([...allKeys].filter((key) => {
    const v = def.shape[key]._zod;
    if (ctx.io === "input") {
      return v.optin === undefined;
    } else {
      return v.optout === undefined;
    }
  }));
  if (requiredKeys.size > 0) {
    json.required = Array.from(requiredKeys);
  }
  if (def.catchall?._zod.def.type === "never") {
    json.additionalProperties = false;
  } else if (!def.catchall) {
    if (ctx.io === "output")
      json.additionalProperties = false;
  } else if (def.catchall) {
    json.additionalProperties = process2(def.catchall, ctx, {
      ...params,
      path: [...params.path, "additionalProperties"]
    });
  }
};
var unionProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  const isExclusive = def.inclusive === false;
  const options = def.options.map((x, i) => process2(x, ctx, {
    ...params,
    path: [...params.path, isExclusive ? "oneOf" : "anyOf", i]
  }));
  if (isExclusive) {
    json.oneOf = options;
  } else {
    json.anyOf = options;
  }
};
var intersectionProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  const a = process2(def.left, ctx, {
    ...params,
    path: [...params.path, "allOf", 0]
  });
  const b = process2(def.right, ctx, {
    ...params,
    path: [...params.path, "allOf", 1]
  });
  const isSimpleIntersection = (val) => ("allOf" in val) && Object.keys(val).length === 1;
  const allOf = [
    ...isSimpleIntersection(a) ? a.allOf : [a],
    ...isSimpleIntersection(b) ? b.allOf : [b]
  ];
  json.allOf = allOf;
};
var tupleProcessor = (schema, ctx, _json, params) => {
  const json = _json;
  const def = schema._zod.def;
  json.type = "array";
  const prefixPath = ctx.target === "draft-2020-12" ? "prefixItems" : "items";
  const restPath = ctx.target === "draft-2020-12" ? "items" : ctx.target === "openapi-3.0" ? "items" : "additionalItems";
  const prefixItems = def.items.map((x, i) => process2(x, ctx, {
    ...params,
    path: [...params.path, prefixPath, i]
  }));
  const rest = def.rest ? process2(def.rest, ctx, {
    ...params,
    path: [...params.path, restPath, ...ctx.target === "openapi-3.0" ? [def.items.length] : []]
  }) : null;
  if (ctx.target === "draft-2020-12") {
    json.prefixItems = prefixItems;
    if (rest) {
      json.items = rest;
    }
  } else if (ctx.target === "openapi-3.0") {
    json.items = {
      anyOf: prefixItems
    };
    if (rest) {
      json.items.anyOf.push(rest);
    }
    json.minItems = prefixItems.length;
    if (!rest) {
      json.maxItems = prefixItems.length;
    }
  } else {
    json.items = prefixItems;
    if (rest) {
      json.additionalItems = rest;
    }
  }
  const { minimum, maximum } = schema._zod.bag;
  if (typeof minimum === "number")
    json.minItems = minimum;
  if (typeof maximum === "number")
    json.maxItems = maximum;
};
var recordProcessor = (schema, ctx, _json, params) => {
  const json = _json;
  const def = schema._zod.def;
  json.type = "object";
  const keyType = def.keyType;
  const keyBag = keyType._zod.bag;
  const patterns = keyBag?.patterns;
  if (def.mode === "loose" && patterns && patterns.size > 0) {
    const valueSchema = process2(def.valueType, ctx, {
      ...params,
      path: [...params.path, "patternProperties", "*"]
    });
    json.patternProperties = {};
    for (const pattern of patterns) {
      json.patternProperties[pattern.source] = valueSchema;
    }
  } else {
    if (ctx.target === "draft-07" || ctx.target === "draft-2020-12") {
      json.propertyNames = process2(def.keyType, ctx, {
        ...params,
        path: [...params.path, "propertyNames"]
      });
    }
    json.additionalProperties = process2(def.valueType, ctx, {
      ...params,
      path: [...params.path, "additionalProperties"]
    });
  }
  const keyValues = keyType._zod.values;
  if (keyValues) {
    const validKeyValues = [...keyValues].filter((v) => typeof v === "string" || typeof v === "number");
    if (validKeyValues.length > 0) {
      json.required = validKeyValues;
    }
  }
};
var nullableProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  const inner = process2(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  if (ctx.target === "openapi-3.0") {
    seen.ref = def.innerType;
    json.nullable = true;
  } else {
    json.anyOf = [inner, { type: "null" }];
  }
};
var nonoptionalProcessor = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  process2(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
};
var defaultProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  process2(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  json.default = JSON.parse(JSON.stringify(def.defaultValue));
};
var prefaultProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  process2(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  if (ctx.io === "input")
    json._prefault = JSON.parse(JSON.stringify(def.defaultValue));
};
var catchProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  process2(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  let catchValue;
  try {
    catchValue = def.catchValue(undefined);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  json.default = catchValue;
};
var pipeProcessor = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  const innerType = ctx.io === "input" ? def.in._zod.def.type === "transform" ? def.out : def.in : def.out;
  process2(innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = innerType;
};
var readonlyProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  process2(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  json.readOnly = true;
};
var promiseProcessor = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  process2(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
};
var optionalProcessor = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  process2(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
};
var lazyProcessor = (schema, ctx, _json, params) => {
  const innerType = schema._zod.innerType;
  process2(innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = innerType;
};
var allProcessors = {
  string: stringProcessor,
  number: numberProcessor,
  boolean: booleanProcessor,
  bigint: bigintProcessor,
  symbol: symbolProcessor,
  null: nullProcessor,
  undefined: undefinedProcessor,
  void: voidProcessor,
  never: neverProcessor,
  any: anyProcessor,
  unknown: unknownProcessor,
  date: dateProcessor,
  enum: enumProcessor,
  literal: literalProcessor,
  nan: nanProcessor,
  template_literal: templateLiteralProcessor,
  file: fileProcessor,
  success: successProcessor,
  custom: customProcessor,
  function: functionProcessor,
  transform: transformProcessor,
  map: mapProcessor,
  set: setProcessor,
  array: arrayProcessor,
  object: objectProcessor,
  union: unionProcessor,
  intersection: intersectionProcessor,
  tuple: tupleProcessor,
  record: recordProcessor,
  nullable: nullableProcessor,
  nonoptional: nonoptionalProcessor,
  default: defaultProcessor,
  prefault: prefaultProcessor,
  catch: catchProcessor,
  pipe: pipeProcessor,
  readonly: readonlyProcessor,
  promise: promiseProcessor,
  optional: optionalProcessor,
  lazy: lazyProcessor
};
function toJSONSchema(input, params) {
  if ("_idmap" in input) {
    const registry2 = input;
    const ctx2 = initializeContext({ ...params, processors: allProcessors });
    const defs = {};
    for (const entry of registry2._idmap.entries()) {
      const [_, schema] = entry;
      process2(schema, ctx2);
    }
    const schemas = {};
    const external = {
      registry: registry2,
      uri: params?.uri,
      defs
    };
    ctx2.external = external;
    for (const entry of registry2._idmap.entries()) {
      const [key, schema] = entry;
      extractDefs(ctx2, schema);
      schemas[key] = finalize(ctx2, schema);
    }
    if (Object.keys(defs).length > 0) {
      const defsSegment = ctx2.target === "draft-2020-12" ? "$defs" : "definitions";
      schemas.__shared = {
        [defsSegment]: defs
      };
    }
    return { schemas };
  }
  const ctx = initializeContext({ ...params, processors: allProcessors });
  process2(input, ctx);
  extractDefs(ctx, input);
  return finalize(ctx, input);
}
// node_modules/zod/v4/core/json-schema-generator.js
class JSONSchemaGenerator {
  get metadataRegistry() {
    return this.ctx.metadataRegistry;
  }
  get target() {
    return this.ctx.target;
  }
  get unrepresentable() {
    return this.ctx.unrepresentable;
  }
  get override() {
    return this.ctx.override;
  }
  get io() {
    return this.ctx.io;
  }
  get counter() {
    return this.ctx.counter;
  }
  set counter(value) {
    this.ctx.counter = value;
  }
  get seen() {
    return this.ctx.seen;
  }
  constructor(params) {
    let normalizedTarget = params?.target ?? "draft-2020-12";
    if (normalizedTarget === "draft-4")
      normalizedTarget = "draft-04";
    if (normalizedTarget === "draft-7")
      normalizedTarget = "draft-07";
    this.ctx = initializeContext({
      processors: allProcessors,
      target: normalizedTarget,
      ...params?.metadata && { metadata: params.metadata },
      ...params?.unrepresentable && { unrepresentable: params.unrepresentable },
      ...params?.override && { override: params.override },
      ...params?.io && { io: params.io }
    });
  }
  process(schema, _params = { path: [], schemaPath: [] }) {
    return process2(schema, this.ctx, _params);
  }
  emit(schema, _params) {
    if (_params) {
      if (_params.cycles)
        this.ctx.cycles = _params.cycles;
      if (_params.reused)
        this.ctx.reused = _params.reused;
      if (_params.external)
        this.ctx.external = _params.external;
    }
    extractDefs(this.ctx, schema);
    const result = finalize(this.ctx, schema);
    const { "~standard": _, ...plainResult } = result;
    return plainResult;
  }
}
// node_modules/zod/v4/core/json-schema.js
var exports_json_schema = {};
// node_modules/zod/v4/classic/schemas.js
var exports_schemas2 = {};
__export(exports_schemas2, {
  xor: () => xor,
  xid: () => xid2,
  void: () => _void2,
  uuidv7: () => uuidv7,
  uuidv6: () => uuidv6,
  uuidv4: () => uuidv4,
  uuid: () => uuid2,
  url: () => url,
  unknown: () => unknown,
  union: () => union,
  undefined: () => _undefined3,
  ulid: () => ulid2,
  uint64: () => uint64,
  uint32: () => uint32,
  tuple: () => tuple,
  transform: () => transform,
  templateLiteral: () => templateLiteral,
  symbol: () => symbol,
  superRefine: () => superRefine,
  success: () => success,
  stringbool: () => stringbool,
  stringFormat: () => stringFormat,
  string: () => string2,
  strictObject: () => strictObject,
  set: () => set,
  refine: () => refine,
  record: () => record,
  readonly: () => readonly,
  promise: () => promise,
  preprocess: () => preprocess,
  prefault: () => prefault,
  pipe: () => pipe,
  partialRecord: () => partialRecord,
  optional: () => optional,
  object: () => object,
  number: () => number2,
  nullish: () => nullish2,
  nullable: () => nullable,
  null: () => _null3,
  nonoptional: () => nonoptional,
  never: () => never,
  nativeEnum: () => nativeEnum,
  nanoid: () => nanoid2,
  nan: () => nan,
  meta: () => meta2,
  map: () => map,
  mac: () => mac2,
  looseRecord: () => looseRecord,
  looseObject: () => looseObject,
  literal: () => literal,
  lazy: () => lazy,
  ksuid: () => ksuid2,
  keyof: () => keyof,
  jwt: () => jwt,
  json: () => json,
  ipv6: () => ipv62,
  ipv4: () => ipv42,
  intersection: () => intersection,
  int64: () => int64,
  int32: () => int32,
  int: () => int,
  instanceof: () => _instanceof,
  httpUrl: () => httpUrl,
  hostname: () => hostname2,
  hex: () => hex2,
  hash: () => hash,
  guid: () => guid2,
  function: () => _function,
  float64: () => float64,
  float32: () => float32,
  file: () => file,
  exactOptional: () => exactOptional,
  enum: () => _enum2,
  emoji: () => emoji2,
  email: () => email2,
  e164: () => e1642,
  discriminatedUnion: () => discriminatedUnion,
  describe: () => describe2,
  date: () => date3,
  custom: () => custom,
  cuid2: () => cuid22,
  cuid: () => cuid3,
  codec: () => codec,
  cidrv6: () => cidrv62,
  cidrv4: () => cidrv42,
  check: () => check,
  catch: () => _catch2,
  boolean: () => boolean2,
  bigint: () => bigint2,
  base64url: () => base64url2,
  base64: () => base642,
  array: () => array,
  any: () => any,
  _function: () => _function,
  _default: () => _default2,
  _ZodString: () => _ZodString,
  ZodXor: () => ZodXor,
  ZodXID: () => ZodXID,
  ZodVoid: () => ZodVoid,
  ZodUnknown: () => ZodUnknown,
  ZodUnion: () => ZodUnion,
  ZodUndefined: () => ZodUndefined,
  ZodUUID: () => ZodUUID,
  ZodURL: () => ZodURL,
  ZodULID: () => ZodULID,
  ZodType: () => ZodType,
  ZodTuple: () => ZodTuple,
  ZodTransform: () => ZodTransform,
  ZodTemplateLiteral: () => ZodTemplateLiteral,
  ZodSymbol: () => ZodSymbol,
  ZodSuccess: () => ZodSuccess,
  ZodStringFormat: () => ZodStringFormat,
  ZodString: () => ZodString,
  ZodSet: () => ZodSet,
  ZodRecord: () => ZodRecord,
  ZodReadonly: () => ZodReadonly,
  ZodPromise: () => ZodPromise,
  ZodPrefault: () => ZodPrefault,
  ZodPipe: () => ZodPipe,
  ZodOptional: () => ZodOptional,
  ZodObject: () => ZodObject,
  ZodNumberFormat: () => ZodNumberFormat,
  ZodNumber: () => ZodNumber,
  ZodNullable: () => ZodNullable,
  ZodNull: () => ZodNull,
  ZodNonOptional: () => ZodNonOptional,
  ZodNever: () => ZodNever,
  ZodNanoID: () => ZodNanoID,
  ZodNaN: () => ZodNaN,
  ZodMap: () => ZodMap,
  ZodMAC: () => ZodMAC,
  ZodLiteral: () => ZodLiteral,
  ZodLazy: () => ZodLazy,
  ZodKSUID: () => ZodKSUID,
  ZodJWT: () => ZodJWT,
  ZodIntersection: () => ZodIntersection,
  ZodIPv6: () => ZodIPv6,
  ZodIPv4: () => ZodIPv4,
  ZodGUID: () => ZodGUID,
  ZodFunction: () => ZodFunction,
  ZodFile: () => ZodFile,
  ZodExactOptional: () => ZodExactOptional,
  ZodEnum: () => ZodEnum,
  ZodEmoji: () => ZodEmoji,
  ZodEmail: () => ZodEmail,
  ZodE164: () => ZodE164,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodDefault: () => ZodDefault,
  ZodDate: () => ZodDate,
  ZodCustomStringFormat: () => ZodCustomStringFormat,
  ZodCustom: () => ZodCustom,
  ZodCodec: () => ZodCodec,
  ZodCatch: () => ZodCatch,
  ZodCUID2: () => ZodCUID2,
  ZodCUID: () => ZodCUID,
  ZodCIDRv6: () => ZodCIDRv6,
  ZodCIDRv4: () => ZodCIDRv4,
  ZodBoolean: () => ZodBoolean,
  ZodBigIntFormat: () => ZodBigIntFormat,
  ZodBigInt: () => ZodBigInt,
  ZodBase64URL: () => ZodBase64URL,
  ZodBase64: () => ZodBase64,
  ZodArray: () => ZodArray,
  ZodAny: () => ZodAny
});

// node_modules/zod/v4/classic/checks.js
var exports_checks2 = {};
__export(exports_checks2, {
  uppercase: () => _uppercase,
  trim: () => _trim,
  toUpperCase: () => _toUpperCase,
  toLowerCase: () => _toLowerCase,
  startsWith: () => _startsWith,
  slugify: () => _slugify,
  size: () => _size,
  regex: () => _regex,
  property: () => _property,
  positive: () => _positive,
  overwrite: () => _overwrite,
  normalize: () => _normalize,
  nonpositive: () => _nonpositive,
  nonnegative: () => _nonnegative,
  negative: () => _negative,
  multipleOf: () => _multipleOf,
  minSize: () => _minSize,
  minLength: () => _minLength,
  mime: () => _mime,
  maxSize: () => _maxSize,
  maxLength: () => _maxLength,
  lte: () => _lte,
  lt: () => _lt,
  lowercase: () => _lowercase,
  length: () => _length,
  includes: () => _includes,
  gte: () => _gte,
  gt: () => _gt,
  endsWith: () => _endsWith
});

// node_modules/zod/v4/classic/iso.js
var exports_iso = {};
__export(exports_iso, {
  time: () => time2,
  duration: () => duration2,
  datetime: () => datetime2,
  date: () => date2,
  ZodISOTime: () => ZodISOTime,
  ZodISODuration: () => ZodISODuration,
  ZodISODateTime: () => ZodISODateTime,
  ZodISODate: () => ZodISODate
});
var ZodISODateTime = /* @__PURE__ */ $constructor("ZodISODateTime", (inst, def) => {
  $ZodISODateTime.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function datetime2(params) {
  return _isoDateTime(ZodISODateTime, params);
}
var ZodISODate = /* @__PURE__ */ $constructor("ZodISODate", (inst, def) => {
  $ZodISODate.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function date2(params) {
  return _isoDate(ZodISODate, params);
}
var ZodISOTime = /* @__PURE__ */ $constructor("ZodISOTime", (inst, def) => {
  $ZodISOTime.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function time2(params) {
  return _isoTime(ZodISOTime, params);
}
var ZodISODuration = /* @__PURE__ */ $constructor("ZodISODuration", (inst, def) => {
  $ZodISODuration.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function duration2(params) {
  return _isoDuration(ZodISODuration, params);
}

// node_modules/zod/v4/classic/errors.js
var initializer2 = (inst, issues) => {
  $ZodError.init(inst, issues);
  inst.name = "ZodError";
  Object.defineProperties(inst, {
    format: {
      value: (mapper) => formatError(inst, mapper)
    },
    flatten: {
      value: (mapper) => flattenError(inst, mapper)
    },
    addIssue: {
      value: (issue2) => {
        inst.issues.push(issue2);
        inst.message = JSON.stringify(inst.issues, jsonStringifyReplacer, 2);
      }
    },
    addIssues: {
      value: (issues2) => {
        inst.issues.push(...issues2);
        inst.message = JSON.stringify(inst.issues, jsonStringifyReplacer, 2);
      }
    },
    isEmpty: {
      get() {
        return inst.issues.length === 0;
      }
    }
  });
};
var ZodError = $constructor("ZodError", initializer2);
var ZodRealError = $constructor("ZodError", initializer2, {
  Parent: Error
});

// node_modules/zod/v4/classic/parse.js
var parse3 = /* @__PURE__ */ _parse(ZodRealError);
var parseAsync2 = /* @__PURE__ */ _parseAsync(ZodRealError);
var safeParse2 = /* @__PURE__ */ _safeParse(ZodRealError);
var safeParseAsync2 = /* @__PURE__ */ _safeParseAsync(ZodRealError);
var encode2 = /* @__PURE__ */ _encode(ZodRealError);
var decode2 = /* @__PURE__ */ _decode(ZodRealError);
var encodeAsync2 = /* @__PURE__ */ _encodeAsync(ZodRealError);
var decodeAsync2 = /* @__PURE__ */ _decodeAsync(ZodRealError);
var safeEncode2 = /* @__PURE__ */ _safeEncode(ZodRealError);
var safeDecode2 = /* @__PURE__ */ _safeDecode(ZodRealError);
var safeEncodeAsync2 = /* @__PURE__ */ _safeEncodeAsync(ZodRealError);
var safeDecodeAsync2 = /* @__PURE__ */ _safeDecodeAsync(ZodRealError);

// node_modules/zod/v4/classic/schemas.js
var ZodType = /* @__PURE__ */ $constructor("ZodType", (inst, def) => {
  $ZodType.init(inst, def);
  Object.assign(inst["~standard"], {
    jsonSchema: {
      input: createStandardJSONSchemaMethod(inst, "input"),
      output: createStandardJSONSchemaMethod(inst, "output")
    }
  });
  inst.toJSONSchema = createToJSONSchemaMethod(inst, {});
  inst.def = def;
  inst.type = def.type;
  Object.defineProperty(inst, "_def", { value: def });
  inst.check = (...checks2) => {
    return inst.clone(exports_util.mergeDefs(def, {
      checks: [
        ...def.checks ?? [],
        ...checks2.map((ch) => typeof ch === "function" ? { _zod: { check: ch, def: { check: "custom" }, onattach: [] } } : ch)
      ]
    }), {
      parent: true
    });
  };
  inst.with = inst.check;
  inst.clone = (def2, params) => clone(inst, def2, params);
  inst.brand = () => inst;
  inst.register = (reg, meta2) => {
    reg.add(inst, meta2);
    return inst;
  };
  inst.parse = (data, params) => parse3(inst, data, params, { callee: inst.parse });
  inst.safeParse = (data, params) => safeParse2(inst, data, params);
  inst.parseAsync = async (data, params) => parseAsync2(inst, data, params, { callee: inst.parseAsync });
  inst.safeParseAsync = async (data, params) => safeParseAsync2(inst, data, params);
  inst.spa = inst.safeParseAsync;
  inst.encode = (data, params) => encode2(inst, data, params);
  inst.decode = (data, params) => decode2(inst, data, params);
  inst.encodeAsync = async (data, params) => encodeAsync2(inst, data, params);
  inst.decodeAsync = async (data, params) => decodeAsync2(inst, data, params);
  inst.safeEncode = (data, params) => safeEncode2(inst, data, params);
  inst.safeDecode = (data, params) => safeDecode2(inst, data, params);
  inst.safeEncodeAsync = async (data, params) => safeEncodeAsync2(inst, data, params);
  inst.safeDecodeAsync = async (data, params) => safeDecodeAsync2(inst, data, params);
  inst.refine = (check, params) => inst.check(refine(check, params));
  inst.superRefine = (refinement) => inst.check(superRefine(refinement));
  inst.overwrite = (fn) => inst.check(_overwrite(fn));
  inst.optional = () => optional(inst);
  inst.exactOptional = () => exactOptional(inst);
  inst.nullable = () => nullable(inst);
  inst.nullish = () => optional(nullable(inst));
  inst.nonoptional = (params) => nonoptional(inst, params);
  inst.array = () => array(inst);
  inst.or = (arg) => union([inst, arg]);
  inst.and = (arg) => intersection(inst, arg);
  inst.transform = (tx) => pipe(inst, transform(tx));
  inst.default = (def2) => _default2(inst, def2);
  inst.prefault = (def2) => prefault(inst, def2);
  inst.catch = (params) => _catch2(inst, params);
  inst.pipe = (target) => pipe(inst, target);
  inst.readonly = () => readonly(inst);
  inst.describe = (description) => {
    const cl = inst.clone();
    globalRegistry.add(cl, { description });
    return cl;
  };
  Object.defineProperty(inst, "description", {
    get() {
      return globalRegistry.get(inst)?.description;
    },
    configurable: true
  });
  inst.meta = (...args) => {
    if (args.length === 0) {
      return globalRegistry.get(inst);
    }
    const cl = inst.clone();
    globalRegistry.add(cl, args[0]);
    return cl;
  };
  inst.isOptional = () => inst.safeParse(undefined).success;
  inst.isNullable = () => inst.safeParse(null).success;
  inst.apply = (fn) => fn(inst);
  return inst;
});
var _ZodString = /* @__PURE__ */ $constructor("_ZodString", (inst, def) => {
  $ZodString.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => stringProcessor(inst, ctx, json, params);
  const bag = inst._zod.bag;
  inst.format = bag.format ?? null;
  inst.minLength = bag.minimum ?? null;
  inst.maxLength = bag.maximum ?? null;
  inst.regex = (...args) => inst.check(_regex(...args));
  inst.includes = (...args) => inst.check(_includes(...args));
  inst.startsWith = (...args) => inst.check(_startsWith(...args));
  inst.endsWith = (...args) => inst.check(_endsWith(...args));
  inst.min = (...args) => inst.check(_minLength(...args));
  inst.max = (...args) => inst.check(_maxLength(...args));
  inst.length = (...args) => inst.check(_length(...args));
  inst.nonempty = (...args) => inst.check(_minLength(1, ...args));
  inst.lowercase = (params) => inst.check(_lowercase(params));
  inst.uppercase = (params) => inst.check(_uppercase(params));
  inst.trim = () => inst.check(_trim());
  inst.normalize = (...args) => inst.check(_normalize(...args));
  inst.toLowerCase = () => inst.check(_toLowerCase());
  inst.toUpperCase = () => inst.check(_toUpperCase());
  inst.slugify = () => inst.check(_slugify());
});
var ZodString = /* @__PURE__ */ $constructor("ZodString", (inst, def) => {
  $ZodString.init(inst, def);
  _ZodString.init(inst, def);
  inst.email = (params) => inst.check(_email(ZodEmail, params));
  inst.url = (params) => inst.check(_url(ZodURL, params));
  inst.jwt = (params) => inst.check(_jwt(ZodJWT, params));
  inst.emoji = (params) => inst.check(_emoji2(ZodEmoji, params));
  inst.guid = (params) => inst.check(_guid(ZodGUID, params));
  inst.uuid = (params) => inst.check(_uuid(ZodUUID, params));
  inst.uuidv4 = (params) => inst.check(_uuidv4(ZodUUID, params));
  inst.uuidv6 = (params) => inst.check(_uuidv6(ZodUUID, params));
  inst.uuidv7 = (params) => inst.check(_uuidv7(ZodUUID, params));
  inst.nanoid = (params) => inst.check(_nanoid(ZodNanoID, params));
  inst.guid = (params) => inst.check(_guid(ZodGUID, params));
  inst.cuid = (params) => inst.check(_cuid(ZodCUID, params));
  inst.cuid2 = (params) => inst.check(_cuid2(ZodCUID2, params));
  inst.ulid = (params) => inst.check(_ulid(ZodULID, params));
  inst.base64 = (params) => inst.check(_base64(ZodBase64, params));
  inst.base64url = (params) => inst.check(_base64url(ZodBase64URL, params));
  inst.xid = (params) => inst.check(_xid(ZodXID, params));
  inst.ksuid = (params) => inst.check(_ksuid(ZodKSUID, params));
  inst.ipv4 = (params) => inst.check(_ipv4(ZodIPv4, params));
  inst.ipv6 = (params) => inst.check(_ipv6(ZodIPv6, params));
  inst.cidrv4 = (params) => inst.check(_cidrv4(ZodCIDRv4, params));
  inst.cidrv6 = (params) => inst.check(_cidrv6(ZodCIDRv6, params));
  inst.e164 = (params) => inst.check(_e164(ZodE164, params));
  inst.datetime = (params) => inst.check(datetime2(params));
  inst.date = (params) => inst.check(date2(params));
  inst.time = (params) => inst.check(time2(params));
  inst.duration = (params) => inst.check(duration2(params));
});
function string2(params) {
  return _string(ZodString, params);
}
var ZodStringFormat = /* @__PURE__ */ $constructor("ZodStringFormat", (inst, def) => {
  $ZodStringFormat.init(inst, def);
  _ZodString.init(inst, def);
});
var ZodEmail = /* @__PURE__ */ $constructor("ZodEmail", (inst, def) => {
  $ZodEmail.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function email2(params) {
  return _email(ZodEmail, params);
}
var ZodGUID = /* @__PURE__ */ $constructor("ZodGUID", (inst, def) => {
  $ZodGUID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function guid2(params) {
  return _guid(ZodGUID, params);
}
var ZodUUID = /* @__PURE__ */ $constructor("ZodUUID", (inst, def) => {
  $ZodUUID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function uuid2(params) {
  return _uuid(ZodUUID, params);
}
function uuidv4(params) {
  return _uuidv4(ZodUUID, params);
}
function uuidv6(params) {
  return _uuidv6(ZodUUID, params);
}
function uuidv7(params) {
  return _uuidv7(ZodUUID, params);
}
var ZodURL = /* @__PURE__ */ $constructor("ZodURL", (inst, def) => {
  $ZodURL.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function url(params) {
  return _url(ZodURL, params);
}
function httpUrl(params) {
  return _url(ZodURL, {
    protocol: /^https?$/,
    hostname: exports_regexes.domain,
    ...exports_util.normalizeParams(params)
  });
}
var ZodEmoji = /* @__PURE__ */ $constructor("ZodEmoji", (inst, def) => {
  $ZodEmoji.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function emoji2(params) {
  return _emoji2(ZodEmoji, params);
}
var ZodNanoID = /* @__PURE__ */ $constructor("ZodNanoID", (inst, def) => {
  $ZodNanoID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function nanoid2(params) {
  return _nanoid(ZodNanoID, params);
}
var ZodCUID = /* @__PURE__ */ $constructor("ZodCUID", (inst, def) => {
  $ZodCUID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function cuid3(params) {
  return _cuid(ZodCUID, params);
}
var ZodCUID2 = /* @__PURE__ */ $constructor("ZodCUID2", (inst, def) => {
  $ZodCUID2.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function cuid22(params) {
  return _cuid2(ZodCUID2, params);
}
var ZodULID = /* @__PURE__ */ $constructor("ZodULID", (inst, def) => {
  $ZodULID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function ulid2(params) {
  return _ulid(ZodULID, params);
}
var ZodXID = /* @__PURE__ */ $constructor("ZodXID", (inst, def) => {
  $ZodXID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function xid2(params) {
  return _xid(ZodXID, params);
}
var ZodKSUID = /* @__PURE__ */ $constructor("ZodKSUID", (inst, def) => {
  $ZodKSUID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function ksuid2(params) {
  return _ksuid(ZodKSUID, params);
}
var ZodIPv4 = /* @__PURE__ */ $constructor("ZodIPv4", (inst, def) => {
  $ZodIPv4.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function ipv42(params) {
  return _ipv4(ZodIPv4, params);
}
var ZodMAC = /* @__PURE__ */ $constructor("ZodMAC", (inst, def) => {
  $ZodMAC.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function mac2(params) {
  return _mac(ZodMAC, params);
}
var ZodIPv6 = /* @__PURE__ */ $constructor("ZodIPv6", (inst, def) => {
  $ZodIPv6.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function ipv62(params) {
  return _ipv6(ZodIPv6, params);
}
var ZodCIDRv4 = /* @__PURE__ */ $constructor("ZodCIDRv4", (inst, def) => {
  $ZodCIDRv4.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function cidrv42(params) {
  return _cidrv4(ZodCIDRv4, params);
}
var ZodCIDRv6 = /* @__PURE__ */ $constructor("ZodCIDRv6", (inst, def) => {
  $ZodCIDRv6.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function cidrv62(params) {
  return _cidrv6(ZodCIDRv6, params);
}
var ZodBase64 = /* @__PURE__ */ $constructor("ZodBase64", (inst, def) => {
  $ZodBase64.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function base642(params) {
  return _base64(ZodBase64, params);
}
var ZodBase64URL = /* @__PURE__ */ $constructor("ZodBase64URL", (inst, def) => {
  $ZodBase64URL.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function base64url2(params) {
  return _base64url(ZodBase64URL, params);
}
var ZodE164 = /* @__PURE__ */ $constructor("ZodE164", (inst, def) => {
  $ZodE164.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function e1642(params) {
  return _e164(ZodE164, params);
}
var ZodJWT = /* @__PURE__ */ $constructor("ZodJWT", (inst, def) => {
  $ZodJWT.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function jwt(params) {
  return _jwt(ZodJWT, params);
}
var ZodCustomStringFormat = /* @__PURE__ */ $constructor("ZodCustomStringFormat", (inst, def) => {
  $ZodCustomStringFormat.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function stringFormat(format, fnOrRegex, _params = {}) {
  return _stringFormat(ZodCustomStringFormat, format, fnOrRegex, _params);
}
function hostname2(_params) {
  return _stringFormat(ZodCustomStringFormat, "hostname", exports_regexes.hostname, _params);
}
function hex2(_params) {
  return _stringFormat(ZodCustomStringFormat, "hex", exports_regexes.hex, _params);
}
function hash(alg, params) {
  const enc = params?.enc ?? "hex";
  const format = `${alg}_${enc}`;
  const regex = exports_regexes[format];
  if (!regex)
    throw new Error(`Unrecognized hash format: ${format}`);
  return _stringFormat(ZodCustomStringFormat, format, regex, params);
}
var ZodNumber = /* @__PURE__ */ $constructor("ZodNumber", (inst, def) => {
  $ZodNumber.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => numberProcessor(inst, ctx, json, params);
  inst.gt = (value, params) => inst.check(_gt(value, params));
  inst.gte = (value, params) => inst.check(_gte(value, params));
  inst.min = (value, params) => inst.check(_gte(value, params));
  inst.lt = (value, params) => inst.check(_lt(value, params));
  inst.lte = (value, params) => inst.check(_lte(value, params));
  inst.max = (value, params) => inst.check(_lte(value, params));
  inst.int = (params) => inst.check(int(params));
  inst.safe = (params) => inst.check(int(params));
  inst.positive = (params) => inst.check(_gt(0, params));
  inst.nonnegative = (params) => inst.check(_gte(0, params));
  inst.negative = (params) => inst.check(_lt(0, params));
  inst.nonpositive = (params) => inst.check(_lte(0, params));
  inst.multipleOf = (value, params) => inst.check(_multipleOf(value, params));
  inst.step = (value, params) => inst.check(_multipleOf(value, params));
  inst.finite = () => inst;
  const bag = inst._zod.bag;
  inst.minValue = Math.max(bag.minimum ?? Number.NEGATIVE_INFINITY, bag.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null;
  inst.maxValue = Math.min(bag.maximum ?? Number.POSITIVE_INFINITY, bag.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null;
  inst.isInt = (bag.format ?? "").includes("int") || Number.isSafeInteger(bag.multipleOf ?? 0.5);
  inst.isFinite = true;
  inst.format = bag.format ?? null;
});
function number2(params) {
  return _number(ZodNumber, params);
}
var ZodNumberFormat = /* @__PURE__ */ $constructor("ZodNumberFormat", (inst, def) => {
  $ZodNumberFormat.init(inst, def);
  ZodNumber.init(inst, def);
});
function int(params) {
  return _int(ZodNumberFormat, params);
}
function float32(params) {
  return _float32(ZodNumberFormat, params);
}
function float64(params) {
  return _float64(ZodNumberFormat, params);
}
function int32(params) {
  return _int32(ZodNumberFormat, params);
}
function uint32(params) {
  return _uint32(ZodNumberFormat, params);
}
var ZodBoolean = /* @__PURE__ */ $constructor("ZodBoolean", (inst, def) => {
  $ZodBoolean.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => booleanProcessor(inst, ctx, json, params);
});
function boolean2(params) {
  return _boolean(ZodBoolean, params);
}
var ZodBigInt = /* @__PURE__ */ $constructor("ZodBigInt", (inst, def) => {
  $ZodBigInt.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => bigintProcessor(inst, ctx, json, params);
  inst.gte = (value, params) => inst.check(_gte(value, params));
  inst.min = (value, params) => inst.check(_gte(value, params));
  inst.gt = (value, params) => inst.check(_gt(value, params));
  inst.gte = (value, params) => inst.check(_gte(value, params));
  inst.min = (value, params) => inst.check(_gte(value, params));
  inst.lt = (value, params) => inst.check(_lt(value, params));
  inst.lte = (value, params) => inst.check(_lte(value, params));
  inst.max = (value, params) => inst.check(_lte(value, params));
  inst.positive = (params) => inst.check(_gt(BigInt(0), params));
  inst.negative = (params) => inst.check(_lt(BigInt(0), params));
  inst.nonpositive = (params) => inst.check(_lte(BigInt(0), params));
  inst.nonnegative = (params) => inst.check(_gte(BigInt(0), params));
  inst.multipleOf = (value, params) => inst.check(_multipleOf(value, params));
  const bag = inst._zod.bag;
  inst.minValue = bag.minimum ?? null;
  inst.maxValue = bag.maximum ?? null;
  inst.format = bag.format ?? null;
});
function bigint2(params) {
  return _bigint(ZodBigInt, params);
}
var ZodBigIntFormat = /* @__PURE__ */ $constructor("ZodBigIntFormat", (inst, def) => {
  $ZodBigIntFormat.init(inst, def);
  ZodBigInt.init(inst, def);
});
function int64(params) {
  return _int64(ZodBigIntFormat, params);
}
function uint64(params) {
  return _uint64(ZodBigIntFormat, params);
}
var ZodSymbol = /* @__PURE__ */ $constructor("ZodSymbol", (inst, def) => {
  $ZodSymbol.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => symbolProcessor(inst, ctx, json, params);
});
function symbol(params) {
  return _symbol(ZodSymbol, params);
}
var ZodUndefined = /* @__PURE__ */ $constructor("ZodUndefined", (inst, def) => {
  $ZodUndefined.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => undefinedProcessor(inst, ctx, json, params);
});
function _undefined3(params) {
  return _undefined2(ZodUndefined, params);
}
var ZodNull = /* @__PURE__ */ $constructor("ZodNull", (inst, def) => {
  $ZodNull.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => nullProcessor(inst, ctx, json, params);
});
function _null3(params) {
  return _null2(ZodNull, params);
}
var ZodAny = /* @__PURE__ */ $constructor("ZodAny", (inst, def) => {
  $ZodAny.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => anyProcessor(inst, ctx, json, params);
});
function any() {
  return _any(ZodAny);
}
var ZodUnknown = /* @__PURE__ */ $constructor("ZodUnknown", (inst, def) => {
  $ZodUnknown.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => unknownProcessor(inst, ctx, json, params);
});
function unknown() {
  return _unknown(ZodUnknown);
}
var ZodNever = /* @__PURE__ */ $constructor("ZodNever", (inst, def) => {
  $ZodNever.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => neverProcessor(inst, ctx, json, params);
});
function never(params) {
  return _never(ZodNever, params);
}
var ZodVoid = /* @__PURE__ */ $constructor("ZodVoid", (inst, def) => {
  $ZodVoid.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => voidProcessor(inst, ctx, json, params);
});
function _void2(params) {
  return _void(ZodVoid, params);
}
var ZodDate = /* @__PURE__ */ $constructor("ZodDate", (inst, def) => {
  $ZodDate.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => dateProcessor(inst, ctx, json, params);
  inst.min = (value, params) => inst.check(_gte(value, params));
  inst.max = (value, params) => inst.check(_lte(value, params));
  const c = inst._zod.bag;
  inst.minDate = c.minimum ? new Date(c.minimum) : null;
  inst.maxDate = c.maximum ? new Date(c.maximum) : null;
});
function date3(params) {
  return _date(ZodDate, params);
}
var ZodArray = /* @__PURE__ */ $constructor("ZodArray", (inst, def) => {
  $ZodArray.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => arrayProcessor(inst, ctx, json, params);
  inst.element = def.element;
  inst.min = (minLength, params) => inst.check(_minLength(minLength, params));
  inst.nonempty = (params) => inst.check(_minLength(1, params));
  inst.max = (maxLength, params) => inst.check(_maxLength(maxLength, params));
  inst.length = (len, params) => inst.check(_length(len, params));
  inst.unwrap = () => inst.element;
});
function array(element, params) {
  return _array(ZodArray, element, params);
}
function keyof(schema) {
  const shape = schema._zod.def.shape;
  return _enum2(Object.keys(shape));
}
var ZodObject = /* @__PURE__ */ $constructor("ZodObject", (inst, def) => {
  $ZodObjectJIT.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => objectProcessor(inst, ctx, json, params);
  exports_util.defineLazy(inst, "shape", () => {
    return def.shape;
  });
  inst.keyof = () => _enum2(Object.keys(inst._zod.def.shape));
  inst.catchall = (catchall) => inst.clone({ ...inst._zod.def, catchall });
  inst.passthrough = () => inst.clone({ ...inst._zod.def, catchall: unknown() });
  inst.loose = () => inst.clone({ ...inst._zod.def, catchall: unknown() });
  inst.strict = () => inst.clone({ ...inst._zod.def, catchall: never() });
  inst.strip = () => inst.clone({ ...inst._zod.def, catchall: undefined });
  inst.extend = (incoming) => {
    return exports_util.extend(inst, incoming);
  };
  inst.safeExtend = (incoming) => {
    return exports_util.safeExtend(inst, incoming);
  };
  inst.merge = (other) => exports_util.merge(inst, other);
  inst.pick = (mask) => exports_util.pick(inst, mask);
  inst.omit = (mask) => exports_util.omit(inst, mask);
  inst.partial = (...args) => exports_util.partial(ZodOptional, inst, args[0]);
  inst.required = (...args) => exports_util.required(ZodNonOptional, inst, args[0]);
});
function object(shape, params) {
  const def = {
    type: "object",
    shape: shape ?? {},
    ...exports_util.normalizeParams(params)
  };
  return new ZodObject(def);
}
function strictObject(shape, params) {
  return new ZodObject({
    type: "object",
    shape,
    catchall: never(),
    ...exports_util.normalizeParams(params)
  });
}
function looseObject(shape, params) {
  return new ZodObject({
    type: "object",
    shape,
    catchall: unknown(),
    ...exports_util.normalizeParams(params)
  });
}
var ZodUnion = /* @__PURE__ */ $constructor("ZodUnion", (inst, def) => {
  $ZodUnion.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => unionProcessor(inst, ctx, json, params);
  inst.options = def.options;
});
function union(options, params) {
  return new ZodUnion({
    type: "union",
    options,
    ...exports_util.normalizeParams(params)
  });
}
var ZodXor = /* @__PURE__ */ $constructor("ZodXor", (inst, def) => {
  ZodUnion.init(inst, def);
  $ZodXor.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => unionProcessor(inst, ctx, json, params);
  inst.options = def.options;
});
function xor(options, params) {
  return new ZodXor({
    type: "union",
    options,
    inclusive: false,
    ...exports_util.normalizeParams(params)
  });
}
var ZodDiscriminatedUnion = /* @__PURE__ */ $constructor("ZodDiscriminatedUnion", (inst, def) => {
  ZodUnion.init(inst, def);
  $ZodDiscriminatedUnion.init(inst, def);
});
function discriminatedUnion(discriminator, options, params) {
  return new ZodDiscriminatedUnion({
    type: "union",
    options,
    discriminator,
    ...exports_util.normalizeParams(params)
  });
}
var ZodIntersection = /* @__PURE__ */ $constructor("ZodIntersection", (inst, def) => {
  $ZodIntersection.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => intersectionProcessor(inst, ctx, json, params);
});
function intersection(left, right) {
  return new ZodIntersection({
    type: "intersection",
    left,
    right
  });
}
var ZodTuple = /* @__PURE__ */ $constructor("ZodTuple", (inst, def) => {
  $ZodTuple.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => tupleProcessor(inst, ctx, json, params);
  inst.rest = (rest) => inst.clone({
    ...inst._zod.def,
    rest
  });
});
function tuple(items, _paramsOrRest, _params) {
  const hasRest = _paramsOrRest instanceof $ZodType;
  const params = hasRest ? _params : _paramsOrRest;
  const rest = hasRest ? _paramsOrRest : null;
  return new ZodTuple({
    type: "tuple",
    items,
    rest,
    ...exports_util.normalizeParams(params)
  });
}
var ZodRecord = /* @__PURE__ */ $constructor("ZodRecord", (inst, def) => {
  $ZodRecord.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => recordProcessor(inst, ctx, json, params);
  inst.keyType = def.keyType;
  inst.valueType = def.valueType;
});
function record(keyType, valueType, params) {
  return new ZodRecord({
    type: "record",
    keyType,
    valueType,
    ...exports_util.normalizeParams(params)
  });
}
function partialRecord(keyType, valueType, params) {
  const k = clone(keyType);
  k._zod.values = undefined;
  return new ZodRecord({
    type: "record",
    keyType: k,
    valueType,
    ...exports_util.normalizeParams(params)
  });
}
function looseRecord(keyType, valueType, params) {
  return new ZodRecord({
    type: "record",
    keyType,
    valueType,
    mode: "loose",
    ...exports_util.normalizeParams(params)
  });
}
var ZodMap = /* @__PURE__ */ $constructor("ZodMap", (inst, def) => {
  $ZodMap.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => mapProcessor(inst, ctx, json, params);
  inst.keyType = def.keyType;
  inst.valueType = def.valueType;
  inst.min = (...args) => inst.check(_minSize(...args));
  inst.nonempty = (params) => inst.check(_minSize(1, params));
  inst.max = (...args) => inst.check(_maxSize(...args));
  inst.size = (...args) => inst.check(_size(...args));
});
function map(keyType, valueType, params) {
  return new ZodMap({
    type: "map",
    keyType,
    valueType,
    ...exports_util.normalizeParams(params)
  });
}
var ZodSet = /* @__PURE__ */ $constructor("ZodSet", (inst, def) => {
  $ZodSet.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => setProcessor(inst, ctx, json, params);
  inst.min = (...args) => inst.check(_minSize(...args));
  inst.nonempty = (params) => inst.check(_minSize(1, params));
  inst.max = (...args) => inst.check(_maxSize(...args));
  inst.size = (...args) => inst.check(_size(...args));
});
function set(valueType, params) {
  return new ZodSet({
    type: "set",
    valueType,
    ...exports_util.normalizeParams(params)
  });
}
var ZodEnum = /* @__PURE__ */ $constructor("ZodEnum", (inst, def) => {
  $ZodEnum.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => enumProcessor(inst, ctx, json, params);
  inst.enum = def.entries;
  inst.options = Object.values(def.entries);
  const keys = new Set(Object.keys(def.entries));
  inst.extract = (values, params) => {
    const newEntries = {};
    for (const value of values) {
      if (keys.has(value)) {
        newEntries[value] = def.entries[value];
      } else
        throw new Error(`Key ${value} not found in enum`);
    }
    return new ZodEnum({
      ...def,
      checks: [],
      ...exports_util.normalizeParams(params),
      entries: newEntries
    });
  };
  inst.exclude = (values, params) => {
    const newEntries = { ...def.entries };
    for (const value of values) {
      if (keys.has(value)) {
        delete newEntries[value];
      } else
        throw new Error(`Key ${value} not found in enum`);
    }
    return new ZodEnum({
      ...def,
      checks: [],
      ...exports_util.normalizeParams(params),
      entries: newEntries
    });
  };
});
function _enum2(values, params) {
  const entries = Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values;
  return new ZodEnum({
    type: "enum",
    entries,
    ...exports_util.normalizeParams(params)
  });
}
function nativeEnum(entries, params) {
  return new ZodEnum({
    type: "enum",
    entries,
    ...exports_util.normalizeParams(params)
  });
}
var ZodLiteral = /* @__PURE__ */ $constructor("ZodLiteral", (inst, def) => {
  $ZodLiteral.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => literalProcessor(inst, ctx, json, params);
  inst.values = new Set(def.values);
  Object.defineProperty(inst, "value", {
    get() {
      if (def.values.length > 1) {
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      }
      return def.values[0];
    }
  });
});
function literal(value, params) {
  return new ZodLiteral({
    type: "literal",
    values: Array.isArray(value) ? value : [value],
    ...exports_util.normalizeParams(params)
  });
}
var ZodFile = /* @__PURE__ */ $constructor("ZodFile", (inst, def) => {
  $ZodFile.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => fileProcessor(inst, ctx, json, params);
  inst.min = (size, params) => inst.check(_minSize(size, params));
  inst.max = (size, params) => inst.check(_maxSize(size, params));
  inst.mime = (types, params) => inst.check(_mime(Array.isArray(types) ? types : [types], params));
});
function file(params) {
  return _file(ZodFile, params);
}
var ZodTransform = /* @__PURE__ */ $constructor("ZodTransform", (inst, def) => {
  $ZodTransform.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => transformProcessor(inst, ctx, json, params);
  inst._zod.parse = (payload, _ctx) => {
    if (_ctx.direction === "backward") {
      throw new $ZodEncodeError(inst.constructor.name);
    }
    payload.addIssue = (issue2) => {
      if (typeof issue2 === "string") {
        payload.issues.push(exports_util.issue(issue2, payload.value, def));
      } else {
        const _issue = issue2;
        if (_issue.fatal)
          _issue.continue = false;
        _issue.code ?? (_issue.code = "custom");
        _issue.input ?? (_issue.input = payload.value);
        _issue.inst ?? (_issue.inst = inst);
        payload.issues.push(exports_util.issue(_issue));
      }
    };
    const output = def.transform(payload.value, payload);
    if (output instanceof Promise) {
      return output.then((output2) => {
        payload.value = output2;
        return payload;
      });
    }
    payload.value = output;
    return payload;
  };
});
function transform(fn) {
  return new ZodTransform({
    type: "transform",
    transform: fn
  });
}
var ZodOptional = /* @__PURE__ */ $constructor("ZodOptional", (inst, def) => {
  $ZodOptional.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function optional(innerType) {
  return new ZodOptional({
    type: "optional",
    innerType
  });
}
var ZodExactOptional = /* @__PURE__ */ $constructor("ZodExactOptional", (inst, def) => {
  $ZodExactOptional.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function exactOptional(innerType) {
  return new ZodExactOptional({
    type: "optional",
    innerType
  });
}
var ZodNullable = /* @__PURE__ */ $constructor("ZodNullable", (inst, def) => {
  $ZodNullable.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => nullableProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function nullable(innerType) {
  return new ZodNullable({
    type: "nullable",
    innerType
  });
}
function nullish2(innerType) {
  return optional(nullable(innerType));
}
var ZodDefault = /* @__PURE__ */ $constructor("ZodDefault", (inst, def) => {
  $ZodDefault.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => defaultProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
  inst.removeDefault = inst.unwrap;
});
function _default2(innerType, defaultValue) {
  return new ZodDefault({
    type: "default",
    innerType,
    get defaultValue() {
      return typeof defaultValue === "function" ? defaultValue() : exports_util.shallowClone(defaultValue);
    }
  });
}
var ZodPrefault = /* @__PURE__ */ $constructor("ZodPrefault", (inst, def) => {
  $ZodPrefault.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => prefaultProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function prefault(innerType, defaultValue) {
  return new ZodPrefault({
    type: "prefault",
    innerType,
    get defaultValue() {
      return typeof defaultValue === "function" ? defaultValue() : exports_util.shallowClone(defaultValue);
    }
  });
}
var ZodNonOptional = /* @__PURE__ */ $constructor("ZodNonOptional", (inst, def) => {
  $ZodNonOptional.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => nonoptionalProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function nonoptional(innerType, params) {
  return new ZodNonOptional({
    type: "nonoptional",
    innerType,
    ...exports_util.normalizeParams(params)
  });
}
var ZodSuccess = /* @__PURE__ */ $constructor("ZodSuccess", (inst, def) => {
  $ZodSuccess.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => successProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function success(innerType) {
  return new ZodSuccess({
    type: "success",
    innerType
  });
}
var ZodCatch = /* @__PURE__ */ $constructor("ZodCatch", (inst, def) => {
  $ZodCatch.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => catchProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
  inst.removeCatch = inst.unwrap;
});
function _catch2(innerType, catchValue) {
  return new ZodCatch({
    type: "catch",
    innerType,
    catchValue: typeof catchValue === "function" ? catchValue : () => catchValue
  });
}
var ZodNaN = /* @__PURE__ */ $constructor("ZodNaN", (inst, def) => {
  $ZodNaN.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => nanProcessor(inst, ctx, json, params);
});
function nan(params) {
  return _nan(ZodNaN, params);
}
var ZodPipe = /* @__PURE__ */ $constructor("ZodPipe", (inst, def) => {
  $ZodPipe.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => pipeProcessor(inst, ctx, json, params);
  inst.in = def.in;
  inst.out = def.out;
});
function pipe(in_, out) {
  return new ZodPipe({
    type: "pipe",
    in: in_,
    out
  });
}
var ZodCodec = /* @__PURE__ */ $constructor("ZodCodec", (inst, def) => {
  ZodPipe.init(inst, def);
  $ZodCodec.init(inst, def);
});
function codec(in_, out, params) {
  return new ZodCodec({
    type: "pipe",
    in: in_,
    out,
    transform: params.decode,
    reverseTransform: params.encode
  });
}
var ZodReadonly = /* @__PURE__ */ $constructor("ZodReadonly", (inst, def) => {
  $ZodReadonly.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => readonlyProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function readonly(innerType) {
  return new ZodReadonly({
    type: "readonly",
    innerType
  });
}
var ZodTemplateLiteral = /* @__PURE__ */ $constructor("ZodTemplateLiteral", (inst, def) => {
  $ZodTemplateLiteral.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => templateLiteralProcessor(inst, ctx, json, params);
});
function templateLiteral(parts, params) {
  return new ZodTemplateLiteral({
    type: "template_literal",
    parts,
    ...exports_util.normalizeParams(params)
  });
}
var ZodLazy = /* @__PURE__ */ $constructor("ZodLazy", (inst, def) => {
  $ZodLazy.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => lazyProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.getter();
});
function lazy(getter) {
  return new ZodLazy({
    type: "lazy",
    getter
  });
}
var ZodPromise = /* @__PURE__ */ $constructor("ZodPromise", (inst, def) => {
  $ZodPromise.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => promiseProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function promise(innerType) {
  return new ZodPromise({
    type: "promise",
    innerType
  });
}
var ZodFunction = /* @__PURE__ */ $constructor("ZodFunction", (inst, def) => {
  $ZodFunction.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => functionProcessor(inst, ctx, json, params);
});
function _function(params) {
  return new ZodFunction({
    type: "function",
    input: Array.isArray(params?.input) ? tuple(params?.input) : params?.input ?? array(unknown()),
    output: params?.output ?? unknown()
  });
}
var ZodCustom = /* @__PURE__ */ $constructor("ZodCustom", (inst, def) => {
  $ZodCustom.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => customProcessor(inst, ctx, json, params);
});
function check(fn) {
  const ch = new $ZodCheck({
    check: "custom"
  });
  ch._zod.check = fn;
  return ch;
}
function custom(fn, _params) {
  return _custom(ZodCustom, fn ?? (() => true), _params);
}
function refine(fn, _params = {}) {
  return _refine(ZodCustom, fn, _params);
}
function superRefine(fn) {
  return _superRefine(fn);
}
var describe2 = describe;
var meta2 = meta;
function _instanceof(cls, params = {}) {
  const inst = new ZodCustom({
    type: "custom",
    check: "custom",
    fn: (data) => data instanceof cls,
    abort: true,
    ...exports_util.normalizeParams(params)
  });
  inst._zod.bag.Class = cls;
  inst._zod.check = (payload) => {
    if (!(payload.value instanceof cls)) {
      payload.issues.push({
        code: "invalid_type",
        expected: cls.name,
        input: payload.value,
        inst,
        path: [...inst._zod.def.path ?? []]
      });
    }
  };
  return inst;
}
var stringbool = (...args) => _stringbool({
  Codec: ZodCodec,
  Boolean: ZodBoolean,
  String: ZodString
}, ...args);
function json(params) {
  const jsonSchema = lazy(() => {
    return union([string2(params), number2(), boolean2(), _null3(), array(jsonSchema), record(string2(), jsonSchema)]);
  });
  return jsonSchema;
}
function preprocess(fn, schema) {
  return pipe(transform(fn), schema);
}
// node_modules/zod/v4/classic/compat.js
var ZodIssueCode = {
  invalid_type: "invalid_type",
  too_big: "too_big",
  too_small: "too_small",
  invalid_format: "invalid_format",
  not_multiple_of: "not_multiple_of",
  unrecognized_keys: "unrecognized_keys",
  invalid_union: "invalid_union",
  invalid_key: "invalid_key",
  invalid_element: "invalid_element",
  invalid_value: "invalid_value",
  custom: "custom"
};
function setErrorMap(map2) {
  config({
    customError: map2
  });
}
function getErrorMap() {
  return config().customError;
}
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
// node_modules/zod/v4/classic/from-json-schema.js
var z = {
  ...exports_schemas2,
  ...exports_checks2,
  iso: exports_iso
};
var RECOGNIZED_KEYS = new Set([
  "$schema",
  "$ref",
  "$defs",
  "definitions",
  "$id",
  "id",
  "$comment",
  "$anchor",
  "$vocabulary",
  "$dynamicRef",
  "$dynamicAnchor",
  "type",
  "enum",
  "const",
  "anyOf",
  "oneOf",
  "allOf",
  "not",
  "properties",
  "required",
  "additionalProperties",
  "patternProperties",
  "propertyNames",
  "minProperties",
  "maxProperties",
  "items",
  "prefixItems",
  "additionalItems",
  "minItems",
  "maxItems",
  "uniqueItems",
  "contains",
  "minContains",
  "maxContains",
  "minLength",
  "maxLength",
  "pattern",
  "format",
  "minimum",
  "maximum",
  "exclusiveMinimum",
  "exclusiveMaximum",
  "multipleOf",
  "description",
  "default",
  "contentEncoding",
  "contentMediaType",
  "contentSchema",
  "unevaluatedItems",
  "unevaluatedProperties",
  "if",
  "then",
  "else",
  "dependentSchemas",
  "dependentRequired",
  "nullable",
  "readOnly"
]);
function detectVersion(schema, defaultTarget) {
  const $schema = schema.$schema;
  if ($schema === "https://json-schema.org/draft/2020-12/schema") {
    return "draft-2020-12";
  }
  if ($schema === "http://json-schema.org/draft-07/schema#") {
    return "draft-7";
  }
  if ($schema === "http://json-schema.org/draft-04/schema#") {
    return "draft-4";
  }
  return defaultTarget ?? "draft-2020-12";
}
function resolveRef(ref, ctx) {
  if (!ref.startsWith("#")) {
    throw new Error("External $ref is not supported, only local refs (#/...) are allowed");
  }
  const path = ref.slice(1).split("/").filter(Boolean);
  if (path.length === 0) {
    return ctx.rootSchema;
  }
  const defsKey = ctx.version === "draft-2020-12" ? "$defs" : "definitions";
  if (path[0] === defsKey) {
    const key = path[1];
    if (!key || !ctx.defs[key]) {
      throw new Error(`Reference not found: ${ref}`);
    }
    return ctx.defs[key];
  }
  throw new Error(`Reference not found: ${ref}`);
}
function convertBaseSchema(schema, ctx) {
  if (schema.not !== undefined) {
    if (typeof schema.not === "object" && Object.keys(schema.not).length === 0) {
      return z.never();
    }
    throw new Error("not is not supported in Zod (except { not: {} } for never)");
  }
  if (schema.unevaluatedItems !== undefined) {
    throw new Error("unevaluatedItems is not supported");
  }
  if (schema.unevaluatedProperties !== undefined) {
    throw new Error("unevaluatedProperties is not supported");
  }
  if (schema.if !== undefined || schema.then !== undefined || schema.else !== undefined) {
    throw new Error("Conditional schemas (if/then/else) are not supported");
  }
  if (schema.dependentSchemas !== undefined || schema.dependentRequired !== undefined) {
    throw new Error("dependentSchemas and dependentRequired are not supported");
  }
  if (schema.$ref) {
    const refPath = schema.$ref;
    if (ctx.refs.has(refPath)) {
      return ctx.refs.get(refPath);
    }
    if (ctx.processing.has(refPath)) {
      return z.lazy(() => {
        if (!ctx.refs.has(refPath)) {
          throw new Error(`Circular reference not resolved: ${refPath}`);
        }
        return ctx.refs.get(refPath);
      });
    }
    ctx.processing.add(refPath);
    const resolved = resolveRef(refPath, ctx);
    const zodSchema2 = convertSchema(resolved, ctx);
    ctx.refs.set(refPath, zodSchema2);
    ctx.processing.delete(refPath);
    return zodSchema2;
  }
  if (schema.enum !== undefined) {
    const enumValues = schema.enum;
    if (ctx.version === "openapi-3.0" && schema.nullable === true && enumValues.length === 1 && enumValues[0] === null) {
      return z.null();
    }
    if (enumValues.length === 0) {
      return z.never();
    }
    if (enumValues.length === 1) {
      return z.literal(enumValues[0]);
    }
    if (enumValues.every((v) => typeof v === "string")) {
      return z.enum(enumValues);
    }
    const literalSchemas = enumValues.map((v) => z.literal(v));
    if (literalSchemas.length < 2) {
      return literalSchemas[0];
    }
    return z.union([literalSchemas[0], literalSchemas[1], ...literalSchemas.slice(2)]);
  }
  if (schema.const !== undefined) {
    return z.literal(schema.const);
  }
  const type = schema.type;
  if (Array.isArray(type)) {
    const typeSchemas = type.map((t) => {
      const typeSchema = { ...schema, type: t };
      return convertBaseSchema(typeSchema, ctx);
    });
    if (typeSchemas.length === 0) {
      return z.never();
    }
    if (typeSchemas.length === 1) {
      return typeSchemas[0];
    }
    return z.union(typeSchemas);
  }
  if (!type) {
    return z.any();
  }
  let zodSchema;
  switch (type) {
    case "string": {
      let stringSchema = z.string();
      if (schema.format) {
        const format = schema.format;
        if (format === "email") {
          stringSchema = stringSchema.check(z.email());
        } else if (format === "uri" || format === "uri-reference") {
          stringSchema = stringSchema.check(z.url());
        } else if (format === "uuid" || format === "guid") {
          stringSchema = stringSchema.check(z.uuid());
        } else if (format === "date-time") {
          stringSchema = stringSchema.check(z.iso.datetime());
        } else if (format === "date") {
          stringSchema = stringSchema.check(z.iso.date());
        } else if (format === "time") {
          stringSchema = stringSchema.check(z.iso.time());
        } else if (format === "duration") {
          stringSchema = stringSchema.check(z.iso.duration());
        } else if (format === "ipv4") {
          stringSchema = stringSchema.check(z.ipv4());
        } else if (format === "ipv6") {
          stringSchema = stringSchema.check(z.ipv6());
        } else if (format === "mac") {
          stringSchema = stringSchema.check(z.mac());
        } else if (format === "cidr") {
          stringSchema = stringSchema.check(z.cidrv4());
        } else if (format === "cidr-v6") {
          stringSchema = stringSchema.check(z.cidrv6());
        } else if (format === "base64") {
          stringSchema = stringSchema.check(z.base64());
        } else if (format === "base64url") {
          stringSchema = stringSchema.check(z.base64url());
        } else if (format === "e164") {
          stringSchema = stringSchema.check(z.e164());
        } else if (format === "jwt") {
          stringSchema = stringSchema.check(z.jwt());
        } else if (format === "emoji") {
          stringSchema = stringSchema.check(z.emoji());
        } else if (format === "nanoid") {
          stringSchema = stringSchema.check(z.nanoid());
        } else if (format === "cuid") {
          stringSchema = stringSchema.check(z.cuid());
        } else if (format === "cuid2") {
          stringSchema = stringSchema.check(z.cuid2());
        } else if (format === "ulid") {
          stringSchema = stringSchema.check(z.ulid());
        } else if (format === "xid") {
          stringSchema = stringSchema.check(z.xid());
        } else if (format === "ksuid") {
          stringSchema = stringSchema.check(z.ksuid());
        }
      }
      if (typeof schema.minLength === "number") {
        stringSchema = stringSchema.min(schema.minLength);
      }
      if (typeof schema.maxLength === "number") {
        stringSchema = stringSchema.max(schema.maxLength);
      }
      if (schema.pattern) {
        stringSchema = stringSchema.regex(new RegExp(schema.pattern));
      }
      zodSchema = stringSchema;
      break;
    }
    case "number":
    case "integer": {
      let numberSchema = type === "integer" ? z.number().int() : z.number();
      if (typeof schema.minimum === "number") {
        numberSchema = numberSchema.min(schema.minimum);
      }
      if (typeof schema.maximum === "number") {
        numberSchema = numberSchema.max(schema.maximum);
      }
      if (typeof schema.exclusiveMinimum === "number") {
        numberSchema = numberSchema.gt(schema.exclusiveMinimum);
      } else if (schema.exclusiveMinimum === true && typeof schema.minimum === "number") {
        numberSchema = numberSchema.gt(schema.minimum);
      }
      if (typeof schema.exclusiveMaximum === "number") {
        numberSchema = numberSchema.lt(schema.exclusiveMaximum);
      } else if (schema.exclusiveMaximum === true && typeof schema.maximum === "number") {
        numberSchema = numberSchema.lt(schema.maximum);
      }
      if (typeof schema.multipleOf === "number") {
        numberSchema = numberSchema.multipleOf(schema.multipleOf);
      }
      zodSchema = numberSchema;
      break;
    }
    case "boolean": {
      zodSchema = z.boolean();
      break;
    }
    case "null": {
      zodSchema = z.null();
      break;
    }
    case "object": {
      const shape = {};
      const properties = schema.properties || {};
      const requiredSet = new Set(schema.required || []);
      for (const [key, propSchema] of Object.entries(properties)) {
        const propZodSchema = convertSchema(propSchema, ctx);
        shape[key] = requiredSet.has(key) ? propZodSchema : propZodSchema.optional();
      }
      if (schema.propertyNames) {
        const keySchema = convertSchema(schema.propertyNames, ctx);
        const valueSchema = schema.additionalProperties && typeof schema.additionalProperties === "object" ? convertSchema(schema.additionalProperties, ctx) : z.any();
        if (Object.keys(shape).length === 0) {
          zodSchema = z.record(keySchema, valueSchema);
          break;
        }
        const objectSchema2 = z.object(shape).passthrough();
        const recordSchema = z.looseRecord(keySchema, valueSchema);
        zodSchema = z.intersection(objectSchema2, recordSchema);
        break;
      }
      if (schema.patternProperties) {
        const patternProps = schema.patternProperties;
        const patternKeys = Object.keys(patternProps);
        const looseRecords = [];
        for (const pattern of patternKeys) {
          const patternValue = convertSchema(patternProps[pattern], ctx);
          const keySchema = z.string().regex(new RegExp(pattern));
          looseRecords.push(z.looseRecord(keySchema, patternValue));
        }
        const schemasToIntersect = [];
        if (Object.keys(shape).length > 0) {
          schemasToIntersect.push(z.object(shape).passthrough());
        }
        schemasToIntersect.push(...looseRecords);
        if (schemasToIntersect.length === 0) {
          zodSchema = z.object({}).passthrough();
        } else if (schemasToIntersect.length === 1) {
          zodSchema = schemasToIntersect[0];
        } else {
          let result = z.intersection(schemasToIntersect[0], schemasToIntersect[1]);
          for (let i = 2;i < schemasToIntersect.length; i++) {
            result = z.intersection(result, schemasToIntersect[i]);
          }
          zodSchema = result;
        }
        break;
      }
      const objectSchema = z.object(shape);
      if (schema.additionalProperties === false) {
        zodSchema = objectSchema.strict();
      } else if (typeof schema.additionalProperties === "object") {
        zodSchema = objectSchema.catchall(convertSchema(schema.additionalProperties, ctx));
      } else {
        zodSchema = objectSchema.passthrough();
      }
      break;
    }
    case "array": {
      const prefixItems = schema.prefixItems;
      const items = schema.items;
      if (prefixItems && Array.isArray(prefixItems)) {
        const tupleItems = prefixItems.map((item) => convertSchema(item, ctx));
        const rest = items && typeof items === "object" && !Array.isArray(items) ? convertSchema(items, ctx) : undefined;
        if (rest) {
          zodSchema = z.tuple(tupleItems).rest(rest);
        } else {
          zodSchema = z.tuple(tupleItems);
        }
        if (typeof schema.minItems === "number") {
          zodSchema = zodSchema.check(z.minLength(schema.minItems));
        }
        if (typeof schema.maxItems === "number") {
          zodSchema = zodSchema.check(z.maxLength(schema.maxItems));
        }
      } else if (Array.isArray(items)) {
        const tupleItems = items.map((item) => convertSchema(item, ctx));
        const rest = schema.additionalItems && typeof schema.additionalItems === "object" ? convertSchema(schema.additionalItems, ctx) : undefined;
        if (rest) {
          zodSchema = z.tuple(tupleItems).rest(rest);
        } else {
          zodSchema = z.tuple(tupleItems);
        }
        if (typeof schema.minItems === "number") {
          zodSchema = zodSchema.check(z.minLength(schema.minItems));
        }
        if (typeof schema.maxItems === "number") {
          zodSchema = zodSchema.check(z.maxLength(schema.maxItems));
        }
      } else if (items !== undefined) {
        const element = convertSchema(items, ctx);
        let arraySchema = z.array(element);
        if (typeof schema.minItems === "number") {
          arraySchema = arraySchema.min(schema.minItems);
        }
        if (typeof schema.maxItems === "number") {
          arraySchema = arraySchema.max(schema.maxItems);
        }
        zodSchema = arraySchema;
      } else {
        zodSchema = z.array(z.any());
      }
      break;
    }
    default:
      throw new Error(`Unsupported type: ${type}`);
  }
  if (schema.description) {
    zodSchema = zodSchema.describe(schema.description);
  }
  if (schema.default !== undefined) {
    zodSchema = zodSchema.default(schema.default);
  }
  return zodSchema;
}
function convertSchema(schema, ctx) {
  if (typeof schema === "boolean") {
    return schema ? z.any() : z.never();
  }
  let baseSchema = convertBaseSchema(schema, ctx);
  const hasExplicitType = schema.type || schema.enum !== undefined || schema.const !== undefined;
  if (schema.anyOf && Array.isArray(schema.anyOf)) {
    const options = schema.anyOf.map((s) => convertSchema(s, ctx));
    const anyOfUnion = z.union(options);
    baseSchema = hasExplicitType ? z.intersection(baseSchema, anyOfUnion) : anyOfUnion;
  }
  if (schema.oneOf && Array.isArray(schema.oneOf)) {
    const options = schema.oneOf.map((s) => convertSchema(s, ctx));
    const oneOfUnion = z.xor(options);
    baseSchema = hasExplicitType ? z.intersection(baseSchema, oneOfUnion) : oneOfUnion;
  }
  if (schema.allOf && Array.isArray(schema.allOf)) {
    if (schema.allOf.length === 0) {
      baseSchema = hasExplicitType ? baseSchema : z.any();
    } else {
      let result = hasExplicitType ? baseSchema : convertSchema(schema.allOf[0], ctx);
      const startIdx = hasExplicitType ? 0 : 1;
      for (let i = startIdx;i < schema.allOf.length; i++) {
        result = z.intersection(result, convertSchema(schema.allOf[i], ctx));
      }
      baseSchema = result;
    }
  }
  if (schema.nullable === true && ctx.version === "openapi-3.0") {
    baseSchema = z.nullable(baseSchema);
  }
  if (schema.readOnly === true) {
    baseSchema = z.readonly(baseSchema);
  }
  const extraMeta = {};
  const coreMetadataKeys = ["$id", "id", "$comment", "$anchor", "$vocabulary", "$dynamicRef", "$dynamicAnchor"];
  for (const key of coreMetadataKeys) {
    if (key in schema) {
      extraMeta[key] = schema[key];
    }
  }
  const contentMetadataKeys = ["contentEncoding", "contentMediaType", "contentSchema"];
  for (const key of contentMetadataKeys) {
    if (key in schema) {
      extraMeta[key] = schema[key];
    }
  }
  for (const key of Object.keys(schema)) {
    if (!RECOGNIZED_KEYS.has(key)) {
      extraMeta[key] = schema[key];
    }
  }
  if (Object.keys(extraMeta).length > 0) {
    ctx.registry.add(baseSchema, extraMeta);
  }
  return baseSchema;
}
function fromJSONSchema(schema, params) {
  if (typeof schema === "boolean") {
    return schema ? z.any() : z.never();
  }
  const version2 = detectVersion(schema, params?.defaultTarget);
  const defs = schema.$defs || schema.definitions || {};
  const ctx = {
    version: version2,
    defs,
    refs: new Map,
    processing: new Set,
    rootSchema: schema,
    registry: params?.registry ?? globalRegistry
  };
  return convertSchema(schema, ctx);
}
// node_modules/zod/v4/classic/coerce.js
var exports_coerce = {};
__export(exports_coerce, {
  string: () => string3,
  number: () => number3,
  date: () => date4,
  boolean: () => boolean3,
  bigint: () => bigint3
});
function string3(params) {
  return _coercedString(ZodString, params);
}
function number3(params) {
  return _coercedNumber(ZodNumber, params);
}
function boolean3(params) {
  return _coercedBoolean(ZodBoolean, params);
}
function bigint3(params) {
  return _coercedBigint(ZodBigInt, params);
}
function date4(params) {
  return _coercedDate(ZodDate, params);
}

// node_modules/zod/v4/classic/external.js
config(en_default());
// src/config.ts
var PermissionModeSchema = exports_external.enum([
  "default",
  "acceptEdits",
  "bypassPermissions",
  "plan",
  "delegate",
  "dontAsk"
]);
var LinearConfigSchema = exports_external.object({
  enabled: exports_external.boolean().default(false),
  teamId: exports_external.string().optional(),
  projectId: exports_external.string().optional(),
  userId: exports_external.string().optional(),
  statusMap: exports_external.object({
    pending: exports_external.string().optional(),
    "in-progress": exports_external.string().optional(),
    completed: exports_external.string().optional(),
    failed: exports_external.string().optional(),
    review: exports_external.string().optional()
  }).optional()
});
var CommentCheckerConfigSchema = exports_external.object({
  enabled: exports_external.boolean().default(true),
  binaryPath: exports_external.string().optional(),
  customPrompt: exports_external.string().optional()
});
var NudgeConfigSchema = exports_external.object({
  enabled: exports_external.boolean().default(true),
  maxRetries: exports_external.number().int().min(1).max(10).default(3)
});
var IterationScalingConfigSchema = exports_external.object({
  enabled: exports_external.boolean().default(true),
  base: exports_external.number().int().min(1).default(2),
  factor: exports_external.number().min(0).max(2).default(0.8)
});
var FractalPlannerConfigBaseSchema = exports_external.object({
  maxComplexity: exports_external.number().int().min(1).max(10).default(3),
  maxIterations: exports_external.number().int().min(1).default(3),
  maxParallelTasks: exports_external.number().int().min(1).default(1),
  researchOnly: exports_external.boolean().default(false),
  planOnly: exports_external.boolean().default(false),
  skipPlanReview: exports_external.boolean().default(false),
  skipApproachReview: exports_external.boolean().default(false),
  preAnalysis: exports_external.boolean().default(true),
  enableAgentTeams: exports_external.boolean().default(true),
  noCommit: exports_external.boolean().default(false),
  plansDir: exports_external.string().default(".fractal-planner/plans"),
  permissionMode: PermissionModeSchema.default("default"),
  linear: LinearConfigSchema.default({ enabled: false }),
  commentChecker: CommentCheckerConfigSchema.default({ enabled: true }),
  nudge: NudgeConfigSchema.default({ enabled: true, maxRetries: 3 }),
  cliRunner: exports_external.enum(["bun", "node", "auto"]).default("auto"),
  iterationScaling: IterationScalingConfigSchema.default({ enabled: true, base: 2, factor: 0.8 }),
  executionOrder: exports_external.enum(["risk-first", "easy-first", "document-order"]).default("document-order")
});
var FractalPlannerConfigSchema = FractalPlannerConfigBaseSchema.refine((cfg) => !cfg.linear.enabled || cfg.linear.teamId, { message: "linear.teamId is required when linear.enabled is true", path: ["linear", "teamId"] });
var FractalPlannerConfigFileSchema = FractalPlannerConfigBaseSchema.partial();
var DEFAULT_CONFIG = FractalPlannerConfigSchema.parse({});
var cachedConfig = null;
function getUserConfigPath() {
  const xdgBase = process.env.XDG_CONFIG_HOME || join(homedir(), ".config");
  return join(xdgBase, "fractal-planner", "config.json");
}
function getProjectConfigPath() {
  return join(process.cwd(), ".fractal-planner", "config.json");
}
async function readConfigFile(filePath) {
  let content;
  try {
    content = await readFile(filePath, "utf-8");
  } catch (err) {
    if (err?.code === "ENOENT")
      return {};
    throw new Error(`Cannot read config file ${filePath}: ${err.message}`);
  }
  let raw;
  try {
    raw = JSON.parse(content);
  } catch {
    throw new Error(`Invalid JSON in config file ${filePath}`);
  }
  const result = FractalPlannerConfigFileSchema.safeParse(raw);
  if (!result.success) {
    throw new Error(`Invalid config in ${filePath}:
${result.error.issues.map((i) => `  - ${i.path.join(".")}: ${i.message}`).join(`
`)}`);
  }
  return result.data;
}
async function loadConfig(overrides) {
  const userConfig = await readConfigFile(getUserConfigPath());
  const projectConfig = await readConfigFile(getProjectConfigPath());
  cachedConfig = FractalPlannerConfigSchema.parse({
    ...userConfig,
    ...projectConfig,
    ...overrides
  });
  return cachedConfig;
}
function getConfig() {
  if (!cachedConfig) {
    throw new Error("Config not loaded. Call loadConfig() before getConfig().");
  }
  return cachedConfig;
}
function resetConfig() {
  cachedConfig = null;
}
// node_modules/@anthropic-ai/claude-agent-sdk/sdk.mjs
import { join as az } from "path";
import { fileURLToPath as yI } from "url";
import { setMaxListeners as qK } from "events";
import { spawn as YV } from "child_process";
import { createInterface as WV } from "readline";
import * as h from "fs";
import { stat as mU, readdir as cU, unlink as pU, rmdir as dU, rm as iU, open as VP } from "fs/promises";
import { join as ZU } from "path";
import { homedir as CU } from "os";
import { dirname as K9, join as WW } from "path";
import { cwd as kU } from "process";
import { realpathSync as s7 } from "fs";
import { randomUUID as vU } from "crypto";
import { randomUUID as sU } from "crypto";
import { appendFileSync as eU, existsSync as XV, mkdirSync as QV } from "fs";
import { join as BW } from "path";
import { randomUUID as GV } from "crypto";
var BK = Object.create;
var { getPrototypeOf: zK, defineProperty: W9, getOwnPropertyNames: KK } = Object;
var UK = Object.prototype.hasOwnProperty;
var U7 = (X, Q, $) => {
  $ = X != null ? BK(zK(X)) : {};
  let Y = Q || !X || !X.__esModule ? W9($, "default", { value: X, enumerable: true }) : $;
  for (let W of KK(X))
    if (!UK.call(Y, W))
      W9(Y, W, { get: () => X[W], enumerable: true });
  return Y;
};
var P = (X, Q) => () => (Q || X((Q = { exports: {} }).exports, Q), Q.exports);
var V7 = (X, Q) => {
  for (var $ in Q)
    W9(X, $, { get: Q[$], enumerable: true, configurable: true, set: (Y) => Q[$] = () => Y });
};
var VK = Symbol.dispose || Symbol.for("Symbol.dispose");
var LK = Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose");
var fX = P((GG) => {
  Object.defineProperty(GG, "__esModule", { value: true });
  GG.regexpCode = GG.getEsmExportName = GG.getProperty = GG.safeStringify = GG.stringify = GG.strConcat = GG.addCodeArg = GG.str = GG._ = GG.nil = GG._Code = GG.Name = GG.IDENTIFIER = GG._CodeOrName = undefined;

  class w8 {
  }
  GG._CodeOrName = w8;
  GG.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;

  class h6 extends w8 {
    constructor(X) {
      super();
      if (!GG.IDENTIFIER.test(X))
        throw Error("CodeGen: name must be a valid identifier");
      this.str = X;
    }
    toString() {
      return this.str;
    }
    emptyStr() {
      return false;
    }
    get names() {
      return { [this.str]: 1 };
    }
  }
  GG.Name = h6;

  class s0 extends w8 {
    constructor(X) {
      super();
      this._items = typeof X === "string" ? [X] : X;
    }
    toString() {
      return this.str;
    }
    emptyStr() {
      if (this._items.length > 1)
        return false;
      let X = this._items[0];
      return X === "" || X === '""';
    }
    get str() {
      var X;
      return (X = this._str) !== null && X !== undefined ? X : this._str = this._items.reduce((Q, $) => `${Q}${$}`, "");
    }
    get names() {
      var X;
      return (X = this._names) !== null && X !== undefined ? X : this._names = this._items.reduce((Q, $) => {
        if ($ instanceof h6)
          Q[$.str] = (Q[$.str] || 0) + 1;
        return Q;
      }, {});
    }
  }
  GG._Code = s0;
  GG.nil = new s0("");
  function WG(X, ...Q) {
    let $ = [X[0]], Y = 0;
    while (Y < Q.length)
      e$($, Q[Y]), $.push(X[++Y]);
    return new s0($);
  }
  GG._ = WG;
  var s$ = new s0("+");
  function JG(X, ...Q) {
    let $ = [gX(X[0])], Y = 0;
    while (Y < Q.length)
      $.push(s$), e$($, Q[Y]), $.push(s$, gX(X[++Y]));
    return AN($), new s0($);
  }
  GG.str = JG;
  function e$(X, Q) {
    if (Q instanceof s0)
      X.push(...Q._items);
    else if (Q instanceof h6)
      X.push(Q);
    else
      X.push(RN(Q));
  }
  GG.addCodeArg = e$;
  function AN(X) {
    let Q = 1;
    while (Q < X.length - 1) {
      if (X[Q] === s$) {
        let $ = MN(X[Q - 1], X[Q + 1]);
        if ($ !== undefined) {
          X.splice(Q - 1, 3, $);
          continue;
        }
        X[Q++] = "+";
      }
      Q++;
    }
  }
  function MN(X, Q) {
    if (Q === '""')
      return X;
    if (X === '""')
      return Q;
    if (typeof X == "string") {
      if (Q instanceof h6 || X[X.length - 1] !== '"')
        return;
      if (typeof Q != "string")
        return `${X.slice(0, -1)}${Q}"`;
      if (Q[0] === '"')
        return X.slice(0, -1) + Q.slice(1);
      return;
    }
    if (typeof Q == "string" && Q[0] === '"' && !(X instanceof h6))
      return `"${X}${Q.slice(1)}`;
    return;
  }
  function jN(X, Q) {
    return Q.emptyStr() ? X : X.emptyStr() ? Q : JG`${X}${Q}`;
  }
  GG.strConcat = jN;
  function RN(X) {
    return typeof X == "number" || typeof X == "boolean" || X === null ? X : gX(Array.isArray(X) ? X.join(",") : X);
  }
  function IN(X) {
    return new s0(gX(X));
  }
  GG.stringify = IN;
  function gX(X) {
    return JSON.stringify(X).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
  }
  GG.safeStringify = gX;
  function EN(X) {
    return typeof X == "string" && GG.IDENTIFIER.test(X) ? new s0(`.${X}`) : WG`[${X}]`;
  }
  GG.getProperty = EN;
  function bN(X) {
    if (typeof X == "string" && GG.IDENTIFIER.test(X))
      return new s0(`${X}`);
    throw Error(`CodeGen: invalid export name: ${X}, use explicit $id name mapping`);
  }
  GG.getEsmExportName = bN;
  function PN(X) {
    return new s0(X.toString());
  }
  GG.regexpCode = PN;
});
var YY = P((KG) => {
  Object.defineProperty(KG, "__esModule", { value: true });
  KG.ValueScope = KG.ValueScopeName = KG.Scope = KG.varKinds = KG.UsedValueState = undefined;
  var x0 = fX();

  class BG extends Error {
    constructor(X) {
      super(`CodeGen: "code" for ${X} not defined`);
      this.value = X.value;
    }
  }
  var M8;
  (function(X) {
    X[X.Started = 0] = "Started", X[X.Completed = 1] = "Completed";
  })(M8 || (KG.UsedValueState = M8 = {}));
  KG.varKinds = { const: new x0.Name("const"), let: new x0.Name("let"), var: new x0.Name("var") };

  class QY {
    constructor({ prefixes: X, parent: Q } = {}) {
      this._names = {}, this._prefixes = X, this._parent = Q;
    }
    toName(X) {
      return X instanceof x0.Name ? X : this.name(X);
    }
    name(X) {
      return new x0.Name(this._newName(X));
    }
    _newName(X) {
      let Q = this._names[X] || this._nameGroup(X);
      return `${X}${Q.index++}`;
    }
    _nameGroup(X) {
      var Q, $;
      if ((($ = (Q = this._parent) === null || Q === undefined ? undefined : Q._prefixes) === null || $ === undefined ? undefined : $.has(X)) || this._prefixes && !this._prefixes.has(X))
        throw Error(`CodeGen: prefix "${X}" is not allowed in this scope`);
      return this._names[X] = { prefix: X, index: 0 };
    }
  }
  KG.Scope = QY;

  class $Y extends x0.Name {
    constructor(X, Q) {
      super(Q);
      this.prefix = X;
    }
    setValue(X, { property: Q, itemIndex: $ }) {
      this.value = X, this.scopePath = x0._`.${new x0.Name(Q)}[${$}]`;
    }
  }
  KG.ValueScopeName = $Y;
  var uN = x0._`\n`;

  class zG extends QY {
    constructor(X) {
      super(X);
      this._values = {}, this._scope = X.scope, this.opts = { ...X, _n: X.lines ? uN : x0.nil };
    }
    get() {
      return this._scope;
    }
    name(X) {
      return new $Y(X, this._newName(X));
    }
    value(X, Q) {
      var $;
      if (Q.ref === undefined)
        throw Error("CodeGen: ref must be passed in value");
      let Y = this.toName(X), { prefix: W } = Y, J = ($ = Q.key) !== null && $ !== undefined ? $ : Q.ref, G = this._values[W];
      if (G) {
        let z2 = G.get(J);
        if (z2)
          return z2;
      } else
        G = this._values[W] = new Map;
      G.set(J, Y);
      let H = this._scope[W] || (this._scope[W] = []), B = H.length;
      return H[B] = Q.ref, Y.setValue(Q, { property: W, itemIndex: B }), Y;
    }
    getValue(X, Q) {
      let $ = this._values[X];
      if (!$)
        return;
      return $.get(Q);
    }
    scopeRefs(X, Q = this._values) {
      return this._reduceValues(Q, ($) => {
        if ($.scopePath === undefined)
          throw Error(`CodeGen: name "${$}" has no value`);
        return x0._`${X}${$.scopePath}`;
      });
    }
    scopeCode(X = this._values, Q, $) {
      return this._reduceValues(X, (Y) => {
        if (Y.value === undefined)
          throw Error(`CodeGen: name "${Y}" has no value`);
        return Y.value.code;
      }, Q, $);
    }
    _reduceValues(X, Q, $ = {}, Y) {
      let W = x0.nil;
      for (let J in X) {
        let G = X[J];
        if (!G)
          continue;
        let H = $[J] = $[J] || new Map;
        G.forEach((B) => {
          if (H.has(B))
            return;
          H.set(B, M8.Started);
          let z2 = Q(B);
          if (z2) {
            let K = this.opts.es5 ? KG.varKinds.var : KG.varKinds.const;
            W = x0._`${W}${K} ${B} = ${z2};${this.opts._n}`;
          } else if (z2 = Y === null || Y === undefined ? undefined : Y(B))
            W = x0._`${W}${z2}${this.opts._n}`;
          else
            throw new BG(B);
          H.set(B, M8.Completed);
        });
      }
      return W;
    }
  }
  KG.ValueScope = zG;
});
var p = P((y0) => {
  Object.defineProperty(y0, "__esModule", { value: true });
  y0.or = y0.and = y0.not = y0.CodeGen = y0.operators = y0.varKinds = y0.ValueScopeName = y0.ValueScope = y0.Scope = y0.Name = y0.regexpCode = y0.stringify = y0.getProperty = y0.nil = y0.strConcat = y0.str = y0._ = undefined;
  var t = fX(), e0 = YY(), l1 = fX();
  Object.defineProperty(y0, "_", { enumerable: true, get: function() {
    return l1._;
  } });
  Object.defineProperty(y0, "str", { enumerable: true, get: function() {
    return l1.str;
  } });
  Object.defineProperty(y0, "strConcat", { enumerable: true, get: function() {
    return l1.strConcat;
  } });
  Object.defineProperty(y0, "nil", { enumerable: true, get: function() {
    return l1.nil;
  } });
  Object.defineProperty(y0, "getProperty", { enumerable: true, get: function() {
    return l1.getProperty;
  } });
  Object.defineProperty(y0, "stringify", { enumerable: true, get: function() {
    return l1.stringify;
  } });
  Object.defineProperty(y0, "regexpCode", { enumerable: true, get: function() {
    return l1.regexpCode;
  } });
  Object.defineProperty(y0, "Name", { enumerable: true, get: function() {
    return l1.Name;
  } });
  var P8 = YY();
  Object.defineProperty(y0, "Scope", { enumerable: true, get: function() {
    return P8.Scope;
  } });
  Object.defineProperty(y0, "ValueScope", { enumerable: true, get: function() {
    return P8.ValueScope;
  } });
  Object.defineProperty(y0, "ValueScopeName", { enumerable: true, get: function() {
    return P8.ValueScopeName;
  } });
  Object.defineProperty(y0, "varKinds", { enumerable: true, get: function() {
    return P8.varKinds;
  } });
  y0.operators = { GT: new t._Code(">"), GTE: new t._Code(">="), LT: new t._Code("<"), LTE: new t._Code("<="), EQ: new t._Code("==="), NEQ: new t._Code("!=="), NOT: new t._Code("!"), OR: new t._Code("||"), AND: new t._Code("&&"), ADD: new t._Code("+") };

  class m1 {
    optimizeNodes() {
      return this;
    }
    optimizeNames(X, Q) {
      return this;
    }
  }

  class VG extends m1 {
    constructor(X, Q, $) {
      super();
      this.varKind = X, this.name = Q, this.rhs = $;
    }
    render({ es5: X, _n: Q }) {
      let $ = X ? e0.varKinds.var : this.varKind, Y = this.rhs === undefined ? "" : ` = ${this.rhs}`;
      return `${$} ${this.name}${Y};` + Q;
    }
    optimizeNames(X, Q) {
      if (!X[this.name.str])
        return;
      if (this.rhs)
        this.rhs = l6(this.rhs, X, Q);
      return this;
    }
    get names() {
      return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
    }
  }

  class GY extends m1 {
    constructor(X, Q, $) {
      super();
      this.lhs = X, this.rhs = Q, this.sideEffects = $;
    }
    render({ _n: X }) {
      return `${this.lhs} = ${this.rhs};` + X;
    }
    optimizeNames(X, Q) {
      if (this.lhs instanceof t.Name && !X[this.lhs.str] && !this.sideEffects)
        return;
      return this.rhs = l6(this.rhs, X, Q), this;
    }
    get names() {
      let X = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
      return b8(X, this.rhs);
    }
  }

  class LG extends GY {
    constructor(X, Q, $, Y) {
      super(X, $, Y);
      this.op = Q;
    }
    render({ _n: X }) {
      return `${this.lhs} ${this.op}= ${this.rhs};` + X;
    }
  }

  class qG extends m1 {
    constructor(X) {
      super();
      this.label = X, this.names = {};
    }
    render({ _n: X }) {
      return `${this.label}:` + X;
    }
  }

  class FG extends m1 {
    constructor(X) {
      super();
      this.label = X, this.names = {};
    }
    render({ _n: X }) {
      return `break${this.label ? ` ${this.label}` : ""};` + X;
    }
  }

  class NG extends m1 {
    constructor(X) {
      super();
      this.error = X;
    }
    render({ _n: X }) {
      return `throw ${this.error};` + X;
    }
    get names() {
      return this.error.names;
    }
  }

  class OG extends m1 {
    constructor(X) {
      super();
      this.code = X;
    }
    render({ _n: X }) {
      return `${this.code};` + X;
    }
    optimizeNodes() {
      return `${this.code}` ? this : undefined;
    }
    optimizeNames(X, Q) {
      return this.code = l6(this.code, X, Q), this;
    }
    get names() {
      return this.code instanceof t._CodeOrName ? this.code.names : {};
    }
  }

  class S8 extends m1 {
    constructor(X = []) {
      super();
      this.nodes = X;
    }
    render(X) {
      return this.nodes.reduce((Q, $) => Q + $.render(X), "");
    }
    optimizeNodes() {
      let { nodes: X } = this, Q = X.length;
      while (Q--) {
        let $ = X[Q].optimizeNodes();
        if (Array.isArray($))
          X.splice(Q, 1, ...$);
        else if ($)
          X[Q] = $;
        else
          X.splice(Q, 1);
      }
      return X.length > 0 ? this : undefined;
    }
    optimizeNames(X, Q) {
      let { nodes: $ } = this, Y = $.length;
      while (Y--) {
        let W = $[Y];
        if (W.optimizeNames(X, Q))
          continue;
        pN(X, W.names), $.splice(Y, 1);
      }
      return $.length > 0 ? this : undefined;
    }
    get names() {
      return this.nodes.reduce((X, Q) => H6(X, Q.names), {});
    }
  }

  class c1 extends S8 {
    render(X) {
      return "{" + X._n + super.render(X) + "}" + X._n;
    }
  }

  class DG extends S8 {
  }

  class hX extends c1 {
  }
  hX.kind = "else";

  class j1 extends c1 {
    constructor(X, Q) {
      super(Q);
      this.condition = X;
    }
    render(X) {
      let Q = `if(${this.condition})` + super.render(X);
      if (this.else)
        Q += "else " + this.else.render(X);
      return Q;
    }
    optimizeNodes() {
      super.optimizeNodes();
      let X = this.condition;
      if (X === true)
        return this.nodes;
      let Q = this.else;
      if (Q) {
        let $ = Q.optimizeNodes();
        Q = this.else = Array.isArray($) ? new hX($) : $;
      }
      if (Q) {
        if (X === false)
          return Q instanceof j1 ? Q : Q.nodes;
        if (this.nodes.length)
          return this;
        return new j1(RG(X), Q instanceof j1 ? [Q] : Q.nodes);
      }
      if (X === false || !this.nodes.length)
        return;
      return this;
    }
    optimizeNames(X, Q) {
      var $;
      if (this.else = ($ = this.else) === null || $ === undefined ? undefined : $.optimizeNames(X, Q), !(super.optimizeNames(X, Q) || this.else))
        return;
      return this.condition = l6(this.condition, X, Q), this;
    }
    get names() {
      let X = super.names;
      if (b8(X, this.condition), this.else)
        H6(X, this.else.names);
      return X;
    }
  }
  j1.kind = "if";

  class u6 extends c1 {
  }
  u6.kind = "for";

  class wG extends u6 {
    constructor(X) {
      super();
      this.iteration = X;
    }
    render(X) {
      return `for(${this.iteration})` + super.render(X);
    }
    optimizeNames(X, Q) {
      if (!super.optimizeNames(X, Q))
        return;
      return this.iteration = l6(this.iteration, X, Q), this;
    }
    get names() {
      return H6(super.names, this.iteration.names);
    }
  }

  class AG extends u6 {
    constructor(X, Q, $, Y) {
      super();
      this.varKind = X, this.name = Q, this.from = $, this.to = Y;
    }
    render(X) {
      let Q = X.es5 ? e0.varKinds.var : this.varKind, { name: $, from: Y, to: W } = this;
      return `for(${Q} ${$}=${Y}; ${$}<${W}; ${$}++)` + super.render(X);
    }
    get names() {
      let X = b8(super.names, this.from);
      return b8(X, this.to);
    }
  }

  class WY extends u6 {
    constructor(X, Q, $, Y) {
      super();
      this.loop = X, this.varKind = Q, this.name = $, this.iterable = Y;
    }
    render(X) {
      return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(X);
    }
    optimizeNames(X, Q) {
      if (!super.optimizeNames(X, Q))
        return;
      return this.iterable = l6(this.iterable, X, Q), this;
    }
    get names() {
      return H6(super.names, this.iterable.names);
    }
  }

  class j8 extends c1 {
    constructor(X, Q, $) {
      super();
      this.name = X, this.args = Q, this.async = $;
    }
    render(X) {
      return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(X);
    }
  }
  j8.kind = "func";

  class R8 extends S8 {
    render(X) {
      return "return " + super.render(X);
    }
  }
  R8.kind = "return";

  class MG extends c1 {
    render(X) {
      let Q = "try" + super.render(X);
      if (this.catch)
        Q += this.catch.render(X);
      if (this.finally)
        Q += this.finally.render(X);
      return Q;
    }
    optimizeNodes() {
      var X, Q;
      return super.optimizeNodes(), (X = this.catch) === null || X === undefined || X.optimizeNodes(), (Q = this.finally) === null || Q === undefined || Q.optimizeNodes(), this;
    }
    optimizeNames(X, Q) {
      var $, Y;
      return super.optimizeNames(X, Q), ($ = this.catch) === null || $ === undefined || $.optimizeNames(X, Q), (Y = this.finally) === null || Y === undefined || Y.optimizeNames(X, Q), this;
    }
    get names() {
      let X = super.names;
      if (this.catch)
        H6(X, this.catch.names);
      if (this.finally)
        H6(X, this.finally.names);
      return X;
    }
  }

  class I8 extends c1 {
    constructor(X) {
      super();
      this.error = X;
    }
    render(X) {
      return `catch(${this.error})` + super.render(X);
    }
  }
  I8.kind = "catch";

  class E8 extends c1 {
    render(X) {
      return "finally" + super.render(X);
    }
  }
  E8.kind = "finally";

  class jG {
    constructor(X, Q = {}) {
      this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...Q, _n: Q.lines ? `
` : "" }, this._extScope = X, this._scope = new e0.Scope({ parent: X }), this._nodes = [new DG];
    }
    toString() {
      return this._root.render(this.opts);
    }
    name(X) {
      return this._scope.name(X);
    }
    scopeName(X) {
      return this._extScope.name(X);
    }
    scopeValue(X, Q) {
      let $ = this._extScope.value(X, Q);
      return (this._values[$.prefix] || (this._values[$.prefix] = new Set)).add($), $;
    }
    getScopeValue(X, Q) {
      return this._extScope.getValue(X, Q);
    }
    scopeRefs(X) {
      return this._extScope.scopeRefs(X, this._values);
    }
    scopeCode() {
      return this._extScope.scopeCode(this._values);
    }
    _def(X, Q, $, Y) {
      let W = this._scope.toName(Q);
      if ($ !== undefined && Y)
        this._constants[W.str] = $;
      return this._leafNode(new VG(X, W, $)), W;
    }
    const(X, Q, $) {
      return this._def(e0.varKinds.const, X, Q, $);
    }
    let(X, Q, $) {
      return this._def(e0.varKinds.let, X, Q, $);
    }
    var(X, Q, $) {
      return this._def(e0.varKinds.var, X, Q, $);
    }
    assign(X, Q, $) {
      return this._leafNode(new GY(X, Q, $));
    }
    add(X, Q) {
      return this._leafNode(new LG(X, y0.operators.ADD, Q));
    }
    code(X) {
      if (typeof X == "function")
        X();
      else if (X !== t.nil)
        this._leafNode(new OG(X));
      return this;
    }
    object(...X) {
      let Q = ["{"];
      for (let [$, Y] of X) {
        if (Q.length > 1)
          Q.push(",");
        if (Q.push($), $ !== Y || this.opts.es5)
          Q.push(":"), (0, t.addCodeArg)(Q, Y);
      }
      return Q.push("}"), new t._Code(Q);
    }
    if(X, Q, $) {
      if (this._blockNode(new j1(X)), Q && $)
        this.code(Q).else().code($).endIf();
      else if (Q)
        this.code(Q).endIf();
      else if ($)
        throw Error('CodeGen: "else" body without "then" body');
      return this;
    }
    elseIf(X) {
      return this._elseNode(new j1(X));
    }
    else() {
      return this._elseNode(new hX);
    }
    endIf() {
      return this._endBlockNode(j1, hX);
    }
    _for(X, Q) {
      if (this._blockNode(X), Q)
        this.code(Q).endFor();
      return this;
    }
    for(X, Q) {
      return this._for(new wG(X), Q);
    }
    forRange(X, Q, $, Y, W = this.opts.es5 ? e0.varKinds.var : e0.varKinds.let) {
      let J = this._scope.toName(X);
      return this._for(new AG(W, J, Q, $), () => Y(J));
    }
    forOf(X, Q, $, Y = e0.varKinds.const) {
      let W = this._scope.toName(X);
      if (this.opts.es5) {
        let J = Q instanceof t.Name ? Q : this.var("_arr", Q);
        return this.forRange("_i", 0, t._`${J}.length`, (G) => {
          this.var(W, t._`${J}[${G}]`), $(W);
        });
      }
      return this._for(new WY("of", Y, W, Q), () => $(W));
    }
    forIn(X, Q, $, Y = this.opts.es5 ? e0.varKinds.var : e0.varKinds.const) {
      if (this.opts.ownProperties)
        return this.forOf(X, t._`Object.keys(${Q})`, $);
      let W = this._scope.toName(X);
      return this._for(new WY("in", Y, W, Q), () => $(W));
    }
    endFor() {
      return this._endBlockNode(u6);
    }
    label(X) {
      return this._leafNode(new qG(X));
    }
    break(X) {
      return this._leafNode(new FG(X));
    }
    return(X) {
      let Q = new R8;
      if (this._blockNode(Q), this.code(X), Q.nodes.length !== 1)
        throw Error('CodeGen: "return" should have one node');
      return this._endBlockNode(R8);
    }
    try(X, Q, $) {
      if (!Q && !$)
        throw Error('CodeGen: "try" without "catch" and "finally"');
      let Y = new MG;
      if (this._blockNode(Y), this.code(X), Q) {
        let W = this.name("e");
        this._currNode = Y.catch = new I8(W), Q(W);
      }
      if ($)
        this._currNode = Y.finally = new E8, this.code($);
      return this._endBlockNode(I8, E8);
    }
    throw(X) {
      return this._leafNode(new NG(X));
    }
    block(X, Q) {
      if (this._blockStarts.push(this._nodes.length), X)
        this.code(X).endBlock(Q);
      return this;
    }
    endBlock(X) {
      let Q = this._blockStarts.pop();
      if (Q === undefined)
        throw Error("CodeGen: not in self-balancing block");
      let $ = this._nodes.length - Q;
      if ($ < 0 || X !== undefined && $ !== X)
        throw Error(`CodeGen: wrong number of nodes: ${$} vs ${X} expected`);
      return this._nodes.length = Q, this;
    }
    func(X, Q = t.nil, $, Y) {
      if (this._blockNode(new j8(X, Q, $)), Y)
        this.code(Y).endFunc();
      return this;
    }
    endFunc() {
      return this._endBlockNode(j8);
    }
    optimize(X = 1) {
      while (X-- > 0)
        this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
    }
    _leafNode(X) {
      return this._currNode.nodes.push(X), this;
    }
    _blockNode(X) {
      this._currNode.nodes.push(X), this._nodes.push(X);
    }
    _endBlockNode(X, Q) {
      let $ = this._currNode;
      if ($ instanceof X || Q && $ instanceof Q)
        return this._nodes.pop(), this;
      throw Error(`CodeGen: not in block "${Q ? `${X.kind}/${Q.kind}` : X.kind}"`);
    }
    _elseNode(X) {
      let Q = this._currNode;
      if (!(Q instanceof j1))
        throw Error('CodeGen: "else" without "if"');
      return this._currNode = Q.else = X, this;
    }
    get _root() {
      return this._nodes[0];
    }
    get _currNode() {
      let X = this._nodes;
      return X[X.length - 1];
    }
    set _currNode(X) {
      let Q = this._nodes;
      Q[Q.length - 1] = X;
    }
  }
  y0.CodeGen = jG;
  function H6(X, Q) {
    for (let $ in Q)
      X[$] = (X[$] || 0) + (Q[$] || 0);
    return X;
  }
  function b8(X, Q) {
    return Q instanceof t._CodeOrName ? H6(X, Q.names) : X;
  }
  function l6(X, Q, $) {
    if (X instanceof t.Name)
      return Y(X);
    if (!W(X))
      return X;
    return new t._Code(X._items.reduce((J, G) => {
      if (G instanceof t.Name)
        G = Y(G);
      if (G instanceof t._Code)
        J.push(...G._items);
      else
        J.push(G);
      return J;
    }, []));
    function Y(J) {
      let G = $[J.str];
      if (G === undefined || Q[J.str] !== 1)
        return J;
      return delete Q[J.str], G;
    }
    function W(J) {
      return J instanceof t._Code && J._items.some((G) => G instanceof t.Name && Q[G.str] === 1 && $[G.str] !== undefined);
    }
  }
  function pN(X, Q) {
    for (let $ in Q)
      X[$] = (X[$] || 0) - (Q[$] || 0);
  }
  function RG(X) {
    return typeof X == "boolean" || typeof X == "number" || X === null ? !X : t._`!${JY(X)}`;
  }
  y0.not = RG;
  var dN = IG(y0.operators.AND);
  function iN(...X) {
    return X.reduce(dN);
  }
  y0.and = iN;
  var nN = IG(y0.operators.OR);
  function rN(...X) {
    return X.reduce(nN);
  }
  y0.or = rN;
  function IG(X) {
    return (Q, $) => Q === t.nil ? $ : $ === t.nil ? Q : t._`${JY(Q)} ${X} ${JY($)}`;
  }
  function JY(X) {
    return X instanceof t.Name ? X : t._`(${X})`;
  }
});
var e = P((TG) => {
  Object.defineProperty(TG, "__esModule", { value: true });
  TG.checkStrictMode = TG.getErrorPath = TG.Type = TG.useFunc = TG.setEvaluated = TG.evaluatedPropsToName = TG.mergeEvaluated = TG.eachItem = TG.unescapeJsonPointer = TG.escapeJsonPointer = TG.escapeFragment = TG.unescapeFragment = TG.schemaRefOrVal = TG.schemaHasRulesButRef = TG.schemaHasRules = TG.checkUnknownRules = TG.alwaysValidSchema = TG.toHash = undefined;
  var $0 = p(), sN = fX();
  function eN(X) {
    let Q = {};
    for (let $ of X)
      Q[$] = true;
    return Q;
  }
  TG.toHash = eN;
  function XO(X, Q) {
    if (typeof Q == "boolean")
      return Q;
    if (Object.keys(Q).length === 0)
      return true;
    return SG(X, Q), !ZG(Q, X.self.RULES.all);
  }
  TG.alwaysValidSchema = XO;
  function SG(X, Q = X.schema) {
    let { opts: $, self: Y } = X;
    if (!$.strictSchema)
      return;
    if (typeof Q === "boolean")
      return;
    let W = Y.RULES.keywords;
    for (let J in Q)
      if (!W[J])
        vG(X, `unknown keyword: "${J}"`);
  }
  TG.checkUnknownRules = SG;
  function ZG(X, Q) {
    if (typeof X == "boolean")
      return !X;
    for (let $ in X)
      if (Q[$])
        return true;
    return false;
  }
  TG.schemaHasRules = ZG;
  function QO(X, Q) {
    if (typeof X == "boolean")
      return !X;
    for (let $ in X)
      if ($ !== "$ref" && Q.all[$])
        return true;
    return false;
  }
  TG.schemaHasRulesButRef = QO;
  function $O({ topSchemaRef: X, schemaPath: Q }, $, Y, W) {
    if (!W) {
      if (typeof $ == "number" || typeof $ == "boolean")
        return $;
      if (typeof $ == "string")
        return $0._`${$}`;
    }
    return $0._`${X}${Q}${(0, $0.getProperty)(Y)}`;
  }
  TG.schemaRefOrVal = $O;
  function YO(X) {
    return CG(decodeURIComponent(X));
  }
  TG.unescapeFragment = YO;
  function WO(X) {
    return encodeURIComponent(BY(X));
  }
  TG.escapeFragment = WO;
  function BY(X) {
    if (typeof X == "number")
      return `${X}`;
    return X.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  TG.escapeJsonPointer = BY;
  function CG(X) {
    return X.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  TG.unescapeJsonPointer = CG;
  function JO(X, Q) {
    if (Array.isArray(X))
      for (let $ of X)
        Q($);
    else
      Q(X);
  }
  TG.eachItem = JO;
  function bG({ mergeNames: X, mergeToName: Q, mergeValues: $, resultToName: Y }) {
    return (W, J, G, H) => {
      let B = G === undefined ? J : G instanceof $0.Name ? (J instanceof $0.Name ? X(W, J, G) : Q(W, J, G), G) : J instanceof $0.Name ? (Q(W, G, J), J) : $(J, G);
      return H === $0.Name && !(B instanceof $0.Name) ? Y(W, B) : B;
    };
  }
  TG.mergeEvaluated = { props: bG({ mergeNames: (X, Q, $) => X.if($0._`${$} !== true && ${Q} !== undefined`, () => {
    X.if($0._`${Q} === true`, () => X.assign($, true), () => X.assign($, $0._`${$} || {}`).code($0._`Object.assign(${$}, ${Q})`));
  }), mergeToName: (X, Q, $) => X.if($0._`${$} !== true`, () => {
    if (Q === true)
      X.assign($, true);
    else
      X.assign($, $0._`${$} || {}`), zY(X, $, Q);
  }), mergeValues: (X, Q) => X === true ? true : { ...X, ...Q }, resultToName: kG }), items: bG({ mergeNames: (X, Q, $) => X.if($0._`${$} !== true && ${Q} !== undefined`, () => X.assign($, $0._`${Q} === true ? true : ${$} > ${Q} ? ${$} : ${Q}`)), mergeToName: (X, Q, $) => X.if($0._`${$} !== true`, () => X.assign($, Q === true ? true : $0._`${$} > ${Q} ? ${$} : ${Q}`)), mergeValues: (X, Q) => X === true ? true : Math.max(X, Q), resultToName: (X, Q) => X.var("items", Q) }) };
  function kG(X, Q) {
    if (Q === true)
      return X.var("props", true);
    let $ = X.var("props", $0._`{}`);
    if (Q !== undefined)
      zY(X, $, Q);
    return $;
  }
  TG.evaluatedPropsToName = kG;
  function zY(X, Q, $) {
    Object.keys($).forEach((Y) => X.assign($0._`${Q}${(0, $0.getProperty)(Y)}`, true));
  }
  TG.setEvaluated = zY;
  var PG = {};
  function GO(X, Q) {
    return X.scopeValue("func", { ref: Q, code: PG[Q.code] || (PG[Q.code] = new sN._Code(Q.code)) });
  }
  TG.useFunc = GO;
  var HY;
  (function(X) {
    X[X.Num = 0] = "Num", X[X.Str = 1] = "Str";
  })(HY || (TG.Type = HY = {}));
  function HO(X, Q, $) {
    if (X instanceof $0.Name) {
      let Y = Q === HY.Num;
      return $ ? Y ? $0._`"[" + ${X} + "]"` : $0._`"['" + ${X} + "']"` : Y ? $0._`"/" + ${X}` : $0._`"/" + ${X}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return $ ? (0, $0.getProperty)(X).toString() : "/" + BY(X);
  }
  TG.getErrorPath = HO;
  function vG(X, Q, $ = X.opts.strictSchema) {
    if (!$)
      return;
    if (Q = `strict mode: ${Q}`, $ === true)
      throw Error(Q);
    X.self.logger.warn(Q);
  }
  TG.checkStrictMode = vG;
});
var R1 = P((xG) => {
  Object.defineProperty(xG, "__esModule", { value: true });
  var S0 = p(), EO = { data: new S0.Name("data"), valCxt: new S0.Name("valCxt"), instancePath: new S0.Name("instancePath"), parentData: new S0.Name("parentData"), parentDataProperty: new S0.Name("parentDataProperty"), rootData: new S0.Name("rootData"), dynamicAnchors: new S0.Name("dynamicAnchors"), vErrors: new S0.Name("vErrors"), errors: new S0.Name("errors"), this: new S0.Name("this"), self: new S0.Name("self"), scope: new S0.Name("scope"), json: new S0.Name("json"), jsonPos: new S0.Name("jsonPos"), jsonLen: new S0.Name("jsonLen"), jsonPart: new S0.Name("jsonPart") };
  xG.default = EO;
});
var uX = P((hG) => {
  Object.defineProperty(hG, "__esModule", { value: true });
  hG.extendErrors = hG.resetErrorsCount = hG.reportExtraError = hG.reportError = hG.keyword$DataError = hG.keywordError = undefined;
  var a = p(), C8 = e(), v0 = R1();
  hG.keywordError = { message: ({ keyword: X }) => a.str`must pass "${X}" keyword validation` };
  hG.keyword$DataError = { message: ({ keyword: X, schemaType: Q }) => Q ? a.str`"${X}" keyword must be ${Q} ($data)` : a.str`"${X}" keyword is invalid ($data)` };
  function PO(X, Q = hG.keywordError, $, Y) {
    let { it: W } = X, { gen: J, compositeRule: G, allErrors: H } = W, B = fG(X, Q, $);
    if (Y !== null && Y !== undefined ? Y : G || H)
      yG(J, B);
    else
      gG(W, a._`[${B}]`);
  }
  hG.reportError = PO;
  function SO(X, Q = hG.keywordError, $) {
    let { it: Y } = X, { gen: W, compositeRule: J, allErrors: G } = Y, H = fG(X, Q, $);
    if (yG(W, H), !(J || G))
      gG(Y, v0.default.vErrors);
  }
  hG.reportExtraError = SO;
  function ZO(X, Q) {
    X.assign(v0.default.errors, Q), X.if(a._`${v0.default.vErrors} !== null`, () => X.if(Q, () => X.assign(a._`${v0.default.vErrors}.length`, Q), () => X.assign(v0.default.vErrors, null)));
  }
  hG.resetErrorsCount = ZO;
  function CO({ gen: X, keyword: Q, schemaValue: $, data: Y, errsCount: W, it: J }) {
    if (W === undefined)
      throw Error("ajv implementation error");
    let G = X.name("err");
    X.forRange("i", W, v0.default.errors, (H) => {
      if (X.const(G, a._`${v0.default.vErrors}[${H}]`), X.if(a._`${G}.instancePath === undefined`, () => X.assign(a._`${G}.instancePath`, (0, a.strConcat)(v0.default.instancePath, J.errorPath))), X.assign(a._`${G}.schemaPath`, a.str`${J.errSchemaPath}/${Q}`), J.opts.verbose)
        X.assign(a._`${G}.schema`, $), X.assign(a._`${G}.data`, Y);
    });
  }
  hG.extendErrors = CO;
  function yG(X, Q) {
    let $ = X.const("err", Q);
    X.if(a._`${v0.default.vErrors} === null`, () => X.assign(v0.default.vErrors, a._`[${$}]`), a._`${v0.default.vErrors}.push(${$})`), X.code(a._`${v0.default.errors}++`);
  }
  function gG(X, Q) {
    let { gen: $, validateName: Y, schemaEnv: W } = X;
    if (W.$async)
      $.throw(a._`new ${X.ValidationError}(${Q})`);
    else
      $.assign(a._`${Y}.errors`, Q), $.return(false);
  }
  var B6 = { keyword: new a.Name("keyword"), schemaPath: new a.Name("schemaPath"), params: new a.Name("params"), propertyName: new a.Name("propertyName"), message: new a.Name("message"), schema: new a.Name("schema"), parentSchema: new a.Name("parentSchema") };
  function fG(X, Q, $) {
    let { createErrors: Y } = X.it;
    if (Y === false)
      return a._`{}`;
    return kO(X, Q, $);
  }
  function kO(X, Q, $ = {}) {
    let { gen: Y, it: W } = X, J = [vO(W, $), TO(X, $)];
    return _O(X, Q, J), Y.object(...J);
  }
  function vO({ errorPath: X }, { instancePath: Q }) {
    let $ = Q ? a.str`${X}${(0, C8.getErrorPath)(Q, C8.Type.Str)}` : X;
    return [v0.default.instancePath, (0, a.strConcat)(v0.default.instancePath, $)];
  }
  function TO({ keyword: X, it: { errSchemaPath: Q } }, { schemaPath: $, parentSchema: Y }) {
    let W = Y ? Q : a.str`${Q}/${X}`;
    if ($)
      W = a.str`${W}${(0, C8.getErrorPath)($, C8.Type.Str)}`;
    return [B6.schemaPath, W];
  }
  function _O(X, { params: Q, message: $ }, Y) {
    let { keyword: W, data: J, schemaValue: G, it: H } = X, { opts: B, propertyName: z2, topSchemaRef: K, schemaPath: V } = H;
    if (Y.push([B6.keyword, W], [B6.params, typeof Q == "function" ? Q(X) : Q || a._`{}`]), B.messages)
      Y.push([B6.message, typeof $ == "function" ? $(X) : $]);
    if (B.verbose)
      Y.push([B6.schema, G], [B6.parentSchema, a._`${K}${V}`], [v0.default.data, J]);
    if (z2)
      Y.push([B6.propertyName, z2]);
  }
});
var pG = P((mG) => {
  Object.defineProperty(mG, "__esModule", { value: true });
  mG.boolOrEmptySchema = mG.topBoolOrEmptySchema = undefined;
  var hO = uX(), uO = p(), lO = R1(), mO = { message: "boolean schema is false" };
  function cO(X) {
    let { gen: Q, schema: $, validateName: Y } = X;
    if ($ === false)
      lG(X, false);
    else if (typeof $ == "object" && $.$async === true)
      Q.return(lO.default.data);
    else
      Q.assign(uO._`${Y}.errors`, null), Q.return(true);
  }
  mG.topBoolOrEmptySchema = cO;
  function pO(X, Q) {
    let { gen: $, schema: Y } = X;
    if (Y === false)
      $.var(Q, false), lG(X);
    else
      $.var(Q, true);
  }
  mG.boolOrEmptySchema = pO;
  function lG(X, Q) {
    let { gen: $, data: Y } = X, W = { gen: $, keyword: "false schema", data: Y, schema: false, schemaCode: false, schemaValue: false, params: {}, it: X };
    (0, hO.reportError)(W, mO, undefined, Q);
  }
});
var UY = P((dG) => {
  Object.defineProperty(dG, "__esModule", { value: true });
  dG.getRules = dG.isJSONType = undefined;
  var iO = ["string", "number", "integer", "boolean", "null", "object", "array"], nO = new Set(iO);
  function rO(X) {
    return typeof X == "string" && nO.has(X);
  }
  dG.isJSONType = rO;
  function oO() {
    let X = { number: { type: "number", rules: [] }, string: { type: "string", rules: [] }, array: { type: "array", rules: [] }, object: { type: "object", rules: [] } };
    return { types: { ...X, integer: true, boolean: true, null: true }, rules: [{ rules: [] }, X.number, X.string, X.array, X.object], post: { rules: [] }, all: {}, keywords: {} };
  }
  dG.getRules = oO;
});
var VY = P((oG) => {
  Object.defineProperty(oG, "__esModule", { value: true });
  oG.shouldUseRule = oG.shouldUseGroup = oG.schemaHasRulesForType = undefined;
  function aO({ schema: X, self: Q }, $) {
    let Y = Q.RULES.types[$];
    return Y && Y !== true && nG(X, Y);
  }
  oG.schemaHasRulesForType = aO;
  function nG(X, Q) {
    return Q.rules.some(($) => rG(X, $));
  }
  oG.shouldUseGroup = nG;
  function rG(X, Q) {
    var $;
    return X[Q.keyword] !== undefined || (($ = Q.definition.implements) === null || $ === undefined ? undefined : $.some((Y) => X[Y] !== undefined));
  }
  oG.shouldUseRule = rG;
});
var lX = P((X3) => {
  Object.defineProperty(X3, "__esModule", { value: true });
  X3.reportTypeError = X3.checkDataTypes = X3.checkDataType = X3.coerceAndCheckDataType = X3.getJSONTypes = X3.getSchemaTypes = X3.DataType = undefined;
  var XD = UY(), QD = VY(), $D = uX(), c = p(), aG = e(), m6;
  (function(X) {
    X[X.Correct = 0] = "Correct", X[X.Wrong = 1] = "Wrong";
  })(m6 || (X3.DataType = m6 = {}));
  function YD(X) {
    let Q = sG(X.type);
    if (Q.includes("null")) {
      if (X.nullable === false)
        throw Error("type: null contradicts nullable: false");
    } else {
      if (!Q.length && X.nullable !== undefined)
        throw Error('"nullable" cannot be used without "type"');
      if (X.nullable === true)
        Q.push("null");
    }
    return Q;
  }
  X3.getSchemaTypes = YD;
  function sG(X) {
    let Q = Array.isArray(X) ? X : X ? [X] : [];
    if (Q.every(XD.isJSONType))
      return Q;
    throw Error("type must be JSONType or JSONType[]: " + Q.join(","));
  }
  X3.getJSONTypes = sG;
  function WD(X, Q) {
    let { gen: $, data: Y, opts: W } = X, J = JD(Q, W.coerceTypes), G = Q.length > 0 && !(J.length === 0 && Q.length === 1 && (0, QD.schemaHasRulesForType)(X, Q[0]));
    if (G) {
      let H = qY(Q, Y, W.strictNumbers, m6.Wrong);
      $.if(H, () => {
        if (J.length)
          GD(X, Q, J);
        else
          FY(X);
      });
    }
    return G;
  }
  X3.coerceAndCheckDataType = WD;
  var eG = new Set(["string", "number", "integer", "boolean", "null"]);
  function JD(X, Q) {
    return Q ? X.filter(($) => eG.has($) || Q === "array" && $ === "array") : [];
  }
  function GD(X, Q, $) {
    let { gen: Y, data: W, opts: J } = X, G = Y.let("dataType", c._`typeof ${W}`), H = Y.let("coerced", c._`undefined`);
    if (J.coerceTypes === "array")
      Y.if(c._`${G} == 'object' && Array.isArray(${W}) && ${W}.length == 1`, () => Y.assign(W, c._`${W}[0]`).assign(G, c._`typeof ${W}`).if(qY(Q, W, J.strictNumbers), () => Y.assign(H, W)));
    Y.if(c._`${H} !== undefined`);
    for (let z2 of $)
      if (eG.has(z2) || z2 === "array" && J.coerceTypes === "array")
        B(z2);
    Y.else(), FY(X), Y.endIf(), Y.if(c._`${H} !== undefined`, () => {
      Y.assign(W, H), HD(X, H);
    });
    function B(z2) {
      switch (z2) {
        case "string":
          Y.elseIf(c._`${G} == "number" || ${G} == "boolean"`).assign(H, c._`"" + ${W}`).elseIf(c._`${W} === null`).assign(H, c._`""`);
          return;
        case "number":
          Y.elseIf(c._`${G} == "boolean" || ${W} === null
              || (${G} == "string" && ${W} && ${W} == +${W})`).assign(H, c._`+${W}`);
          return;
        case "integer":
          Y.elseIf(c._`${G} === "boolean" || ${W} === null
              || (${G} === "string" && ${W} && ${W} == +${W} && !(${W} % 1))`).assign(H, c._`+${W}`);
          return;
        case "boolean":
          Y.elseIf(c._`${W} === "false" || ${W} === 0 || ${W} === null`).assign(H, false).elseIf(c._`${W} === "true" || ${W} === 1`).assign(H, true);
          return;
        case "null":
          Y.elseIf(c._`${W} === "" || ${W} === 0 || ${W} === false`), Y.assign(H, null);
          return;
        case "array":
          Y.elseIf(c._`${G} === "string" || ${G} === "number"
              || ${G} === "boolean" || ${W} === null`).assign(H, c._`[${W}]`);
      }
    }
  }
  function HD({ gen: X, parentData: Q, parentDataProperty: $ }, Y) {
    X.if(c._`${Q} !== undefined`, () => X.assign(c._`${Q}[${$}]`, Y));
  }
  function LY(X, Q, $, Y = m6.Correct) {
    let W = Y === m6.Correct ? c.operators.EQ : c.operators.NEQ, J;
    switch (X) {
      case "null":
        return c._`${Q} ${W} null`;
      case "array":
        J = c._`Array.isArray(${Q})`;
        break;
      case "object":
        J = c._`${Q} && typeof ${Q} == "object" && !Array.isArray(${Q})`;
        break;
      case "integer":
        J = G(c._`!(${Q} % 1) && !isNaN(${Q})`);
        break;
      case "number":
        J = G();
        break;
      default:
        return c._`typeof ${Q} ${W} ${X}`;
    }
    return Y === m6.Correct ? J : (0, c.not)(J);
    function G(H = c.nil) {
      return (0, c.and)(c._`typeof ${Q} == "number"`, H, $ ? c._`isFinite(${Q})` : c.nil);
    }
  }
  X3.checkDataType = LY;
  function qY(X, Q, $, Y) {
    if (X.length === 1)
      return LY(X[0], Q, $, Y);
    let W, J = (0, aG.toHash)(X);
    if (J.array && J.object) {
      let G = c._`typeof ${Q} != "object"`;
      W = J.null ? G : c._`!${Q} || ${G}`, delete J.null, delete J.array, delete J.object;
    } else
      W = c.nil;
    if (J.number)
      delete J.integer;
    for (let G in J)
      W = (0, c.and)(W, LY(G, Q, $, Y));
    return W;
  }
  X3.checkDataTypes = qY;
  var BD = { message: ({ schema: X }) => `must be ${X}`, params: ({ schema: X, schemaValue: Q }) => typeof X == "string" ? c._`{type: ${X}}` : c._`{type: ${Q}}` };
  function FY(X) {
    let Q = zD(X);
    (0, $D.reportError)(Q, BD);
  }
  X3.reportTypeError = FY;
  function zD(X) {
    let { gen: Q, data: $, schema: Y } = X, W = (0, aG.schemaRefOrVal)(X, Y, "type");
    return { gen: Q, keyword: "type", data: $, schema: Y.type, schemaCode: W, schemaValue: W, parentSchema: Y, params: {}, it: X };
  }
});
var J3 = P((Y3) => {
  Object.defineProperty(Y3, "__esModule", { value: true });
  Y3.assignDefaults = undefined;
  var c6 = p(), ND = e();
  function OD(X, Q) {
    let { properties: $, items: Y } = X.schema;
    if (Q === "object" && $)
      for (let W in $)
        $3(X, W, $[W].default);
    else if (Q === "array" && Array.isArray(Y))
      Y.forEach((W, J) => $3(X, J, W.default));
  }
  Y3.assignDefaults = OD;
  function $3(X, Q, $) {
    let { gen: Y, compositeRule: W, data: J, opts: G } = X;
    if ($ === undefined)
      return;
    let H = c6._`${J}${(0, c6.getProperty)(Q)}`;
    if (W) {
      (0, ND.checkStrictMode)(X, `default is ignored for: ${H}`);
      return;
    }
    let B = c6._`${H} === undefined`;
    if (G.useDefaults === "empty")
      B = c6._`${B} || ${H} === null || ${H} === ""`;
    Y.if(B, c6._`${H} = ${(0, c6.stringify)($)}`);
  }
});
var d0 = P((B3) => {
  Object.defineProperty(B3, "__esModule", { value: true });
  B3.validateUnion = B3.validateArray = B3.usePattern = B3.callValidateCode = B3.schemaProperties = B3.allSchemaProperties = B3.noPropertyInData = B3.propertyInData = B3.isOwnProperty = B3.hasPropFunc = B3.reportMissingProp = B3.checkMissingProp = B3.checkReportMissingProp = undefined;
  var G0 = p(), NY = e(), p1 = R1(), DD = e();
  function wD(X, Q) {
    let { gen: $, data: Y, it: W } = X;
    $.if(DY($, Y, Q, W.opts.ownProperties), () => {
      X.setParams({ missingProperty: G0._`${Q}` }, true), X.error();
    });
  }
  B3.checkReportMissingProp = wD;
  function AD({ gen: X, data: Q, it: { opts: $ } }, Y, W) {
    return (0, G0.or)(...Y.map((J) => (0, G0.and)(DY(X, Q, J, $.ownProperties), G0._`${W} = ${J}`)));
  }
  B3.checkMissingProp = AD;
  function MD(X, Q) {
    X.setParams({ missingProperty: Q }, true), X.error();
  }
  B3.reportMissingProp = MD;
  function G3(X) {
    return X.scopeValue("func", { ref: Object.prototype.hasOwnProperty, code: G0._`Object.prototype.hasOwnProperty` });
  }
  B3.hasPropFunc = G3;
  function OY(X, Q, $) {
    return G0._`${G3(X)}.call(${Q}, ${$})`;
  }
  B3.isOwnProperty = OY;
  function jD(X, Q, $, Y) {
    let W = G0._`${Q}${(0, G0.getProperty)($)} !== undefined`;
    return Y ? G0._`${W} && ${OY(X, Q, $)}` : W;
  }
  B3.propertyInData = jD;
  function DY(X, Q, $, Y) {
    let W = G0._`${Q}${(0, G0.getProperty)($)} === undefined`;
    return Y ? (0, G0.or)(W, (0, G0.not)(OY(X, Q, $))) : W;
  }
  B3.noPropertyInData = DY;
  function H3(X) {
    return X ? Object.keys(X).filter((Q) => Q !== "__proto__") : [];
  }
  B3.allSchemaProperties = H3;
  function RD(X, Q) {
    return H3(Q).filter(($) => !(0, NY.alwaysValidSchema)(X, Q[$]));
  }
  B3.schemaProperties = RD;
  function ID({ schemaCode: X, data: Q, it: { gen: $, topSchemaRef: Y, schemaPath: W, errorPath: J }, it: G }, H, B, z2) {
    let K = z2 ? G0._`${X}, ${Q}, ${Y}${W}` : Q, V = [[p1.default.instancePath, (0, G0.strConcat)(p1.default.instancePath, J)], [p1.default.parentData, G.parentData], [p1.default.parentDataProperty, G.parentDataProperty], [p1.default.rootData, p1.default.rootData]];
    if (G.opts.dynamicRef)
      V.push([p1.default.dynamicAnchors, p1.default.dynamicAnchors]);
    let L = G0._`${K}, ${$.object(...V)}`;
    return B !== G0.nil ? G0._`${H}.call(${B}, ${L})` : G0._`${H}(${L})`;
  }
  B3.callValidateCode = ID;
  var ED = G0._`new RegExp`;
  function bD({ gen: X, it: { opts: Q } }, $) {
    let Y = Q.unicodeRegExp ? "u" : "", { regExp: W } = Q.code, J = W($, Y);
    return X.scopeValue("pattern", { key: J.toString(), ref: J, code: G0._`${W.code === "new RegExp" ? ED : (0, DD.useFunc)(X, W)}(${$}, ${Y})` });
  }
  B3.usePattern = bD;
  function PD(X) {
    let { gen: Q, data: $, keyword: Y, it: W } = X, J = Q.name("valid");
    if (W.allErrors) {
      let H = Q.let("valid", true);
      return G(() => Q.assign(H, false)), H;
    }
    return Q.var(J, true), G(() => Q.break()), J;
    function G(H) {
      let B = Q.const("len", G0._`${$}.length`);
      Q.forRange("i", 0, B, (z2) => {
        X.subschema({ keyword: Y, dataProp: z2, dataPropType: NY.Type.Num }, J), Q.if((0, G0.not)(J), H);
      });
    }
  }
  B3.validateArray = PD;
  function SD(X) {
    let { gen: Q, schema: $, keyword: Y, it: W } = X;
    if (!Array.isArray($))
      throw Error("ajv implementation error");
    if ($.some((B) => (0, NY.alwaysValidSchema)(W, B)) && !W.opts.unevaluated)
      return;
    let G = Q.let("valid", false), H = Q.name("_valid");
    Q.block(() => $.forEach((B, z2) => {
      let K = X.subschema({ keyword: Y, schemaProp: z2, compositeRule: true }, H);
      if (Q.assign(G, G0._`${G} || ${H}`), !X.mergeValidEvaluated(K, H))
        Q.if((0, G0.not)(G));
    })), X.result(G, () => X.reset(), () => X.error(true));
  }
  B3.validateUnion = SD;
});
var q3 = P((V3) => {
  Object.defineProperty(V3, "__esModule", { value: true });
  V3.validateKeywordUsage = V3.validSchemaType = V3.funcKeywordCode = V3.macroKeywordCode = undefined;
  var T0 = p(), z6 = R1(), lD = d0(), mD = uX();
  function cD(X, Q) {
    let { gen: $, keyword: Y, schema: W, parentSchema: J, it: G } = X, H = Q.macro.call(G.self, W, J, G), B = U3($, Y, H);
    if (G.opts.validateSchema !== false)
      G.self.validateSchema(H, true);
    let z2 = $.name("valid");
    X.subschema({ schema: H, schemaPath: T0.nil, errSchemaPath: `${G.errSchemaPath}/${Y}`, topSchemaRef: B, compositeRule: true }, z2), X.pass(z2, () => X.error(true));
  }
  V3.macroKeywordCode = cD;
  function pD(X, Q) {
    var $;
    let { gen: Y, keyword: W, schema: J, parentSchema: G, $data: H, it: B } = X;
    iD(B, Q);
    let z2 = !H && Q.compile ? Q.compile.call(B.self, J, G, B) : Q.validate, K = U3(Y, W, z2), V = Y.let("valid");
    X.block$data(V, L), X.ok(($ = Q.valid) !== null && $ !== undefined ? $ : V);
    function L() {
      if (Q.errors === false) {
        if (q(), Q.modifying)
          K3(X);
        N(() => X.error());
      } else {
        let w = Q.async ? U() : F();
        if (Q.modifying)
          K3(X);
        N(() => dD(X, w));
      }
    }
    function U() {
      let w = Y.let("ruleErrs", null);
      return Y.try(() => q(T0._`await `), (M) => Y.assign(V, false).if(T0._`${M} instanceof ${B.ValidationError}`, () => Y.assign(w, T0._`${M}.errors`), () => Y.throw(M))), w;
    }
    function F() {
      let w = T0._`${K}.errors`;
      return Y.assign(w, null), q(T0.nil), w;
    }
    function q(w = Q.async ? T0._`await ` : T0.nil) {
      let M = B.opts.passContext ? z6.default.this : z6.default.self, R = !(("compile" in Q) && !H || Q.schema === false);
      Y.assign(V, T0._`${w}${(0, lD.callValidateCode)(X, K, M, R)}`, Q.modifying);
    }
    function N(w) {
      var M;
      Y.if((0, T0.not)((M = Q.valid) !== null && M !== undefined ? M : V), w);
    }
  }
  V3.funcKeywordCode = pD;
  function K3(X) {
    let { gen: Q, data: $, it: Y } = X;
    Q.if(Y.parentData, () => Q.assign($, T0._`${Y.parentData}[${Y.parentDataProperty}]`));
  }
  function dD(X, Q) {
    let { gen: $ } = X;
    $.if(T0._`Array.isArray(${Q})`, () => {
      $.assign(z6.default.vErrors, T0._`${z6.default.vErrors} === null ? ${Q} : ${z6.default.vErrors}.concat(${Q})`).assign(z6.default.errors, T0._`${z6.default.vErrors}.length`), (0, mD.extendErrors)(X);
    }, () => X.error());
  }
  function iD({ schemaEnv: X }, Q) {
    if (Q.async && !X.$async)
      throw Error("async keyword in sync schema");
  }
  function U3(X, Q, $) {
    if ($ === undefined)
      throw Error(`keyword "${Q}" failed to compile`);
    return X.scopeValue("keyword", typeof $ == "function" ? { ref: $ } : { ref: $, code: (0, T0.stringify)($) });
  }
  function nD(X, Q, $ = false) {
    return !Q.length || Q.some((Y) => Y === "array" ? Array.isArray(X) : Y === "object" ? X && typeof X == "object" && !Array.isArray(X) : typeof X == Y || $ && typeof X > "u");
  }
  V3.validSchemaType = nD;
  function rD({ schema: X, opts: Q, self: $, errSchemaPath: Y }, W, J) {
    if (Array.isArray(W.keyword) ? !W.keyword.includes(J) : W.keyword !== J)
      throw Error("ajv implementation error");
    let G = W.dependencies;
    if (G === null || G === undefined ? undefined : G.some((H) => !Object.prototype.hasOwnProperty.call(X, H)))
      throw Error(`parent schema must have dependencies of ${J}: ${G.join(",")}`);
    if (W.validateSchema) {
      if (!W.validateSchema(X[J])) {
        let B = `keyword "${J}" value is invalid at path "${Y}": ` + $.errorsText(W.validateSchema.errors);
        if (Q.validateSchema === "log")
          $.logger.error(B);
        else
          throw Error(B);
      }
    }
  }
  V3.validateKeywordUsage = rD;
});
var D3 = P((N3) => {
  Object.defineProperty(N3, "__esModule", { value: true });
  N3.extendSubschemaMode = N3.extendSubschemaData = N3.getSubschema = undefined;
  var K1 = p(), F3 = e();
  function sD(X, { keyword: Q, schemaProp: $, schema: Y, schemaPath: W, errSchemaPath: J, topSchemaRef: G }) {
    if (Q !== undefined && Y !== undefined)
      throw Error('both "keyword" and "schema" passed, only one allowed');
    if (Q !== undefined) {
      let H = X.schema[Q];
      return $ === undefined ? { schema: H, schemaPath: K1._`${X.schemaPath}${(0, K1.getProperty)(Q)}`, errSchemaPath: `${X.errSchemaPath}/${Q}` } : { schema: H[$], schemaPath: K1._`${X.schemaPath}${(0, K1.getProperty)(Q)}${(0, K1.getProperty)($)}`, errSchemaPath: `${X.errSchemaPath}/${Q}/${(0, F3.escapeFragment)($)}` };
    }
    if (Y !== undefined) {
      if (W === undefined || J === undefined || G === undefined)
        throw Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return { schema: Y, schemaPath: W, topSchemaRef: G, errSchemaPath: J };
    }
    throw Error('either "keyword" or "schema" must be passed');
  }
  N3.getSubschema = sD;
  function eD(X, Q, { dataProp: $, dataPropType: Y, data: W, dataTypes: J, propertyName: G }) {
    if (W !== undefined && $ !== undefined)
      throw Error('both "data" and "dataProp" passed, only one allowed');
    let { gen: H } = Q;
    if ($ !== undefined) {
      let { errorPath: z2, dataPathArr: K, opts: V } = Q, L = H.let("data", K1._`${Q.data}${(0, K1.getProperty)($)}`, true);
      B(L), X.errorPath = K1.str`${z2}${(0, F3.getErrorPath)($, Y, V.jsPropertySyntax)}`, X.parentDataProperty = K1._`${$}`, X.dataPathArr = [...K, X.parentDataProperty];
    }
    if (W !== undefined) {
      let z2 = W instanceof K1.Name ? W : H.let("data", W, true);
      if (B(z2), G !== undefined)
        X.propertyName = G;
    }
    if (J)
      X.dataTypes = J;
    function B(z2) {
      X.data = z2, X.dataLevel = Q.dataLevel + 1, X.dataTypes = [], Q.definedProperties = new Set, X.parentData = Q.data, X.dataNames = [...Q.dataNames, z2];
    }
  }
  N3.extendSubschemaData = eD;
  function Xw(X, { jtdDiscriminator: Q, jtdMetadata: $, compositeRule: Y, createErrors: W, allErrors: J }) {
    if (Y !== undefined)
      X.compositeRule = Y;
    if (W !== undefined)
      X.createErrors = W;
    if (J !== undefined)
      X.allErrors = J;
    X.jtdDiscriminator = Q, X.jtdMetadata = $;
  }
  N3.extendSubschemaMode = Xw;
});
var wY = P((JT, w3) => {
  w3.exports = function X(Q, $) {
    if (Q === $)
      return true;
    if (Q && $ && typeof Q == "object" && typeof $ == "object") {
      if (Q.constructor !== $.constructor)
        return false;
      var Y, W, J;
      if (Array.isArray(Q)) {
        if (Y = Q.length, Y != $.length)
          return false;
        for (W = Y;W-- !== 0; )
          if (!X(Q[W], $[W]))
            return false;
        return true;
      }
      if (Q.constructor === RegExp)
        return Q.source === $.source && Q.flags === $.flags;
      if (Q.valueOf !== Object.prototype.valueOf)
        return Q.valueOf() === $.valueOf();
      if (Q.toString !== Object.prototype.toString)
        return Q.toString() === $.toString();
      if (J = Object.keys(Q), Y = J.length, Y !== Object.keys($).length)
        return false;
      for (W = Y;W-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call($, J[W]))
          return false;
      for (W = Y;W-- !== 0; ) {
        var G = J[W];
        if (!X(Q[G], $[G]))
          return false;
      }
      return true;
    }
    return Q !== Q && $ !== $;
  };
});
var M3 = P((GT, A3) => {
  var d1 = A3.exports = function(X, Q, $) {
    if (typeof Q == "function")
      $ = Q, Q = {};
    $ = Q.cb || $;
    var Y = typeof $ == "function" ? $ : $.pre || function() {}, W = $.post || function() {};
    k8(Q, Y, W, X, "", X);
  };
  d1.keywords = { additionalItems: true, items: true, contains: true, additionalProperties: true, propertyNames: true, not: true, if: true, then: true, else: true };
  d1.arrayKeywords = { items: true, allOf: true, anyOf: true, oneOf: true };
  d1.propsKeywords = { $defs: true, definitions: true, properties: true, patternProperties: true, dependencies: true };
  d1.skipKeywords = { default: true, enum: true, const: true, required: true, maximum: true, minimum: true, exclusiveMaximum: true, exclusiveMinimum: true, multipleOf: true, maxLength: true, minLength: true, pattern: true, format: true, maxItems: true, minItems: true, uniqueItems: true, maxProperties: true, minProperties: true };
  function k8(X, Q, $, Y, W, J, G, H, B, z2) {
    if (Y && typeof Y == "object" && !Array.isArray(Y)) {
      Q(Y, W, J, G, H, B, z2);
      for (var K in Y) {
        var V = Y[K];
        if (Array.isArray(V)) {
          if (K in d1.arrayKeywords)
            for (var L = 0;L < V.length; L++)
              k8(X, Q, $, V[L], W + "/" + K + "/" + L, J, W, K, Y, L);
        } else if (K in d1.propsKeywords) {
          if (V && typeof V == "object")
            for (var U in V)
              k8(X, Q, $, V[U], W + "/" + K + "/" + Yw(U), J, W, K, Y, U);
        } else if (K in d1.keywords || X.allKeys && !(K in d1.skipKeywords))
          k8(X, Q, $, V, W + "/" + K, J, W, K, Y);
      }
      $(Y, W, J, G, H, B, z2);
    }
  }
  function Yw(X) {
    return X.replace(/~/g, "~0").replace(/\//g, "~1");
  }
});
var mX = P((E3) => {
  Object.defineProperty(E3, "__esModule", { value: true });
  E3.getSchemaRefs = E3.resolveUrl = E3.normalizeId = E3._getFullPath = E3.getFullPath = E3.inlineRef = undefined;
  var Ww = e(), Jw = wY(), Gw = M3(), Hw = new Set(["type", "format", "pattern", "maxLength", "minLength", "maxProperties", "minProperties", "maxItems", "minItems", "maximum", "minimum", "uniqueItems", "multipleOf", "required", "enum", "const"]);
  function Bw(X, Q = true) {
    if (typeof X == "boolean")
      return true;
    if (Q === true)
      return !AY(X);
    if (!Q)
      return false;
    return j3(X) <= Q;
  }
  E3.inlineRef = Bw;
  var zw = new Set(["$ref", "$recursiveRef", "$recursiveAnchor", "$dynamicRef", "$dynamicAnchor"]);
  function AY(X) {
    for (let Q in X) {
      if (zw.has(Q))
        return true;
      let $ = X[Q];
      if (Array.isArray($) && $.some(AY))
        return true;
      if (typeof $ == "object" && AY($))
        return true;
    }
    return false;
  }
  function j3(X) {
    let Q = 0;
    for (let $ in X) {
      if ($ === "$ref")
        return 1 / 0;
      if (Q++, Hw.has($))
        continue;
      if (typeof X[$] == "object")
        (0, Ww.eachItem)(X[$], (Y) => Q += j3(Y));
      if (Q === 1 / 0)
        return 1 / 0;
    }
    return Q;
  }
  function R3(X, Q = "", $) {
    if ($ !== false)
      Q = p6(Q);
    let Y = X.parse(Q);
    return I3(X, Y);
  }
  E3.getFullPath = R3;
  function I3(X, Q) {
    return X.serialize(Q).split("#")[0] + "#";
  }
  E3._getFullPath = I3;
  var Kw = /#\/?$/;
  function p6(X) {
    return X ? X.replace(Kw, "") : "";
  }
  E3.normalizeId = p6;
  function Uw(X, Q, $) {
    return $ = p6($), X.resolve(Q, $);
  }
  E3.resolveUrl = Uw;
  var Vw = /^[a-z_][-a-z0-9._]*$/i;
  function Lw(X, Q) {
    if (typeof X == "boolean")
      return {};
    let { schemaId: $, uriResolver: Y } = this.opts, W = p6(X[$] || Q), J = { "": W }, G = R3(Y, W, false), H = {}, B = new Set;
    return Gw(X, { allKeys: true }, (V, L, U, F) => {
      if (F === undefined)
        return;
      let q = G + L, N = J[F];
      if (typeof V[$] == "string")
        N = w.call(this, V[$]);
      M.call(this, V.$anchor), M.call(this, V.$dynamicAnchor), J[L] = N;
      function w(R) {
        let S = this.opts.uriResolver.resolve;
        if (R = p6(N ? S(N, R) : R), B.has(R))
          throw K(R);
        B.add(R);
        let C = this.refs[R];
        if (typeof C == "string")
          C = this.refs[C];
        if (typeof C == "object")
          z2(V, C.schema, R);
        else if (R !== p6(q))
          if (R[0] === "#")
            z2(V, H[R], R), H[R] = V;
          else
            this.refs[R] = q;
        return R;
      }
      function M(R) {
        if (typeof R == "string") {
          if (!Vw.test(R))
            throw Error(`invalid anchor "${R}"`);
          w.call(this, `#${R}`);
        }
      }
    }), H;
    function z2(V, L, U) {
      if (L !== undefined && !Jw(V, L))
        throw K(U);
    }
    function K(V) {
      return Error(`reference "${V}" resolves to more than one schema`);
    }
  }
  E3.getSchemaRefs = Lw;
});
var dX = P((l3) => {
  Object.defineProperty(l3, "__esModule", { value: true });
  l3.getData = l3.KeywordCxt = l3.validateFunctionCode = undefined;
  var k3 = pG(), P3 = lX(), jY = VY(), v8 = lX(), ww = J3(), pX = q3(), MY = D3(), _ = p(), u = R1(), Aw = mX(), I1 = e(), cX = uX();
  function Mw(X) {
    if (_3(X)) {
      if (x3(X), T3(X)) {
        Iw(X);
        return;
      }
    }
    v3(X, () => (0, k3.topBoolOrEmptySchema)(X));
  }
  l3.validateFunctionCode = Mw;
  function v3({ gen: X, validateName: Q, schema: $, schemaEnv: Y, opts: W }, J) {
    if (W.code.es5)
      X.func(Q, _._`${u.default.data}, ${u.default.valCxt}`, Y.$async, () => {
        X.code(_._`"use strict"; ${S3($, W)}`), Rw(X, W), X.code(J);
      });
    else
      X.func(Q, _._`${u.default.data}, ${jw(W)}`, Y.$async, () => X.code(S3($, W)).code(J));
  }
  function jw(X) {
    return _._`{${u.default.instancePath}="", ${u.default.parentData}, ${u.default.parentDataProperty}, ${u.default.rootData}=${u.default.data}${X.dynamicRef ? _._`, ${u.default.dynamicAnchors}={}` : _.nil}}={}`;
  }
  function Rw(X, Q) {
    X.if(u.default.valCxt, () => {
      if (X.var(u.default.instancePath, _._`${u.default.valCxt}.${u.default.instancePath}`), X.var(u.default.parentData, _._`${u.default.valCxt}.${u.default.parentData}`), X.var(u.default.parentDataProperty, _._`${u.default.valCxt}.${u.default.parentDataProperty}`), X.var(u.default.rootData, _._`${u.default.valCxt}.${u.default.rootData}`), Q.dynamicRef)
        X.var(u.default.dynamicAnchors, _._`${u.default.valCxt}.${u.default.dynamicAnchors}`);
    }, () => {
      if (X.var(u.default.instancePath, _._`""`), X.var(u.default.parentData, _._`undefined`), X.var(u.default.parentDataProperty, _._`undefined`), X.var(u.default.rootData, u.default.data), Q.dynamicRef)
        X.var(u.default.dynamicAnchors, _._`{}`);
    });
  }
  function Iw(X) {
    let { schema: Q, opts: $, gen: Y } = X;
    v3(X, () => {
      if ($.$comment && Q.$comment)
        g3(X);
      if (Zw(X), Y.let(u.default.vErrors, null), Y.let(u.default.errors, 0), $.unevaluated)
        Ew(X);
      y3(X), vw(X);
    });
    return;
  }
  function Ew(X) {
    let { gen: Q, validateName: $ } = X;
    X.evaluated = Q.const("evaluated", _._`${$}.evaluated`), Q.if(_._`${X.evaluated}.dynamicProps`, () => Q.assign(_._`${X.evaluated}.props`, _._`undefined`)), Q.if(_._`${X.evaluated}.dynamicItems`, () => Q.assign(_._`${X.evaluated}.items`, _._`undefined`));
  }
  function S3(X, Q) {
    let $ = typeof X == "object" && X[Q.schemaId];
    return $ && (Q.code.source || Q.code.process) ? _._`/*# sourceURL=${$} */` : _.nil;
  }
  function bw(X, Q) {
    if (_3(X)) {
      if (x3(X), T3(X)) {
        Pw(X, Q);
        return;
      }
    }
    (0, k3.boolOrEmptySchema)(X, Q);
  }
  function T3({ schema: X, self: Q }) {
    if (typeof X == "boolean")
      return !X;
    for (let $ in X)
      if (Q.RULES.all[$])
        return true;
    return false;
  }
  function _3(X) {
    return typeof X.schema != "boolean";
  }
  function Pw(X, Q) {
    let { schema: $, gen: Y, opts: W } = X;
    if (W.$comment && $.$comment)
      g3(X);
    Cw(X), kw(X);
    let J = Y.const("_errs", u.default.errors);
    y3(X, J), Y.var(Q, _._`${J} === ${u.default.errors}`);
  }
  function x3(X) {
    (0, I1.checkUnknownRules)(X), Sw(X);
  }
  function y3(X, Q) {
    if (X.opts.jtd)
      return Z3(X, [], false, Q);
    let $ = (0, P3.getSchemaTypes)(X.schema), Y = (0, P3.coerceAndCheckDataType)(X, $);
    Z3(X, $, !Y, Q);
  }
  function Sw(X) {
    let { schema: Q, errSchemaPath: $, opts: Y, self: W } = X;
    if (Q.$ref && Y.ignoreKeywordsWithRef && (0, I1.schemaHasRulesButRef)(Q, W.RULES))
      W.logger.warn(`$ref: keywords ignored in schema at path "${$}"`);
  }
  function Zw(X) {
    let { schema: Q, opts: $ } = X;
    if (Q.default !== undefined && $.useDefaults && $.strictSchema)
      (0, I1.checkStrictMode)(X, "default is ignored in the schema root");
  }
  function Cw(X) {
    let Q = X.schema[X.opts.schemaId];
    if (Q)
      X.baseId = (0, Aw.resolveUrl)(X.opts.uriResolver, X.baseId, Q);
  }
  function kw(X) {
    if (X.schema.$async && !X.schemaEnv.$async)
      throw Error("async schema in sync schema");
  }
  function g3({ gen: X, schemaEnv: Q, schema: $, errSchemaPath: Y, opts: W }) {
    let J = $.$comment;
    if (W.$comment === true)
      X.code(_._`${u.default.self}.logger.log(${J})`);
    else if (typeof W.$comment == "function") {
      let G = _.str`${Y}/$comment`, H = X.scopeValue("root", { ref: Q.root });
      X.code(_._`${u.default.self}.opts.$comment(${J}, ${G}, ${H}.schema)`);
    }
  }
  function vw(X) {
    let { gen: Q, schemaEnv: $, validateName: Y, ValidationError: W, opts: J } = X;
    if ($.$async)
      Q.if(_._`${u.default.errors} === 0`, () => Q.return(u.default.data), () => Q.throw(_._`new ${W}(${u.default.vErrors})`));
    else {
      if (Q.assign(_._`${Y}.errors`, u.default.vErrors), J.unevaluated)
        Tw(X);
      Q.return(_._`${u.default.errors} === 0`);
    }
  }
  function Tw({ gen: X, evaluated: Q, props: $, items: Y }) {
    if ($ instanceof _.Name)
      X.assign(_._`${Q}.props`, $);
    if (Y instanceof _.Name)
      X.assign(_._`${Q}.items`, Y);
  }
  function Z3(X, Q, $, Y) {
    let { gen: W, schema: J, data: G, allErrors: H, opts: B, self: z2 } = X, { RULES: K } = z2;
    if (J.$ref && (B.ignoreKeywordsWithRef || !(0, I1.schemaHasRulesButRef)(J, K))) {
      W.block(() => h3(X, "$ref", K.all.$ref.definition));
      return;
    }
    if (!B.jtd)
      _w(X, Q);
    W.block(() => {
      for (let L of K.rules)
        V(L);
      V(K.post);
    });
    function V(L) {
      if (!(0, jY.shouldUseGroup)(J, L))
        return;
      if (L.type) {
        if (W.if((0, v8.checkDataType)(L.type, G, B.strictNumbers)), C3(X, L), Q.length === 1 && Q[0] === L.type && $)
          W.else(), (0, v8.reportTypeError)(X);
        W.endIf();
      } else
        C3(X, L);
      if (!H)
        W.if(_._`${u.default.errors} === ${Y || 0}`);
    }
  }
  function C3(X, Q) {
    let { gen: $, schema: Y, opts: { useDefaults: W } } = X;
    if (W)
      (0, ww.assignDefaults)(X, Q.type);
    $.block(() => {
      for (let J of Q.rules)
        if ((0, jY.shouldUseRule)(Y, J))
          h3(X, J.keyword, J.definition, Q.type);
    });
  }
  function _w(X, Q) {
    if (X.schemaEnv.meta || !X.opts.strictTypes)
      return;
    if (xw(X, Q), !X.opts.allowUnionTypes)
      yw(X, Q);
    gw(X, X.dataTypes);
  }
  function xw(X, Q) {
    if (!Q.length)
      return;
    if (!X.dataTypes.length) {
      X.dataTypes = Q;
      return;
    }
    Q.forEach(($) => {
      if (!f3(X.dataTypes, $))
        RY(X, `type "${$}" not allowed by context "${X.dataTypes.join(",")}"`);
    }), hw(X, Q);
  }
  function yw(X, Q) {
    if (Q.length > 1 && !(Q.length === 2 && Q.includes("null")))
      RY(X, "use allowUnionTypes to allow union type keyword");
  }
  function gw(X, Q) {
    let $ = X.self.RULES.all;
    for (let Y in $) {
      let W = $[Y];
      if (typeof W == "object" && (0, jY.shouldUseRule)(X.schema, W)) {
        let { type: J } = W.definition;
        if (J.length && !J.some((G) => fw(Q, G)))
          RY(X, `missing type "${J.join(",")}" for keyword "${Y}"`);
      }
    }
  }
  function fw(X, Q) {
    return X.includes(Q) || Q === "number" && X.includes("integer");
  }
  function f3(X, Q) {
    return X.includes(Q) || Q === "integer" && X.includes("number");
  }
  function hw(X, Q) {
    let $ = [];
    for (let Y of X.dataTypes)
      if (f3(Q, Y))
        $.push(Y);
      else if (Q.includes("integer") && Y === "number")
        $.push("integer");
    X.dataTypes = $;
  }
  function RY(X, Q) {
    let $ = X.schemaEnv.baseId + X.errSchemaPath;
    Q += ` at "${$}" (strictTypes)`, (0, I1.checkStrictMode)(X, Q, X.opts.strictTypes);
  }

  class IY {
    constructor(X, Q, $) {
      if ((0, pX.validateKeywordUsage)(X, Q, $), this.gen = X.gen, this.allErrors = X.allErrors, this.keyword = $, this.data = X.data, this.schema = X.schema[$], this.$data = Q.$data && X.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, I1.schemaRefOrVal)(X, this.schema, $, this.$data), this.schemaType = Q.schemaType, this.parentSchema = X.schema, this.params = {}, this.it = X, this.def = Q, this.$data)
        this.schemaCode = X.gen.const("vSchema", u3(this.$data, X));
      else if (this.schemaCode = this.schemaValue, !(0, pX.validSchemaType)(this.schema, Q.schemaType, Q.allowUndefined))
        throw Error(`${$} value must be ${JSON.stringify(Q.schemaType)}`);
      if ("code" in Q ? Q.trackErrors : Q.errors !== false)
        this.errsCount = X.gen.const("_errs", u.default.errors);
    }
    result(X, Q, $) {
      this.failResult((0, _.not)(X), Q, $);
    }
    failResult(X, Q, $) {
      if (this.gen.if(X), $)
        $();
      else
        this.error();
      if (Q) {
        if (this.gen.else(), Q(), this.allErrors)
          this.gen.endIf();
      } else if (this.allErrors)
        this.gen.endIf();
      else
        this.gen.else();
    }
    pass(X, Q) {
      this.failResult((0, _.not)(X), undefined, Q);
    }
    fail(X) {
      if (X === undefined) {
        if (this.error(), !this.allErrors)
          this.gen.if(false);
        return;
      }
      if (this.gen.if(X), this.error(), this.allErrors)
        this.gen.endIf();
      else
        this.gen.else();
    }
    fail$data(X) {
      if (!this.$data)
        return this.fail(X);
      let { schemaCode: Q } = this;
      this.fail(_._`${Q} !== undefined && (${(0, _.or)(this.invalid$data(), X)})`);
    }
    error(X, Q, $) {
      if (Q) {
        this.setParams(Q), this._error(X, $), this.setParams({});
        return;
      }
      this._error(X, $);
    }
    _error(X, Q) {
      (X ? cX.reportExtraError : cX.reportError)(this, this.def.error, Q);
    }
    $dataError() {
      (0, cX.reportError)(this, this.def.$dataError || cX.keyword$DataError);
    }
    reset() {
      if (this.errsCount === undefined)
        throw Error('add "trackErrors" to keyword definition');
      (0, cX.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(X) {
      if (!this.allErrors)
        this.gen.if(X);
    }
    setParams(X, Q) {
      if (Q)
        Object.assign(this.params, X);
      else
        this.params = X;
    }
    block$data(X, Q, $ = _.nil) {
      this.gen.block(() => {
        this.check$data(X, $), Q();
      });
    }
    check$data(X = _.nil, Q = _.nil) {
      if (!this.$data)
        return;
      let { gen: $, schemaCode: Y, schemaType: W, def: J } = this;
      if ($.if((0, _.or)(_._`${Y} === undefined`, Q)), X !== _.nil)
        $.assign(X, true);
      if (W.length || J.validateSchema) {
        if ($.elseIf(this.invalid$data()), this.$dataError(), X !== _.nil)
          $.assign(X, false);
      }
      $.else();
    }
    invalid$data() {
      let { gen: X, schemaCode: Q, schemaType: $, def: Y, it: W } = this;
      return (0, _.or)(J(), G());
      function J() {
        if ($.length) {
          if (!(Q instanceof _.Name))
            throw Error("ajv implementation error");
          let H = Array.isArray($) ? $ : [$];
          return _._`${(0, v8.checkDataTypes)(H, Q, W.opts.strictNumbers, v8.DataType.Wrong)}`;
        }
        return _.nil;
      }
      function G() {
        if (Y.validateSchema) {
          let H = X.scopeValue("validate$data", { ref: Y.validateSchema });
          return _._`!${H}(${Q})`;
        }
        return _.nil;
      }
    }
    subschema(X, Q) {
      let $ = (0, MY.getSubschema)(this.it, X);
      (0, MY.extendSubschemaData)($, this.it, X), (0, MY.extendSubschemaMode)($, X);
      let Y = { ...this.it, ...$, items: undefined, props: undefined };
      return bw(Y, Q), Y;
    }
    mergeEvaluated(X, Q) {
      let { it: $, gen: Y } = this;
      if (!$.opts.unevaluated)
        return;
      if ($.props !== true && X.props !== undefined)
        $.props = I1.mergeEvaluated.props(Y, X.props, $.props, Q);
      if ($.items !== true && X.items !== undefined)
        $.items = I1.mergeEvaluated.items(Y, X.items, $.items, Q);
    }
    mergeValidEvaluated(X, Q) {
      let { it: $, gen: Y } = this;
      if ($.opts.unevaluated && ($.props !== true || $.items !== true))
        return Y.if(Q, () => this.mergeEvaluated(X, _.Name)), true;
    }
  }
  l3.KeywordCxt = IY;
  function h3(X, Q, $, Y) {
    let W = new IY(X, $, Q);
    if ("code" in $)
      $.code(W, Y);
    else if (W.$data && $.validate)
      (0, pX.funcKeywordCode)(W, $);
    else if ("macro" in $)
      (0, pX.macroKeywordCode)(W, $);
    else if ($.compile || $.validate)
      (0, pX.funcKeywordCode)(W, $);
  }
  var uw = /^\/(?:[^~]|~0|~1)*$/, lw = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function u3(X, { dataLevel: Q, dataNames: $, dataPathArr: Y }) {
    let W, J;
    if (X === "")
      return u.default.rootData;
    if (X[0] === "/") {
      if (!uw.test(X))
        throw Error(`Invalid JSON-pointer: ${X}`);
      W = X, J = u.default.rootData;
    } else {
      let z2 = lw.exec(X);
      if (!z2)
        throw Error(`Invalid JSON-pointer: ${X}`);
      let K = +z2[1];
      if (W = z2[2], W === "#") {
        if (K >= Q)
          throw Error(B("property/index", K));
        return Y[Q - K];
      }
      if (K > Q)
        throw Error(B("data", K));
      if (J = $[Q - K], !W)
        return J;
    }
    let G = J, H = W.split("/");
    for (let z2 of H)
      if (z2)
        J = _._`${J}${(0, _.getProperty)((0, I1.unescapeJsonPointer)(z2))}`, G = _._`${G} && ${J}`;
    return G;
    function B(z2, K) {
      return `Cannot access ${z2} ${K} levels up, current level is ${Q}`;
    }
  }
  l3.getData = u3;
});
var T8 = P((p3) => {
  Object.defineProperty(p3, "__esModule", { value: true });

  class c3 extends Error {
    constructor(X) {
      super("validation failed");
      this.errors = X, this.ajv = this.validation = true;
    }
  }
  p3.default = c3;
});
var iX = P((i3) => {
  Object.defineProperty(i3, "__esModule", { value: true });
  var EY = mX();

  class d3 extends Error {
    constructor(X, Q, $, Y) {
      super(Y || `can't resolve reference ${$} from id ${Q}`);
      this.missingRef = (0, EY.resolveUrl)(X, Q, $), this.missingSchema = (0, EY.normalizeId)((0, EY.getFullPath)(X, this.missingRef));
    }
  }
  i3.default = d3;
});
var x8 = P((o3) => {
  Object.defineProperty(o3, "__esModule", { value: true });
  o3.resolveSchema = o3.getCompilingSchema = o3.resolveRef = o3.compileSchema = o3.SchemaEnv = undefined;
  var X1 = p(), iw = T8(), K6 = R1(), Q1 = mX(), n3 = e(), nw = dX();

  class nX {
    constructor(X) {
      var Q;
      this.refs = {}, this.dynamicAnchors = {};
      let $;
      if (typeof X.schema == "object")
        $ = X.schema;
      this.schema = X.schema, this.schemaId = X.schemaId, this.root = X.root || this, this.baseId = (Q = X.baseId) !== null && Q !== undefined ? Q : (0, Q1.normalizeId)($ === null || $ === undefined ? undefined : $[X.schemaId || "$id"]), this.schemaPath = X.schemaPath, this.localRefs = X.localRefs, this.meta = X.meta, this.$async = $ === null || $ === undefined ? undefined : $.$async, this.refs = {};
    }
  }
  o3.SchemaEnv = nX;
  function PY(X) {
    let Q = r3.call(this, X);
    if (Q)
      return Q;
    let $ = (0, Q1.getFullPath)(this.opts.uriResolver, X.root.baseId), { es5: Y, lines: W } = this.opts.code, { ownProperties: J } = this.opts, G = new X1.CodeGen(this.scope, { es5: Y, lines: W, ownProperties: J }), H;
    if (X.$async)
      H = G.scopeValue("Error", { ref: iw.default, code: X1._`require("ajv/dist/runtime/validation_error").default` });
    let B = G.scopeName("validate");
    X.validateName = B;
    let z2 = { gen: G, allErrors: this.opts.allErrors, data: K6.default.data, parentData: K6.default.parentData, parentDataProperty: K6.default.parentDataProperty, dataNames: [K6.default.data], dataPathArr: [X1.nil], dataLevel: 0, dataTypes: [], definedProperties: new Set, topSchemaRef: G.scopeValue("schema", this.opts.code.source === true ? { ref: X.schema, code: (0, X1.stringify)(X.schema) } : { ref: X.schema }), validateName: B, ValidationError: H, schema: X.schema, schemaEnv: X, rootId: $, baseId: X.baseId || $, schemaPath: X1.nil, errSchemaPath: X.schemaPath || (this.opts.jtd ? "" : "#"), errorPath: X1._`""`, opts: this.opts, self: this }, K;
    try {
      this._compilations.add(X), (0, nw.validateFunctionCode)(z2), G.optimize(this.opts.code.optimize);
      let V = G.toString();
      if (K = `${G.scopeRefs(K6.default.scope)}return ${V}`, this.opts.code.process)
        K = this.opts.code.process(K, X);
      let U = Function(`${K6.default.self}`, `${K6.default.scope}`, K)(this, this.scope.get());
      if (this.scope.value(B, { ref: U }), U.errors = null, U.schema = X.schema, U.schemaEnv = X, X.$async)
        U.$async = true;
      if (this.opts.code.source === true)
        U.source = { validateName: B, validateCode: V, scopeValues: G._values };
      if (this.opts.unevaluated) {
        let { props: F, items: q } = z2;
        if (U.evaluated = { props: F instanceof X1.Name ? undefined : F, items: q instanceof X1.Name ? undefined : q, dynamicProps: F instanceof X1.Name, dynamicItems: q instanceof X1.Name }, U.source)
          U.source.evaluated = (0, X1.stringify)(U.evaluated);
      }
      return X.validate = U, X;
    } catch (V) {
      if (delete X.validate, delete X.validateName, K)
        this.logger.error("Error compiling schema, function code:", K);
      throw V;
    } finally {
      this._compilations.delete(X);
    }
  }
  o3.compileSchema = PY;
  function rw(X, Q, $) {
    var Y;
    $ = (0, Q1.resolveUrl)(this.opts.uriResolver, Q, $);
    let W = X.refs[$];
    if (W)
      return W;
    let J = aw.call(this, X, $);
    if (J === undefined) {
      let G = (Y = X.localRefs) === null || Y === undefined ? undefined : Y[$], { schemaId: H } = this.opts;
      if (G)
        J = new nX({ schema: G, schemaId: H, root: X, baseId: Q });
    }
    if (J === undefined)
      return;
    return X.refs[$] = ow.call(this, J);
  }
  o3.resolveRef = rw;
  function ow(X) {
    if ((0, Q1.inlineRef)(X.schema, this.opts.inlineRefs))
      return X.schema;
    return X.validate ? X : PY.call(this, X);
  }
  function r3(X) {
    for (let Q of this._compilations)
      if (tw(Q, X))
        return Q;
  }
  o3.getCompilingSchema = r3;
  function tw(X, Q) {
    return X.schema === Q.schema && X.root === Q.root && X.baseId === Q.baseId;
  }
  function aw(X, Q) {
    let $;
    while (typeof ($ = this.refs[Q]) == "string")
      Q = $;
    return $ || this.schemas[Q] || _8.call(this, X, Q);
  }
  function _8(X, Q) {
    let $ = this.opts.uriResolver.parse(Q), Y = (0, Q1._getFullPath)(this.opts.uriResolver, $), W = (0, Q1.getFullPath)(this.opts.uriResolver, X.baseId, undefined);
    if (Object.keys(X.schema).length > 0 && Y === W)
      return bY.call(this, $, X);
    let J = (0, Q1.normalizeId)(Y), G = this.refs[J] || this.schemas[J];
    if (typeof G == "string") {
      let H = _8.call(this, X, G);
      if (typeof (H === null || H === undefined ? undefined : H.schema) !== "object")
        return;
      return bY.call(this, $, H);
    }
    if (typeof (G === null || G === undefined ? undefined : G.schema) !== "object")
      return;
    if (!G.validate)
      PY.call(this, G);
    if (J === (0, Q1.normalizeId)(Q)) {
      let { schema: H } = G, { schemaId: B } = this.opts, z2 = H[B];
      if (z2)
        W = (0, Q1.resolveUrl)(this.opts.uriResolver, W, z2);
      return new nX({ schema: H, schemaId: B, root: X, baseId: W });
    }
    return bY.call(this, $, G);
  }
  o3.resolveSchema = _8;
  var sw = new Set(["properties", "patternProperties", "enum", "dependencies", "definitions"]);
  function bY(X, { baseId: Q, schema: $, root: Y }) {
    var W;
    if (((W = X.fragment) === null || W === undefined ? undefined : W[0]) !== "/")
      return;
    for (let H of X.fragment.slice(1).split("/")) {
      if (typeof $ === "boolean")
        return;
      let B = $[(0, n3.unescapeFragment)(H)];
      if (B === undefined)
        return;
      $ = B;
      let z2 = typeof $ === "object" && $[this.opts.schemaId];
      if (!sw.has(H) && z2)
        Q = (0, Q1.resolveUrl)(this.opts.uriResolver, Q, z2);
    }
    let J;
    if (typeof $ != "boolean" && $.$ref && !(0, n3.schemaHasRulesButRef)($, this.RULES)) {
      let H = (0, Q1.resolveUrl)(this.opts.uriResolver, Q, $.$ref);
      J = _8.call(this, Y, H);
    }
    let { schemaId: G } = this.opts;
    if (J = J || new nX({ schema: $, schemaId: G, root: Y, baseId: Q }), J.schema !== J.root.schema)
      return J;
    return;
  }
});
var a3 = P((VT, YA) => {
  YA.exports = { $id: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", description: "Meta-schema for $data reference (JSON AnySchema extension proposal)", type: "object", required: ["$data"], properties: { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, additionalProperties: false };
});
var e3 = P((LT, s3) => {
  var WA = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, a: 10, A: 10, b: 11, B: 11, c: 12, C: 12, d: 13, D: 13, e: 14, E: 14, f: 15, F: 15 };
  s3.exports = { HEX: WA };
});
var HH = P((qT, GH) => {
  var { HEX: JA } = e3(), GA = /^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u;
  function YH(X) {
    if (JH(X, ".") < 3)
      return { host: X, isIPV4: false };
    let Q = X.match(GA) || [], [$] = Q;
    if ($)
      return { host: BA($, "."), isIPV4: true };
    else
      return { host: X, isIPV4: false };
  }
  function SY(X, Q = false) {
    let $ = "", Y = true;
    for (let W of X) {
      if (JA[W] === undefined)
        return;
      if (W !== "0" && Y === true)
        Y = false;
      if (!Y)
        $ += W;
    }
    if (Q && $.length === 0)
      $ = "0";
    return $;
  }
  function HA(X) {
    let Q = 0, $ = { error: false, address: "", zone: "" }, Y = [], W = [], J = false, G = false, H = false;
    function B() {
      if (W.length) {
        if (J === false) {
          let z2 = SY(W);
          if (z2 !== undefined)
            Y.push(z2);
          else
            return $.error = true, false;
        }
        W.length = 0;
      }
      return true;
    }
    for (let z2 = 0;z2 < X.length; z2++) {
      let K = X[z2];
      if (K === "[" || K === "]")
        continue;
      if (K === ":") {
        if (G === true)
          H = true;
        if (!B())
          break;
        if (Q++, Y.push(":"), Q > 7) {
          $.error = true;
          break;
        }
        if (z2 - 1 >= 0 && X[z2 - 1] === ":")
          G = true;
        continue;
      } else if (K === "%") {
        if (!B())
          break;
        J = true;
      } else {
        W.push(K);
        continue;
      }
    }
    if (W.length)
      if (J)
        $.zone = W.join("");
      else if (H)
        Y.push(W.join(""));
      else
        Y.push(SY(W));
    return $.address = Y.join(""), $;
  }
  function WH(X) {
    if (JH(X, ":") < 2)
      return { host: X, isIPV6: false };
    let Q = HA(X);
    if (!Q.error) {
      let { address: $, address: Y } = Q;
      if (Q.zone)
        $ += "%" + Q.zone, Y += "%25" + Q.zone;
      return { host: $, escapedHost: Y, isIPV6: true };
    } else
      return { host: X, isIPV6: false };
  }
  function BA(X, Q) {
    let $ = "", Y = true, W = X.length;
    for (let J = 0;J < W; J++) {
      let G = X[J];
      if (G === "0" && Y) {
        if (J + 1 <= W && X[J + 1] === Q || J + 1 === W)
          $ += G, Y = false;
      } else {
        if (G === Q)
          Y = true;
        else
          Y = false;
        $ += G;
      }
    }
    return $;
  }
  function JH(X, Q) {
    let $ = 0;
    for (let Y = 0;Y < X.length; Y++)
      if (X[Y] === Q)
        $++;
    return $;
  }
  var XH = /^\.\.?\//u, QH = /^\/\.(?:\/|$)/u, $H = /^\/\.\.(?:\/|$)/u, zA = /^\/?(?:.|\n)*?(?=\/|$)/u;
  function KA(X) {
    let Q = [];
    while (X.length)
      if (X.match(XH))
        X = X.replace(XH, "");
      else if (X.match(QH))
        X = X.replace(QH, "/");
      else if (X.match($H))
        X = X.replace($H, "/"), Q.pop();
      else if (X === "." || X === "..")
        X = "";
      else {
        let $ = X.match(zA);
        if ($) {
          let Y = $[0];
          X = X.slice(Y.length), Q.push(Y);
        } else
          throw Error("Unexpected dot segment condition");
      }
    return Q.join("");
  }
  function UA(X, Q) {
    let $ = Q !== true ? escape : unescape;
    if (X.scheme !== undefined)
      X.scheme = $(X.scheme);
    if (X.userinfo !== undefined)
      X.userinfo = $(X.userinfo);
    if (X.host !== undefined)
      X.host = $(X.host);
    if (X.path !== undefined)
      X.path = $(X.path);
    if (X.query !== undefined)
      X.query = $(X.query);
    if (X.fragment !== undefined)
      X.fragment = $(X.fragment);
    return X;
  }
  function VA(X) {
    let Q = [];
    if (X.userinfo !== undefined)
      Q.push(X.userinfo), Q.push("@");
    if (X.host !== undefined) {
      let $ = unescape(X.host), Y = YH($);
      if (Y.isIPV4)
        $ = Y.host;
      else {
        let W = WH(Y.host);
        if (W.isIPV6 === true)
          $ = `[${W.escapedHost}]`;
        else
          $ = X.host;
      }
      Q.push($);
    }
    if (typeof X.port === "number" || typeof X.port === "string")
      Q.push(":"), Q.push(String(X.port));
    return Q.length ? Q.join("") : undefined;
  }
  GH.exports = { recomposeAuthority: VA, normalizeComponentEncoding: UA, removeDotSegments: KA, normalizeIPv4: YH, normalizeIPv6: WH, stringArrayToHexStripped: SY };
});
var LH = P((FT, VH) => {
  var LA = /^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu, qA = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu;
  function BH(X) {
    return typeof X.secure === "boolean" ? X.secure : String(X.scheme).toLowerCase() === "wss";
  }
  function zH(X) {
    if (!X.host)
      X.error = X.error || "HTTP URIs must have a host.";
    return X;
  }
  function KH(X) {
    let Q = String(X.scheme).toLowerCase() === "https";
    if (X.port === (Q ? 443 : 80) || X.port === "")
      X.port = undefined;
    if (!X.path)
      X.path = "/";
    return X;
  }
  function FA(X) {
    return X.secure = BH(X), X.resourceName = (X.path || "/") + (X.query ? "?" + X.query : ""), X.path = undefined, X.query = undefined, X;
  }
  function NA(X) {
    if (X.port === (BH(X) ? 443 : 80) || X.port === "")
      X.port = undefined;
    if (typeof X.secure === "boolean")
      X.scheme = X.secure ? "wss" : "ws", X.secure = undefined;
    if (X.resourceName) {
      let [Q, $] = X.resourceName.split("?");
      X.path = Q && Q !== "/" ? Q : undefined, X.query = $, X.resourceName = undefined;
    }
    return X.fragment = undefined, X;
  }
  function OA(X, Q) {
    if (!X.path)
      return X.error = "URN can not be parsed", X;
    let $ = X.path.match(qA);
    if ($) {
      let Y = Q.scheme || X.scheme || "urn";
      X.nid = $[1].toLowerCase(), X.nss = $[2];
      let W = `${Y}:${Q.nid || X.nid}`, J = ZY[W];
      if (X.path = undefined, J)
        X = J.parse(X, Q);
    } else
      X.error = X.error || "URN can not be parsed.";
    return X;
  }
  function DA(X, Q) {
    let $ = Q.scheme || X.scheme || "urn", Y = X.nid.toLowerCase(), W = `${$}:${Q.nid || Y}`, J = ZY[W];
    if (J)
      X = J.serialize(X, Q);
    let G = X, H = X.nss;
    return G.path = `${Y || Q.nid}:${H}`, Q.skipEscape = true, G;
  }
  function wA(X, Q) {
    let $ = X;
    if ($.uuid = $.nss, $.nss = undefined, !Q.tolerant && (!$.uuid || !LA.test($.uuid)))
      $.error = $.error || "UUID is not valid.";
    return $;
  }
  function AA(X) {
    let Q = X;
    return Q.nss = (X.uuid || "").toLowerCase(), Q;
  }
  var UH = { scheme: "http", domainHost: true, parse: zH, serialize: KH }, MA = { scheme: "https", domainHost: UH.domainHost, parse: zH, serialize: KH }, y8 = { scheme: "ws", domainHost: true, parse: FA, serialize: NA }, jA = { scheme: "wss", domainHost: y8.domainHost, parse: y8.parse, serialize: y8.serialize }, RA = { scheme: "urn", parse: OA, serialize: DA, skipNormalize: true }, IA = { scheme: "urn:uuid", parse: wA, serialize: AA, skipNormalize: true }, ZY = { http: UH, https: MA, ws: y8, wss: jA, urn: RA, "urn:uuid": IA };
  VH.exports = ZY;
});
var FH = P((NT, f8) => {
  var { normalizeIPv6: EA, normalizeIPv4: bA, removeDotSegments: rX, recomposeAuthority: PA, normalizeComponentEncoding: g8 } = HH(), CY = LH();
  function SA(X, Q) {
    if (typeof X === "string")
      X = U1(E1(X, Q), Q);
    else if (typeof X === "object")
      X = E1(U1(X, Q), Q);
    return X;
  }
  function ZA(X, Q, $) {
    let Y = Object.assign({ scheme: "null" }, $), W = qH(E1(X, Y), E1(Q, Y), Y, true);
    return U1(W, { ...Y, skipEscape: true });
  }
  function qH(X, Q, $, Y) {
    let W = {};
    if (!Y)
      X = E1(U1(X, $), $), Q = E1(U1(Q, $), $);
    if ($ = $ || {}, !$.tolerant && Q.scheme)
      W.scheme = Q.scheme, W.userinfo = Q.userinfo, W.host = Q.host, W.port = Q.port, W.path = rX(Q.path || ""), W.query = Q.query;
    else {
      if (Q.userinfo !== undefined || Q.host !== undefined || Q.port !== undefined)
        W.userinfo = Q.userinfo, W.host = Q.host, W.port = Q.port, W.path = rX(Q.path || ""), W.query = Q.query;
      else {
        if (!Q.path)
          if (W.path = X.path, Q.query !== undefined)
            W.query = Q.query;
          else
            W.query = X.query;
        else {
          if (Q.path.charAt(0) === "/")
            W.path = rX(Q.path);
          else {
            if ((X.userinfo !== undefined || X.host !== undefined || X.port !== undefined) && !X.path)
              W.path = "/" + Q.path;
            else if (!X.path)
              W.path = Q.path;
            else
              W.path = X.path.slice(0, X.path.lastIndexOf("/") + 1) + Q.path;
            W.path = rX(W.path);
          }
          W.query = Q.query;
        }
        W.userinfo = X.userinfo, W.host = X.host, W.port = X.port;
      }
      W.scheme = X.scheme;
    }
    return W.fragment = Q.fragment, W;
  }
  function CA(X, Q, $) {
    if (typeof X === "string")
      X = unescape(X), X = U1(g8(E1(X, $), true), { ...$, skipEscape: true });
    else if (typeof X === "object")
      X = U1(g8(X, true), { ...$, skipEscape: true });
    if (typeof Q === "string")
      Q = unescape(Q), Q = U1(g8(E1(Q, $), true), { ...$, skipEscape: true });
    else if (typeof Q === "object")
      Q = U1(g8(Q, true), { ...$, skipEscape: true });
    return X.toLowerCase() === Q.toLowerCase();
  }
  function U1(X, Q) {
    let $ = { host: X.host, scheme: X.scheme, userinfo: X.userinfo, port: X.port, path: X.path, query: X.query, nid: X.nid, nss: X.nss, uuid: X.uuid, fragment: X.fragment, reference: X.reference, resourceName: X.resourceName, secure: X.secure, error: "" }, Y = Object.assign({}, Q), W = [], J = CY[(Y.scheme || $.scheme || "").toLowerCase()];
    if (J && J.serialize)
      J.serialize($, Y);
    if ($.path !== undefined)
      if (!Y.skipEscape) {
        if ($.path = escape($.path), $.scheme !== undefined)
          $.path = $.path.split("%3A").join(":");
      } else
        $.path = unescape($.path);
    if (Y.reference !== "suffix" && $.scheme)
      W.push($.scheme, ":");
    let G = PA($);
    if (G !== undefined) {
      if (Y.reference !== "suffix")
        W.push("//");
      if (W.push(G), $.path && $.path.charAt(0) !== "/")
        W.push("/");
    }
    if ($.path !== undefined) {
      let H = $.path;
      if (!Y.absolutePath && (!J || !J.absolutePath))
        H = rX(H);
      if (G === undefined)
        H = H.replace(/^\/\//u, "/%2F");
      W.push(H);
    }
    if ($.query !== undefined)
      W.push("?", $.query);
    if ($.fragment !== undefined)
      W.push("#", $.fragment);
    return W.join("");
  }
  var kA = Array.from({ length: 127 }, (X, Q) => /[^!"$&'()*+,\-.;=_`a-z{}~]/u.test(String.fromCharCode(Q)));
  function vA(X) {
    let Q = 0;
    for (let $ = 0, Y = X.length;$ < Y; ++$)
      if (Q = X.charCodeAt($), Q > 126 || kA[Q])
        return true;
    return false;
  }
  var TA = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
  function E1(X, Q) {
    let $ = Object.assign({}, Q), Y = { scheme: undefined, userinfo: undefined, host: "", port: undefined, path: "", query: undefined, fragment: undefined }, W = X.indexOf("%") !== -1, J = false;
    if ($.reference === "suffix")
      X = ($.scheme ? $.scheme + ":" : "") + "//" + X;
    let G = X.match(TA);
    if (G) {
      if (Y.scheme = G[1], Y.userinfo = G[3], Y.host = G[4], Y.port = parseInt(G[5], 10), Y.path = G[6] || "", Y.query = G[7], Y.fragment = G[8], isNaN(Y.port))
        Y.port = G[5];
      if (Y.host) {
        let B = bA(Y.host);
        if (B.isIPV4 === false) {
          let z2 = EA(B.host);
          Y.host = z2.host.toLowerCase(), J = z2.isIPV6;
        } else
          Y.host = B.host, J = true;
      }
      if (Y.scheme === undefined && Y.userinfo === undefined && Y.host === undefined && Y.port === undefined && Y.query === undefined && !Y.path)
        Y.reference = "same-document";
      else if (Y.scheme === undefined)
        Y.reference = "relative";
      else if (Y.fragment === undefined)
        Y.reference = "absolute";
      else
        Y.reference = "uri";
      if ($.reference && $.reference !== "suffix" && $.reference !== Y.reference)
        Y.error = Y.error || "URI is not a " + $.reference + " reference.";
      let H = CY[($.scheme || Y.scheme || "").toLowerCase()];
      if (!$.unicodeSupport && (!H || !H.unicodeSupport)) {
        if (Y.host && ($.domainHost || H && H.domainHost) && J === false && vA(Y.host))
          try {
            Y.host = URL.domainToASCII(Y.host.toLowerCase());
          } catch (B) {
            Y.error = Y.error || "Host's domain name can not be converted to ASCII: " + B;
          }
      }
      if (!H || H && !H.skipNormalize) {
        if (W && Y.scheme !== undefined)
          Y.scheme = unescape(Y.scheme);
        if (W && Y.host !== undefined)
          Y.host = unescape(Y.host);
        if (Y.path)
          Y.path = escape(unescape(Y.path));
        if (Y.fragment)
          Y.fragment = encodeURI(decodeURIComponent(Y.fragment));
      }
      if (H && H.parse)
        H.parse(Y, $);
    } else
      Y.error = Y.error || "URI can not be parsed.";
    return Y;
  }
  var kY = { SCHEMES: CY, normalize: SA, resolve: ZA, resolveComponents: qH, equal: CA, serialize: U1, parse: E1 };
  f8.exports = kY;
  f8.exports.default = kY;
  f8.exports.fastUri = kY;
});
var DH = P((OH) => {
  Object.defineProperty(OH, "__esModule", { value: true });
  var NH = FH();
  NH.code = 'require("ajv/dist/runtime/uri").default';
  OH.default = NH;
});
var bH = P((b1) => {
  Object.defineProperty(b1, "__esModule", { value: true });
  b1.CodeGen = b1.Name = b1.nil = b1.stringify = b1.str = b1._ = b1.KeywordCxt = undefined;
  var xA = dX();
  Object.defineProperty(b1, "KeywordCxt", { enumerable: true, get: function() {
    return xA.KeywordCxt;
  } });
  var d6 = p();
  Object.defineProperty(b1, "_", { enumerable: true, get: function() {
    return d6._;
  } });
  Object.defineProperty(b1, "str", { enumerable: true, get: function() {
    return d6.str;
  } });
  Object.defineProperty(b1, "stringify", { enumerable: true, get: function() {
    return d6.stringify;
  } });
  Object.defineProperty(b1, "nil", { enumerable: true, get: function() {
    return d6.nil;
  } });
  Object.defineProperty(b1, "Name", { enumerable: true, get: function() {
    return d6.Name;
  } });
  Object.defineProperty(b1, "CodeGen", { enumerable: true, get: function() {
    return d6.CodeGen;
  } });
  var yA = T8(), RH = iX(), gA = UY(), oX = x8(), fA = p(), tX = mX(), h8 = lX(), TY = e(), wH = a3(), hA = DH(), IH = (X, Q) => new RegExp(X, Q);
  IH.code = "new RegExp";
  var uA = ["removeAdditional", "useDefaults", "coerceTypes"], lA = new Set(["validate", "serialize", "parse", "wrapper", "root", "schema", "keyword", "pattern", "formats", "validate$data", "func", "obj", "Error"]), mA = { errorDataPath: "", format: "`validateFormats: false` can be used instead.", nullable: '"nullable" keyword is supported by default.', jsonPointers: "Deprecated jsPropertySyntax can be used instead.", extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.", missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.", processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`", sourceCode: "Use option `code: {source: true}`", strictDefaults: "It is default now, see option `strict`.", strictKeywords: "It is default now, see option `strict`.", uniqueItems: '"uniqueItems" keyword is always validated.', unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).", cache: "Map is used as cache, schema object as key.", serialize: "Map is used as cache, schema object as key.", ajvErrors: "It is default now." }, cA = { ignoreKeywordsWithRef: "", jsPropertySyntax: "", unicode: '"minLength"/"maxLength" account for unicode characters by default.' }, AH = 200;
  function pA(X) {
    var Q, $, Y, W, J, G, H, B, z2, K, V, L, U, F, q, N, w, M, R, S, C, K0, U0, s, D0;
    let q0 = X.strict, L1 = (Q = X.code) === null || Q === undefined ? undefined : Q.optimize, P1 = L1 === true || L1 === undefined ? 1 : L1 || 0, o1 = (Y = ($ = X.code) === null || $ === undefined ? undefined : $.regExp) !== null && Y !== undefined ? Y : IH, m = (W = X.uriResolver) !== null && W !== undefined ? W : hA.default;
    return { strictSchema: (G = (J = X.strictSchema) !== null && J !== undefined ? J : q0) !== null && G !== undefined ? G : true, strictNumbers: (B = (H = X.strictNumbers) !== null && H !== undefined ? H : q0) !== null && B !== undefined ? B : true, strictTypes: (K = (z2 = X.strictTypes) !== null && z2 !== undefined ? z2 : q0) !== null && K !== undefined ? K : "log", strictTuples: (L = (V = X.strictTuples) !== null && V !== undefined ? V : q0) !== null && L !== undefined ? L : "log", strictRequired: (F = (U = X.strictRequired) !== null && U !== undefined ? U : q0) !== null && F !== undefined ? F : false, code: X.code ? { ...X.code, optimize: P1, regExp: o1 } : { optimize: P1, regExp: o1 }, loopRequired: (q = X.loopRequired) !== null && q !== undefined ? q : AH, loopEnum: (N = X.loopEnum) !== null && N !== undefined ? N : AH, meta: (w = X.meta) !== null && w !== undefined ? w : true, messages: (M = X.messages) !== null && M !== undefined ? M : true, inlineRefs: (R = X.inlineRefs) !== null && R !== undefined ? R : true, schemaId: (S = X.schemaId) !== null && S !== undefined ? S : "$id", addUsedSchema: (C = X.addUsedSchema) !== null && C !== undefined ? C : true, validateSchema: (K0 = X.validateSchema) !== null && K0 !== undefined ? K0 : true, validateFormats: (U0 = X.validateFormats) !== null && U0 !== undefined ? U0 : true, unicodeRegExp: (s = X.unicodeRegExp) !== null && s !== undefined ? s : true, int32range: (D0 = X.int32range) !== null && D0 !== undefined ? D0 : true, uriResolver: m };
  }

  class u8 {
    constructor(X = {}) {
      this.schemas = {}, this.refs = {}, this.formats = {}, this._compilations = new Set, this._loading = {}, this._cache = new Map, X = this.opts = { ...X, ...pA(X) };
      let { es5: Q, lines: $ } = this.opts.code;
      this.scope = new fA.ValueScope({ scope: {}, prefixes: lA, es5: Q, lines: $ }), this.logger = tA(X.logger);
      let Y = X.validateFormats;
      if (X.validateFormats = false, this.RULES = (0, gA.getRules)(), MH.call(this, mA, X, "NOT SUPPORTED"), MH.call(this, cA, X, "DEPRECATED", "warn"), this._metaOpts = rA.call(this), X.formats)
        iA.call(this);
      if (this._addVocabularies(), this._addDefaultMetaSchema(), X.keywords)
        nA.call(this, X.keywords);
      if (typeof X.meta == "object")
        this.addMetaSchema(X.meta);
      dA.call(this), X.validateFormats = Y;
    }
    _addVocabularies() {
      this.addKeyword("$async");
    }
    _addDefaultMetaSchema() {
      let { $data: X, meta: Q, schemaId: $ } = this.opts, Y = wH;
      if ($ === "id")
        Y = { ...wH }, Y.id = Y.$id, delete Y.$id;
      if (Q && X)
        this.addMetaSchema(Y, Y[$], false);
    }
    defaultMeta() {
      let { meta: X, schemaId: Q } = this.opts;
      return this.opts.defaultMeta = typeof X == "object" ? X[Q] || X : undefined;
    }
    validate(X, Q) {
      let $;
      if (typeof X == "string") {
        if ($ = this.getSchema(X), !$)
          throw Error(`no schema with key or ref "${X}"`);
      } else
        $ = this.compile(X);
      let Y = $(Q);
      if (!("$async" in $))
        this.errors = $.errors;
      return Y;
    }
    compile(X, Q) {
      let $ = this._addSchema(X, Q);
      return $.validate || this._compileSchemaEnv($);
    }
    compileAsync(X, Q) {
      if (typeof this.opts.loadSchema != "function")
        throw Error("options.loadSchema should be a function");
      let { loadSchema: $ } = this.opts;
      return Y.call(this, X, Q);
      async function Y(z2, K) {
        await W.call(this, z2.$schema);
        let V = this._addSchema(z2, K);
        return V.validate || J.call(this, V);
      }
      async function W(z2) {
        if (z2 && !this.getSchema(z2))
          await Y.call(this, { $ref: z2 }, true);
      }
      async function J(z2) {
        try {
          return this._compileSchemaEnv(z2);
        } catch (K) {
          if (!(K instanceof RH.default))
            throw K;
          return G.call(this, K), await H.call(this, K.missingSchema), J.call(this, z2);
        }
      }
      function G({ missingSchema: z2, missingRef: K }) {
        if (this.refs[z2])
          throw Error(`AnySchema ${z2} is loaded but ${K} cannot be resolved`);
      }
      async function H(z2) {
        let K = await B.call(this, z2);
        if (!this.refs[z2])
          await W.call(this, K.$schema);
        if (!this.refs[z2])
          this.addSchema(K, z2, Q);
      }
      async function B(z2) {
        let K = this._loading[z2];
        if (K)
          return K;
        try {
          return await (this._loading[z2] = $(z2));
        } finally {
          delete this._loading[z2];
        }
      }
    }
    addSchema(X, Q, $, Y = this.opts.validateSchema) {
      if (Array.isArray(X)) {
        for (let J of X)
          this.addSchema(J, undefined, $, Y);
        return this;
      }
      let W;
      if (typeof X === "object") {
        let { schemaId: J } = this.opts;
        if (W = X[J], W !== undefined && typeof W != "string")
          throw Error(`schema ${J} must be string`);
      }
      return Q = (0, tX.normalizeId)(Q || W), this._checkUnique(Q), this.schemas[Q] = this._addSchema(X, $, Q, Y, true), this;
    }
    addMetaSchema(X, Q, $ = this.opts.validateSchema) {
      return this.addSchema(X, Q, true, $), this;
    }
    validateSchema(X, Q) {
      if (typeof X == "boolean")
        return true;
      let $;
      if ($ = X.$schema, $ !== undefined && typeof $ != "string")
        throw Error("$schema must be a string");
      if ($ = $ || this.opts.defaultMeta || this.defaultMeta(), !$)
        return this.logger.warn("meta-schema not available"), this.errors = null, true;
      let Y = this.validate($, X);
      if (!Y && Q) {
        let W = "schema is invalid: " + this.errorsText();
        if (this.opts.validateSchema === "log")
          this.logger.error(W);
        else
          throw Error(W);
      }
      return Y;
    }
    getSchema(X) {
      let Q;
      while (typeof (Q = jH.call(this, X)) == "string")
        X = Q;
      if (Q === undefined) {
        let { schemaId: $ } = this.opts, Y = new oX.SchemaEnv({ schema: {}, schemaId: $ });
        if (Q = oX.resolveSchema.call(this, Y, X), !Q)
          return;
        this.refs[X] = Q;
      }
      return Q.validate || this._compileSchemaEnv(Q);
    }
    removeSchema(X) {
      if (X instanceof RegExp)
        return this._removeAllSchemas(this.schemas, X), this._removeAllSchemas(this.refs, X), this;
      switch (typeof X) {
        case "undefined":
          return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
        case "string": {
          let Q = jH.call(this, X);
          if (typeof Q == "object")
            this._cache.delete(Q.schema);
          return delete this.schemas[X], delete this.refs[X], this;
        }
        case "object": {
          let Q = X;
          this._cache.delete(Q);
          let $ = X[this.opts.schemaId];
          if ($)
            $ = (0, tX.normalizeId)($), delete this.schemas[$], delete this.refs[$];
          return this;
        }
        default:
          throw Error("ajv.removeSchema: invalid parameter");
      }
    }
    addVocabulary(X) {
      for (let Q of X)
        this.addKeyword(Q);
      return this;
    }
    addKeyword(X, Q) {
      let $;
      if (typeof X == "string") {
        if ($ = X, typeof Q == "object")
          this.logger.warn("these parameters are deprecated, see docs for addKeyword"), Q.keyword = $;
      } else if (typeof X == "object" && Q === undefined) {
        if (Q = X, $ = Q.keyword, Array.isArray($) && !$.length)
          throw Error("addKeywords: keyword must be string or non-empty array");
      } else
        throw Error("invalid addKeywords parameters");
      if (sA.call(this, $, Q), !Q)
        return (0, TY.eachItem)($, (W) => vY.call(this, W)), this;
      XM.call(this, Q);
      let Y = { ...Q, type: (0, h8.getJSONTypes)(Q.type), schemaType: (0, h8.getJSONTypes)(Q.schemaType) };
      return (0, TY.eachItem)($, Y.type.length === 0 ? (W) => vY.call(this, W, Y) : (W) => Y.type.forEach((J) => vY.call(this, W, Y, J))), this;
    }
    getKeyword(X) {
      let Q = this.RULES.all[X];
      return typeof Q == "object" ? Q.definition : !!Q;
    }
    removeKeyword(X) {
      let { RULES: Q } = this;
      delete Q.keywords[X], delete Q.all[X];
      for (let $ of Q.rules) {
        let Y = $.rules.findIndex((W) => W.keyword === X);
        if (Y >= 0)
          $.rules.splice(Y, 1);
      }
      return this;
    }
    addFormat(X, Q) {
      if (typeof Q == "string")
        Q = new RegExp(Q);
      return this.formats[X] = Q, this;
    }
    errorsText(X = this.errors, { separator: Q = ", ", dataVar: $ = "data" } = {}) {
      if (!X || X.length === 0)
        return "No errors";
      return X.map((Y) => `${$}${Y.instancePath} ${Y.message}`).reduce((Y, W) => Y + Q + W);
    }
    $dataMetaSchema(X, Q) {
      let $ = this.RULES.all;
      X = JSON.parse(JSON.stringify(X));
      for (let Y of Q) {
        let W = Y.split("/").slice(1), J = X;
        for (let G of W)
          J = J[G];
        for (let G in $) {
          let H = $[G];
          if (typeof H != "object")
            continue;
          let { $data: B } = H.definition, z2 = J[G];
          if (B && z2)
            J[G] = EH(z2);
        }
      }
      return X;
    }
    _removeAllSchemas(X, Q) {
      for (let $ in X) {
        let Y = X[$];
        if (!Q || Q.test($)) {
          if (typeof Y == "string")
            delete X[$];
          else if (Y && !Y.meta)
            this._cache.delete(Y.schema), delete X[$];
        }
      }
    }
    _addSchema(X, Q, $, Y = this.opts.validateSchema, W = this.opts.addUsedSchema) {
      let J, { schemaId: G } = this.opts;
      if (typeof X == "object")
        J = X[G];
      else if (this.opts.jtd)
        throw Error("schema must be object");
      else if (typeof X != "boolean")
        throw Error("schema must be object or boolean");
      let H = this._cache.get(X);
      if (H !== undefined)
        return H;
      $ = (0, tX.normalizeId)(J || $);
      let B = tX.getSchemaRefs.call(this, X, $);
      if (H = new oX.SchemaEnv({ schema: X, schemaId: G, meta: Q, baseId: $, localRefs: B }), this._cache.set(H.schema, H), W && !$.startsWith("#")) {
        if ($)
          this._checkUnique($);
        this.refs[$] = H;
      }
      if (Y)
        this.validateSchema(X, true);
      return H;
    }
    _checkUnique(X) {
      if (this.schemas[X] || this.refs[X])
        throw Error(`schema with key or id "${X}" already exists`);
    }
    _compileSchemaEnv(X) {
      if (X.meta)
        this._compileMetaSchema(X);
      else
        oX.compileSchema.call(this, X);
      if (!X.validate)
        throw Error("ajv implementation error");
      return X.validate;
    }
    _compileMetaSchema(X) {
      let Q = this.opts;
      this.opts = this._metaOpts;
      try {
        oX.compileSchema.call(this, X);
      } finally {
        this.opts = Q;
      }
    }
  }
  u8.ValidationError = yA.default;
  u8.MissingRefError = RH.default;
  b1.default = u8;
  function MH(X, Q, $, Y = "error") {
    for (let W in X) {
      let J = W;
      if (J in Q)
        this.logger[Y](`${$}: option ${W}. ${X[J]}`);
    }
  }
  function jH(X) {
    return X = (0, tX.normalizeId)(X), this.schemas[X] || this.refs[X];
  }
  function dA() {
    let X = this.opts.schemas;
    if (!X)
      return;
    if (Array.isArray(X))
      this.addSchema(X);
    else
      for (let Q in X)
        this.addSchema(X[Q], Q);
  }
  function iA() {
    for (let X in this.opts.formats) {
      let Q = this.opts.formats[X];
      if (Q)
        this.addFormat(X, Q);
    }
  }
  function nA(X) {
    if (Array.isArray(X)) {
      this.addVocabulary(X);
      return;
    }
    this.logger.warn("keywords option as map is deprecated, pass array");
    for (let Q in X) {
      let $ = X[Q];
      if (!$.keyword)
        $.keyword = Q;
      this.addKeyword($);
    }
  }
  function rA() {
    let X = { ...this.opts };
    for (let Q of uA)
      delete X[Q];
    return X;
  }
  var oA = { log() {}, warn() {}, error() {} };
  function tA(X) {
    if (X === false)
      return oA;
    if (X === undefined)
      return console;
    if (X.log && X.warn && X.error)
      return X;
    throw Error("logger must implement log, warn and error methods");
  }
  var aA = /^[a-z_$][a-z0-9_$:-]*$/i;
  function sA(X, Q) {
    let { RULES: $ } = this;
    if ((0, TY.eachItem)(X, (Y) => {
      if ($.keywords[Y])
        throw Error(`Keyword ${Y} is already defined`);
      if (!aA.test(Y))
        throw Error(`Keyword ${Y} has invalid name`);
    }), !Q)
      return;
    if (Q.$data && !(("code" in Q) || ("validate" in Q)))
      throw Error('$data keyword must have "code" or "validate" function');
  }
  function vY(X, Q, $) {
    var Y;
    let W = Q === null || Q === undefined ? undefined : Q.post;
    if ($ && W)
      throw Error('keyword with "post" flag cannot have "type"');
    let { RULES: J } = this, G = W ? J.post : J.rules.find(({ type: B }) => B === $);
    if (!G)
      G = { type: $, rules: [] }, J.rules.push(G);
    if (J.keywords[X] = true, !Q)
      return;
    let H = { keyword: X, definition: { ...Q, type: (0, h8.getJSONTypes)(Q.type), schemaType: (0, h8.getJSONTypes)(Q.schemaType) } };
    if (Q.before)
      eA.call(this, G, H, Q.before);
    else
      G.rules.push(H);
    J.all[X] = H, (Y = Q.implements) === null || Y === undefined || Y.forEach((B) => this.addKeyword(B));
  }
  function eA(X, Q, $) {
    let Y = X.rules.findIndex((W) => W.keyword === $);
    if (Y >= 0)
      X.rules.splice(Y, 0, Q);
    else
      X.rules.push(Q), this.logger.warn(`rule ${$} is not defined`);
  }
  function XM(X) {
    let { metaSchema: Q } = X;
    if (Q === undefined)
      return;
    if (X.$data && this.opts.$data)
      Q = EH(Q);
    X.validateSchema = this.compile(Q, true);
  }
  var QM = { $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#" };
  function EH(X) {
    return { anyOf: [X, QM] };
  }
});
var SH = P((PH) => {
  Object.defineProperty(PH, "__esModule", { value: true });
  var WM = { keyword: "id", code() {
    throw Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
  } };
  PH.default = WM;
});
var _H = P((vH) => {
  Object.defineProperty(vH, "__esModule", { value: true });
  vH.callRef = vH.getValidate = undefined;
  var GM = iX(), ZH = d0(), g0 = p(), i6 = R1(), CH = x8(), l8 = e(), HM = { keyword: "$ref", schemaType: "string", code(X) {
    let { gen: Q, schema: $, it: Y } = X, { baseId: W, schemaEnv: J, validateName: G, opts: H, self: B } = Y, { root: z2 } = J;
    if (($ === "#" || $ === "#/") && W === z2.baseId)
      return V();
    let K = CH.resolveRef.call(B, z2, W, $);
    if (K === undefined)
      throw new GM.default(Y.opts.uriResolver, W, $);
    if (K instanceof CH.SchemaEnv)
      return L(K);
    return U(K);
    function V() {
      if (J === z2)
        return m8(X, G, J, J.$async);
      let F = Q.scopeValue("root", { ref: z2 });
      return m8(X, g0._`${F}.validate`, z2, z2.$async);
    }
    function L(F) {
      let q = kH(X, F);
      m8(X, q, F, F.$async);
    }
    function U(F) {
      let q = Q.scopeValue("schema", H.code.source === true ? { ref: F, code: (0, g0.stringify)(F) } : { ref: F }), N = Q.name("valid"), w = X.subschema({ schema: F, dataTypes: [], schemaPath: g0.nil, topSchemaRef: q, errSchemaPath: $ }, N);
      X.mergeEvaluated(w), X.ok(N);
    }
  } };
  function kH(X, Q) {
    let { gen: $ } = X;
    return Q.validate ? $.scopeValue("validate", { ref: Q.validate }) : g0._`${$.scopeValue("wrapper", { ref: Q })}.validate`;
  }
  vH.getValidate = kH;
  function m8(X, Q, $, Y) {
    let { gen: W, it: J } = X, { allErrors: G, schemaEnv: H, opts: B } = J, z2 = B.passContext ? i6.default.this : g0.nil;
    if (Y)
      K();
    else
      V();
    function K() {
      if (!H.$async)
        throw Error("async schema referenced by sync schema");
      let F = W.let("valid");
      W.try(() => {
        if (W.code(g0._`await ${(0, ZH.callValidateCode)(X, Q, z2)}`), U(Q), !G)
          W.assign(F, true);
      }, (q) => {
        if (W.if(g0._`!(${q} instanceof ${J.ValidationError})`, () => W.throw(q)), L(q), !G)
          W.assign(F, false);
      }), X.ok(F);
    }
    function V() {
      X.result((0, ZH.callValidateCode)(X, Q, z2), () => U(Q), () => L(Q));
    }
    function L(F) {
      let q = g0._`${F}.errors`;
      W.assign(i6.default.vErrors, g0._`${i6.default.vErrors} === null ? ${q} : ${i6.default.vErrors}.concat(${q})`), W.assign(i6.default.errors, g0._`${i6.default.vErrors}.length`);
    }
    function U(F) {
      var q;
      if (!J.opts.unevaluated)
        return;
      let N = (q = $ === null || $ === undefined ? undefined : $.validate) === null || q === undefined ? undefined : q.evaluated;
      if (J.props !== true)
        if (N && !N.dynamicProps) {
          if (N.props !== undefined)
            J.props = l8.mergeEvaluated.props(W, N.props, J.props);
        } else {
          let w = W.var("props", g0._`${F}.evaluated.props`);
          J.props = l8.mergeEvaluated.props(W, w, J.props, g0.Name);
        }
      if (J.items !== true)
        if (N && !N.dynamicItems) {
          if (N.items !== undefined)
            J.items = l8.mergeEvaluated.items(W, N.items, J.items);
        } else {
          let w = W.var("items", g0._`${F}.evaluated.items`);
          J.items = l8.mergeEvaluated.items(W, w, J.items, g0.Name);
        }
    }
  }
  vH.callRef = m8;
  vH.default = HM;
});
var yH = P((xH) => {
  Object.defineProperty(xH, "__esModule", { value: true });
  var KM = SH(), UM = _H(), VM = ["$schema", "$id", "$defs", "$vocabulary", { keyword: "$comment" }, "definitions", KM.default, UM.default];
  xH.default = VM;
});
var fH = P((gH) => {
  Object.defineProperty(gH, "__esModule", { value: true });
  var c8 = p(), i1 = c8.operators, p8 = { maximum: { okStr: "<=", ok: i1.LTE, fail: i1.GT }, minimum: { okStr: ">=", ok: i1.GTE, fail: i1.LT }, exclusiveMaximum: { okStr: "<", ok: i1.LT, fail: i1.GTE }, exclusiveMinimum: { okStr: ">", ok: i1.GT, fail: i1.LTE } }, qM = { message: ({ keyword: X, schemaCode: Q }) => c8.str`must be ${p8[X].okStr} ${Q}`, params: ({ keyword: X, schemaCode: Q }) => c8._`{comparison: ${p8[X].okStr}, limit: ${Q}}` }, FM = { keyword: Object.keys(p8), type: "number", schemaType: "number", $data: true, error: qM, code(X) {
    let { keyword: Q, data: $, schemaCode: Y } = X;
    X.fail$data(c8._`${$} ${p8[Q].fail} ${Y} || isNaN(${$})`);
  } };
  gH.default = FM;
});
var uH = P((hH) => {
  Object.defineProperty(hH, "__esModule", { value: true });
  var aX = p(), OM = { message: ({ schemaCode: X }) => aX.str`must be multiple of ${X}`, params: ({ schemaCode: X }) => aX._`{multipleOf: ${X}}` }, DM = { keyword: "multipleOf", type: "number", schemaType: "number", $data: true, error: OM, code(X) {
    let { gen: Q, data: $, schemaCode: Y, it: W } = X, J = W.opts.multipleOfPrecision, G = Q.let("res"), H = J ? aX._`Math.abs(Math.round(${G}) - ${G}) > 1e-${J}` : aX._`${G} !== parseInt(${G})`;
    X.fail$data(aX._`(${Y} === 0 || (${G} = ${$}/${Y}, ${H}))`);
  } };
  hH.default = DM;
});
var cH = P((mH) => {
  Object.defineProperty(mH, "__esModule", { value: true });
  function lH(X) {
    let Q = X.length, $ = 0, Y = 0, W;
    while (Y < Q)
      if ($++, W = X.charCodeAt(Y++), W >= 55296 && W <= 56319 && Y < Q) {
        if (W = X.charCodeAt(Y), (W & 64512) === 56320)
          Y++;
      }
    return $;
  }
  mH.default = lH;
  lH.code = 'require("ajv/dist/runtime/ucs2length").default';
});
var dH = P((pH) => {
  Object.defineProperty(pH, "__esModule", { value: true });
  var U6 = p(), MM = e(), jM = cH(), RM = { message({ keyword: X, schemaCode: Q }) {
    let $ = X === "maxLength" ? "more" : "fewer";
    return U6.str`must NOT have ${$} than ${Q} characters`;
  }, params: ({ schemaCode: X }) => U6._`{limit: ${X}}` }, IM = { keyword: ["maxLength", "minLength"], type: "string", schemaType: "number", $data: true, error: RM, code(X) {
    let { keyword: Q, data: $, schemaCode: Y, it: W } = X, J = Q === "maxLength" ? U6.operators.GT : U6.operators.LT, G = W.opts.unicode === false ? U6._`${$}.length` : U6._`${(0, MM.useFunc)(X.gen, jM.default)}(${$})`;
    X.fail$data(U6._`${G} ${J} ${Y}`);
  } };
  pH.default = IM;
});
var nH = P((iH) => {
  Object.defineProperty(iH, "__esModule", { value: true });
  var bM = d0(), d8 = p(), PM = { message: ({ schemaCode: X }) => d8.str`must match pattern "${X}"`, params: ({ schemaCode: X }) => d8._`{pattern: ${X}}` }, SM = { keyword: "pattern", type: "string", schemaType: "string", $data: true, error: PM, code(X) {
    let { data: Q, $data: $, schema: Y, schemaCode: W, it: J } = X, G = J.opts.unicodeRegExp ? "u" : "", H = $ ? d8._`(new RegExp(${W}, ${G}))` : (0, bM.usePattern)(X, Y);
    X.fail$data(d8._`!${H}.test(${Q})`);
  } };
  iH.default = SM;
});
var oH = P((rH) => {
  Object.defineProperty(rH, "__esModule", { value: true });
  var sX = p(), CM = { message({ keyword: X, schemaCode: Q }) {
    let $ = X === "maxProperties" ? "more" : "fewer";
    return sX.str`must NOT have ${$} than ${Q} properties`;
  }, params: ({ schemaCode: X }) => sX._`{limit: ${X}}` }, kM = { keyword: ["maxProperties", "minProperties"], type: "object", schemaType: "number", $data: true, error: CM, code(X) {
    let { keyword: Q, data: $, schemaCode: Y } = X, W = Q === "maxProperties" ? sX.operators.GT : sX.operators.LT;
    X.fail$data(sX._`Object.keys(${$}).length ${W} ${Y}`);
  } };
  rH.default = kM;
});
var aH = P((tH) => {
  Object.defineProperty(tH, "__esModule", { value: true });
  var eX = d0(), X4 = p(), TM = e(), _M = { message: ({ params: { missingProperty: X } }) => X4.str`must have required property '${X}'`, params: ({ params: { missingProperty: X } }) => X4._`{missingProperty: ${X}}` }, xM = { keyword: "required", type: "object", schemaType: "array", $data: true, error: _M, code(X) {
    let { gen: Q, schema: $, schemaCode: Y, data: W, $data: J, it: G } = X, { opts: H } = G;
    if (!J && $.length === 0)
      return;
    let B = $.length >= H.loopRequired;
    if (G.allErrors)
      z2();
    else
      K();
    if (H.strictRequired) {
      let U = X.parentSchema.properties, { definedProperties: F } = X.it;
      for (let q of $)
        if ((U === null || U === undefined ? undefined : U[q]) === undefined && !F.has(q)) {
          let N = G.schemaEnv.baseId + G.errSchemaPath, w = `required property "${q}" is not defined at "${N}" (strictRequired)`;
          (0, TM.checkStrictMode)(G, w, G.opts.strictRequired);
        }
    }
    function z2() {
      if (B || J)
        X.block$data(X4.nil, V);
      else
        for (let U of $)
          (0, eX.checkReportMissingProp)(X, U);
    }
    function K() {
      let U = Q.let("missing");
      if (B || J) {
        let F = Q.let("valid", true);
        X.block$data(F, () => L(U, F)), X.ok(F);
      } else
        Q.if((0, eX.checkMissingProp)(X, $, U)), (0, eX.reportMissingProp)(X, U), Q.else();
    }
    function V() {
      Q.forOf("prop", Y, (U) => {
        X.setParams({ missingProperty: U }), Q.if((0, eX.noPropertyInData)(Q, W, U, H.ownProperties), () => X.error());
      });
    }
    function L(U, F) {
      X.setParams({ missingProperty: U }), Q.forOf(U, Y, () => {
        Q.assign(F, (0, eX.propertyInData)(Q, W, U, H.ownProperties)), Q.if((0, X4.not)(F), () => {
          X.error(), Q.break();
        });
      }, X4.nil);
    }
  } };
  tH.default = xM;
});
var eH = P((sH) => {
  Object.defineProperty(sH, "__esModule", { value: true });
  var Q4 = p(), gM = { message({ keyword: X, schemaCode: Q }) {
    let $ = X === "maxItems" ? "more" : "fewer";
    return Q4.str`must NOT have ${$} than ${Q} items`;
  }, params: ({ schemaCode: X }) => Q4._`{limit: ${X}}` }, fM = { keyword: ["maxItems", "minItems"], type: "array", schemaType: "number", $data: true, error: gM, code(X) {
    let { keyword: Q, data: $, schemaCode: Y } = X, W = Q === "maxItems" ? Q4.operators.GT : Q4.operators.LT;
    X.fail$data(Q4._`${$}.length ${W} ${Y}`);
  } };
  sH.default = fM;
});
var i8 = P((QB) => {
  Object.defineProperty(QB, "__esModule", { value: true });
  var XB = wY();
  XB.code = 'require("ajv/dist/runtime/equal").default';
  QB.default = XB;
});
var YB = P(($B) => {
  Object.defineProperty($B, "__esModule", { value: true });
  var _Y = lX(), I0 = p(), lM = e(), mM = i8(), cM = { message: ({ params: { i: X, j: Q } }) => I0.str`must NOT have duplicate items (items ## ${Q} and ${X} are identical)`, params: ({ params: { i: X, j: Q } }) => I0._`{i: ${X}, j: ${Q}}` }, pM = { keyword: "uniqueItems", type: "array", schemaType: "boolean", $data: true, error: cM, code(X) {
    let { gen: Q, data: $, $data: Y, schema: W, parentSchema: J, schemaCode: G, it: H } = X;
    if (!Y && !W)
      return;
    let B = Q.let("valid"), z2 = J.items ? (0, _Y.getSchemaTypes)(J.items) : [];
    X.block$data(B, K, I0._`${G} === false`), X.ok(B);
    function K() {
      let F = Q.let("i", I0._`${$}.length`), q = Q.let("j");
      X.setParams({ i: F, j: q }), Q.assign(B, true), Q.if(I0._`${F} > 1`, () => (V() ? L : U)(F, q));
    }
    function V() {
      return z2.length > 0 && !z2.some((F) => F === "object" || F === "array");
    }
    function L(F, q) {
      let N = Q.name("item"), w = (0, _Y.checkDataTypes)(z2, N, H.opts.strictNumbers, _Y.DataType.Wrong), M = Q.const("indices", I0._`{}`);
      Q.for(I0._`;${F}--;`, () => {
        if (Q.let(N, I0._`${$}[${F}]`), Q.if(w, I0._`continue`), z2.length > 1)
          Q.if(I0._`typeof ${N} == "string"`, I0._`${N} += "_"`);
        Q.if(I0._`typeof ${M}[${N}] == "number"`, () => {
          Q.assign(q, I0._`${M}[${N}]`), X.error(), Q.assign(B, false).break();
        }).code(I0._`${M}[${N}] = ${F}`);
      });
    }
    function U(F, q) {
      let N = (0, lM.useFunc)(Q, mM.default), w = Q.name("outer");
      Q.label(w).for(I0._`;${F}--;`, () => Q.for(I0._`${q} = ${F}; ${q}--;`, () => Q.if(I0._`${N}(${$}[${F}], ${$}[${q}])`, () => {
        X.error(), Q.assign(B, false).break(w);
      })));
    }
  } };
  $B.default = pM;
});
var JB = P((WB) => {
  Object.defineProperty(WB, "__esModule", { value: true });
  var xY = p(), iM = e(), nM = i8(), rM = { message: "must be equal to constant", params: ({ schemaCode: X }) => xY._`{allowedValue: ${X}}` }, oM = { keyword: "const", $data: true, error: rM, code(X) {
    let { gen: Q, data: $, $data: Y, schemaCode: W, schema: J } = X;
    if (Y || J && typeof J == "object")
      X.fail$data(xY._`!${(0, iM.useFunc)(Q, nM.default)}(${$}, ${W})`);
    else
      X.fail(xY._`${J} !== ${$}`);
  } };
  WB.default = oM;
});
var HB = P((GB) => {
  Object.defineProperty(GB, "__esModule", { value: true });
  var $4 = p(), aM = e(), sM = i8(), eM = { message: "must be equal to one of the allowed values", params: ({ schemaCode: X }) => $4._`{allowedValues: ${X}}` }, Xj = { keyword: "enum", schemaType: "array", $data: true, error: eM, code(X) {
    let { gen: Q, data: $, $data: Y, schema: W, schemaCode: J, it: G } = X;
    if (!Y && W.length === 0)
      throw Error("enum must have non-empty array");
    let H = W.length >= G.opts.loopEnum, B, z2 = () => B !== null && B !== undefined ? B : B = (0, aM.useFunc)(Q, sM.default), K;
    if (H || Y)
      K = Q.let("valid"), X.block$data(K, V);
    else {
      if (!Array.isArray(W))
        throw Error("ajv implementation error");
      let U = Q.const("vSchema", J);
      K = (0, $4.or)(...W.map((F, q) => L(U, q)));
    }
    X.pass(K);
    function V() {
      Q.assign(K, false), Q.forOf("v", J, (U) => Q.if($4._`${z2()}(${$}, ${U})`, () => Q.assign(K, true).break()));
    }
    function L(U, F) {
      let q = W[F];
      return typeof q === "object" && q !== null ? $4._`${z2()}(${$}, ${U}[${F}])` : $4._`${$} === ${q}`;
    }
  } };
  GB.default = Xj;
});
var zB = P((BB) => {
  Object.defineProperty(BB, "__esModule", { value: true });
  var $j = fH(), Yj = uH(), Wj = dH(), Jj = nH(), Gj = oH(), Hj = aH(), Bj = eH(), zj = YB(), Kj = JB(), Uj = HB(), Vj = [$j.default, Yj.default, Wj.default, Jj.default, Gj.default, Hj.default, Bj.default, zj.default, { keyword: "type", schemaType: ["string", "array"] }, { keyword: "nullable", schemaType: "boolean" }, Kj.default, Uj.default];
  BB.default = Vj;
});
var gY = P((UB) => {
  Object.defineProperty(UB, "__esModule", { value: true });
  UB.validateAdditionalItems = undefined;
  var V6 = p(), yY = e(), qj = { message: ({ params: { len: X } }) => V6.str`must NOT have more than ${X} items`, params: ({ params: { len: X } }) => V6._`{limit: ${X}}` }, Fj = { keyword: "additionalItems", type: "array", schemaType: ["boolean", "object"], before: "uniqueItems", error: qj, code(X) {
    let { parentSchema: Q, it: $ } = X, { items: Y } = Q;
    if (!Array.isArray(Y)) {
      (0, yY.checkStrictMode)($, '"additionalItems" is ignored when "items" is not an array of schemas');
      return;
    }
    KB(X, Y);
  } };
  function KB(X, Q) {
    let { gen: $, schema: Y, data: W, keyword: J, it: G } = X;
    G.items = true;
    let H = $.const("len", V6._`${W}.length`);
    if (Y === false)
      X.setParams({ len: Q.length }), X.pass(V6._`${H} <= ${Q.length}`);
    else if (typeof Y == "object" && !(0, yY.alwaysValidSchema)(G, Y)) {
      let z2 = $.var("valid", V6._`${H} <= ${Q.length}`);
      $.if((0, V6.not)(z2), () => B(z2)), X.ok(z2);
    }
    function B(z2) {
      $.forRange("i", Q.length, H, (K) => {
        if (X.subschema({ keyword: J, dataProp: K, dataPropType: yY.Type.Num }, z2), !G.allErrors)
          $.if((0, V6.not)(z2), () => $.break());
      });
    }
  }
  UB.validateAdditionalItems = KB;
  UB.default = Fj;
});
var fY = P((FB) => {
  Object.defineProperty(FB, "__esModule", { value: true });
  FB.validateTuple = undefined;
  var LB = p(), n8 = e(), Oj = d0(), Dj = { keyword: "items", type: "array", schemaType: ["object", "array", "boolean"], before: "uniqueItems", code(X) {
    let { schema: Q, it: $ } = X;
    if (Array.isArray(Q))
      return qB(X, "additionalItems", Q);
    if ($.items = true, (0, n8.alwaysValidSchema)($, Q))
      return;
    X.ok((0, Oj.validateArray)(X));
  } };
  function qB(X, Q, $ = X.schema) {
    let { gen: Y, parentSchema: W, data: J, keyword: G, it: H } = X;
    if (K(W), H.opts.unevaluated && $.length && H.items !== true)
      H.items = n8.mergeEvaluated.items(Y, $.length, H.items);
    let B = Y.name("valid"), z2 = Y.const("len", LB._`${J}.length`);
    $.forEach((V, L) => {
      if ((0, n8.alwaysValidSchema)(H, V))
        return;
      Y.if(LB._`${z2} > ${L}`, () => X.subschema({ keyword: G, schemaProp: L, dataProp: L }, B)), X.ok(B);
    });
    function K(V) {
      let { opts: L, errSchemaPath: U } = H, F = $.length, q = F === V.minItems && (F === V.maxItems || V[Q] === false);
      if (L.strictTuples && !q) {
        let N = `"${G}" is ${F}-tuple, but minItems or maxItems/${Q} are not specified or different at path "${U}"`;
        (0, n8.checkStrictMode)(H, N, L.strictTuples);
      }
    }
  }
  FB.validateTuple = qB;
  FB.default = Dj;
});
var DB = P((OB) => {
  Object.defineProperty(OB, "__esModule", { value: true });
  var Aj = fY(), Mj = { keyword: "prefixItems", type: "array", schemaType: ["array"], before: "uniqueItems", code: (X) => (0, Aj.validateTuple)(X, "items") };
  OB.default = Mj;
});
var MB = P((AB) => {
  Object.defineProperty(AB, "__esModule", { value: true });
  var wB = p(), Rj = e(), Ij = d0(), Ej = gY(), bj = { message: ({ params: { len: X } }) => wB.str`must NOT have more than ${X} items`, params: ({ params: { len: X } }) => wB._`{limit: ${X}}` }, Pj = { keyword: "items", type: "array", schemaType: ["object", "boolean"], before: "uniqueItems", error: bj, code(X) {
    let { schema: Q, parentSchema: $, it: Y } = X, { prefixItems: W } = $;
    if (Y.items = true, (0, Rj.alwaysValidSchema)(Y, Q))
      return;
    if (W)
      (0, Ej.validateAdditionalItems)(X, W);
    else
      X.ok((0, Ij.validateArray)(X));
  } };
  AB.default = Pj;
});
var RB = P((jB) => {
  Object.defineProperty(jB, "__esModule", { value: true });
  var i0 = p(), r8 = e(), Zj = { message: ({ params: { min: X, max: Q } }) => Q === undefined ? i0.str`must contain at least ${X} valid item(s)` : i0.str`must contain at least ${X} and no more than ${Q} valid item(s)`, params: ({ params: { min: X, max: Q } }) => Q === undefined ? i0._`{minContains: ${X}}` : i0._`{minContains: ${X}, maxContains: ${Q}}` }, Cj = { keyword: "contains", type: "array", schemaType: ["object", "boolean"], before: "uniqueItems", trackErrors: true, error: Zj, code(X) {
    let { gen: Q, schema: $, parentSchema: Y, data: W, it: J } = X, G, H, { minContains: B, maxContains: z2 } = Y;
    if (J.opts.next)
      G = B === undefined ? 1 : B, H = z2;
    else
      G = 1;
    let K = Q.const("len", i0._`${W}.length`);
    if (X.setParams({ min: G, max: H }), H === undefined && G === 0) {
      (0, r8.checkStrictMode)(J, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
      return;
    }
    if (H !== undefined && G > H) {
      (0, r8.checkStrictMode)(J, '"minContains" > "maxContains" is always invalid'), X.fail();
      return;
    }
    if ((0, r8.alwaysValidSchema)(J, $)) {
      let q = i0._`${K} >= ${G}`;
      if (H !== undefined)
        q = i0._`${q} && ${K} <= ${H}`;
      X.pass(q);
      return;
    }
    J.items = true;
    let V = Q.name("valid");
    if (H === undefined && G === 1)
      U(V, () => Q.if(V, () => Q.break()));
    else if (G === 0) {
      if (Q.let(V, true), H !== undefined)
        Q.if(i0._`${W}.length > 0`, L);
    } else
      Q.let(V, false), L();
    X.result(V, () => X.reset());
    function L() {
      let q = Q.name("_valid"), N = Q.let("count", 0);
      U(q, () => Q.if(q, () => F(N)));
    }
    function U(q, N) {
      Q.forRange("i", 0, K, (w) => {
        X.subschema({ keyword: "contains", dataProp: w, dataPropType: r8.Type.Num, compositeRule: true }, q), N();
      });
    }
    function F(q) {
      if (Q.code(i0._`${q}++`), H === undefined)
        Q.if(i0._`${q} >= ${G}`, () => Q.assign(V, true).break());
      else if (Q.if(i0._`${q} > ${H}`, () => Q.assign(V, false).break()), G === 1)
        Q.assign(V, true);
      else
        Q.if(i0._`${q} >= ${G}`, () => Q.assign(V, true));
    }
  } };
  jB.default = Cj;
});
var ZB = P((bB) => {
  Object.defineProperty(bB, "__esModule", { value: true });
  bB.validateSchemaDeps = bB.validatePropertyDeps = bB.error = undefined;
  var hY = p(), vj = e(), Y4 = d0();
  bB.error = { message: ({ params: { property: X, depsCount: Q, deps: $ } }) => {
    let Y = Q === 1 ? "property" : "properties";
    return hY.str`must have ${Y} ${$} when property ${X} is present`;
  }, params: ({ params: { property: X, depsCount: Q, deps: $, missingProperty: Y } }) => hY._`{property: ${X},
    missingProperty: ${Y},
    depsCount: ${Q},
    deps: ${$}}` };
  var Tj = { keyword: "dependencies", type: "object", schemaType: "object", error: bB.error, code(X) {
    let [Q, $] = _j(X);
    IB(X, Q), EB(X, $);
  } };
  function _j({ schema: X }) {
    let Q = {}, $ = {};
    for (let Y in X) {
      if (Y === "__proto__")
        continue;
      let W = Array.isArray(X[Y]) ? Q : $;
      W[Y] = X[Y];
    }
    return [Q, $];
  }
  function IB(X, Q = X.schema) {
    let { gen: $, data: Y, it: W } = X;
    if (Object.keys(Q).length === 0)
      return;
    let J = $.let("missing");
    for (let G in Q) {
      let H = Q[G];
      if (H.length === 0)
        continue;
      let B = (0, Y4.propertyInData)($, Y, G, W.opts.ownProperties);
      if (X.setParams({ property: G, depsCount: H.length, deps: H.join(", ") }), W.allErrors)
        $.if(B, () => {
          for (let z2 of H)
            (0, Y4.checkReportMissingProp)(X, z2);
        });
      else
        $.if(hY._`${B} && (${(0, Y4.checkMissingProp)(X, H, J)})`), (0, Y4.reportMissingProp)(X, J), $.else();
    }
  }
  bB.validatePropertyDeps = IB;
  function EB(X, Q = X.schema) {
    let { gen: $, data: Y, keyword: W, it: J } = X, G = $.name("valid");
    for (let H in Q) {
      if ((0, vj.alwaysValidSchema)(J, Q[H]))
        continue;
      $.if((0, Y4.propertyInData)($, Y, H, J.opts.ownProperties), () => {
        let B = X.subschema({ keyword: W, schemaProp: H }, G);
        X.mergeValidEvaluated(B, G);
      }, () => $.var(G, true)), X.ok(G);
    }
  }
  bB.validateSchemaDeps = EB;
  bB.default = Tj;
});
var vB = P((kB) => {
  Object.defineProperty(kB, "__esModule", { value: true });
  var CB = p(), gj = e(), fj = { message: "property name must be valid", params: ({ params: X }) => CB._`{propertyName: ${X.propertyName}}` }, hj = { keyword: "propertyNames", type: "object", schemaType: ["object", "boolean"], error: fj, code(X) {
    let { gen: Q, schema: $, data: Y, it: W } = X;
    if ((0, gj.alwaysValidSchema)(W, $))
      return;
    let J = Q.name("valid");
    Q.forIn("key", Y, (G) => {
      X.setParams({ propertyName: G }), X.subschema({ keyword: "propertyNames", data: G, dataTypes: ["string"], propertyName: G, compositeRule: true }, J), Q.if((0, CB.not)(J), () => {
        if (X.error(true), !W.allErrors)
          Q.break();
      });
    }), X.ok(J);
  } };
  kB.default = hj;
});
var uY = P((TB) => {
  Object.defineProperty(TB, "__esModule", { value: true });
  var o8 = d0(), $1 = p(), lj = R1(), t8 = e(), mj = { message: "must NOT have additional properties", params: ({ params: X }) => $1._`{additionalProperty: ${X.additionalProperty}}` }, cj = { keyword: "additionalProperties", type: ["object"], schemaType: ["boolean", "object"], allowUndefined: true, trackErrors: true, error: mj, code(X) {
    let { gen: Q, schema: $, parentSchema: Y, data: W, errsCount: J, it: G } = X;
    if (!J)
      throw Error("ajv implementation error");
    let { allErrors: H, opts: B } = G;
    if (G.props = true, B.removeAdditional !== "all" && (0, t8.alwaysValidSchema)(G, $))
      return;
    let z2 = (0, o8.allSchemaProperties)(Y.properties), K = (0, o8.allSchemaProperties)(Y.patternProperties);
    V(), X.ok($1._`${J} === ${lj.default.errors}`);
    function V() {
      Q.forIn("key", W, (N) => {
        if (!z2.length && !K.length)
          F(N);
        else
          Q.if(L(N), () => F(N));
      });
    }
    function L(N) {
      let w;
      if (z2.length > 8) {
        let M = (0, t8.schemaRefOrVal)(G, Y.properties, "properties");
        w = (0, o8.isOwnProperty)(Q, M, N);
      } else if (z2.length)
        w = (0, $1.or)(...z2.map((M) => $1._`${N} === ${M}`));
      else
        w = $1.nil;
      if (K.length)
        w = (0, $1.or)(w, ...K.map((M) => $1._`${(0, o8.usePattern)(X, M)}.test(${N})`));
      return (0, $1.not)(w);
    }
    function U(N) {
      Q.code($1._`delete ${W}[${N}]`);
    }
    function F(N) {
      if (B.removeAdditional === "all" || B.removeAdditional && $ === false) {
        U(N);
        return;
      }
      if ($ === false) {
        if (X.setParams({ additionalProperty: N }), X.error(), !H)
          Q.break();
        return;
      }
      if (typeof $ == "object" && !(0, t8.alwaysValidSchema)(G, $)) {
        let w = Q.name("valid");
        if (B.removeAdditional === "failing")
          q(N, w, false), Q.if((0, $1.not)(w), () => {
            X.reset(), U(N);
          });
        else if (q(N, w), !H)
          Q.if((0, $1.not)(w), () => Q.break());
      }
    }
    function q(N, w, M) {
      let R = { keyword: "additionalProperties", dataProp: N, dataPropType: t8.Type.Str };
      if (M === false)
        Object.assign(R, { compositeRule: true, createErrors: false, allErrors: false });
      X.subschema(R, w);
    }
  } };
  TB.default = cj;
});
var gB = P((yB) => {
  Object.defineProperty(yB, "__esModule", { value: true });
  var dj = dX(), _B = d0(), lY = e(), xB = uY(), ij = { keyword: "properties", type: "object", schemaType: "object", code(X) {
    let { gen: Q, schema: $, parentSchema: Y, data: W, it: J } = X;
    if (J.opts.removeAdditional === "all" && Y.additionalProperties === undefined)
      xB.default.code(new dj.KeywordCxt(J, xB.default, "additionalProperties"));
    let G = (0, _B.allSchemaProperties)($);
    for (let V of G)
      J.definedProperties.add(V);
    if (J.opts.unevaluated && G.length && J.props !== true)
      J.props = lY.mergeEvaluated.props(Q, (0, lY.toHash)(G), J.props);
    let H = G.filter((V) => !(0, lY.alwaysValidSchema)(J, $[V]));
    if (H.length === 0)
      return;
    let B = Q.name("valid");
    for (let V of H) {
      if (z2(V))
        K(V);
      else {
        if (Q.if((0, _B.propertyInData)(Q, W, V, J.opts.ownProperties)), K(V), !J.allErrors)
          Q.else().var(B, true);
        Q.endIf();
      }
      X.it.definedProperties.add(V), X.ok(B);
    }
    function z2(V) {
      return J.opts.useDefaults && !J.compositeRule && $[V].default !== undefined;
    }
    function K(V) {
      X.subschema({ keyword: "properties", schemaProp: V, dataProp: V }, B);
    }
  } };
  yB.default = ij;
});
var mB = P((lB) => {
  Object.defineProperty(lB, "__esModule", { value: true });
  var fB = d0(), a8 = p(), hB = e(), uB = e(), rj = { keyword: "patternProperties", type: "object", schemaType: "object", code(X) {
    let { gen: Q, schema: $, data: Y, parentSchema: W, it: J } = X, { opts: G } = J, H = (0, fB.allSchemaProperties)($), B = H.filter((q) => (0, hB.alwaysValidSchema)(J, $[q]));
    if (H.length === 0 || B.length === H.length && (!J.opts.unevaluated || J.props === true))
      return;
    let z2 = G.strictSchema && !G.allowMatchingProperties && W.properties, K = Q.name("valid");
    if (J.props !== true && !(J.props instanceof a8.Name))
      J.props = (0, uB.evaluatedPropsToName)(Q, J.props);
    let { props: V } = J;
    L();
    function L() {
      for (let q of H) {
        if (z2)
          U(q);
        if (J.allErrors)
          F(q);
        else
          Q.var(K, true), F(q), Q.if(K);
      }
    }
    function U(q) {
      for (let N in z2)
        if (new RegExp(q).test(N))
          (0, hB.checkStrictMode)(J, `property ${N} matches pattern ${q} (use allowMatchingProperties)`);
    }
    function F(q) {
      Q.forIn("key", Y, (N) => {
        Q.if(a8._`${(0, fB.usePattern)(X, q)}.test(${N})`, () => {
          let w = B.includes(q);
          if (!w)
            X.subschema({ keyword: "patternProperties", schemaProp: q, dataProp: N, dataPropType: uB.Type.Str }, K);
          if (J.opts.unevaluated && V !== true)
            Q.assign(a8._`${V}[${N}]`, true);
          else if (!w && !J.allErrors)
            Q.if((0, a8.not)(K), () => Q.break());
        });
      });
    }
  } };
  lB.default = rj;
});
var pB = P((cB) => {
  Object.defineProperty(cB, "__esModule", { value: true });
  var tj = e(), aj = { keyword: "not", schemaType: ["object", "boolean"], trackErrors: true, code(X) {
    let { gen: Q, schema: $, it: Y } = X;
    if ((0, tj.alwaysValidSchema)(Y, $)) {
      X.fail();
      return;
    }
    let W = Q.name("valid");
    X.subschema({ keyword: "not", compositeRule: true, createErrors: false, allErrors: false }, W), X.failResult(W, () => X.reset(), () => X.error());
  }, error: { message: "must NOT be valid" } };
  cB.default = aj;
});
var iB = P((dB) => {
  Object.defineProperty(dB, "__esModule", { value: true });
  var ej = d0(), XR = { keyword: "anyOf", schemaType: "array", trackErrors: true, code: ej.validateUnion, error: { message: "must match a schema in anyOf" } };
  dB.default = XR;
});
var rB = P((nB) => {
  Object.defineProperty(nB, "__esModule", { value: true });
  var s8 = p(), $R = e(), YR = { message: "must match exactly one schema in oneOf", params: ({ params: X }) => s8._`{passingSchemas: ${X.passing}}` }, WR = { keyword: "oneOf", schemaType: "array", trackErrors: true, error: YR, code(X) {
    let { gen: Q, schema: $, parentSchema: Y, it: W } = X;
    if (!Array.isArray($))
      throw Error("ajv implementation error");
    if (W.opts.discriminator && Y.discriminator)
      return;
    let J = $, G = Q.let("valid", false), H = Q.let("passing", null), B = Q.name("_valid");
    X.setParams({ passing: H }), Q.block(z2), X.result(G, () => X.reset(), () => X.error(true));
    function z2() {
      J.forEach((K, V) => {
        let L;
        if ((0, $R.alwaysValidSchema)(W, K))
          Q.var(B, true);
        else
          L = X.subschema({ keyword: "oneOf", schemaProp: V, compositeRule: true }, B);
        if (V > 0)
          Q.if(s8._`${B} && ${G}`).assign(G, false).assign(H, s8._`[${H}, ${V}]`).else();
        Q.if(B, () => {
          if (Q.assign(G, true), Q.assign(H, V), L)
            X.mergeEvaluated(L, s8.Name);
        });
      });
    }
  } };
  nB.default = WR;
});
var tB = P((oB) => {
  Object.defineProperty(oB, "__esModule", { value: true });
  var GR = e(), HR = { keyword: "allOf", schemaType: "array", code(X) {
    let { gen: Q, schema: $, it: Y } = X;
    if (!Array.isArray($))
      throw Error("ajv implementation error");
    let W = Q.name("valid");
    $.forEach((J, G) => {
      if ((0, GR.alwaysValidSchema)(Y, J))
        return;
      let H = X.subschema({ keyword: "allOf", schemaProp: G }, W);
      X.ok(W), X.mergeEvaluated(H);
    });
  } };
  oB.default = HR;
});
var Xz = P((eB) => {
  Object.defineProperty(eB, "__esModule", { value: true });
  var e8 = p(), sB = e(), zR = { message: ({ params: X }) => e8.str`must match "${X.ifClause}" schema`, params: ({ params: X }) => e8._`{failingKeyword: ${X.ifClause}}` }, KR = { keyword: "if", schemaType: ["object", "boolean"], trackErrors: true, error: zR, code(X) {
    let { gen: Q, parentSchema: $, it: Y } = X;
    if ($.then === undefined && $.else === undefined)
      (0, sB.checkStrictMode)(Y, '"if" without "then" and "else" is ignored');
    let W = aB(Y, "then"), J = aB(Y, "else");
    if (!W && !J)
      return;
    let G = Q.let("valid", true), H = Q.name("_valid");
    if (B(), X.reset(), W && J) {
      let K = Q.let("ifClause");
      X.setParams({ ifClause: K }), Q.if(H, z2("then", K), z2("else", K));
    } else if (W)
      Q.if(H, z2("then"));
    else
      Q.if((0, e8.not)(H), z2("else"));
    X.pass(G, () => X.error(true));
    function B() {
      let K = X.subschema({ keyword: "if", compositeRule: true, createErrors: false, allErrors: false }, H);
      X.mergeEvaluated(K);
    }
    function z2(K, V) {
      return () => {
        let L = X.subschema({ keyword: K }, H);
        if (Q.assign(G, H), X.mergeValidEvaluated(L, G), V)
          Q.assign(V, e8._`${K}`);
        else
          X.setParams({ ifClause: K });
      };
    }
  } };
  function aB(X, Q) {
    let $ = X.schema[Q];
    return $ !== undefined && !(0, sB.alwaysValidSchema)(X, $);
  }
  eB.default = KR;
});
var $z = P((Qz) => {
  Object.defineProperty(Qz, "__esModule", { value: true });
  var VR = e(), LR = { keyword: ["then", "else"], schemaType: ["object", "boolean"], code({ keyword: X, parentSchema: Q, it: $ }) {
    if (Q.if === undefined)
      (0, VR.checkStrictMode)($, `"${X}" without "if" is ignored`);
  } };
  Qz.default = LR;
});
var Wz = P((Yz) => {
  Object.defineProperty(Yz, "__esModule", { value: true });
  var FR = gY(), NR = DB(), OR = fY(), DR = MB(), wR = RB(), AR = ZB(), MR = vB(), jR = uY(), RR = gB(), IR = mB(), ER = pB(), bR = iB(), PR = rB(), SR = tB(), ZR = Xz(), CR = $z();
  function kR(X = false) {
    let Q = [ER.default, bR.default, PR.default, SR.default, ZR.default, CR.default, MR.default, jR.default, AR.default, RR.default, IR.default];
    if (X)
      Q.push(NR.default, DR.default);
    else
      Q.push(FR.default, OR.default);
    return Q.push(wR.default), Q;
  }
  Yz.default = kR;
});
var Gz = P((Jz) => {
  Object.defineProperty(Jz, "__esModule", { value: true });
  var L0 = p(), TR = { message: ({ schemaCode: X }) => L0.str`must match format "${X}"`, params: ({ schemaCode: X }) => L0._`{format: ${X}}` }, _R = { keyword: "format", type: ["number", "string"], schemaType: "string", $data: true, error: TR, code(X, Q) {
    let { gen: $, data: Y, $data: W, schema: J, schemaCode: G, it: H } = X, { opts: B, errSchemaPath: z2, schemaEnv: K, self: V } = H;
    if (!B.validateFormats)
      return;
    if (W)
      L();
    else
      U();
    function L() {
      let F = $.scopeValue("formats", { ref: V.formats, code: B.code.formats }), q = $.const("fDef", L0._`${F}[${G}]`), N = $.let("fType"), w = $.let("format");
      $.if(L0._`typeof ${q} == "object" && !(${q} instanceof RegExp)`, () => $.assign(N, L0._`${q}.type || "string"`).assign(w, L0._`${q}.validate`), () => $.assign(N, L0._`"string"`).assign(w, q)), X.fail$data((0, L0.or)(M(), R()));
      function M() {
        if (B.strictSchema === false)
          return L0.nil;
        return L0._`${G} && !${w}`;
      }
      function R() {
        let S = K.$async ? L0._`(${q}.async ? await ${w}(${Y}) : ${w}(${Y}))` : L0._`${w}(${Y})`, C = L0._`(typeof ${w} == "function" ? ${S} : ${w}.test(${Y}))`;
        return L0._`${w} && ${w} !== true && ${N} === ${Q} && !${C}`;
      }
    }
    function U() {
      let F = V.formats[J];
      if (!F) {
        M();
        return;
      }
      if (F === true)
        return;
      let [q, N, w] = R(F);
      if (q === Q)
        X.pass(S());
      function M() {
        if (B.strictSchema === false) {
          V.logger.warn(C());
          return;
        }
        throw Error(C());
        function C() {
          return `unknown format "${J}" ignored in schema at path "${z2}"`;
        }
      }
      function R(C) {
        let K0 = C instanceof RegExp ? (0, L0.regexpCode)(C) : B.code.formats ? L0._`${B.code.formats}${(0, L0.getProperty)(J)}` : undefined, U0 = $.scopeValue("formats", { key: J, ref: C, code: K0 });
        if (typeof C == "object" && !(C instanceof RegExp))
          return [C.type || "string", C.validate, L0._`${U0}.validate`];
        return ["string", C, U0];
      }
      function S() {
        if (typeof F == "object" && !(F instanceof RegExp) && F.async) {
          if (!K.$async)
            throw Error("async format in sync schema");
          return L0._`await ${w}(${Y})`;
        }
        return typeof N == "function" ? L0._`${w}(${Y})` : L0._`${w}.test(${Y})`;
      }
    }
  } };
  Jz.default = _R;
});
var Bz = P((Hz) => {
  Object.defineProperty(Hz, "__esModule", { value: true });
  var yR = Gz(), gR = [yR.default];
  Hz.default = gR;
});
var Uz = P((zz) => {
  Object.defineProperty(zz, "__esModule", { value: true });
  zz.contentVocabulary = zz.metadataVocabulary = undefined;
  zz.metadataVocabulary = ["title", "description", "default", "deprecated", "readOnly", "writeOnly", "examples"];
  zz.contentVocabulary = ["contentMediaType", "contentEncoding", "contentSchema"];
});
var qz = P((Lz) => {
  Object.defineProperty(Lz, "__esModule", { value: true });
  var uR = yH(), lR = zB(), mR = Wz(), cR = Bz(), Vz = Uz(), pR = [uR.default, lR.default, (0, mR.default)(), cR.default, Vz.metadataVocabulary, Vz.contentVocabulary];
  Lz.default = pR;
});
var Dz = P((Nz) => {
  Object.defineProperty(Nz, "__esModule", { value: true });
  Nz.DiscrError = undefined;
  var Fz;
  (function(X) {
    X.Tag = "tag", X.Mapping = "mapping";
  })(Fz || (Nz.DiscrError = Fz = {}));
});
var Mz = P((Az) => {
  Object.defineProperty(Az, "__esModule", { value: true });
  var n6 = p(), mY = Dz(), wz = x8(), iR = iX(), nR = e(), rR = { message: ({ params: { discrError: X, tagName: Q } }) => X === mY.DiscrError.Tag ? `tag "${Q}" must be string` : `value of tag "${Q}" must be in oneOf`, params: ({ params: { discrError: X, tag: Q, tagName: $ } }) => n6._`{error: ${X}, tag: ${$}, tagValue: ${Q}}` }, oR = { keyword: "discriminator", type: "object", schemaType: "object", error: rR, code(X) {
    let { gen: Q, data: $, schema: Y, parentSchema: W, it: J } = X, { oneOf: G } = W;
    if (!J.opts.discriminator)
      throw Error("discriminator: requires discriminator option");
    let H = Y.propertyName;
    if (typeof H != "string")
      throw Error("discriminator: requires propertyName");
    if (Y.mapping)
      throw Error("discriminator: mapping is not supported");
    if (!G)
      throw Error("discriminator: requires oneOf keyword");
    let B = Q.let("valid", false), z2 = Q.const("tag", n6._`${$}${(0, n6.getProperty)(H)}`);
    Q.if(n6._`typeof ${z2} == "string"`, () => K(), () => X.error(false, { discrError: mY.DiscrError.Tag, tag: z2, tagName: H })), X.ok(B);
    function K() {
      let U = L();
      Q.if(false);
      for (let F in U)
        Q.elseIf(n6._`${z2} === ${F}`), Q.assign(B, V(U[F]));
      Q.else(), X.error(false, { discrError: mY.DiscrError.Mapping, tag: z2, tagName: H }), Q.endIf();
    }
    function V(U) {
      let F = Q.name("valid"), q = X.subschema({ keyword: "oneOf", schemaProp: U }, F);
      return X.mergeEvaluated(q, n6.Name), F;
    }
    function L() {
      var U;
      let F = {}, q = w(W), N = true;
      for (let S = 0;S < G.length; S++) {
        let C = G[S];
        if ((C === null || C === undefined ? undefined : C.$ref) && !(0, nR.schemaHasRulesButRef)(C, J.self.RULES)) {
          let U0 = C.$ref;
          if (C = wz.resolveRef.call(J.self, J.schemaEnv.root, J.baseId, U0), C instanceof wz.SchemaEnv)
            C = C.schema;
          if (C === undefined)
            throw new iR.default(J.opts.uriResolver, J.baseId, U0);
        }
        let K0 = (U = C === null || C === undefined ? undefined : C.properties) === null || U === undefined ? undefined : U[H];
        if (typeof K0 != "object")
          throw Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${H}"`);
        N = N && (q || w(C)), M(K0, S);
      }
      if (!N)
        throw Error(`discriminator: "${H}" must be required`);
      return F;
      function w({ required: S }) {
        return Array.isArray(S) && S.includes(H);
      }
      function M(S, C) {
        if (S.const)
          R(S.const, C);
        else if (S.enum)
          for (let K0 of S.enum)
            R(K0, C);
        else
          throw Error(`discriminator: "properties/${H}" must have "const" or "enum"`);
      }
      function R(S, C) {
        if (typeof S != "string" || S in F)
          throw Error(`discriminator: "${H}" values must be unique strings`);
        F[S] = C;
      }
    }
  } };
  Az.default = oR;
});
var jz = P((K_, aR) => {
  aR.exports = { $schema: "http://json-schema.org/draft-07/schema#", $id: "http://json-schema.org/draft-07/schema#", title: "Core schema meta-schema", definitions: { schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: true, default: [] } }, type: ["object", "boolean"], properties: { $id: { type: "string", format: "uri-reference" }, $schema: { type: "string", format: "uri" }, $ref: { type: "string", format: "uri-reference" }, $comment: { type: "string" }, title: { type: "string" }, description: { type: "string" }, default: true, readOnly: { type: "boolean", default: false }, examples: { type: "array", items: true }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/definitions/nonNegativeInteger" }, minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }], default: true }, maxItems: { $ref: "#/definitions/nonNegativeInteger" }, minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: false }, contains: { $ref: "#" }, maxProperties: { $ref: "#/definitions/nonNegativeInteger" }, minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, required: { $ref: "#/definitions/stringArray" }, additionalProperties: { $ref: "#" }, definitions: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $ref: "#" }, propertyNames: { format: "regex" }, default: {} }, dependencies: { type: "object", additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] } }, propertyNames: { $ref: "#" }, const: true, enum: { type: "array", items: true, minItems: 1, uniqueItems: true }, type: { anyOf: [{ $ref: "#/definitions/simpleTypes" }, { type: "array", items: { $ref: "#/definitions/simpleTypes" }, minItems: 1, uniqueItems: true }] }, format: { type: "string" }, contentMediaType: { type: "string" }, contentEncoding: { type: "string" }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: "#/definitions/schemaArray" }, anyOf: { $ref: "#/definitions/schemaArray" }, oneOf: { $ref: "#/definitions/schemaArray" }, not: { $ref: "#" } }, default: true };
});
var pY = P((f0, cY) => {
  Object.defineProperty(f0, "__esModule", { value: true });
  f0.MissingRefError = f0.ValidationError = f0.CodeGen = f0.Name = f0.nil = f0.stringify = f0.str = f0._ = f0.KeywordCxt = f0.Ajv = undefined;
  var sR = bH(), eR = qz(), XI = Mz(), Rz = jz(), QI = ["/properties"], X9 = "http://json-schema.org/draft-07/schema";

  class W4 extends sR.default {
    _addVocabularies() {
      if (super._addVocabularies(), eR.default.forEach((X) => this.addVocabulary(X)), this.opts.discriminator)
        this.addKeyword(XI.default);
    }
    _addDefaultMetaSchema() {
      if (super._addDefaultMetaSchema(), !this.opts.meta)
        return;
      let X = this.opts.$data ? this.$dataMetaSchema(Rz, QI) : Rz;
      this.addMetaSchema(X, X9, false), this.refs["http://json-schema.org/schema"] = X9;
    }
    defaultMeta() {
      return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(X9) ? X9 : undefined);
    }
  }
  f0.Ajv = W4;
  cY.exports = f0 = W4;
  cY.exports.Ajv = W4;
  Object.defineProperty(f0, "__esModule", { value: true });
  f0.default = W4;
  var $I = dX();
  Object.defineProperty(f0, "KeywordCxt", { enumerable: true, get: function() {
    return $I.KeywordCxt;
  } });
  var r6 = p();
  Object.defineProperty(f0, "_", { enumerable: true, get: function() {
    return r6._;
  } });
  Object.defineProperty(f0, "str", { enumerable: true, get: function() {
    return r6.str;
  } });
  Object.defineProperty(f0, "stringify", { enumerable: true, get: function() {
    return r6.stringify;
  } });
  Object.defineProperty(f0, "nil", { enumerable: true, get: function() {
    return r6.nil;
  } });
  Object.defineProperty(f0, "Name", { enumerable: true, get: function() {
    return r6.Name;
  } });
  Object.defineProperty(f0, "CodeGen", { enumerable: true, get: function() {
    return r6.CodeGen;
  } });
  var YI = T8();
  Object.defineProperty(f0, "ValidationError", { enumerable: true, get: function() {
    return YI.default;
  } });
  var WI = iX();
  Object.defineProperty(f0, "MissingRefError", { enumerable: true, get: function() {
    return WI.default;
  } });
});
var Tz = P((kz) => {
  Object.defineProperty(kz, "__esModule", { value: true });
  kz.formatNames = kz.fastFormats = kz.fullFormats = undefined;
  function V1(X, Q) {
    return { validate: X, compare: Q };
  }
  kz.fullFormats = { date: V1(Pz, rY), time: V1(iY(true), oY), "date-time": V1(Iz(true), Zz), "iso-time": V1(iY(), Sz), "iso-date-time": V1(Iz(), Cz), duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/, uri: VI, "uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, "uri-template": /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i, url: /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu, email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i, hostname: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/, ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i, regex: wI, uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i, "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/, "json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i, "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/, byte: LI, int32: { type: "number", validate: NI }, int64: { type: "number", validate: OI }, float: { type: "number", validate: bz }, double: { type: "number", validate: bz }, password: true, binary: true };
  kz.fastFormats = { ...kz.fullFormats, date: V1(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, rY), time: V1(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, oY), "date-time": V1(/^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, Zz), "iso-time": V1(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, Sz), "iso-date-time": V1(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, Cz), uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i, "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i, email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i };
  kz.formatNames = Object.keys(kz.fullFormats);
  function HI(X) {
    return X % 4 === 0 && (X % 100 !== 0 || X % 400 === 0);
  }
  var BI = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, zI = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function Pz(X) {
    let Q = BI.exec(X);
    if (!Q)
      return false;
    let $ = +Q[1], Y = +Q[2], W = +Q[3];
    return Y >= 1 && Y <= 12 && W >= 1 && W <= (Y === 2 && HI($) ? 29 : zI[Y]);
  }
  function rY(X, Q) {
    if (!(X && Q))
      return;
    if (X > Q)
      return 1;
    if (X < Q)
      return -1;
    return 0;
  }
  var dY = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
  function iY(X) {
    return function($) {
      let Y = dY.exec($);
      if (!Y)
        return false;
      let W = +Y[1], J = +Y[2], G = +Y[3], H = Y[4], B = Y[5] === "-" ? -1 : 1, z2 = +(Y[6] || 0), K = +(Y[7] || 0);
      if (z2 > 23 || K > 59 || X && !H)
        return false;
      if (W <= 23 && J <= 59 && G < 60)
        return true;
      let V = J - K * B, L = W - z2 * B - (V < 0 ? 1 : 0);
      return (L === 23 || L === -1) && (V === 59 || V === -1) && G < 61;
    };
  }
  function oY(X, Q) {
    if (!(X && Q))
      return;
    let $ = new Date("2020-01-01T" + X).valueOf(), Y = new Date("2020-01-01T" + Q).valueOf();
    if (!($ && Y))
      return;
    return $ - Y;
  }
  function Sz(X, Q) {
    if (!(X && Q))
      return;
    let $ = dY.exec(X), Y = dY.exec(Q);
    if (!($ && Y))
      return;
    if (X = $[1] + $[2] + $[3], Q = Y[1] + Y[2] + Y[3], X > Q)
      return 1;
    if (X < Q)
      return -1;
    return 0;
  }
  var nY = /t|\s/i;
  function Iz(X) {
    let Q = iY(X);
    return function(Y) {
      let W = Y.split(nY);
      return W.length === 2 && Pz(W[0]) && Q(W[1]);
    };
  }
  function Zz(X, Q) {
    if (!(X && Q))
      return;
    let $ = new Date(X).valueOf(), Y = new Date(Q).valueOf();
    if (!($ && Y))
      return;
    return $ - Y;
  }
  function Cz(X, Q) {
    if (!(X && Q))
      return;
    let [$, Y] = X.split(nY), [W, J] = Q.split(nY), G = rY($, W);
    if (G === undefined)
      return;
    return G || oY(Y, J);
  }
  var KI = /\/|:/, UI = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
  function VI(X) {
    return KI.test(X) && UI.test(X);
  }
  var Ez = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
  function LI(X) {
    return Ez.lastIndex = 0, Ez.test(X);
  }
  var qI = -2147483648, FI = 2147483647;
  function NI(X) {
    return Number.isInteger(X) && X <= FI && X >= qI;
  }
  function OI(X) {
    return Number.isInteger(X);
  }
  function bz() {
    return true;
  }
  var DI = /[^\\]\\Z/;
  function wI(X) {
    if (DI.test(X))
      return false;
    try {
      return new RegExp(X), true;
    } catch (Q) {
      return false;
    }
  }
});
var xz = P((_z) => {
  Object.defineProperty(_z, "__esModule", { value: true });
  _z.formatLimitDefinition = undefined;
  var MI = pY(), Y1 = p(), n1 = Y1.operators, Q9 = { formatMaximum: { okStr: "<=", ok: n1.LTE, fail: n1.GT }, formatMinimum: { okStr: ">=", ok: n1.GTE, fail: n1.LT }, formatExclusiveMaximum: { okStr: "<", ok: n1.LT, fail: n1.GTE }, formatExclusiveMinimum: { okStr: ">", ok: n1.GT, fail: n1.LTE } }, jI = { message: ({ keyword: X, schemaCode: Q }) => Y1.str`should be ${Q9[X].okStr} ${Q}`, params: ({ keyword: X, schemaCode: Q }) => Y1._`{comparison: ${Q9[X].okStr}, limit: ${Q}}` };
  _z.formatLimitDefinition = { keyword: Object.keys(Q9), type: "string", schemaType: "string", $data: true, error: jI, code(X) {
    let { gen: Q, data: $, schemaCode: Y, keyword: W, it: J } = X, { opts: G, self: H } = J;
    if (!G.validateFormats)
      return;
    let B = new MI.KeywordCxt(J, H.RULES.all.format.definition, "format");
    if (B.$data)
      z2();
    else
      K();
    function z2() {
      let L = Q.scopeValue("formats", { ref: H.formats, code: G.code.formats }), U = Q.const("fmt", Y1._`${L}[${B.schemaCode}]`);
      X.fail$data((0, Y1.or)(Y1._`typeof ${U} != "object"`, Y1._`${U} instanceof RegExp`, Y1._`typeof ${U}.compare != "function"`, V(U)));
    }
    function K() {
      let L = B.schema, U = H.formats[L];
      if (!U || U === true)
        return;
      if (typeof U != "object" || U instanceof RegExp || typeof U.compare != "function")
        throw Error(`"${W}": format "${L}" does not define "compare" function`);
      let F = Q.scopeValue("formats", { key: L, ref: U, code: G.code.formats ? Y1._`${G.code.formats}${(0, Y1.getProperty)(L)}` : undefined });
      X.fail$data(V(F));
    }
    function V(L) {
      return Y1._`${L}.compare(${$}, ${Y}) ${Q9[W].fail} 0`;
    }
  }, dependencies: ["format"] };
  var RI = (X) => {
    return X.addKeyword(_z.formatLimitDefinition), X;
  };
  _z.default = RI;
});
var hz = P((J4, fz) => {
  Object.defineProperty(J4, "__esModule", { value: true });
  var o6 = Tz(), EI = xz(), sY = p(), yz = new sY.Name("fullFormats"), bI = new sY.Name("fastFormats"), eY = (X, Q = { keywords: true }) => {
    if (Array.isArray(Q))
      return gz(X, Q, o6.fullFormats, yz), X;
    let [$, Y] = Q.mode === "fast" ? [o6.fastFormats, bI] : [o6.fullFormats, yz], W = Q.formats || o6.formatNames;
    if (gz(X, W, $, Y), Q.keywords)
      (0, EI.default)(X);
    return X;
  };
  eY.get = (X, Q = "full") => {
    let Y = (Q === "fast" ? o6.fastFormats : o6.fullFormats)[X];
    if (!Y)
      throw Error(`Unknown format "${X}"`);
    return Y;
  };
  function gz(X, Q, $, Y) {
    var W, J;
    (W = (J = X.opts.code).formats) !== null && W !== undefined || (J.formats = sY._`require("ajv-formats/dist/formats").${Y}`);
    for (let G of Q)
      X.addFormat(G, $[G]);
  }
  fz.exports = J4 = eY;
  Object.defineProperty(J4, "__esModule", { value: true });
  J4.default = eY;
});
var FK = 50;
function O6(X = FK) {
  let Q = new AbortController;
  return qK(X, Q.signal), Q;
}
var NK = typeof global == "object" && global && global.Object === Object && global;
var F7 = NK;
var OK = typeof self == "object" && self && self.Object === Object && self;
var DK = F7 || OK || Function("return this")();
var D6 = DK;
var wK = D6.Symbol;
var w6 = wK;
var N7 = Object.prototype;
var AK = N7.hasOwnProperty;
var MK = N7.toString;
var s6 = w6 ? w6.toStringTag : undefined;
function jK(X) {
  var Q = AK.call(X, s6), $ = X[s6];
  try {
    X[s6] = undefined;
    var Y = true;
  } catch (J) {}
  var W = MK.call(X);
  if (Y)
    if (Q)
      X[s6] = $;
    else
      delete X[s6];
  return W;
}
var O7 = jK;
var RK = Object.prototype;
var IK = RK.toString;
function EK(X) {
  return IK.call(X);
}
var D7 = EK;
var bK = "[object Null]";
var PK = "[object Undefined]";
var w7 = w6 ? w6.toStringTag : undefined;
function SK(X) {
  if (X == null)
    return X === undefined ? PK : bK;
  return w7 && w7 in Object(X) ? O7(X) : D7(X);
}
var A7 = SK;
function ZK(X) {
  var Q = typeof X;
  return X != null && (Q == "object" || Q == "function");
}
var K4 = ZK;
var CK = "[object AsyncFunction]";
var kK = "[object Function]";
var vK = "[object GeneratorFunction]";
var TK = "[object Proxy]";
function _K(X) {
  if (!K4(X))
    return false;
  var Q = A7(X);
  return Q == kK || Q == vK || Q == CK || Q == TK;
}
var M7 = _K;
var xK = D6["__core-js_shared__"];
var U4 = xK;
var j7 = function() {
  var X = /[^.]+$/.exec(U4 && U4.keys && U4.keys.IE_PROTO || "");
  return X ? "Symbol(src)_1." + X : "";
}();
function yK(X) {
  return !!j7 && j7 in X;
}
var R7 = yK;
var gK = Function.prototype;
var fK = gK.toString;
function hK(X) {
  if (X != null) {
    try {
      return fK.call(X);
    } catch (Q) {}
    try {
      return X + "";
    } catch (Q) {}
  }
  return "";
}
var I7 = hK;
var uK = /[\\^$.*+?()[\]{}|]/g;
var lK = /^\[object .+?Constructor\]$/;
var mK = Function.prototype;
var cK = Object.prototype;
var pK = mK.toString;
var dK = cK.hasOwnProperty;
var iK = RegExp("^" + pK.call(dK).replace(uK, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function nK(X) {
  if (!K4(X) || R7(X))
    return false;
  var Q = M7(X) ? iK : lK;
  return Q.test(I7(X));
}
var E7 = nK;
function rK(X, Q) {
  return X == null ? undefined : X[Q];
}
var b7 = rK;
function oK(X, Q) {
  var $ = b7(X, Q);
  return E7($) ? $ : undefined;
}
var V4 = oK;
var tK = V4(Object, "create");
var q1 = tK;
function aK() {
  this.__data__ = q1 ? q1(null) : {}, this.size = 0;
}
var P7 = aK;
function sK(X) {
  var Q = this.has(X) && delete this.__data__[X];
  return this.size -= Q ? 1 : 0, Q;
}
var S7 = sK;
var eK = "__lodash_hash_undefined__";
var XU = Object.prototype;
var QU = XU.hasOwnProperty;
function $U(X) {
  var Q = this.__data__;
  if (q1) {
    var $ = Q[X];
    return $ === eK ? undefined : $;
  }
  return QU.call(Q, X) ? Q[X] : undefined;
}
var Z7 = $U;
var YU = Object.prototype;
var WU = YU.hasOwnProperty;
function JU(X) {
  var Q = this.__data__;
  return q1 ? Q[X] !== undefined : WU.call(Q, X);
}
var C7 = JU;
var GU = "__lodash_hash_undefined__";
function HU(X, Q) {
  var $ = this.__data__;
  return this.size += this.has(X) ? 0 : 1, $[X] = q1 && Q === undefined ? GU : Q, this;
}
var k7 = HU;
function A6(X) {
  var Q = -1, $ = X == null ? 0 : X.length;
  this.clear();
  while (++Q < $) {
    var Y = X[Q];
    this.set(Y[0], Y[1]);
  }
}
A6.prototype.clear = P7;
A6.prototype.delete = S7;
A6.prototype.get = Z7;
A6.prototype.has = C7;
A6.prototype.set = k7;
var J9 = A6;
function BU() {
  this.__data__ = [], this.size = 0;
}
var v7 = BU;
function zU(X, Q) {
  return X === Q || X !== X && Q !== Q;
}
var T7 = zU;
function KU(X, Q) {
  var $ = X.length;
  while ($--)
    if (T7(X[$][0], Q))
      return $;
  return -1;
}
var Z1 = KU;
var UU = Array.prototype;
var VU = UU.splice;
function LU(X) {
  var Q = this.__data__, $ = Z1(Q, X);
  if ($ < 0)
    return false;
  var Y = Q.length - 1;
  if ($ == Y)
    Q.pop();
  else
    VU.call(Q, $, 1);
  return --this.size, true;
}
var _7 = LU;
function qU(X) {
  var Q = this.__data__, $ = Z1(Q, X);
  return $ < 0 ? undefined : Q[$][1];
}
var x7 = qU;
function FU(X) {
  return Z1(this.__data__, X) > -1;
}
var y7 = FU;
function NU(X, Q) {
  var $ = this.__data__, Y = Z1($, X);
  if (Y < 0)
    ++this.size, $.push([X, Q]);
  else
    $[Y][1] = Q;
  return this;
}
var g7 = NU;
function M6(X) {
  var Q = -1, $ = X == null ? 0 : X.length;
  this.clear();
  while (++Q < $) {
    var Y = X[Q];
    this.set(Y[0], Y[1]);
  }
}
M6.prototype.clear = v7;
M6.prototype.delete = _7;
M6.prototype.get = x7;
M6.prototype.has = y7;
M6.prototype.set = g7;
var f7 = M6;
var OU = V4(D6, "Map");
var h7 = OU;
function DU() {
  this.size = 0, this.__data__ = { hash: new J9, map: new (h7 || f7), string: new J9 };
}
var u7 = DU;
function wU(X) {
  var Q = typeof X;
  return Q == "string" || Q == "number" || Q == "symbol" || Q == "boolean" ? X !== "__proto__" : X === null;
}
var l7 = wU;
function AU(X, Q) {
  var $ = X.__data__;
  return l7(Q) ? $[typeof Q == "string" ? "string" : "hash"] : $.map;
}
var C1 = AU;
function MU(X) {
  var Q = C1(this, X).delete(X);
  return this.size -= Q ? 1 : 0, Q;
}
var m7 = MU;
function jU(X) {
  return C1(this, X).get(X);
}
var c7 = jU;
function RU(X) {
  return C1(this, X).has(X);
}
var p7 = RU;
function IU(X, Q) {
  var $ = C1(this, X), Y = $.size;
  return $.set(X, Q), this.size += $.size == Y ? 0 : 1, this;
}
var d7 = IU;
function j6(X) {
  var Q = -1, $ = X == null ? 0 : X.length;
  this.clear();
  while (++Q < $) {
    var Y = X[Q];
    this.set(Y[0], Y[1]);
  }
}
j6.prototype.clear = u7;
j6.prototype.delete = m7;
j6.prototype.get = c7;
j6.prototype.has = p7;
j6.prototype.set = d7;
var G9 = j6;
var EU = "Expected a function";
function H9(X, Q) {
  if (typeof X != "function" || Q != null && typeof Q != "function")
    throw TypeError(EU);
  var $ = function() {
    var Y = arguments, W = Q ? Q.apply(this, Y) : Y[0], J = $.cache;
    if (J.has(W))
      return J.get(W);
    var G = X.apply(this, Y);
    return $.cache = J.set(W, G) || J, G;
  };
  return $.cache = new (H9.Cache || G9), $;
}
H9.Cache = G9;
var k1 = H9;
function bU(X, Q) {
  if (X.destroyed)
    return;
  X.write(Q);
}
function i7(X) {
  bU(process.stderr, X);
}
var n7 = k1((X) => {
  if (!X || X.trim() === "")
    return null;
  let Q = X.split(",").map((J) => J.trim()).filter(Boolean);
  if (Q.length === 0)
    return null;
  let $ = Q.some((J) => J.startsWith("!")), Y = Q.some((J) => !J.startsWith("!"));
  if ($ && Y)
    return null;
  let W = Q.map((J) => J.replace(/^!/, "").toLowerCase());
  return { include: $ ? [] : W, exclude: $ ? W : [], isExclusive: $ };
});
function PU(X) {
  let Q = [], $ = X.match(/^MCP server ["']([^"']+)["']/);
  if ($ && $[1])
    Q.push("mcp"), Q.push($[1].toLowerCase());
  else {
    let J = X.match(/^([^:[]+):/);
    if (J && J[1])
      Q.push(J[1].trim().toLowerCase());
  }
  let Y = X.match(/^\[([^\]]+)]/);
  if (Y && Y[1])
    Q.push(Y[1].trim().toLowerCase());
  if (X.toLowerCase().includes("1p event:"))
    Q.push("1p");
  let W = X.match(/:\s*([^:]+?)(?:\s+(?:type|mode|status|event))?:/);
  if (W && W[1]) {
    let J = W[1].trim().toLowerCase();
    if (J.length < 30 && !J.includes(" "))
      Q.push(J);
  }
  return Array.from(new Set(Q));
}
function SU(X, Q) {
  if (!Q)
    return true;
  if (X.length === 0)
    return false;
  if (Q.isExclusive)
    return !X.some(($) => Q.exclude.includes($));
  else
    return X.some(($) => Q.include.includes($));
}
function r7(X, Q) {
  if (!Q)
    return true;
  let $ = PU(X);
  return SU($, Q);
}
function L4() {
  return (process.env.CLAUDE_CONFIG_DIR ?? ZU(CU(), ".claude")).normalize("NFC");
}
function B9(X) {
  if (!X)
    return false;
  if (typeof X === "boolean")
    return X;
  let Q = X.toLowerCase().trim();
  return ["1", "true", "yes", "on"].includes(Q);
}
function o7(X) {
  return { name: X, default: 30000, validate: (Q) => {
    if (!Q)
      return { effective: 30000, status: "valid" };
    let $ = parseInt(Q, 10);
    if (isNaN($) || $ <= 0)
      return { effective: 30000, status: "invalid", message: `Invalid value "${Q}" (using default: 30000)` };
    if ($ > 150000)
      return { effective: 150000, status: "capped", message: `Capped from ${$} to 150000` };
    return { effective: $, status: "valid" };
  } };
}
var t7 = o7("BASH_MAX_OUTPUT_LENGTH");
var Cb = o7("TASK_MAX_OUTPUT_LENGTH");
var a7 = { name: "CLAUDE_CODE_MAX_OUTPUT_TOKENS", default: 32000, validate: (X) => {
  if (!X)
    return { effective: 32000, status: "valid" };
  let Y = parseInt(X, 10);
  if (isNaN(Y) || Y <= 0)
    return { effective: 32000, status: "invalid", message: `Invalid value "${X}" (using default: 32000)` };
  if (Y > 64000)
    return { effective: 64000, status: "capped", message: `Capped from ${Y} to 64000` };
  return { effective: Y, status: "valid" };
} };
function TU() {
  let X = "";
  if (typeof process < "u" && typeof process.cwd === "function" && typeof s7 === "function")
    X = s7(kU()).normalize("NFC");
  return { originalCwd: X, projectRoot: X, totalCostUSD: 0, totalAPIDuration: 0, totalAPIDurationWithoutRetries: 0, totalToolDuration: 0, startTime: Date.now(), lastInteractionTime: Date.now(), totalLinesAdded: 0, totalLinesRemoved: 0, hasUnknownModelCost: false, cwd: X, modelUsage: {}, mainLoopModelOverride: undefined, initialMainLoopModel: null, modelStrings: null, isInteractive: false, clientType: "cli", sessionIngressToken: undefined, oauthTokenFromFd: undefined, apiKeyFromFd: undefined, flagSettingsPath: undefined, allowedSettingSources: ["userSettings", "projectSettings", "localSettings", "flagSettings", "policySettings"], meter: null, sessionCounter: null, locCounter: null, prCounter: null, commitCounter: null, costCounter: null, tokenCounter: null, codeEditToolDecisionCounter: null, activeTimeCounter: null, sessionId: vU(), parentSessionId: undefined, loggerProvider: null, eventLogger: null, meterProvider: null, tracerProvider: null, agentColorMap: new Map, agentColorIndex: 0, envVarValidators: [t7, a7], lastAPIRequest: null, inMemoryErrorLog: [], inlinePlugins: [], useCoworkPlugins: false, sessionBypassPermissionsMode: false, sessionTrustAccepted: false, sessionPersistenceDisabled: false, hasExitedPlanMode: false, needsPlanModeExitAttachment: false, hasExitedDelegateMode: false, needsDelegateModeExitAttachment: false, lspRecommendationShownThisSession: false, initJsonSchema: null, registeredHooks: null, planSlugCache: new Map, teleportedSessionInfo: null, invokedSkills: new Map, slowOperations: [], promptCacheBreaks: [], sdkBetas: undefined, mainThreadAgentType: undefined, isRemoteMode: false, directConnectServerUrl: undefined, systemPromptSectionCache: new Map, additionalDirectoriesForClaudeMd: [], resumedTranscriptPath: null };
}
var _U = TU();
function e7() {
  return _U.sessionId;
}
function XW({ writeFn: X, flushIntervalMs: Q = 1000, maxBufferSize: $ = 100, immediateMode: Y = false }) {
  let W = [], J = null;
  function G() {
    if (J)
      clearTimeout(J), J = null;
  }
  function H() {
    if (W.length === 0)
      return;
    X(W.join("")), W = [], G();
  }
  function B() {
    if (!J)
      J = setTimeout(H, Q);
  }
  return { write(z2) {
    if (Y) {
      X(z2);
      return;
    }
    if (W.push(z2), B(), W.length >= $)
      H();
  }, flush: H, dispose() {
    H();
  } };
}
var QW = new Set;
function $W(X) {
  return QW.add(X), () => QW.delete(X);
}
var z9 = (() => {
  let X = process.env.CLAUDE_CODE_SLOW_OPERATION_THRESHOLD_MS;
  if (X !== undefined) {
    let Q = Number(X);
    if (!Number.isNaN(Q) && Q >= 0)
      return Q;
  }
  return 1 / 0;
})();
function xU(X) {
  if (X === null)
    return "null";
  if (X === undefined)
    return "undefined";
  if (Array.isArray(X))
    return `Array[${X.length}]`;
  if (typeof X === "object")
    return `Object{${Object.keys(X).length} keys}`;
  if (typeof X === "string")
    return `string(${X.length} chars)`;
  return typeof X;
}
function YW(X, Q) {
  let $ = performance.now();
  try {
    return Q();
  } finally {
    performance.now() - $ > z9;
  }
}
function Z0(X, Q, $) {
  let Y = xU(X);
  return YW(`JSON.stringify(${Y})`, () => JSON.stringify(X, Q, $));
}
var q4 = (X, Q) => {
  let $ = typeof X === "string" ? X.length : 0;
  return YW(`JSON.parse(${$} chars)`, () => JSON.parse(X, Q));
};
var yU = k1(() => {
  return B9(process.env.DEBUG) || B9(process.env.DEBUG_SDK) || process.argv.includes("--debug") || process.argv.includes("-d") || JW() || process.argv.some((X) => X.startsWith("--debug=")) || GW() !== null;
});
var gU = k1(() => {
  let X = process.argv.find(($) => $.startsWith("--debug="));
  if (!X)
    return null;
  let Q = X.substring(8);
  return n7(Q);
});
var JW = k1(() => {
  return process.argv.includes("--debug-to-stderr") || process.argv.includes("-d2e");
});
var GW = k1(() => {
  for (let X = 0;X < process.argv.length; X++) {
    let Q = process.argv[X];
    if (Q.startsWith("--debug-file="))
      return Q.substring(13);
    if (Q === "--debug-file" && X + 1 < process.argv.length)
      return process.argv[X + 1];
  }
  return null;
});
function fU(X) {
  if (typeof process > "u" || typeof process.versions > "u" || typeof process.versions.node > "u")
    return false;
  let Q = gU();
  return r7(X, Q);
}
var hU = false;
var F4 = null;
function uU() {
  if (!F4)
    F4 = XW({ writeFn: (X) => {
      let Q = HW();
      if (!n0().existsSync(K9(Q)))
        n0().mkdirSync(K9(Q));
      n0().appendFileSync(Q, X), lU();
    }, flushIntervalMs: 1000, maxBufferSize: 100, immediateMode: yU() }), $W(async () => F4?.dispose());
  return F4;
}
function v1(X, { level: Q } = { level: "debug" }) {
  if (!fU(X))
    return;
  if (hU && X.includes(`
`))
    X = Z0(X);
  let Y = `${new Date().toISOString()} [${Q.toUpperCase()}] ${X.trim()}
`;
  if (JW()) {
    i7(Y);
    return;
  }
  uU().write(Y);
}
function HW() {
  return GW() ?? process.env.CLAUDE_CODE_DEBUG_LOGS_DIR ?? WW(L4(), "debug", `${e7()}.txt`);
}
var lU = k1(() => {
  if (process.argv[2] === "--ripgrep")
    return;
  try {
    let X = HW(), Q = K9(X), $ = WW(Q, "latest");
    if (!n0().existsSync(Q))
      n0().mkdirSync(Q);
    if (n0().existsSync($))
      try {
        n0().unlinkSync($);
      } catch {}
    n0().symlinkSync(X, $);
  } catch {}
});
function F0(X, Q) {
  let $ = performance.now();
  try {
    return Q();
  } finally {
    performance.now() - $ > z9;
  }
}
var rU = { cwd() {
  return process.cwd();
}, existsSync(X) {
  return F0(`existsSync(${X})`, () => h.existsSync(X));
}, async stat(X) {
  return mU(X);
}, async readdir(X) {
  return cU(X, { withFileTypes: true });
}, async unlink(X) {
  return pU(X);
}, async rmdir(X) {
  return dU(X);
}, async rm(X, Q) {
  return iU(X, Q);
}, statSync(X) {
  return F0(`statSync(${X})`, () => h.statSync(X));
}, lstatSync(X) {
  return F0(`lstatSync(${X})`, () => h.lstatSync(X));
}, readFileSync(X, Q) {
  return F0(`readFileSync(${X})`, () => h.readFileSync(X, { encoding: Q.encoding }));
}, readFileBytesSync(X) {
  return F0(`readFileBytesSync(${X})`, () => h.readFileSync(X));
}, readSync(X, Q) {
  return F0(`readSync(${X}, ${Q.length} bytes)`, () => {
    let $ = undefined;
    try {
      $ = h.openSync(X, "r");
      let Y = Buffer.alloc(Q.length), W = h.readSync($, Y, 0, Q.length, 0);
      return { buffer: Y, bytesRead: W };
    } finally {
      if ($)
        h.closeSync($);
    }
  });
}, appendFileSync(X, Q, $) {
  return F0(`appendFileSync(${X}, ${Q.length} chars)`, () => {
    if (!h.existsSync(X) && $?.mode !== undefined) {
      let Y = h.openSync(X, "a", $.mode);
      try {
        h.appendFileSync(Y, Q);
      } finally {
        h.closeSync(Y);
      }
    } else
      h.appendFileSync(X, Q);
  });
}, copyFileSync(X, Q) {
  return F0(`copyFileSync(${X} → ${Q})`, () => h.copyFileSync(X, Q));
}, unlinkSync(X) {
  return F0(`unlinkSync(${X})`, () => h.unlinkSync(X));
}, renameSync(X, Q) {
  return F0(`renameSync(${X} → ${Q})`, () => h.renameSync(X, Q));
}, linkSync(X, Q) {
  return F0(`linkSync(${X} → ${Q})`, () => h.linkSync(X, Q));
}, symlinkSync(X, Q, $) {
  return F0(`symlinkSync(${X} → ${Q})`, () => h.symlinkSync(X, Q, $));
}, readlinkSync(X) {
  return F0(`readlinkSync(${X})`, () => h.readlinkSync(X));
}, realpathSync(X) {
  return F0(`realpathSync(${X})`, () => h.realpathSync(X).normalize("NFC"));
}, mkdirSync(X, Q) {
  return F0(`mkdirSync(${X})`, () => {
    if (!h.existsSync(X)) {
      let $ = { recursive: true };
      if (Q?.mode !== undefined)
        $.mode = Q.mode;
      h.mkdirSync(X, $);
    }
  });
}, readdirSync(X) {
  return F0(`readdirSync(${X})`, () => h.readdirSync(X, { withFileTypes: true }));
}, readdirStringSync(X) {
  return F0(`readdirStringSync(${X})`, () => h.readdirSync(X));
}, isDirEmptySync(X) {
  return F0(`isDirEmptySync(${X})`, () => {
    return this.readdirSync(X).length === 0;
  });
}, rmdirSync(X) {
  return F0(`rmdirSync(${X})`, () => h.rmdirSync(X));
}, rmSync(X, Q) {
  return F0(`rmSync(${X})`, () => h.rmSync(X, Q));
}, createWriteStream(X) {
  return h.createWriteStream(X);
} };
var oU = rU;
function n0() {
  return oU;
}
class F1 extends Error {
}
function R6() {
  return process.versions.bun !== undefined;
}
var N4 = null;
var zW = false;
function $V() {
  if (zW)
    return N4;
  if (zW = true, !process.env.DEBUG_CLAUDE_AGENT_SDK)
    return null;
  let X = BW(L4(), "debug");
  if (N4 = BW(X, `sdk-${sU()}.txt`), !XV(X))
    QV(X, { recursive: true });
  return process.stderr.write(`SDK debug logs: ${N4}
`), N4;
}
function N1(X) {
  let Q = $V();
  if (!Q)
    return;
  let Y = `${new Date().toISOString()} ${X}
`;
  eU(Q, Y);
}
function KW(X, Q) {
  let $ = { ...X };
  if (Q) {
    let Y = { sandbox: Q };
    if ($.settings)
      try {
        Y = { ...q4($.settings), sandbox: Q };
      } catch {}
    $.settings = Z0(Y);
  }
  return $;
}

class e6 {
  options;
  process;
  processStdin;
  processStdout;
  ready = false;
  abortController;
  exitError;
  exitListeners = [];
  processExitHandler;
  abortHandler;
  constructor(X) {
    this.options = X;
    this.abortController = X.abortController || O6(), this.initialize();
  }
  getDefaultExecutable() {
    return R6() ? "bun" : "node";
  }
  spawnLocalProcess(X) {
    let { command: Q, args: $, cwd: Y, env: W, signal: J } = X, G = W.DEBUG_CLAUDE_AGENT_SDK || this.options.stderr ? "pipe" : "ignore", H = YV(Q, $, { cwd: Y, stdio: ["pipe", "pipe", G], signal: J, env: W, windowsHide: true });
    if (W.DEBUG_CLAUDE_AGENT_SDK || this.options.stderr)
      H.stderr.on("data", (z2) => {
        let K = z2.toString();
        if (N1(K), this.options.stderr)
          this.options.stderr(K);
      });
    return { stdin: H.stdin, stdout: H.stdout, get killed() {
      return H.killed;
    }, get exitCode() {
      return H.exitCode;
    }, kill: H.kill.bind(H), on: H.on.bind(H), once: H.once.bind(H), off: H.off.bind(H) };
  }
  initialize() {
    try {
      let { additionalDirectories: X = [], agent: Q, betas: $, cwd: Y, executable: W = this.getDefaultExecutable(), executableArgs: J = [], extraArgs: G = {}, pathToClaudeCodeExecutable: H, env: B = { ...process.env }, maxThinkingTokens: z2, maxTurns: K, maxBudgetUsd: V, model: L, fallbackModel: U, jsonSchema: F, permissionMode: q, allowDangerouslySkipPermissions: N, permissionPromptToolName: w, continueConversation: M, resume: R, settingSources: S, allowedTools: C = [], disallowedTools: K0 = [], tools: U0, mcpServers: s, strictMcpConfig: D0, canUseTool: q0, includePartialMessages: L1, plugins: P1, sandbox: o1 } = this.options, m = ["--output-format", "stream-json", "--verbose", "--input-format", "stream-json"];
      if (z2 !== undefined)
        m.push("--max-thinking-tokens", z2.toString());
      if (this.options.effort)
        m.push("--effort", this.options.effort);
      if (K)
        m.push("--max-turns", K.toString());
      if (V !== undefined)
        m.push("--max-budget-usd", V.toString());
      if (L)
        m.push("--model", L);
      if (Q)
        m.push("--agent", Q);
      if ($ && $.length > 0)
        m.push("--betas", $.join(","));
      if (F)
        m.push("--json-schema", Z0(F));
      if (this.options.debugFile)
        m.push("--debug-file", this.options.debugFile);
      else if (this.options.debug)
        m.push("--debug");
      if (B.DEBUG_CLAUDE_AGENT_SDK)
        m.push("--debug-to-stderr");
      if (q0) {
        if (w)
          throw Error("canUseTool callback cannot be used with permissionPromptToolName. Please use one or the other.");
        m.push("--permission-prompt-tool", "stdio");
      } else if (w)
        m.push("--permission-prompt-tool", w);
      if (M)
        m.push("--continue");
      if (R)
        m.push("--resume", R);
      if (C.length > 0)
        m.push("--allowedTools", C.join(","));
      if (K0.length > 0)
        m.push("--disallowedTools", K0.join(","));
      if (U0 !== undefined)
        if (Array.isArray(U0))
          if (U0.length === 0)
            m.push("--tools", "");
          else
            m.push("--tools", U0.join(","));
        else
          m.push("--tools", "default");
      if (s && Object.keys(s).length > 0)
        m.push("--mcp-config", Z0({ mcpServers: s }));
      if (S)
        m.push("--setting-sources", S.join(","));
      if (D0)
        m.push("--strict-mcp-config");
      if (q)
        m.push("--permission-mode", q);
      if (N)
        m.push("--allow-dangerously-skip-permissions");
      if (U) {
        if (L && U === L)
          throw Error("Fallback model cannot be the same as the main model. Please specify a different model for fallbackModel option.");
        m.push("--fallback-model", U);
      }
      if (L1)
        m.push("--include-partial-messages");
      for (let E0 of X)
        m.push("--add-dir", E0);
      if (P1 && P1.length > 0)
        for (let E0 of P1)
          if (E0.type === "local")
            m.push("--plugin-dir", E0.path);
          else
            throw Error(`Unsupported plugin type: ${E0.type}`);
      if (this.options.forkSession)
        m.push("--fork-session");
      if (this.options.resumeSessionAt)
        m.push("--resume-session-at", this.options.resumeSessionAt);
      if (this.options.sessionId)
        m.push("--session-id", this.options.sessionId);
      if (this.options.persistSession === false)
        m.push("--no-session-persistence");
      let $9 = KW(G ?? {}, o1);
      for (let [E0, S1] of Object.entries($9))
        if (S1 === null)
          m.push(`--${E0}`);
        else
          m.push(`--${E0}`, S1);
      if (!B.CLAUDE_CODE_ENTRYPOINT)
        B.CLAUDE_CODE_ENTRYPOINT = "sdk-ts";
      if (delete B.NODE_OPTIONS, B.DEBUG_CLAUDE_AGENT_SDK)
        B.DEBUG = "1";
      else
        delete B.DEBUG;
      let t1 = JV(H), t6 = t1 ? H : W, a6 = t1 ? [...J, ...m] : [...J, H, ...m], H4 = { command: t6, args: a6, cwd: Y, env: B, signal: this.abortController.signal };
      if (this.options.spawnClaudeCodeProcess)
        N1(`Spawning Claude Code (custom): ${t6} ${a6.join(" ")}`), this.process = this.options.spawnClaudeCodeProcess(H4);
      else {
        if (!n0().existsSync(H)) {
          let S1 = t1 ? `Claude Code native binary not found at ${H}. Please ensure Claude Code is installed via native installer or specify a valid path with options.pathToClaudeCodeExecutable.` : `Claude Code executable not found at ${H}. Is options.pathToClaudeCodeExecutable set?`;
          throw ReferenceError(S1);
        }
        N1(`Spawning Claude Code: ${t6} ${a6.join(" ")}`), this.process = this.spawnLocalProcess(H4);
      }
      this.processStdin = this.process.stdin, this.processStdout = this.process.stdout;
      let B4 = () => {
        if (this.process && !this.process.killed)
          this.process.kill("SIGTERM");
      };
      this.processExitHandler = B4, this.abortHandler = B4, process.on("exit", this.processExitHandler), this.abortController.signal.addEventListener("abort", this.abortHandler), this.process.on("error", (E0) => {
        if (this.ready = false, this.abortController.signal.aborted)
          this.exitError = new F1("Claude Code process aborted by user");
        else
          this.exitError = Error(`Failed to spawn Claude Code process: ${E0.message}`), N1(this.exitError.message);
      }), this.process.on("exit", (E0, S1) => {
        if (this.ready = false, this.abortController.signal.aborted)
          this.exitError = new F1("Claude Code process aborted by user");
        else {
          let L6 = this.getProcessExitError(E0, S1);
          if (L6)
            this.exitError = L6, N1(L6.message);
        }
      }), this.ready = true;
    } catch (X) {
      throw this.ready = false, X;
    }
  }
  getProcessExitError(X, Q) {
    if (X !== 0 && X !== null)
      return Error(`Claude Code process exited with code ${X}`);
    else if (Q)
      return Error(`Claude Code process terminated by signal ${Q}`);
    return;
  }
  write(X) {
    if (this.abortController.signal.aborted)
      throw new F1("Operation aborted");
    if (!this.ready || !this.processStdin)
      throw Error("ProcessTransport is not ready for writing");
    if (this.process?.killed || this.process?.exitCode !== null)
      throw Error("Cannot write to terminated process");
    if (this.exitError)
      throw Error(`Cannot write to process that exited with error: ${this.exitError.message}`);
    N1(`[ProcessTransport] Writing to stdin: ${X.substring(0, 100)}`);
    try {
      if (!this.processStdin.write(X))
        N1("[ProcessTransport] Write buffer full, data queued");
    } catch (Q) {
      throw this.ready = false, Error(`Failed to write to process stdin: ${Q.message}`);
    }
  }
  close() {
    if (this.processStdin)
      this.processStdin.end(), this.processStdin = undefined;
    if (this.abortHandler)
      this.abortController.signal.removeEventListener("abort", this.abortHandler), this.abortHandler = undefined;
    for (let { handler: X } of this.exitListeners)
      this.process?.off("exit", X);
    if (this.exitListeners = [], this.process && !this.process.killed)
      this.process.kill("SIGTERM"), setTimeout(() => {
        if (this.process && !this.process.killed)
          this.process.kill("SIGKILL");
      }, 5000);
    if (this.ready = false, this.processExitHandler)
      process.off("exit", this.processExitHandler), this.processExitHandler = undefined;
  }
  isReady() {
    return this.ready;
  }
  async* readMessages() {
    if (!this.processStdout)
      throw Error("ProcessTransport output stream not available");
    let X = WV({ input: this.processStdout });
    try {
      for await (let Q of X)
        if (Q.trim())
          try {
            yield q4(Q);
          } catch ($) {
            throw N1(`Non-JSON stdout: ${Q}`), Error(`CLI output was not valid JSON. This may indicate an error during startup. Output: ${Q.slice(0, 200)}${Q.length > 200 ? "..." : ""}`);
          }
      await this.waitForExit();
    } catch (Q) {
      throw Q;
    } finally {
      X.close();
    }
  }
  endInput() {
    if (this.processStdin)
      this.processStdin.end();
  }
  getInputStream() {
    return this.processStdin;
  }
  onExit(X) {
    if (!this.process)
      return () => {};
    let Q = ($, Y) => {
      let W = this.getProcessExitError($, Y);
      X(W);
    };
    return this.process.on("exit", Q), this.exitListeners.push({ callback: X, handler: Q }), () => {
      if (this.process)
        this.process.off("exit", Q);
      let $ = this.exitListeners.findIndex((Y) => Y.handler === Q);
      if ($ !== -1)
        this.exitListeners.splice($, 1);
    };
  }
  async waitForExit() {
    if (!this.process) {
      if (this.exitError)
        throw this.exitError;
      return;
    }
    if (this.process.exitCode !== null || this.process.killed) {
      if (this.exitError)
        throw this.exitError;
      return;
    }
    return new Promise((X, Q) => {
      let $ = (W, J) => {
        if (this.abortController.signal.aborted) {
          Q(new F1("Operation aborted"));
          return;
        }
        let G = this.getProcessExitError(W, J);
        if (G)
          Q(G);
        else
          X();
      };
      this.process.once("exit", $);
      let Y = (W) => {
        this.process.off("exit", $), Q(W);
      };
      this.process.once("error", Y), this.process.once("exit", () => {
        this.process.off("error", Y);
      });
    });
  }
}
function JV(X) {
  return ![".js", ".mjs", ".tsx", ".ts", ".jsx"].some(($) => X.endsWith($));
}

class XX {
  returned;
  queue = [];
  readResolve;
  readReject;
  isDone = false;
  hasError;
  started = false;
  constructor(X) {
    this.returned = X;
  }
  [Symbol.asyncIterator]() {
    if (this.started)
      throw Error("Stream can only be iterated once");
    return this.started = true, this;
  }
  next() {
    if (this.queue.length > 0)
      return Promise.resolve({ done: false, value: this.queue.shift() });
    if (this.isDone)
      return Promise.resolve({ done: true, value: undefined });
    if (this.hasError)
      return Promise.reject(this.hasError);
    return new Promise((X, Q) => {
      this.readResolve = X, this.readReject = Q;
    });
  }
  enqueue(X) {
    if (this.readResolve) {
      let Q = this.readResolve;
      this.readResolve = undefined, this.readReject = undefined, Q({ done: false, value: X });
    } else
      this.queue.push(X);
  }
  done() {
    if (this.isDone = true, this.readResolve) {
      let X = this.readResolve;
      this.readResolve = undefined, this.readReject = undefined, X({ done: true, value: undefined });
    }
  }
  error(X) {
    if (this.hasError = X, this.readReject) {
      let Q = this.readReject;
      this.readResolve = undefined, this.readReject = undefined, Q(X);
    }
  }
  return() {
    if (this.isDone = true, this.returned)
      this.returned();
    return Promise.resolve({ done: true, value: undefined });
  }
}

class U9 {
  sendMcpMessage;
  isClosed = false;
  constructor(X) {
    this.sendMcpMessage = X;
  }
  onclose;
  onerror;
  onmessage;
  async start() {}
  async send(X) {
    if (this.isClosed)
      throw Error("Transport is closed");
    this.sendMcpMessage(X);
  }
  async close() {
    if (this.isClosed)
      return;
    this.isClosed = true, this.onclose?.();
  }
}

class QX {
  transport;
  isSingleUserTurn;
  canUseTool;
  hooks;
  abortController;
  jsonSchema;
  initConfig;
  pendingControlResponses = new Map;
  cleanupPerformed = false;
  sdkMessages;
  inputStream = new XX;
  initialization;
  cancelControllers = new Map;
  hookCallbacks = new Map;
  nextCallbackId = 0;
  sdkMcpTransports = new Map;
  sdkMcpServerInstances = new Map;
  pendingMcpResponses = new Map;
  firstResultReceivedResolve;
  firstResultReceived = false;
  hasBidirectionalNeeds() {
    return this.sdkMcpTransports.size > 0 || this.hooks !== undefined && Object.keys(this.hooks).length > 0 || this.canUseTool !== undefined;
  }
  constructor(X, Q, $, Y, W, J = new Map, G, H) {
    this.transport = X;
    this.isSingleUserTurn = Q;
    this.canUseTool = $;
    this.hooks = Y;
    this.abortController = W;
    this.jsonSchema = G;
    this.initConfig = H;
    for (let [B, z2] of J)
      this.connectSdkMcpServer(B, z2);
    this.sdkMessages = this.readSdkMessages(), this.readMessages(), this.initialization = this.initialize(), this.initialization.catch(() => {});
  }
  setError(X) {
    this.inputStream.error(X);
  }
  close() {
    this.cleanup();
  }
  cleanup(X) {
    if (this.cleanupPerformed)
      return;
    this.cleanupPerformed = true;
    try {
      this.transport.close();
      let Q = Error("Query closed before response received");
      for (let { reject: $ } of this.pendingControlResponses.values())
        $(Q);
      this.pendingControlResponses.clear();
      for (let { reject: $ } of this.pendingMcpResponses.values())
        $(Q);
      this.pendingMcpResponses.clear(), this.cancelControllers.clear(), this.hookCallbacks.clear();
      for (let $ of this.sdkMcpTransports.values())
        try {
          $.close();
        } catch {}
      if (this.sdkMcpTransports.clear(), X)
        this.inputStream.error(X);
      else
        this.inputStream.done();
    } catch (Q) {}
  }
  next(...[X]) {
    return this.sdkMessages.next(...[X]);
  }
  return(X) {
    return this.sdkMessages.return(X);
  }
  throw(X) {
    return this.sdkMessages.throw(X);
  }
  [Symbol.asyncIterator]() {
    return this.sdkMessages;
  }
  [Symbol.asyncDispose]() {
    return this.sdkMessages[Symbol.asyncDispose]();
  }
  async readMessages() {
    try {
      for await (let X of this.transport.readMessages()) {
        if (X.type === "control_response") {
          let Q = this.pendingControlResponses.get(X.response.request_id);
          if (Q)
            Q.handler(X.response);
          continue;
        } else if (X.type === "control_request") {
          this.handleControlRequest(X);
          continue;
        } else if (X.type === "control_cancel_request") {
          this.handleControlCancelRequest(X);
          continue;
        } else if (X.type === "keep_alive")
          continue;
        if (X.type === "streamlined_text" || X.type === "streamlined_tool_use_summary")
          continue;
        if (X.type === "result") {
          if (this.firstResultReceived = true, this.firstResultReceivedResolve)
            this.firstResultReceivedResolve();
          if (this.isSingleUserTurn)
            v1("[Query.readMessages] First result received for single-turn query, closing stdin"), this.transport.endInput();
        }
        this.inputStream.enqueue(X);
      }
      if (this.firstResultReceivedResolve)
        this.firstResultReceivedResolve();
      this.inputStream.done(), this.cleanup();
    } catch (X) {
      if (this.firstResultReceivedResolve)
        this.firstResultReceivedResolve();
      this.inputStream.error(X), this.cleanup(X);
    }
  }
  async handleControlRequest(X) {
    let Q = new AbortController;
    this.cancelControllers.set(X.request_id, Q);
    try {
      let $ = await this.processControlRequest(X, Q.signal), Y = { type: "control_response", response: { subtype: "success", request_id: X.request_id, response: $ } };
      await Promise.resolve(this.transport.write(Z0(Y) + `
`));
    } catch ($) {
      let Y = { type: "control_response", response: { subtype: "error", request_id: X.request_id, error: $.message || String($) } };
      await Promise.resolve(this.transport.write(Z0(Y) + `
`));
    } finally {
      this.cancelControllers.delete(X.request_id);
    }
  }
  handleControlCancelRequest(X) {
    let Q = this.cancelControllers.get(X.request_id);
    if (Q)
      Q.abort(), this.cancelControllers.delete(X.request_id);
  }
  async processControlRequest(X, Q) {
    if (X.request.subtype === "can_use_tool") {
      if (!this.canUseTool)
        throw Error("canUseTool callback is not provided.");
      return { ...await this.canUseTool(X.request.tool_name, X.request.input, { signal: Q, suggestions: X.request.permission_suggestions, blockedPath: X.request.blocked_path, decisionReason: X.request.decision_reason, toolUseID: X.request.tool_use_id, agentID: X.request.agent_id }), toolUseID: X.request.tool_use_id };
    } else if (X.request.subtype === "hook_callback")
      return await this.handleHookCallbacks(X.request.callback_id, X.request.input, X.request.tool_use_id, Q);
    else if (X.request.subtype === "mcp_message") {
      let $ = X.request, Y = this.sdkMcpTransports.get($.server_name);
      if (!Y)
        throw Error(`SDK MCP server not found: ${$.server_name}`);
      if ("method" in $.message && "id" in $.message && $.message.id !== null)
        return { mcp_response: await this.handleMcpControlRequest($.server_name, $, Y) };
      else {
        if (Y.onmessage)
          Y.onmessage($.message);
        return { mcp_response: { jsonrpc: "2.0", result: {}, id: 0 } };
      }
    }
    throw Error("Unsupported control request subtype: " + X.request.subtype);
  }
  async* readSdkMessages() {
    for await (let X of this.inputStream)
      yield X;
  }
  async initialize() {
    let X;
    if (this.hooks) {
      X = {};
      for (let [W, J] of Object.entries(this.hooks))
        if (J.length > 0)
          X[W] = J.map((G) => {
            let H = [];
            for (let B of G.hooks) {
              let z2 = `hook_${this.nextCallbackId++}`;
              this.hookCallbacks.set(z2, B), H.push(z2);
            }
            return { matcher: G.matcher, hookCallbackIds: H, timeout: G.timeout };
          });
    }
    let Q = this.sdkMcpTransports.size > 0 ? Array.from(this.sdkMcpTransports.keys()) : undefined, $ = { subtype: "initialize", hooks: X, sdkMcpServers: Q, jsonSchema: this.jsonSchema, systemPrompt: this.initConfig?.systemPrompt, appendSystemPrompt: this.initConfig?.appendSystemPrompt, agents: this.initConfig?.agents };
    return (await this.request($)).response;
  }
  async interrupt() {
    await this.request({ subtype: "interrupt" });
  }
  async setPermissionMode(X) {
    await this.request({ subtype: "set_permission_mode", mode: X });
  }
  async setModel(X) {
    await this.request({ subtype: "set_model", model: X });
  }
  async setMaxThinkingTokens(X) {
    await this.request({ subtype: "set_max_thinking_tokens", max_thinking_tokens: X });
  }
  async rewindFiles(X, Q) {
    return (await this.request({ subtype: "rewind_files", user_message_id: X, dry_run: Q?.dryRun })).response;
  }
  async processPendingPermissionRequests(X) {
    for (let Q of X)
      if (Q.request.subtype === "can_use_tool")
        this.handleControlRequest(Q).catch(() => {});
  }
  request(X) {
    let Q = Math.random().toString(36).substring(2, 15), $ = { request_id: Q, type: "control_request", request: X };
    return new Promise((Y, W) => {
      this.pendingControlResponses.set(Q, { handler: (J) => {
        if (this.pendingControlResponses.delete(Q), J.subtype === "success")
          Y(J);
        else if (W(Error(J.error)), J.pending_permission_requests)
          this.processPendingPermissionRequests(J.pending_permission_requests);
      }, reject: W }), Promise.resolve(this.transport.write(Z0($) + `
`));
    });
  }
  async initializationResult() {
    return this.initialization;
  }
  async supportedCommands() {
    return (await this.initialization).commands;
  }
  async supportedModels() {
    return (await this.initialization).models;
  }
  async reconnectMcpServer(X) {
    await this.request({ subtype: "mcp_reconnect", serverName: X });
  }
  async toggleMcpServer(X, Q) {
    await this.request({ subtype: "mcp_toggle", serverName: X, enabled: Q });
  }
  async mcpServerStatus() {
    return (await this.request({ subtype: "mcp_status" })).response.mcpServers;
  }
  async setMcpServers(X) {
    let Q = {}, $ = {};
    for (let [H, B] of Object.entries(X))
      if (B.type === "sdk" && "instance" in B)
        Q[H] = B.instance;
      else
        $[H] = B;
    let Y = new Set(this.sdkMcpServerInstances.keys()), W = new Set(Object.keys(Q));
    for (let H of Y)
      if (!W.has(H))
        await this.disconnectSdkMcpServer(H);
    for (let [H, B] of Object.entries(Q))
      if (!Y.has(H))
        this.connectSdkMcpServer(H, B);
    let J = {};
    for (let H of Object.keys(Q))
      J[H] = { type: "sdk", name: H };
    return (await this.request({ subtype: "mcp_set_servers", servers: { ...$, ...J } })).response;
  }
  async accountInfo() {
    return (await this.initialization).account;
  }
  async streamInput(X) {
    v1("[Query.streamInput] Starting to process input stream");
    try {
      let Q = 0;
      for await (let $ of X) {
        if (Q++, v1(`[Query.streamInput] Processing message ${Q}: ${$.type}`), this.abortController?.signal.aborted)
          break;
        await Promise.resolve(this.transport.write(Z0($) + `
`));
      }
      if (v1(`[Query.streamInput] Finished processing ${Q} messages from input stream`), Q > 0 && this.hasBidirectionalNeeds())
        v1("[Query.streamInput] Has bidirectional needs, waiting for first result"), await this.waitForFirstResult();
      v1("[Query] Calling transport.endInput() to close stdin to CLI process"), this.transport.endInput();
    } catch (Q) {
      if (!(Q instanceof F1))
        throw Q;
    }
  }
  waitForFirstResult() {
    if (this.firstResultReceived)
      return v1("[Query.waitForFirstResult] Result already received, returning immediately"), Promise.resolve();
    return new Promise((X) => {
      if (this.abortController?.signal.aborted) {
        X();
        return;
      }
      this.abortController?.signal.addEventListener("abort", () => X(), { once: true }), this.firstResultReceivedResolve = X;
    });
  }
  handleHookCallbacks(X, Q, $, Y) {
    let W = this.hookCallbacks.get(X);
    if (!W)
      throw Error(`No hook callback found for ID: ${X}`);
    return W(Q, $, { signal: Y });
  }
  connectSdkMcpServer(X, Q) {
    let $ = new U9((Y) => this.sendMcpServerMessageToCli(X, Y));
    this.sdkMcpTransports.set(X, $), this.sdkMcpServerInstances.set(X, Q), Q.connect($);
  }
  async disconnectSdkMcpServer(X) {
    let Q = this.sdkMcpTransports.get(X);
    if (Q)
      await Q.close(), this.sdkMcpTransports.delete(X);
    this.sdkMcpServerInstances.delete(X);
  }
  sendMcpServerMessageToCli(X, Q) {
    if ("id" in Q && Q.id !== null && Q.id !== undefined) {
      let Y = `${X}:${Q.id}`, W = this.pendingMcpResponses.get(Y);
      if (W) {
        W.resolve(Q), this.pendingMcpResponses.delete(Y);
        return;
      }
    }
    let $ = { type: "control_request", request_id: GV(), request: { subtype: "mcp_message", server_name: X, message: Q } };
    this.transport.write(Z0($) + `
`);
  }
  handleMcpControlRequest(X, Q, $) {
    let Y = "id" in Q.message ? Q.message.id : null, W = `${X}:${Y}`;
    return new Promise((J, G) => {
      let H = () => {
        this.pendingMcpResponses.delete(W);
      }, B = (K) => {
        H(), J(K);
      }, z2 = (K) => {
        H(), G(K);
      };
      if (this.pendingMcpResponses.set(W, { resolve: B, reject: z2 }), $.onmessage)
        $.onmessage(Q.message);
      else {
        H(), G(Error("No message handler registered"));
        return;
      }
    });
  }
}
var n;
(function(X) {
  X.assertEqual = (W) => {};
  function Q(W) {}
  X.assertIs = Q;
  function $(W) {
    throw Error();
  }
  X.assertNever = $, X.arrayToEnum = (W) => {
    let J = {};
    for (let G of W)
      J[G] = G;
    return J;
  }, X.getValidEnumValues = (W) => {
    let J = X.objectKeys(W).filter((H) => typeof W[W[H]] !== "number"), G = {};
    for (let H of J)
      G[H] = W[H];
    return X.objectValues(G);
  }, X.objectValues = (W) => {
    return X.objectKeys(W).map(function(J) {
      return W[J];
    });
  }, X.objectKeys = typeof Object.keys === "function" ? (W) => Object.keys(W) : (W) => {
    let J = [];
    for (let G in W)
      if (Object.prototype.hasOwnProperty.call(W, G))
        J.push(G);
    return J;
  }, X.find = (W, J) => {
    for (let G of W)
      if (J(G))
        return G;
    return;
  }, X.isInteger = typeof Number.isInteger === "function" ? (W) => Number.isInteger(W) : (W) => typeof W === "number" && Number.isFinite(W) && Math.floor(W) === W;
  function Y(W, J = " | ") {
    return W.map((G) => typeof G === "string" ? `'${G}'` : G).join(J);
  }
  X.joinValues = Y, X.jsonStringifyReplacer = (W, J) => {
    if (typeof J === "bigint")
      return J.toString();
    return J;
  };
})(n || (n = {}));
var LW;
(function(X) {
  X.mergeShapes = (Q, $) => {
    return { ...Q, ...$ };
  };
})(LW || (LW = {}));
var I = n.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]);
var O1 = (X) => {
  switch (typeof X) {
    case "undefined":
      return I.undefined;
    case "string":
      return I.string;
    case "number":
      return Number.isNaN(X) ? I.nan : I.number;
    case "boolean":
      return I.boolean;
    case "function":
      return I.function;
    case "bigint":
      return I.bigint;
    case "symbol":
      return I.symbol;
    case "object":
      if (Array.isArray(X))
        return I.array;
      if (X === null)
        return I.null;
      if (X.then && typeof X.then === "function" && X.catch && typeof X.catch === "function")
        return I.promise;
      if (typeof Map < "u" && X instanceof Map)
        return I.map;
      if (typeof Set < "u" && X instanceof Set)
        return I.set;
      if (typeof Date < "u" && X instanceof Date)
        return I.date;
      return I.object;
    default:
      return I.unknown;
  }
};
var A = n.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);

class h0 extends Error {
  get errors() {
    return this.issues;
  }
  constructor(X) {
    super();
    this.issues = [], this.addIssue = ($) => {
      this.issues = [...this.issues, $];
    }, this.addIssues = ($ = []) => {
      this.issues = [...this.issues, ...$];
    };
    let Q = new.target.prototype;
    if (Object.setPrototypeOf)
      Object.setPrototypeOf(this, Q);
    else
      this.__proto__ = Q;
    this.name = "ZodError", this.issues = X;
  }
  format(X) {
    let Q = X || function(W) {
      return W.message;
    }, $ = { _errors: [] }, Y = (W) => {
      for (let J of W.issues)
        if (J.code === "invalid_union")
          J.unionErrors.map(Y);
        else if (J.code === "invalid_return_type")
          Y(J.returnTypeError);
        else if (J.code === "invalid_arguments")
          Y(J.argumentsError);
        else if (J.path.length === 0)
          $._errors.push(Q(J));
        else {
          let G = $, H = 0;
          while (H < J.path.length) {
            let B = J.path[H];
            if (H !== J.path.length - 1)
              G[B] = G[B] || { _errors: [] };
            else
              G[B] = G[B] || { _errors: [] }, G[B]._errors.push(Q(J));
            G = G[B], H++;
          }
        }
    };
    return Y(this), $;
  }
  static assert(X) {
    if (!(X instanceof h0))
      throw Error(`Not a ZodError: ${X}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, n.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(X = (Q) => Q.message) {
    let Q = {}, $ = [];
    for (let Y of this.issues)
      if (Y.path.length > 0) {
        let W = Y.path[0];
        Q[W] = Q[W] || [], Q[W].push(X(Y));
      } else
        $.push(X(Y));
    return { formErrors: $, fieldErrors: Q };
  }
  get formErrors() {
    return this.flatten();
  }
}
h0.create = (X) => {
  return new h0(X);
};
var BV = (X, Q) => {
  let $;
  switch (X.code) {
    case A.invalid_type:
      if (X.received === I.undefined)
        $ = "Required";
      else
        $ = `Expected ${X.expected}, received ${X.received}`;
      break;
    case A.invalid_literal:
      $ = `Invalid literal value, expected ${JSON.stringify(X.expected, n.jsonStringifyReplacer)}`;
      break;
    case A.unrecognized_keys:
      $ = `Unrecognized key(s) in object: ${n.joinValues(X.keys, ", ")}`;
      break;
    case A.invalid_union:
      $ = "Invalid input";
      break;
    case A.invalid_union_discriminator:
      $ = `Invalid discriminator value. Expected ${n.joinValues(X.options)}`;
      break;
    case A.invalid_enum_value:
      $ = `Invalid enum value. Expected ${n.joinValues(X.options)}, received '${X.received}'`;
      break;
    case A.invalid_arguments:
      $ = "Invalid function arguments";
      break;
    case A.invalid_return_type:
      $ = "Invalid function return type";
      break;
    case A.invalid_date:
      $ = "Invalid date";
      break;
    case A.invalid_string:
      if (typeof X.validation === "object")
        if ("includes" in X.validation) {
          if ($ = `Invalid input: must include "${X.validation.includes}"`, typeof X.validation.position === "number")
            $ = `${$} at one or more positions greater than or equal to ${X.validation.position}`;
        } else if ("startsWith" in X.validation)
          $ = `Invalid input: must start with "${X.validation.startsWith}"`;
        else if ("endsWith" in X.validation)
          $ = `Invalid input: must end with "${X.validation.endsWith}"`;
        else
          n.assertNever(X.validation);
      else if (X.validation !== "regex")
        $ = `Invalid ${X.validation}`;
      else
        $ = "Invalid";
      break;
    case A.too_small:
      if (X.type === "array")
        $ = `Array must contain ${X.exact ? "exactly" : X.inclusive ? "at least" : "more than"} ${X.minimum} element(s)`;
      else if (X.type === "string")
        $ = `String must contain ${X.exact ? "exactly" : X.inclusive ? "at least" : "over"} ${X.minimum} character(s)`;
      else if (X.type === "number")
        $ = `Number must be ${X.exact ? "exactly equal to " : X.inclusive ? "greater than or equal to " : "greater than "}${X.minimum}`;
      else if (X.type === "bigint")
        $ = `Number must be ${X.exact ? "exactly equal to " : X.inclusive ? "greater than or equal to " : "greater than "}${X.minimum}`;
      else if (X.type === "date")
        $ = `Date must be ${X.exact ? "exactly equal to " : X.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(X.minimum))}`;
      else
        $ = "Invalid input";
      break;
    case A.too_big:
      if (X.type === "array")
        $ = `Array must contain ${X.exact ? "exactly" : X.inclusive ? "at most" : "less than"} ${X.maximum} element(s)`;
      else if (X.type === "string")
        $ = `String must contain ${X.exact ? "exactly" : X.inclusive ? "at most" : "under"} ${X.maximum} character(s)`;
      else if (X.type === "number")
        $ = `Number must be ${X.exact ? "exactly" : X.inclusive ? "less than or equal to" : "less than"} ${X.maximum}`;
      else if (X.type === "bigint")
        $ = `BigInt must be ${X.exact ? "exactly" : X.inclusive ? "less than or equal to" : "less than"} ${X.maximum}`;
      else if (X.type === "date")
        $ = `Date must be ${X.exact ? "exactly" : X.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(X.maximum))}`;
      else
        $ = "Invalid input";
      break;
    case A.custom:
      $ = "Invalid input";
      break;
    case A.invalid_intersection_types:
      $ = "Intersection results could not be merged";
      break;
    case A.not_multiple_of:
      $ = `Number must be a multiple of ${X.multipleOf}`;
      break;
    case A.not_finite:
      $ = "Number must be finite";
      break;
    default:
      $ = Q.defaultError, n.assertNever(X);
  }
  return { message: $ };
};
var T1 = BV;
var zV = T1;
function $X() {
  return zV;
}
var O4 = (X) => {
  let { data: Q, path: $, errorMaps: Y, issueData: W } = X, J = [...$, ...W.path || []], G = { ...W, path: J };
  if (W.message !== undefined)
    return { ...W, path: J, message: W.message };
  let H = "", B = Y.filter((z2) => !!z2).slice().reverse();
  for (let z2 of B)
    H = z2(G, { data: Q, defaultError: H }).message;
  return { ...W, path: J, message: H };
};
function b(X, Q) {
  let $ = $X(), Y = O4({ issueData: Q, data: X.data, path: X.path, errorMaps: [X.common.contextualErrorMap, X.schemaErrorMap, $, $ === T1 ? undefined : T1].filter((W) => !!W) });
  X.common.issues.push(Y);
}

class b0 {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(X, Q) {
    let $ = [];
    for (let Y of Q) {
      if (Y.status === "aborted")
        return g;
      if (Y.status === "dirty")
        X.dirty();
      $.push(Y.value);
    }
    return { status: X.value, value: $ };
  }
  static async mergeObjectAsync(X, Q) {
    let $ = [];
    for (let Y of Q) {
      let W = await Y.key, J = await Y.value;
      $.push({ key: W, value: J });
    }
    return b0.mergeObjectSync(X, $);
  }
  static mergeObjectSync(X, Q) {
    let $ = {};
    for (let Y of Q) {
      let { key: W, value: J } = Y;
      if (W.status === "aborted")
        return g;
      if (J.status === "aborted")
        return g;
      if (W.status === "dirty")
        X.dirty();
      if (J.status === "dirty")
        X.dirty();
      if (W.value !== "__proto__" && (typeof J.value < "u" || Y.alwaysSet))
        $[W.value] = J.value;
    }
    return { status: X.value, value: $ };
  }
}
var g = Object.freeze({ status: "aborted" });
var I6 = (X) => ({ status: "dirty", value: X });
var C0 = (X) => ({ status: "valid", value: X });
var q9 = (X) => X.status === "aborted";
var F9 = (X) => X.status === "dirty";
var a1 = (X) => X.status === "valid";
var YX = (X) => typeof Promise < "u" && X instanceof Promise;
var Z;
(function(X) {
  X.errToObj = (Q) => typeof Q === "string" ? { message: Q } : Q || {}, X.toString = (Q) => typeof Q === "string" ? Q : Q?.message;
})(Z || (Z = {}));

class r0 {
  constructor(X, Q, $, Y) {
    this._cachedPath = [], this.parent = X, this.data = Q, this._path = $, this._key = Y;
  }
  get path() {
    if (!this._cachedPath.length)
      if (Array.isArray(this._key))
        this._cachedPath.push(...this._path, ...this._key);
      else
        this._cachedPath.push(...this._path, this._key);
    return this._cachedPath;
  }
}
var qW = (X, Q) => {
  if (a1(Q))
    return { success: true, data: Q.value };
  else {
    if (!X.common.issues.length)
      throw Error("Validation failed but no issues detected.");
    return { success: false, get error() {
      if (this._error)
        return this._error;
      let $ = new h0(X.common.issues);
      return this._error = $, this._error;
    } };
  }
};
function l(X) {
  if (!X)
    return {};
  let { errorMap: Q, invalid_type_error: $, required_error: Y, description: W } = X;
  if (Q && ($ || Y))
    throw Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  if (Q)
    return { errorMap: Q, description: W };
  return { errorMap: (G, H) => {
    let { message: B } = X;
    if (G.code === "invalid_enum_value")
      return { message: B ?? H.defaultError };
    if (typeof H.data > "u")
      return { message: B ?? Y ?? H.defaultError };
    if (G.code !== "invalid_type")
      return { message: H.defaultError };
    return { message: B ?? $ ?? H.defaultError };
  }, description: W };
}

class d {
  get description() {
    return this._def.description;
  }
  _getType(X) {
    return O1(X.data);
  }
  _getOrReturnCtx(X, Q) {
    return Q || { common: X.parent.common, data: X.data, parsedType: O1(X.data), schemaErrorMap: this._def.errorMap, path: X.path, parent: X.parent };
  }
  _processInputParams(X) {
    return { status: new b0, ctx: { common: X.parent.common, data: X.data, parsedType: O1(X.data), schemaErrorMap: this._def.errorMap, path: X.path, parent: X.parent } };
  }
  _parseSync(X) {
    let Q = this._parse(X);
    if (YX(Q))
      throw Error("Synchronous parse encountered promise.");
    return Q;
  }
  _parseAsync(X) {
    let Q = this._parse(X);
    return Promise.resolve(Q);
  }
  parse(X, Q) {
    let $ = this.safeParse(X, Q);
    if ($.success)
      return $.data;
    throw $.error;
  }
  safeParse(X, Q) {
    let $ = { common: { issues: [], async: Q?.async ?? false, contextualErrorMap: Q?.errorMap }, path: Q?.path || [], schemaErrorMap: this._def.errorMap, parent: null, data: X, parsedType: O1(X) }, Y = this._parseSync({ data: X, path: $.path, parent: $ });
    return qW($, Y);
  }
  "~validate"(X) {
    let Q = { common: { issues: [], async: !!this["~standard"].async }, path: [], schemaErrorMap: this._def.errorMap, parent: null, data: X, parsedType: O1(X) };
    if (!this["~standard"].async)
      try {
        let $ = this._parseSync({ data: X, path: [], parent: Q });
        return a1($) ? { value: $.value } : { issues: Q.common.issues };
      } catch ($) {
        if ($?.message?.toLowerCase()?.includes("encountered"))
          this["~standard"].async = true;
        Q.common = { issues: [], async: true };
      }
    return this._parseAsync({ data: X, path: [], parent: Q }).then(($) => a1($) ? { value: $.value } : { issues: Q.common.issues });
  }
  async parseAsync(X, Q) {
    let $ = await this.safeParseAsync(X, Q);
    if ($.success)
      return $.data;
    throw $.error;
  }
  async safeParseAsync(X, Q) {
    let $ = { common: { issues: [], contextualErrorMap: Q?.errorMap, async: true }, path: Q?.path || [], schemaErrorMap: this._def.errorMap, parent: null, data: X, parsedType: O1(X) }, Y = this._parse({ data: X, path: $.path, parent: $ }), W = await (YX(Y) ? Y : Promise.resolve(Y));
    return qW($, W);
  }
  refine(X, Q) {
    let $ = (Y) => {
      if (typeof Q === "string" || typeof Q > "u")
        return { message: Q };
      else if (typeof Q === "function")
        return Q(Y);
      else
        return Q;
    };
    return this._refinement((Y, W) => {
      let J = X(Y), G = () => W.addIssue({ code: A.custom, ...$(Y) });
      if (typeof Promise < "u" && J instanceof Promise)
        return J.then((H) => {
          if (!H)
            return G(), false;
          else
            return true;
        });
      if (!J)
        return G(), false;
      else
        return true;
    });
  }
  refinement(X, Q) {
    return this._refinement(($, Y) => {
      if (!X($))
        return Y.addIssue(typeof Q === "function" ? Q($, Y) : Q), false;
      else
        return true;
    });
  }
  _refinement(X) {
    return new G1({ schema: this, typeName: j.ZodEffects, effect: { type: "refinement", refinement: X } });
  }
  superRefine(X) {
    return this._refinement(X);
  }
  constructor(X) {
    this.spa = this.safeParseAsync, this._def = X, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = { version: 1, vendor: "zod", validate: (Q) => this["~validate"](Q) };
  }
  optional() {
    return J1.create(this, this._def);
  }
  nullable() {
    return _1.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return W1.create(this);
  }
  promise() {
    return Z6.create(this, this._def);
  }
  or(X) {
    return BX.create([this, X], this._def);
  }
  and(X) {
    return zX.create(this, X, this._def);
  }
  transform(X) {
    return new G1({ ...l(this._def), schema: this, typeName: j.ZodEffects, effect: { type: "transform", transform: X } });
  }
  default(X) {
    let Q = typeof X === "function" ? X : () => X;
    return new LX({ ...l(this._def), innerType: this, defaultValue: Q, typeName: j.ZodDefault });
  }
  brand() {
    return new w9({ typeName: j.ZodBranded, type: this, ...l(this._def) });
  }
  catch(X) {
    let Q = typeof X === "function" ? X : () => X;
    return new qX({ ...l(this._def), innerType: this, catchValue: Q, typeName: j.ZodCatch });
  }
  describe(X) {
    return new this.constructor({ ...this._def, description: X });
  }
  pipe(X) {
    return E4.create(this, X);
  }
  readonly() {
    return FX.create(this);
  }
  isOptional() {
    return this.safeParse(undefined).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
var KV = /^c[^\s-]{8,}$/i;
var UV = /^[0-9a-z]+$/;
var VV = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var LV = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var qV = /^[a-z0-9_-]{21}$/i;
var FV = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var NV = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var OV = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var DV = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
var N9;
var wV = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var AV = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var MV = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var jV = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var RV = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var IV = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var FW = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))";
var EV = new RegExp(`^${FW}$`);
function NW(X) {
  let Q = "[0-5]\\d";
  if (X.precision)
    Q = `${Q}\\.\\d{${X.precision}}`;
  else if (X.precision == null)
    Q = `${Q}(\\.\\d+)?`;
  let $ = X.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${Q})${$}`;
}
function bV(X) {
  return new RegExp(`^${NW(X)}$`);
}
function PV(X) {
  let Q = `${FW}T${NW(X)}`, $ = [];
  if ($.push(X.local ? "Z?" : "Z"), X.offset)
    $.push("([+-]\\d{2}:?\\d{2})");
  return Q = `${Q}(${$.join("|")})`, new RegExp(`^${Q}$`);
}
function SV(X, Q) {
  if ((Q === "v4" || !Q) && wV.test(X))
    return true;
  if ((Q === "v6" || !Q) && MV.test(X))
    return true;
  return false;
}
function ZV(X, Q) {
  if (!FV.test(X))
    return false;
  try {
    let [$] = X.split(".");
    if (!$)
      return false;
    let Y = $.replace(/-/g, "+").replace(/_/g, "/").padEnd($.length + (4 - $.length % 4) % 4, "="), W = JSON.parse(atob(Y));
    if (typeof W !== "object" || W === null)
      return false;
    if ("typ" in W && W?.typ !== "JWT")
      return false;
    if (!W.alg)
      return false;
    if (Q && W.alg !== Q)
      return false;
    return true;
  } catch {
    return false;
  }
}
function CV(X, Q) {
  if ((Q === "v4" || !Q) && AV.test(X))
    return true;
  if ((Q === "v6" || !Q) && jV.test(X))
    return true;
  return false;
}

class w1 extends d {
  _parse(X) {
    if (this._def.coerce)
      X.data = String(X.data);
    if (this._getType(X) !== I.string) {
      let W = this._getOrReturnCtx(X);
      return b(W, { code: A.invalid_type, expected: I.string, received: W.parsedType }), g;
    }
    let $ = new b0, Y = undefined;
    for (let W of this._def.checks)
      if (W.kind === "min") {
        if (X.data.length < W.value)
          Y = this._getOrReturnCtx(X, Y), b(Y, { code: A.too_small, minimum: W.value, type: "string", inclusive: true, exact: false, message: W.message }), $.dirty();
      } else if (W.kind === "max") {
        if (X.data.length > W.value)
          Y = this._getOrReturnCtx(X, Y), b(Y, { code: A.too_big, maximum: W.value, type: "string", inclusive: true, exact: false, message: W.message }), $.dirty();
      } else if (W.kind === "length") {
        let J = X.data.length > W.value, G = X.data.length < W.value;
        if (J || G) {
          if (Y = this._getOrReturnCtx(X, Y), J)
            b(Y, { code: A.too_big, maximum: W.value, type: "string", inclusive: true, exact: true, message: W.message });
          else if (G)
            b(Y, { code: A.too_small, minimum: W.value, type: "string", inclusive: true, exact: true, message: W.message });
          $.dirty();
        }
      } else if (W.kind === "email") {
        if (!OV.test(X.data))
          Y = this._getOrReturnCtx(X, Y), b(Y, { validation: "email", code: A.invalid_string, message: W.message }), $.dirty();
      } else if (W.kind === "emoji") {
        if (!N9)
          N9 = new RegExp(DV, "u");
        if (!N9.test(X.data))
          Y = this._getOrReturnCtx(X, Y), b(Y, { validation: "emoji", code: A.invalid_string, message: W.message }), $.dirty();
      } else if (W.kind === "uuid") {
        if (!LV.test(X.data))
          Y = this._getOrReturnCtx(X, Y), b(Y, { validation: "uuid", code: A.invalid_string, message: W.message }), $.dirty();
      } else if (W.kind === "nanoid") {
        if (!qV.test(X.data))
          Y = this._getOrReturnCtx(X, Y), b(Y, { validation: "nanoid", code: A.invalid_string, message: W.message }), $.dirty();
      } else if (W.kind === "cuid") {
        if (!KV.test(X.data))
          Y = this._getOrReturnCtx(X, Y), b(Y, { validation: "cuid", code: A.invalid_string, message: W.message }), $.dirty();
      } else if (W.kind === "cuid2") {
        if (!UV.test(X.data))
          Y = this._getOrReturnCtx(X, Y), b(Y, { validation: "cuid2", code: A.invalid_string, message: W.message }), $.dirty();
      } else if (W.kind === "ulid") {
        if (!VV.test(X.data))
          Y = this._getOrReturnCtx(X, Y), b(Y, { validation: "ulid", code: A.invalid_string, message: W.message }), $.dirty();
      } else if (W.kind === "url")
        try {
          new URL(X.data);
        } catch {
          Y = this._getOrReturnCtx(X, Y), b(Y, { validation: "url", code: A.invalid_string, message: W.message }), $.dirty();
        }
      else if (W.kind === "regex") {
        if (W.regex.lastIndex = 0, !W.regex.test(X.data))
          Y = this._getOrReturnCtx(X, Y), b(Y, { validation: "regex", code: A.invalid_string, message: W.message }), $.dirty();
      } else if (W.kind === "trim")
        X.data = X.data.trim();
      else if (W.kind === "includes") {
        if (!X.data.includes(W.value, W.position))
          Y = this._getOrReturnCtx(X, Y), b(Y, { code: A.invalid_string, validation: { includes: W.value, position: W.position }, message: W.message }), $.dirty();
      } else if (W.kind === "toLowerCase")
        X.data = X.data.toLowerCase();
      else if (W.kind === "toUpperCase")
        X.data = X.data.toUpperCase();
      else if (W.kind === "startsWith") {
        if (!X.data.startsWith(W.value))
          Y = this._getOrReturnCtx(X, Y), b(Y, { code: A.invalid_string, validation: { startsWith: W.value }, message: W.message }), $.dirty();
      } else if (W.kind === "endsWith") {
        if (!X.data.endsWith(W.value))
          Y = this._getOrReturnCtx(X, Y), b(Y, { code: A.invalid_string, validation: { endsWith: W.value }, message: W.message }), $.dirty();
      } else if (W.kind === "datetime") {
        if (!PV(W).test(X.data))
          Y = this._getOrReturnCtx(X, Y), b(Y, { code: A.invalid_string, validation: "datetime", message: W.message }), $.dirty();
      } else if (W.kind === "date") {
        if (!EV.test(X.data))
          Y = this._getOrReturnCtx(X, Y), b(Y, { code: A.invalid_string, validation: "date", message: W.message }), $.dirty();
      } else if (W.kind === "time") {
        if (!bV(W).test(X.data))
          Y = this._getOrReturnCtx(X, Y), b(Y, { code: A.invalid_string, validation: "time", message: W.message }), $.dirty();
      } else if (W.kind === "duration") {
        if (!NV.test(X.data))
          Y = this._getOrReturnCtx(X, Y), b(Y, { validation: "duration", code: A.invalid_string, message: W.message }), $.dirty();
      } else if (W.kind === "ip") {
        if (!SV(X.data, W.version))
          Y = this._getOrReturnCtx(X, Y), b(Y, { validation: "ip", code: A.invalid_string, message: W.message }), $.dirty();
      } else if (W.kind === "jwt") {
        if (!ZV(X.data, W.alg))
          Y = this._getOrReturnCtx(X, Y), b(Y, { validation: "jwt", code: A.invalid_string, message: W.message }), $.dirty();
      } else if (W.kind === "cidr") {
        if (!CV(X.data, W.version))
          Y = this._getOrReturnCtx(X, Y), b(Y, { validation: "cidr", code: A.invalid_string, message: W.message }), $.dirty();
      } else if (W.kind === "base64") {
        if (!RV.test(X.data))
          Y = this._getOrReturnCtx(X, Y), b(Y, { validation: "base64", code: A.invalid_string, message: W.message }), $.dirty();
      } else if (W.kind === "base64url") {
        if (!IV.test(X.data))
          Y = this._getOrReturnCtx(X, Y), b(Y, { validation: "base64url", code: A.invalid_string, message: W.message }), $.dirty();
      } else
        n.assertNever(W);
    return { status: $.value, value: X.data };
  }
  _regex(X, Q, $) {
    return this.refinement((Y) => X.test(Y), { validation: Q, code: A.invalid_string, ...Z.errToObj($) });
  }
  _addCheck(X) {
    return new w1({ ...this._def, checks: [...this._def.checks, X] });
  }
  email(X) {
    return this._addCheck({ kind: "email", ...Z.errToObj(X) });
  }
  url(X) {
    return this._addCheck({ kind: "url", ...Z.errToObj(X) });
  }
  emoji(X) {
    return this._addCheck({ kind: "emoji", ...Z.errToObj(X) });
  }
  uuid(X) {
    return this._addCheck({ kind: "uuid", ...Z.errToObj(X) });
  }
  nanoid(X) {
    return this._addCheck({ kind: "nanoid", ...Z.errToObj(X) });
  }
  cuid(X) {
    return this._addCheck({ kind: "cuid", ...Z.errToObj(X) });
  }
  cuid2(X) {
    return this._addCheck({ kind: "cuid2", ...Z.errToObj(X) });
  }
  ulid(X) {
    return this._addCheck({ kind: "ulid", ...Z.errToObj(X) });
  }
  base64(X) {
    return this._addCheck({ kind: "base64", ...Z.errToObj(X) });
  }
  base64url(X) {
    return this._addCheck({ kind: "base64url", ...Z.errToObj(X) });
  }
  jwt(X) {
    return this._addCheck({ kind: "jwt", ...Z.errToObj(X) });
  }
  ip(X) {
    return this._addCheck({ kind: "ip", ...Z.errToObj(X) });
  }
  cidr(X) {
    return this._addCheck({ kind: "cidr", ...Z.errToObj(X) });
  }
  datetime(X) {
    if (typeof X === "string")
      return this._addCheck({ kind: "datetime", precision: null, offset: false, local: false, message: X });
    return this._addCheck({ kind: "datetime", precision: typeof X?.precision > "u" ? null : X?.precision, offset: X?.offset ?? false, local: X?.local ?? false, ...Z.errToObj(X?.message) });
  }
  date(X) {
    return this._addCheck({ kind: "date", message: X });
  }
  time(X) {
    if (typeof X === "string")
      return this._addCheck({ kind: "time", precision: null, message: X });
    return this._addCheck({ kind: "time", precision: typeof X?.precision > "u" ? null : X?.precision, ...Z.errToObj(X?.message) });
  }
  duration(X) {
    return this._addCheck({ kind: "duration", ...Z.errToObj(X) });
  }
  regex(X, Q) {
    return this._addCheck({ kind: "regex", regex: X, ...Z.errToObj(Q) });
  }
  includes(X, Q) {
    return this._addCheck({ kind: "includes", value: X, position: Q?.position, ...Z.errToObj(Q?.message) });
  }
  startsWith(X, Q) {
    return this._addCheck({ kind: "startsWith", value: X, ...Z.errToObj(Q) });
  }
  endsWith(X, Q) {
    return this._addCheck({ kind: "endsWith", value: X, ...Z.errToObj(Q) });
  }
  min(X, Q) {
    return this._addCheck({ kind: "min", value: X, ...Z.errToObj(Q) });
  }
  max(X, Q) {
    return this._addCheck({ kind: "max", value: X, ...Z.errToObj(Q) });
  }
  length(X, Q) {
    return this._addCheck({ kind: "length", value: X, ...Z.errToObj(Q) });
  }
  nonempty(X) {
    return this.min(1, Z.errToObj(X));
  }
  trim() {
    return new w1({ ...this._def, checks: [...this._def.checks, { kind: "trim" }] });
  }
  toLowerCase() {
    return new w1({ ...this._def, checks: [...this._def.checks, { kind: "toLowerCase" }] });
  }
  toUpperCase() {
    return new w1({ ...this._def, checks: [...this._def.checks, { kind: "toUpperCase" }] });
  }
  get isDatetime() {
    return !!this._def.checks.find((X) => X.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((X) => X.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((X) => X.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((X) => X.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((X) => X.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((X) => X.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((X) => X.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((X) => X.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((X) => X.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((X) => X.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((X) => X.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((X) => X.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((X) => X.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((X) => X.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((X) => X.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((X) => X.kind === "base64url");
  }
  get minLength() {
    let X = null;
    for (let Q of this._def.checks)
      if (Q.kind === "min") {
        if (X === null || Q.value > X)
          X = Q.value;
      }
    return X;
  }
  get maxLength() {
    let X = null;
    for (let Q of this._def.checks)
      if (Q.kind === "max") {
        if (X === null || Q.value < X)
          X = Q.value;
      }
    return X;
  }
}
w1.create = (X) => {
  return new w1({ checks: [], typeName: j.ZodString, coerce: X?.coerce ?? false, ...l(X) });
};
function kV(X, Q) {
  let $ = (X.toString().split(".")[1] || "").length, Y = (Q.toString().split(".")[1] || "").length, W = $ > Y ? $ : Y, J = Number.parseInt(X.toFixed(W).replace(".", "")), G = Number.parseInt(Q.toFixed(W).replace(".", ""));
  return J % G / 10 ** W;
}

class b6 extends d {
  constructor() {
    super(...arguments);
    this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(X) {
    if (this._def.coerce)
      X.data = Number(X.data);
    if (this._getType(X) !== I.number) {
      let W = this._getOrReturnCtx(X);
      return b(W, { code: A.invalid_type, expected: I.number, received: W.parsedType }), g;
    }
    let $ = undefined, Y = new b0;
    for (let W of this._def.checks)
      if (W.kind === "int") {
        if (!n.isInteger(X.data))
          $ = this._getOrReturnCtx(X, $), b($, { code: A.invalid_type, expected: "integer", received: "float", message: W.message }), Y.dirty();
      } else if (W.kind === "min") {
        if (W.inclusive ? X.data < W.value : X.data <= W.value)
          $ = this._getOrReturnCtx(X, $), b($, { code: A.too_small, minimum: W.value, type: "number", inclusive: W.inclusive, exact: false, message: W.message }), Y.dirty();
      } else if (W.kind === "max") {
        if (W.inclusive ? X.data > W.value : X.data >= W.value)
          $ = this._getOrReturnCtx(X, $), b($, { code: A.too_big, maximum: W.value, type: "number", inclusive: W.inclusive, exact: false, message: W.message }), Y.dirty();
      } else if (W.kind === "multipleOf") {
        if (kV(X.data, W.value) !== 0)
          $ = this._getOrReturnCtx(X, $), b($, { code: A.not_multiple_of, multipleOf: W.value, message: W.message }), Y.dirty();
      } else if (W.kind === "finite") {
        if (!Number.isFinite(X.data))
          $ = this._getOrReturnCtx(X, $), b($, { code: A.not_finite, message: W.message }), Y.dirty();
      } else
        n.assertNever(W);
    return { status: Y.value, value: X.data };
  }
  gte(X, Q) {
    return this.setLimit("min", X, true, Z.toString(Q));
  }
  gt(X, Q) {
    return this.setLimit("min", X, false, Z.toString(Q));
  }
  lte(X, Q) {
    return this.setLimit("max", X, true, Z.toString(Q));
  }
  lt(X, Q) {
    return this.setLimit("max", X, false, Z.toString(Q));
  }
  setLimit(X, Q, $, Y) {
    return new b6({ ...this._def, checks: [...this._def.checks, { kind: X, value: Q, inclusive: $, message: Z.toString(Y) }] });
  }
  _addCheck(X) {
    return new b6({ ...this._def, checks: [...this._def.checks, X] });
  }
  int(X) {
    return this._addCheck({ kind: "int", message: Z.toString(X) });
  }
  positive(X) {
    return this._addCheck({ kind: "min", value: 0, inclusive: false, message: Z.toString(X) });
  }
  negative(X) {
    return this._addCheck({ kind: "max", value: 0, inclusive: false, message: Z.toString(X) });
  }
  nonpositive(X) {
    return this._addCheck({ kind: "max", value: 0, inclusive: true, message: Z.toString(X) });
  }
  nonnegative(X) {
    return this._addCheck({ kind: "min", value: 0, inclusive: true, message: Z.toString(X) });
  }
  multipleOf(X, Q) {
    return this._addCheck({ kind: "multipleOf", value: X, message: Z.toString(Q) });
  }
  finite(X) {
    return this._addCheck({ kind: "finite", message: Z.toString(X) });
  }
  safe(X) {
    return this._addCheck({ kind: "min", inclusive: true, value: Number.MIN_SAFE_INTEGER, message: Z.toString(X) })._addCheck({ kind: "max", inclusive: true, value: Number.MAX_SAFE_INTEGER, message: Z.toString(X) });
  }
  get minValue() {
    let X = null;
    for (let Q of this._def.checks)
      if (Q.kind === "min") {
        if (X === null || Q.value > X)
          X = Q.value;
      }
    return X;
  }
  get maxValue() {
    let X = null;
    for (let Q of this._def.checks)
      if (Q.kind === "max") {
        if (X === null || Q.value < X)
          X = Q.value;
      }
    return X;
  }
  get isInt() {
    return !!this._def.checks.find((X) => X.kind === "int" || X.kind === "multipleOf" && n.isInteger(X.value));
  }
  get isFinite() {
    let X = null, Q = null;
    for (let $ of this._def.checks)
      if ($.kind === "finite" || $.kind === "int" || $.kind === "multipleOf")
        return true;
      else if ($.kind === "min") {
        if (Q === null || $.value > Q)
          Q = $.value;
      } else if ($.kind === "max") {
        if (X === null || $.value < X)
          X = $.value;
      }
    return Number.isFinite(Q) && Number.isFinite(X);
  }
}
b6.create = (X) => {
  return new b6({ checks: [], typeName: j.ZodNumber, coerce: X?.coerce || false, ...l(X) });
};

class P6 extends d {
  constructor() {
    super(...arguments);
    this.min = this.gte, this.max = this.lte;
  }
  _parse(X) {
    if (this._def.coerce)
      try {
        X.data = BigInt(X.data);
      } catch {
        return this._getInvalidInput(X);
      }
    if (this._getType(X) !== I.bigint)
      return this._getInvalidInput(X);
    let $ = undefined, Y = new b0;
    for (let W of this._def.checks)
      if (W.kind === "min") {
        if (W.inclusive ? X.data < W.value : X.data <= W.value)
          $ = this._getOrReturnCtx(X, $), b($, { code: A.too_small, type: "bigint", minimum: W.value, inclusive: W.inclusive, message: W.message }), Y.dirty();
      } else if (W.kind === "max") {
        if (W.inclusive ? X.data > W.value : X.data >= W.value)
          $ = this._getOrReturnCtx(X, $), b($, { code: A.too_big, type: "bigint", maximum: W.value, inclusive: W.inclusive, message: W.message }), Y.dirty();
      } else if (W.kind === "multipleOf") {
        if (X.data % W.value !== BigInt(0))
          $ = this._getOrReturnCtx(X, $), b($, { code: A.not_multiple_of, multipleOf: W.value, message: W.message }), Y.dirty();
      } else
        n.assertNever(W);
    return { status: Y.value, value: X.data };
  }
  _getInvalidInput(X) {
    let Q = this._getOrReturnCtx(X);
    return b(Q, { code: A.invalid_type, expected: I.bigint, received: Q.parsedType }), g;
  }
  gte(X, Q) {
    return this.setLimit("min", X, true, Z.toString(Q));
  }
  gt(X, Q) {
    return this.setLimit("min", X, false, Z.toString(Q));
  }
  lte(X, Q) {
    return this.setLimit("max", X, true, Z.toString(Q));
  }
  lt(X, Q) {
    return this.setLimit("max", X, false, Z.toString(Q));
  }
  setLimit(X, Q, $, Y) {
    return new P6({ ...this._def, checks: [...this._def.checks, { kind: X, value: Q, inclusive: $, message: Z.toString(Y) }] });
  }
  _addCheck(X) {
    return new P6({ ...this._def, checks: [...this._def.checks, X] });
  }
  positive(X) {
    return this._addCheck({ kind: "min", value: BigInt(0), inclusive: false, message: Z.toString(X) });
  }
  negative(X) {
    return this._addCheck({ kind: "max", value: BigInt(0), inclusive: false, message: Z.toString(X) });
  }
  nonpositive(X) {
    return this._addCheck({ kind: "max", value: BigInt(0), inclusive: true, message: Z.toString(X) });
  }
  nonnegative(X) {
    return this._addCheck({ kind: "min", value: BigInt(0), inclusive: true, message: Z.toString(X) });
  }
  multipleOf(X, Q) {
    return this._addCheck({ kind: "multipleOf", value: X, message: Z.toString(Q) });
  }
  get minValue() {
    let X = null;
    for (let Q of this._def.checks)
      if (Q.kind === "min") {
        if (X === null || Q.value > X)
          X = Q.value;
      }
    return X;
  }
  get maxValue() {
    let X = null;
    for (let Q of this._def.checks)
      if (Q.kind === "max") {
        if (X === null || Q.value < X)
          X = Q.value;
      }
    return X;
  }
}
P6.create = (X) => {
  return new P6({ checks: [], typeName: j.ZodBigInt, coerce: X?.coerce ?? false, ...l(X) });
};

class D4 extends d {
  _parse(X) {
    if (this._def.coerce)
      X.data = Boolean(X.data);
    if (this._getType(X) !== I.boolean) {
      let $ = this._getOrReturnCtx(X);
      return b($, { code: A.invalid_type, expected: I.boolean, received: $.parsedType }), g;
    }
    return C0(X.data);
  }
}
D4.create = (X) => {
  return new D4({ typeName: j.ZodBoolean, coerce: X?.coerce || false, ...l(X) });
};

class JX extends d {
  _parse(X) {
    if (this._def.coerce)
      X.data = new Date(X.data);
    if (this._getType(X) !== I.date) {
      let W = this._getOrReturnCtx(X);
      return b(W, { code: A.invalid_type, expected: I.date, received: W.parsedType }), g;
    }
    if (Number.isNaN(X.data.getTime())) {
      let W = this._getOrReturnCtx(X);
      return b(W, { code: A.invalid_date }), g;
    }
    let $ = new b0, Y = undefined;
    for (let W of this._def.checks)
      if (W.kind === "min") {
        if (X.data.getTime() < W.value)
          Y = this._getOrReturnCtx(X, Y), b(Y, { code: A.too_small, message: W.message, inclusive: true, exact: false, minimum: W.value, type: "date" }), $.dirty();
      } else if (W.kind === "max") {
        if (X.data.getTime() > W.value)
          Y = this._getOrReturnCtx(X, Y), b(Y, { code: A.too_big, message: W.message, inclusive: true, exact: false, maximum: W.value, type: "date" }), $.dirty();
      } else
        n.assertNever(W);
    return { status: $.value, value: new Date(X.data.getTime()) };
  }
  _addCheck(X) {
    return new JX({ ...this._def, checks: [...this._def.checks, X] });
  }
  min(X, Q) {
    return this._addCheck({ kind: "min", value: X.getTime(), message: Z.toString(Q) });
  }
  max(X, Q) {
    return this._addCheck({ kind: "max", value: X.getTime(), message: Z.toString(Q) });
  }
  get minDate() {
    let X = null;
    for (let Q of this._def.checks)
      if (Q.kind === "min") {
        if (X === null || Q.value > X)
          X = Q.value;
      }
    return X != null ? new Date(X) : null;
  }
  get maxDate() {
    let X = null;
    for (let Q of this._def.checks)
      if (Q.kind === "max") {
        if (X === null || Q.value < X)
          X = Q.value;
      }
    return X != null ? new Date(X) : null;
  }
}
JX.create = (X) => {
  return new JX({ checks: [], coerce: X?.coerce || false, typeName: j.ZodDate, ...l(X) });
};

class w4 extends d {
  _parse(X) {
    if (this._getType(X) !== I.symbol) {
      let $ = this._getOrReturnCtx(X);
      return b($, { code: A.invalid_type, expected: I.symbol, received: $.parsedType }), g;
    }
    return C0(X.data);
  }
}
w4.create = (X) => {
  return new w4({ typeName: j.ZodSymbol, ...l(X) });
};

class GX extends d {
  _parse(X) {
    if (this._getType(X) !== I.undefined) {
      let $ = this._getOrReturnCtx(X);
      return b($, { code: A.invalid_type, expected: I.undefined, received: $.parsedType }), g;
    }
    return C0(X.data);
  }
}
GX.create = (X) => {
  return new GX({ typeName: j.ZodUndefined, ...l(X) });
};

class HX extends d {
  _parse(X) {
    if (this._getType(X) !== I.null) {
      let $ = this._getOrReturnCtx(X);
      return b($, { code: A.invalid_type, expected: I.null, received: $.parsedType }), g;
    }
    return C0(X.data);
  }
}
HX.create = (X) => {
  return new HX({ typeName: j.ZodNull, ...l(X) });
};

class A4 extends d {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(X) {
    return C0(X.data);
  }
}
A4.create = (X) => {
  return new A4({ typeName: j.ZodAny, ...l(X) });
};

class s1 extends d {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(X) {
    return C0(X.data);
  }
}
s1.create = (X) => {
  return new s1({ typeName: j.ZodUnknown, ...l(X) });
};

class A1 extends d {
  _parse(X) {
    let Q = this._getOrReturnCtx(X);
    return b(Q, { code: A.invalid_type, expected: I.never, received: Q.parsedType }), g;
  }
}
A1.create = (X) => {
  return new A1({ typeName: j.ZodNever, ...l(X) });
};

class M4 extends d {
  _parse(X) {
    if (this._getType(X) !== I.undefined) {
      let $ = this._getOrReturnCtx(X);
      return b($, { code: A.invalid_type, expected: I.void, received: $.parsedType }), g;
    }
    return C0(X.data);
  }
}
M4.create = (X) => {
  return new M4({ typeName: j.ZodVoid, ...l(X) });
};

class W1 extends d {
  _parse(X) {
    let { ctx: Q, status: $ } = this._processInputParams(X), Y = this._def;
    if (Q.parsedType !== I.array)
      return b(Q, { code: A.invalid_type, expected: I.array, received: Q.parsedType }), g;
    if (Y.exactLength !== null) {
      let J = Q.data.length > Y.exactLength.value, G = Q.data.length < Y.exactLength.value;
      if (J || G)
        b(Q, { code: J ? A.too_big : A.too_small, minimum: G ? Y.exactLength.value : undefined, maximum: J ? Y.exactLength.value : undefined, type: "array", inclusive: true, exact: true, message: Y.exactLength.message }), $.dirty();
    }
    if (Y.minLength !== null) {
      if (Q.data.length < Y.minLength.value)
        b(Q, { code: A.too_small, minimum: Y.minLength.value, type: "array", inclusive: true, exact: false, message: Y.minLength.message }), $.dirty();
    }
    if (Y.maxLength !== null) {
      if (Q.data.length > Y.maxLength.value)
        b(Q, { code: A.too_big, maximum: Y.maxLength.value, type: "array", inclusive: true, exact: false, message: Y.maxLength.message }), $.dirty();
    }
    if (Q.common.async)
      return Promise.all([...Q.data].map((J, G) => {
        return Y.type._parseAsync(new r0(Q, J, Q.path, G));
      })).then((J) => {
        return b0.mergeArray($, J);
      });
    let W = [...Q.data].map((J, G) => {
      return Y.type._parseSync(new r0(Q, J, Q.path, G));
    });
    return b0.mergeArray($, W);
  }
  get element() {
    return this._def.type;
  }
  min(X, Q) {
    return new W1({ ...this._def, minLength: { value: X, message: Z.toString(Q) } });
  }
  max(X, Q) {
    return new W1({ ...this._def, maxLength: { value: X, message: Z.toString(Q) } });
  }
  length(X, Q) {
    return new W1({ ...this._def, exactLength: { value: X, message: Z.toString(Q) } });
  }
  nonempty(X) {
    return this.min(1, X);
  }
}
W1.create = (X, Q) => {
  return new W1({ type: X, minLength: null, maxLength: null, exactLength: null, typeName: j.ZodArray, ...l(Q) });
};
function E6(X) {
  if (X instanceof V0) {
    let Q = {};
    for (let $ in X.shape) {
      let Y = X.shape[$];
      Q[$] = J1.create(E6(Y));
    }
    return new V0({ ...X._def, shape: () => Q });
  } else if (X instanceof W1)
    return new W1({ ...X._def, type: E6(X.element) });
  else if (X instanceof J1)
    return J1.create(E6(X.unwrap()));
  else if (X instanceof _1)
    return _1.create(E6(X.unwrap()));
  else if (X instanceof M1)
    return M1.create(X.items.map((Q) => E6(Q)));
  else
    return X;
}

class V0 extends d {
  constructor() {
    super(...arguments);
    this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    let X = this._def.shape(), Q = n.objectKeys(X);
    return this._cached = { shape: X, keys: Q }, this._cached;
  }
  _parse(X) {
    if (this._getType(X) !== I.object) {
      let B = this._getOrReturnCtx(X);
      return b(B, { code: A.invalid_type, expected: I.object, received: B.parsedType }), g;
    }
    let { status: $, ctx: Y } = this._processInputParams(X), { shape: W, keys: J } = this._getCached(), G = [];
    if (!(this._def.catchall instanceof A1 && this._def.unknownKeys === "strip")) {
      for (let B in Y.data)
        if (!J.includes(B))
          G.push(B);
    }
    let H = [];
    for (let B of J) {
      let z2 = W[B], K = Y.data[B];
      H.push({ key: { status: "valid", value: B }, value: z2._parse(new r0(Y, K, Y.path, B)), alwaysSet: B in Y.data });
    }
    if (this._def.catchall instanceof A1) {
      let B = this._def.unknownKeys;
      if (B === "passthrough")
        for (let z2 of G)
          H.push({ key: { status: "valid", value: z2 }, value: { status: "valid", value: Y.data[z2] } });
      else if (B === "strict") {
        if (G.length > 0)
          b(Y, { code: A.unrecognized_keys, keys: G }), $.dirty();
      } else if (B === "strip")
        ;
      else
        throw Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      let B = this._def.catchall;
      for (let z2 of G) {
        let K = Y.data[z2];
        H.push({ key: { status: "valid", value: z2 }, value: B._parse(new r0(Y, K, Y.path, z2)), alwaysSet: z2 in Y.data });
      }
    }
    if (Y.common.async)
      return Promise.resolve().then(async () => {
        let B = [];
        for (let z2 of H) {
          let K = await z2.key, V = await z2.value;
          B.push({ key: K, value: V, alwaysSet: z2.alwaysSet });
        }
        return B;
      }).then((B) => {
        return b0.mergeObjectSync($, B);
      });
    else
      return b0.mergeObjectSync($, H);
  }
  get shape() {
    return this._def.shape();
  }
  strict(X) {
    return Z.errToObj, new V0({ ...this._def, unknownKeys: "strict", ...X !== undefined ? { errorMap: (Q, $) => {
      let Y = this._def.errorMap?.(Q, $).message ?? $.defaultError;
      if (Q.code === "unrecognized_keys")
        return { message: Z.errToObj(X).message ?? Y };
      return { message: Y };
    } } : {} });
  }
  strip() {
    return new V0({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new V0({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(X) {
    return new V0({ ...this._def, shape: () => ({ ...this._def.shape(), ...X }) });
  }
  merge(X) {
    return new V0({ unknownKeys: X._def.unknownKeys, catchall: X._def.catchall, shape: () => ({ ...this._def.shape(), ...X._def.shape() }), typeName: j.ZodObject });
  }
  setKey(X, Q) {
    return this.augment({ [X]: Q });
  }
  catchall(X) {
    return new V0({ ...this._def, catchall: X });
  }
  pick(X) {
    let Q = {};
    for (let $ of n.objectKeys(X))
      if (X[$] && this.shape[$])
        Q[$] = this.shape[$];
    return new V0({ ...this._def, shape: () => Q });
  }
  omit(X) {
    let Q = {};
    for (let $ of n.objectKeys(this.shape))
      if (!X[$])
        Q[$] = this.shape[$];
    return new V0({ ...this._def, shape: () => Q });
  }
  deepPartial() {
    return E6(this);
  }
  partial(X) {
    let Q = {};
    for (let $ of n.objectKeys(this.shape)) {
      let Y = this.shape[$];
      if (X && !X[$])
        Q[$] = Y;
      else
        Q[$] = Y.optional();
    }
    return new V0({ ...this._def, shape: () => Q });
  }
  required(X) {
    let Q = {};
    for (let $ of n.objectKeys(this.shape))
      if (X && !X[$])
        Q[$] = this.shape[$];
      else {
        let W = this.shape[$];
        while (W instanceof J1)
          W = W._def.innerType;
        Q[$] = W;
      }
    return new V0({ ...this._def, shape: () => Q });
  }
  keyof() {
    return OW(n.objectKeys(this.shape));
  }
}
V0.create = (X, Q) => {
  return new V0({ shape: () => X, unknownKeys: "strip", catchall: A1.create(), typeName: j.ZodObject, ...l(Q) });
};
V0.strictCreate = (X, Q) => {
  return new V0({ shape: () => X, unknownKeys: "strict", catchall: A1.create(), typeName: j.ZodObject, ...l(Q) });
};
V0.lazycreate = (X, Q) => {
  return new V0({ shape: X, unknownKeys: "strip", catchall: A1.create(), typeName: j.ZodObject, ...l(Q) });
};

class BX extends d {
  _parse(X) {
    let { ctx: Q } = this._processInputParams(X), $ = this._def.options;
    function Y(W) {
      for (let G of W)
        if (G.result.status === "valid")
          return G.result;
      for (let G of W)
        if (G.result.status === "dirty")
          return Q.common.issues.push(...G.ctx.common.issues), G.result;
      let J = W.map((G) => new h0(G.ctx.common.issues));
      return b(Q, { code: A.invalid_union, unionErrors: J }), g;
    }
    if (Q.common.async)
      return Promise.all($.map(async (W) => {
        let J = { ...Q, common: { ...Q.common, issues: [] }, parent: null };
        return { result: await W._parseAsync({ data: Q.data, path: Q.path, parent: J }), ctx: J };
      })).then(Y);
    else {
      let W = undefined, J = [];
      for (let H of $) {
        let B = { ...Q, common: { ...Q.common, issues: [] }, parent: null }, z2 = H._parseSync({ data: Q.data, path: Q.path, parent: B });
        if (z2.status === "valid")
          return z2;
        else if (z2.status === "dirty" && !W)
          W = { result: z2, ctx: B };
        if (B.common.issues.length)
          J.push(B.common.issues);
      }
      if (W)
        return Q.common.issues.push(...W.ctx.common.issues), W.result;
      let G = J.map((H) => new h0(H));
      return b(Q, { code: A.invalid_union, unionErrors: G }), g;
    }
  }
  get options() {
    return this._def.options;
  }
}
BX.create = (X, Q) => {
  return new BX({ options: X, typeName: j.ZodUnion, ...l(Q) });
};
var D1 = (X) => {
  if (X instanceof KX)
    return D1(X.schema);
  else if (X instanceof G1)
    return D1(X.innerType());
  else if (X instanceof UX)
    return [X.value];
  else if (X instanceof e1)
    return X.options;
  else if (X instanceof VX)
    return n.objectValues(X.enum);
  else if (X instanceof LX)
    return D1(X._def.innerType);
  else if (X instanceof GX)
    return [undefined];
  else if (X instanceof HX)
    return [null];
  else if (X instanceof J1)
    return [undefined, ...D1(X.unwrap())];
  else if (X instanceof _1)
    return [null, ...D1(X.unwrap())];
  else if (X instanceof w9)
    return D1(X.unwrap());
  else if (X instanceof FX)
    return D1(X.unwrap());
  else if (X instanceof qX)
    return D1(X._def.innerType);
  else
    return [];
};

class D9 extends d {
  _parse(X) {
    let { ctx: Q } = this._processInputParams(X);
    if (Q.parsedType !== I.object)
      return b(Q, { code: A.invalid_type, expected: I.object, received: Q.parsedType }), g;
    let $ = this.discriminator, Y = Q.data[$], W = this.optionsMap.get(Y);
    if (!W)
      return b(Q, { code: A.invalid_union_discriminator, options: Array.from(this.optionsMap.keys()), path: [$] }), g;
    if (Q.common.async)
      return W._parseAsync({ data: Q.data, path: Q.path, parent: Q });
    else
      return W._parseSync({ data: Q.data, path: Q.path, parent: Q });
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(X, Q, $) {
    let Y = new Map;
    for (let W of Q) {
      let J = D1(W.shape[X]);
      if (!J.length)
        throw Error(`A discriminator value for key \`${X}\` could not be extracted from all schema options`);
      for (let G of J) {
        if (Y.has(G))
          throw Error(`Discriminator property ${String(X)} has duplicate value ${String(G)}`);
        Y.set(G, W);
      }
    }
    return new D9({ typeName: j.ZodDiscriminatedUnion, discriminator: X, options: Q, optionsMap: Y, ...l($) });
  }
}
function O9(X, Q) {
  let $ = O1(X), Y = O1(Q);
  if (X === Q)
    return { valid: true, data: X };
  else if ($ === I.object && Y === I.object) {
    let W = n.objectKeys(Q), J = n.objectKeys(X).filter((H) => W.indexOf(H) !== -1), G = { ...X, ...Q };
    for (let H of J) {
      let B = O9(X[H], Q[H]);
      if (!B.valid)
        return { valid: false };
      G[H] = B.data;
    }
    return { valid: true, data: G };
  } else if ($ === I.array && Y === I.array) {
    if (X.length !== Q.length)
      return { valid: false };
    let W = [];
    for (let J = 0;J < X.length; J++) {
      let G = X[J], H = Q[J], B = O9(G, H);
      if (!B.valid)
        return { valid: false };
      W.push(B.data);
    }
    return { valid: true, data: W };
  } else if ($ === I.date && Y === I.date && +X === +Q)
    return { valid: true, data: X };
  else
    return { valid: false };
}

class zX extends d {
  _parse(X) {
    let { status: Q, ctx: $ } = this._processInputParams(X), Y = (W, J) => {
      if (q9(W) || q9(J))
        return g;
      let G = O9(W.value, J.value);
      if (!G.valid)
        return b($, { code: A.invalid_intersection_types }), g;
      if (F9(W) || F9(J))
        Q.dirty();
      return { status: Q.value, value: G.data };
    };
    if ($.common.async)
      return Promise.all([this._def.left._parseAsync({ data: $.data, path: $.path, parent: $ }), this._def.right._parseAsync({ data: $.data, path: $.path, parent: $ })]).then(([W, J]) => Y(W, J));
    else
      return Y(this._def.left._parseSync({ data: $.data, path: $.path, parent: $ }), this._def.right._parseSync({ data: $.data, path: $.path, parent: $ }));
  }
}
zX.create = (X, Q, $) => {
  return new zX({ left: X, right: Q, typeName: j.ZodIntersection, ...l($) });
};

class M1 extends d {
  _parse(X) {
    let { status: Q, ctx: $ } = this._processInputParams(X);
    if ($.parsedType !== I.array)
      return b($, { code: A.invalid_type, expected: I.array, received: $.parsedType }), g;
    if ($.data.length < this._def.items.length)
      return b($, { code: A.too_small, minimum: this._def.items.length, inclusive: true, exact: false, type: "array" }), g;
    if (!this._def.rest && $.data.length > this._def.items.length)
      b($, { code: A.too_big, maximum: this._def.items.length, inclusive: true, exact: false, type: "array" }), Q.dirty();
    let W = [...$.data].map((J, G) => {
      let H = this._def.items[G] || this._def.rest;
      if (!H)
        return null;
      return H._parse(new r0($, J, $.path, G));
    }).filter((J) => !!J);
    if ($.common.async)
      return Promise.all(W).then((J) => {
        return b0.mergeArray(Q, J);
      });
    else
      return b0.mergeArray(Q, W);
  }
  get items() {
    return this._def.items;
  }
  rest(X) {
    return new M1({ ...this._def, rest: X });
  }
}
M1.create = (X, Q) => {
  if (!Array.isArray(X))
    throw Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new M1({ items: X, typeName: j.ZodTuple, rest: null, ...l(Q) });
};

class j4 extends d {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(X) {
    let { status: Q, ctx: $ } = this._processInputParams(X);
    if ($.parsedType !== I.object)
      return b($, { code: A.invalid_type, expected: I.object, received: $.parsedType }), g;
    let Y = [], W = this._def.keyType, J = this._def.valueType;
    for (let G in $.data)
      Y.push({ key: W._parse(new r0($, G, $.path, G)), value: J._parse(new r0($, $.data[G], $.path, G)), alwaysSet: G in $.data });
    if ($.common.async)
      return b0.mergeObjectAsync(Q, Y);
    else
      return b0.mergeObjectSync(Q, Y);
  }
  get element() {
    return this._def.valueType;
  }
  static create(X, Q, $) {
    if (Q instanceof d)
      return new j4({ keyType: X, valueType: Q, typeName: j.ZodRecord, ...l($) });
    return new j4({ keyType: w1.create(), valueType: X, typeName: j.ZodRecord, ...l(Q) });
  }
}

class R4 extends d {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(X) {
    let { status: Q, ctx: $ } = this._processInputParams(X);
    if ($.parsedType !== I.map)
      return b($, { code: A.invalid_type, expected: I.map, received: $.parsedType }), g;
    let Y = this._def.keyType, W = this._def.valueType, J = [...$.data.entries()].map(([G, H], B) => {
      return { key: Y._parse(new r0($, G, $.path, [B, "key"])), value: W._parse(new r0($, H, $.path, [B, "value"])) };
    });
    if ($.common.async) {
      let G = new Map;
      return Promise.resolve().then(async () => {
        for (let H of J) {
          let B = await H.key, z2 = await H.value;
          if (B.status === "aborted" || z2.status === "aborted")
            return g;
          if (B.status === "dirty" || z2.status === "dirty")
            Q.dirty();
          G.set(B.value, z2.value);
        }
        return { status: Q.value, value: G };
      });
    } else {
      let G = new Map;
      for (let H of J) {
        let { key: B, value: z2 } = H;
        if (B.status === "aborted" || z2.status === "aborted")
          return g;
        if (B.status === "dirty" || z2.status === "dirty")
          Q.dirty();
        G.set(B.value, z2.value);
      }
      return { status: Q.value, value: G };
    }
  }
}
R4.create = (X, Q, $) => {
  return new R4({ valueType: Q, keyType: X, typeName: j.ZodMap, ...l($) });
};

class S6 extends d {
  _parse(X) {
    let { status: Q, ctx: $ } = this._processInputParams(X);
    if ($.parsedType !== I.set)
      return b($, { code: A.invalid_type, expected: I.set, received: $.parsedType }), g;
    let Y = this._def;
    if (Y.minSize !== null) {
      if ($.data.size < Y.minSize.value)
        b($, { code: A.too_small, minimum: Y.minSize.value, type: "set", inclusive: true, exact: false, message: Y.minSize.message }), Q.dirty();
    }
    if (Y.maxSize !== null) {
      if ($.data.size > Y.maxSize.value)
        b($, { code: A.too_big, maximum: Y.maxSize.value, type: "set", inclusive: true, exact: false, message: Y.maxSize.message }), Q.dirty();
    }
    let W = this._def.valueType;
    function J(H) {
      let B = new Set;
      for (let z2 of H) {
        if (z2.status === "aborted")
          return g;
        if (z2.status === "dirty")
          Q.dirty();
        B.add(z2.value);
      }
      return { status: Q.value, value: B };
    }
    let G = [...$.data.values()].map((H, B) => W._parse(new r0($, H, $.path, B)));
    if ($.common.async)
      return Promise.all(G).then((H) => J(H));
    else
      return J(G);
  }
  min(X, Q) {
    return new S6({ ...this._def, minSize: { value: X, message: Z.toString(Q) } });
  }
  max(X, Q) {
    return new S6({ ...this._def, maxSize: { value: X, message: Z.toString(Q) } });
  }
  size(X, Q) {
    return this.min(X, Q).max(X, Q);
  }
  nonempty(X) {
    return this.min(1, X);
  }
}
S6.create = (X, Q) => {
  return new S6({ valueType: X, minSize: null, maxSize: null, typeName: j.ZodSet, ...l(Q) });
};

class WX extends d {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(X) {
    let { ctx: Q } = this._processInputParams(X);
    if (Q.parsedType !== I.function)
      return b(Q, { code: A.invalid_type, expected: I.function, received: Q.parsedType }), g;
    function $(G, H) {
      return O4({ data: G, path: Q.path, errorMaps: [Q.common.contextualErrorMap, Q.schemaErrorMap, $X(), T1].filter((B) => !!B), issueData: { code: A.invalid_arguments, argumentsError: H } });
    }
    function Y(G, H) {
      return O4({ data: G, path: Q.path, errorMaps: [Q.common.contextualErrorMap, Q.schemaErrorMap, $X(), T1].filter((B) => !!B), issueData: { code: A.invalid_return_type, returnTypeError: H } });
    }
    let W = { errorMap: Q.common.contextualErrorMap }, J = Q.data;
    if (this._def.returns instanceof Z6) {
      let G = this;
      return C0(async function(...H) {
        let B = new h0([]), z2 = await G._def.args.parseAsync(H, W).catch((L) => {
          throw B.addIssue($(H, L)), B;
        }), K = await Reflect.apply(J, this, z2);
        return await G._def.returns._def.type.parseAsync(K, W).catch((L) => {
          throw B.addIssue(Y(K, L)), B;
        });
      });
    } else {
      let G = this;
      return C0(function(...H) {
        let B = G._def.args.safeParse(H, W);
        if (!B.success)
          throw new h0([$(H, B.error)]);
        let z2 = Reflect.apply(J, this, B.data), K = G._def.returns.safeParse(z2, W);
        if (!K.success)
          throw new h0([Y(z2, K.error)]);
        return K.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...X) {
    return new WX({ ...this._def, args: M1.create(X).rest(s1.create()) });
  }
  returns(X) {
    return new WX({ ...this._def, returns: X });
  }
  implement(X) {
    return this.parse(X);
  }
  strictImplement(X) {
    return this.parse(X);
  }
  static create(X, Q, $) {
    return new WX({ args: X ? X : M1.create([]).rest(s1.create()), returns: Q || s1.create(), typeName: j.ZodFunction, ...l($) });
  }
}

class KX extends d {
  get schema() {
    return this._def.getter();
  }
  _parse(X) {
    let { ctx: Q } = this._processInputParams(X);
    return this._def.getter()._parse({ data: Q.data, path: Q.path, parent: Q });
  }
}
KX.create = (X, Q) => {
  return new KX({ getter: X, typeName: j.ZodLazy, ...l(Q) });
};

class UX extends d {
  _parse(X) {
    if (X.data !== this._def.value) {
      let Q = this._getOrReturnCtx(X);
      return b(Q, { received: Q.data, code: A.invalid_literal, expected: this._def.value }), g;
    }
    return { status: "valid", value: X.data };
  }
  get value() {
    return this._def.value;
  }
}
UX.create = (X, Q) => {
  return new UX({ value: X, typeName: j.ZodLiteral, ...l(Q) });
};
function OW(X, Q) {
  return new e1({ values: X, typeName: j.ZodEnum, ...l(Q) });
}

class e1 extends d {
  _parse(X) {
    if (typeof X.data !== "string") {
      let Q = this._getOrReturnCtx(X), $ = this._def.values;
      return b(Q, { expected: n.joinValues($), received: Q.parsedType, code: A.invalid_type }), g;
    }
    if (!this._cache)
      this._cache = new Set(this._def.values);
    if (!this._cache.has(X.data)) {
      let Q = this._getOrReturnCtx(X), $ = this._def.values;
      return b(Q, { received: Q.data, code: A.invalid_enum_value, options: $ }), g;
    }
    return C0(X.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    let X = {};
    for (let Q of this._def.values)
      X[Q] = Q;
    return X;
  }
  get Values() {
    let X = {};
    for (let Q of this._def.values)
      X[Q] = Q;
    return X;
  }
  get Enum() {
    let X = {};
    for (let Q of this._def.values)
      X[Q] = Q;
    return X;
  }
  extract(X, Q = this._def) {
    return e1.create(X, { ...this._def, ...Q });
  }
  exclude(X, Q = this._def) {
    return e1.create(this.options.filter(($) => !X.includes($)), { ...this._def, ...Q });
  }
}
e1.create = OW;

class VX extends d {
  _parse(X) {
    let Q = n.getValidEnumValues(this._def.values), $ = this._getOrReturnCtx(X);
    if ($.parsedType !== I.string && $.parsedType !== I.number) {
      let Y = n.objectValues(Q);
      return b($, { expected: n.joinValues(Y), received: $.parsedType, code: A.invalid_type }), g;
    }
    if (!this._cache)
      this._cache = new Set(n.getValidEnumValues(this._def.values));
    if (!this._cache.has(X.data)) {
      let Y = n.objectValues(Q);
      return b($, { received: $.data, code: A.invalid_enum_value, options: Y }), g;
    }
    return C0(X.data);
  }
  get enum() {
    return this._def.values;
  }
}
VX.create = (X, Q) => {
  return new VX({ values: X, typeName: j.ZodNativeEnum, ...l(Q) });
};

class Z6 extends d {
  unwrap() {
    return this._def.type;
  }
  _parse(X) {
    let { ctx: Q } = this._processInputParams(X);
    if (Q.parsedType !== I.promise && Q.common.async === false)
      return b(Q, { code: A.invalid_type, expected: I.promise, received: Q.parsedType }), g;
    let $ = Q.parsedType === I.promise ? Q.data : Promise.resolve(Q.data);
    return C0($.then((Y) => {
      return this._def.type.parseAsync(Y, { path: Q.path, errorMap: Q.common.contextualErrorMap });
    }));
  }
}
Z6.create = (X, Q) => {
  return new Z6({ type: X, typeName: j.ZodPromise, ...l(Q) });
};

class G1 extends d {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === j.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(X) {
    let { status: Q, ctx: $ } = this._processInputParams(X), Y = this._def.effect || null, W = { addIssue: (J) => {
      if (b($, J), J.fatal)
        Q.abort();
      else
        Q.dirty();
    }, get path() {
      return $.path;
    } };
    if (W.addIssue = W.addIssue.bind(W), Y.type === "preprocess") {
      let J = Y.transform($.data, W);
      if ($.common.async)
        return Promise.resolve(J).then(async (G) => {
          if (Q.value === "aborted")
            return g;
          let H = await this._def.schema._parseAsync({ data: G, path: $.path, parent: $ });
          if (H.status === "aborted")
            return g;
          if (H.status === "dirty")
            return I6(H.value);
          if (Q.value === "dirty")
            return I6(H.value);
          return H;
        });
      else {
        if (Q.value === "aborted")
          return g;
        let G = this._def.schema._parseSync({ data: J, path: $.path, parent: $ });
        if (G.status === "aborted")
          return g;
        if (G.status === "dirty")
          return I6(G.value);
        if (Q.value === "dirty")
          return I6(G.value);
        return G;
      }
    }
    if (Y.type === "refinement") {
      let J = (G) => {
        let H = Y.refinement(G, W);
        if ($.common.async)
          return Promise.resolve(H);
        if (H instanceof Promise)
          throw Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return G;
      };
      if ($.common.async === false) {
        let G = this._def.schema._parseSync({ data: $.data, path: $.path, parent: $ });
        if (G.status === "aborted")
          return g;
        if (G.status === "dirty")
          Q.dirty();
        return J(G.value), { status: Q.value, value: G.value };
      } else
        return this._def.schema._parseAsync({ data: $.data, path: $.path, parent: $ }).then((G) => {
          if (G.status === "aborted")
            return g;
          if (G.status === "dirty")
            Q.dirty();
          return J(G.value).then(() => {
            return { status: Q.value, value: G.value };
          });
        });
    }
    if (Y.type === "transform")
      if ($.common.async === false) {
        let J = this._def.schema._parseSync({ data: $.data, path: $.path, parent: $ });
        if (!a1(J))
          return g;
        let G = Y.transform(J.value, W);
        if (G instanceof Promise)
          throw Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: Q.value, value: G };
      } else
        return this._def.schema._parseAsync({ data: $.data, path: $.path, parent: $ }).then((J) => {
          if (!a1(J))
            return g;
          return Promise.resolve(Y.transform(J.value, W)).then((G) => ({ status: Q.value, value: G }));
        });
    n.assertNever(Y);
  }
}
G1.create = (X, Q, $) => {
  return new G1({ schema: X, typeName: j.ZodEffects, effect: Q, ...l($) });
};
G1.createWithPreprocess = (X, Q, $) => {
  return new G1({ schema: Q, effect: { type: "preprocess", transform: X }, typeName: j.ZodEffects, ...l($) });
};

class J1 extends d {
  _parse(X) {
    if (this._getType(X) === I.undefined)
      return C0(undefined);
    return this._def.innerType._parse(X);
  }
  unwrap() {
    return this._def.innerType;
  }
}
J1.create = (X, Q) => {
  return new J1({ innerType: X, typeName: j.ZodOptional, ...l(Q) });
};

class _1 extends d {
  _parse(X) {
    if (this._getType(X) === I.null)
      return C0(null);
    return this._def.innerType._parse(X);
  }
  unwrap() {
    return this._def.innerType;
  }
}
_1.create = (X, Q) => {
  return new _1({ innerType: X, typeName: j.ZodNullable, ...l(Q) });
};

class LX extends d {
  _parse(X) {
    let { ctx: Q } = this._processInputParams(X), $ = Q.data;
    if (Q.parsedType === I.undefined)
      $ = this._def.defaultValue();
    return this._def.innerType._parse({ data: $, path: Q.path, parent: Q });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
LX.create = (X, Q) => {
  return new LX({ innerType: X, typeName: j.ZodDefault, defaultValue: typeof Q.default === "function" ? Q.default : () => Q.default, ...l(Q) });
};

class qX extends d {
  _parse(X) {
    let { ctx: Q } = this._processInputParams(X), $ = { ...Q, common: { ...Q.common, issues: [] } }, Y = this._def.innerType._parse({ data: $.data, path: $.path, parent: { ...$ } });
    if (YX(Y))
      return Y.then((W) => {
        return { status: "valid", value: W.status === "valid" ? W.value : this._def.catchValue({ get error() {
          return new h0($.common.issues);
        }, input: $.data }) };
      });
    else
      return { status: "valid", value: Y.status === "valid" ? Y.value : this._def.catchValue({ get error() {
        return new h0($.common.issues);
      }, input: $.data }) };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
qX.create = (X, Q) => {
  return new qX({ innerType: X, typeName: j.ZodCatch, catchValue: typeof Q.catch === "function" ? Q.catch : () => Q.catch, ...l(Q) });
};

class I4 extends d {
  _parse(X) {
    if (this._getType(X) !== I.nan) {
      let $ = this._getOrReturnCtx(X);
      return b($, { code: A.invalid_type, expected: I.nan, received: $.parsedType }), g;
    }
    return { status: "valid", value: X.data };
  }
}
I4.create = (X) => {
  return new I4({ typeName: j.ZodNaN, ...l(X) });
};
var I2 = Symbol("zod_brand");

class w9 extends d {
  _parse(X) {
    let { ctx: Q } = this._processInputParams(X), $ = Q.data;
    return this._def.type._parse({ data: $, path: Q.path, parent: Q });
  }
  unwrap() {
    return this._def.type;
  }
}

class E4 extends d {
  _parse(X) {
    let { status: Q, ctx: $ } = this._processInputParams(X);
    if ($.common.async)
      return (async () => {
        let W = await this._def.in._parseAsync({ data: $.data, path: $.path, parent: $ });
        if (W.status === "aborted")
          return g;
        if (W.status === "dirty")
          return Q.dirty(), I6(W.value);
        else
          return this._def.out._parseAsync({ data: W.value, path: $.path, parent: $ });
      })();
    else {
      let Y = this._def.in._parseSync({ data: $.data, path: $.path, parent: $ });
      if (Y.status === "aborted")
        return g;
      if (Y.status === "dirty")
        return Q.dirty(), { status: "dirty", value: Y.value };
      else
        return this._def.out._parseSync({ data: Y.value, path: $.path, parent: $ });
    }
  }
  static create(X, Q) {
    return new E4({ in: X, out: Q, typeName: j.ZodPipeline });
  }
}

class FX extends d {
  _parse(X) {
    let Q = this._def.innerType._parse(X), $ = (Y) => {
      if (a1(Y))
        Y.value = Object.freeze(Y.value);
      return Y;
    };
    return YX(Q) ? Q.then((Y) => $(Y)) : $(Q);
  }
  unwrap() {
    return this._def.innerType;
  }
}
FX.create = (X, Q) => {
  return new FX({ innerType: X, typeName: j.ZodReadonly, ...l(Q) });
};
var E2 = { object: V0.lazycreate };
var j;
(function(X) {
  X.ZodString = "ZodString", X.ZodNumber = "ZodNumber", X.ZodNaN = "ZodNaN", X.ZodBigInt = "ZodBigInt", X.ZodBoolean = "ZodBoolean", X.ZodDate = "ZodDate", X.ZodSymbol = "ZodSymbol", X.ZodUndefined = "ZodUndefined", X.ZodNull = "ZodNull", X.ZodAny = "ZodAny", X.ZodUnknown = "ZodUnknown", X.ZodNever = "ZodNever", X.ZodVoid = "ZodVoid", X.ZodArray = "ZodArray", X.ZodObject = "ZodObject", X.ZodUnion = "ZodUnion", X.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", X.ZodIntersection = "ZodIntersection", X.ZodTuple = "ZodTuple", X.ZodRecord = "ZodRecord", X.ZodMap = "ZodMap", X.ZodSet = "ZodSet", X.ZodFunction = "ZodFunction", X.ZodLazy = "ZodLazy", X.ZodLiteral = "ZodLiteral", X.ZodEnum = "ZodEnum", X.ZodEffects = "ZodEffects", X.ZodNativeEnum = "ZodNativeEnum", X.ZodOptional = "ZodOptional", X.ZodNullable = "ZodNullable", X.ZodDefault = "ZodDefault", X.ZodCatch = "ZodCatch", X.ZodPromise = "ZodPromise", X.ZodBranded = "ZodBranded", X.ZodPipeline = "ZodPipeline", X.ZodReadonly = "ZodReadonly";
})(j || (j = {}));
var b2 = w1.create;
var P2 = b6.create;
var S2 = I4.create;
var Z2 = P6.create;
var C2 = D4.create;
var k2 = JX.create;
var v2 = w4.create;
var T2 = GX.create;
var _2 = HX.create;
var x2 = A4.create;
var y2 = s1.create;
var g2 = A1.create;
var f2 = M4.create;
var h2 = W1.create;
var DW = V0.create;
var u2 = V0.strictCreate;
var l2 = BX.create;
var m2 = D9.create;
var c2 = zX.create;
var p2 = M1.create;
var d2 = j4.create;
var i2 = R4.create;
var n2 = S6.create;
var r2 = WX.create;
var o2 = KX.create;
var t2 = UX.create;
var a2 = e1.create;
var s2 = VX.create;
var e2 = Z6.create;
var XS = G1.create;
var QS = J1.create;
var $S = _1.create;
var YS = G1.createWithPreprocess;
var WS = E4.create;
var vV = Object.freeze({ status: "aborted" });
function O(X, Q, $) {
  function Y(H, B) {
    var z2;
    Object.defineProperty(H, "_zod", { value: H._zod ?? {}, enumerable: false }), (z2 = H._zod).traits ?? (z2.traits = new Set), H._zod.traits.add(X), Q(H, B);
    for (let K in G.prototype)
      if (!(K in H))
        Object.defineProperty(H, K, { value: G.prototype[K].bind(H) });
    H._zod.constr = G, H._zod.def = B;
  }
  let W = $?.Parent ?? Object;

  class J extends W {
  }
  Object.defineProperty(J, "name", { value: X });
  function G(H) {
    var B;
    let z2 = $?.Parent ? new J : this;
    Y(z2, H), (B = z2._zod).deferred ?? (B.deferred = []);
    for (let K of z2._zod.deferred)
      K();
    return z2;
  }
  return Object.defineProperty(G, "init", { value: Y }), Object.defineProperty(G, Symbol.hasInstance, { value: (H) => {
    if ($?.Parent && H instanceof $.Parent)
      return true;
    return H?._zod?.traits?.has(X);
  } }), Object.defineProperty(G, "name", { value: X }), G;
}
var TV = Symbol("zod_brand");

class x1 extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
var b4 = {};
function u0(X) {
  if (X)
    Object.assign(b4, X);
  return b4;
}
var i = {};
V7(i, { unwrapMessage: () => NX, stringifyPrimitive: () => Z4, required: () => tV, randomString: () => lV, propertyKeyTypes: () => E9, promiseAllObject: () => uV, primitiveTypes: () => wW, prefixIssues: () => H1, pick: () => dV, partial: () => oV, optionalKeys: () => b9, omit: () => iV, numKeys: () => mV, nullish: () => wX, normalizeParams: () => y, merge: () => rV, jsonStringifyReplacer: () => M9, joinValues: () => P4, issue: () => S9, isPlainObject: () => k6, isObject: () => C6, getSizableOrigin: () => MW, getParsedType: () => cV, getLengthableOrigin: () => MX, getEnumValues: () => OX, getElementAtPath: () => hV, floatSafeRemainder: () => j9, finalizeIssue: () => o0, extend: () => nV, escapeRegex: () => y1, esc: () => X6, defineLazy: () => Y0, createTransparentProxy: () => pV, clone: () => l0, cleanRegex: () => AX, cleanEnum: () => aV, captureStackTrace: () => S4, cached: () => DX, assignProp: () => R9, assertNotEqual: () => xV, assertNever: () => gV, assertIs: () => yV, assertEqual: () => _V, assert: () => fV, allowsEval: () => I9, aborted: () => Q6, NUMBER_FORMAT_RANGES: () => P9, Class: () => jW, BIGINT_FORMAT_RANGES: () => AW });
function _V(X) {
  return X;
}
function xV(X) {
  return X;
}
function yV(X) {}
function gV(X) {
  throw Error();
}
function fV(X) {}
function OX(X) {
  let Q = Object.values(X).filter((Y) => typeof Y === "number");
  return Object.entries(X).filter(([Y, W]) => Q.indexOf(+Y) === -1).map(([Y, W]) => W);
}
function P4(X, Q = "|") {
  return X.map(($) => Z4($)).join(Q);
}
function M9(X, Q) {
  if (typeof Q === "bigint")
    return Q.toString();
  return Q;
}
function DX(X) {
  return { get value() {
    {
      let $ = X();
      return Object.defineProperty(this, "value", { value: $ }), $;
    }
    throw Error("cached value already set");
  } };
}
function wX(X) {
  return X === null || X === undefined;
}
function AX(X) {
  let Q = X.startsWith("^") ? 1 : 0, $ = X.endsWith("$") ? X.length - 1 : X.length;
  return X.slice(Q, $);
}
function j9(X, Q) {
  let $ = (X.toString().split(".")[1] || "").length, Y = (Q.toString().split(".")[1] || "").length, W = $ > Y ? $ : Y, J = Number.parseInt(X.toFixed(W).replace(".", "")), G = Number.parseInt(Q.toFixed(W).replace(".", ""));
  return J % G / 10 ** W;
}
function Y0(X, Q, $) {
  Object.defineProperty(X, Q, { get() {
    {
      let W = $();
      return X[Q] = W, W;
    }
    throw Error("cached value already set");
  }, set(W) {
    Object.defineProperty(X, Q, { value: W });
  }, configurable: true });
}
function R9(X, Q, $) {
  Object.defineProperty(X, Q, { value: $, writable: true, enumerable: true, configurable: true });
}
function hV(X, Q) {
  if (!Q)
    return X;
  return Q.reduce(($, Y) => $?.[Y], X);
}
function uV(X) {
  let Q = Object.keys(X), $ = Q.map((Y) => X[Y]);
  return Promise.all($).then((Y) => {
    let W = {};
    for (let J = 0;J < Q.length; J++)
      W[Q[J]] = Y[J];
    return W;
  });
}
function lV(X = 10) {
  let $ = "";
  for (let Y = 0;Y < X; Y++)
    $ += "abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random() * 26)];
  return $;
}
function X6(X) {
  return JSON.stringify(X);
}
var S4 = Error.captureStackTrace ? Error.captureStackTrace : (...X) => {};
function C6(X) {
  return typeof X === "object" && X !== null && !Array.isArray(X);
}
var I9 = DX(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return false;
  try {
    return new Function(""), true;
  } catch (X) {
    return false;
  }
});
function k6(X) {
  if (C6(X) === false)
    return false;
  let Q = X.constructor;
  if (Q === undefined)
    return true;
  let $ = Q.prototype;
  if (C6($) === false)
    return false;
  if (Object.prototype.hasOwnProperty.call($, "isPrototypeOf") === false)
    return false;
  return true;
}
function mV(X) {
  let Q = 0;
  for (let $ in X)
    if (Object.prototype.hasOwnProperty.call(X, $))
      Q++;
  return Q;
}
var cV = (X) => {
  let Q = typeof X;
  switch (Q) {
    case "undefined":
      return "undefined";
    case "string":
      return "string";
    case "number":
      return Number.isNaN(X) ? "nan" : "number";
    case "boolean":
      return "boolean";
    case "function":
      return "function";
    case "bigint":
      return "bigint";
    case "symbol":
      return "symbol";
    case "object":
      if (Array.isArray(X))
        return "array";
      if (X === null)
        return "null";
      if (X.then && typeof X.then === "function" && X.catch && typeof X.catch === "function")
        return "promise";
      if (typeof Map < "u" && X instanceof Map)
        return "map";
      if (typeof Set < "u" && X instanceof Set)
        return "set";
      if (typeof Date < "u" && X instanceof Date)
        return "date";
      if (typeof File < "u" && X instanceof File)
        return "file";
      return "object";
    default:
      throw Error(`Unknown data type: ${Q}`);
  }
};
var E9 = new Set(["string", "number", "symbol"]);
var wW = new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
function y1(X) {
  return X.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function l0(X, Q, $) {
  let Y = new X._zod.constr(Q ?? X._zod.def);
  if (!Q || $?.parent)
    Y._zod.parent = X;
  return Y;
}
function y(X) {
  let Q = X;
  if (!Q)
    return {};
  if (typeof Q === "string")
    return { error: () => Q };
  if (Q?.message !== undefined) {
    if (Q?.error !== undefined)
      throw Error("Cannot specify both `message` and `error` params");
    Q.error = Q.message;
  }
  if (delete Q.message, typeof Q.error === "string")
    return { ...Q, error: () => Q.error };
  return Q;
}
function pV(X) {
  let Q;
  return new Proxy({}, { get($, Y, W) {
    return Q ?? (Q = X()), Reflect.get(Q, Y, W);
  }, set($, Y, W, J) {
    return Q ?? (Q = X()), Reflect.set(Q, Y, W, J);
  }, has($, Y) {
    return Q ?? (Q = X()), Reflect.has(Q, Y);
  }, deleteProperty($, Y) {
    return Q ?? (Q = X()), Reflect.deleteProperty(Q, Y);
  }, ownKeys($) {
    return Q ?? (Q = X()), Reflect.ownKeys(Q);
  }, getOwnPropertyDescriptor($, Y) {
    return Q ?? (Q = X()), Reflect.getOwnPropertyDescriptor(Q, Y);
  }, defineProperty($, Y, W) {
    return Q ?? (Q = X()), Reflect.defineProperty(Q, Y, W);
  } });
}
function Z4(X) {
  if (typeof X === "bigint")
    return X.toString() + "n";
  if (typeof X === "string")
    return `"${X}"`;
  return `${X}`;
}
function b9(X) {
  return Object.keys(X).filter((Q) => {
    return X[Q]._zod.optin === "optional" && X[Q]._zod.optout === "optional";
  });
}
var P9 = { safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER], int32: [-2147483648, 2147483647], uint32: [0, 4294967295], float32: [-340282346638528860000000000000000000000, 340282346638528860000000000000000000000], float64: [-Number.MAX_VALUE, Number.MAX_VALUE] };
var AW = { int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")], uint64: [BigInt(0), BigInt("18446744073709551615")] };
function dV(X, Q) {
  let $ = {}, Y = X._zod.def;
  for (let W in Q) {
    if (!(W in Y.shape))
      throw Error(`Unrecognized key: "${W}"`);
    if (!Q[W])
      continue;
    $[W] = Y.shape[W];
  }
  return l0(X, { ...X._zod.def, shape: $, checks: [] });
}
function iV(X, Q) {
  let $ = { ...X._zod.def.shape }, Y = X._zod.def;
  for (let W in Q) {
    if (!(W in Y.shape))
      throw Error(`Unrecognized key: "${W}"`);
    if (!Q[W])
      continue;
    delete $[W];
  }
  return l0(X, { ...X._zod.def, shape: $, checks: [] });
}
function nV(X, Q) {
  if (!k6(Q))
    throw Error("Invalid input to extend: expected a plain object");
  let $ = { ...X._zod.def, get shape() {
    let Y = { ...X._zod.def.shape, ...Q };
    return R9(this, "shape", Y), Y;
  }, checks: [] };
  return l0(X, $);
}
function rV(X, Q) {
  return l0(X, { ...X._zod.def, get shape() {
    let $ = { ...X._zod.def.shape, ...Q._zod.def.shape };
    return R9(this, "shape", $), $;
  }, catchall: Q._zod.def.catchall, checks: [] });
}
function oV(X, Q, $) {
  let Y = Q._zod.def.shape, W = { ...Y };
  if ($)
    for (let J in $) {
      if (!(J in Y))
        throw Error(`Unrecognized key: "${J}"`);
      if (!$[J])
        continue;
      W[J] = X ? new X({ type: "optional", innerType: Y[J] }) : Y[J];
    }
  else
    for (let J in Y)
      W[J] = X ? new X({ type: "optional", innerType: Y[J] }) : Y[J];
  return l0(Q, { ...Q._zod.def, shape: W, checks: [] });
}
function tV(X, Q, $) {
  let Y = Q._zod.def.shape, W = { ...Y };
  if ($)
    for (let J in $) {
      if (!(J in W))
        throw Error(`Unrecognized key: "${J}"`);
      if (!$[J])
        continue;
      W[J] = new X({ type: "nonoptional", innerType: Y[J] });
    }
  else
    for (let J in Y)
      W[J] = new X({ type: "nonoptional", innerType: Y[J] });
  return l0(Q, { ...Q._zod.def, shape: W, checks: [] });
}
function Q6(X, Q = 0) {
  for (let $ = Q;$ < X.issues.length; $++)
    if (X.issues[$]?.continue !== true)
      return true;
  return false;
}
function H1(X, Q) {
  return Q.map(($) => {
    var Y;
    return (Y = $).path ?? (Y.path = []), $.path.unshift(X), $;
  });
}
function NX(X) {
  return typeof X === "string" ? X : X?.message;
}
function o0(X, Q, $) {
  let Y = { ...X, path: X.path ?? [] };
  if (!X.message) {
    let W = NX(X.inst?._zod.def?.error?.(X)) ?? NX(Q?.error?.(X)) ?? NX($.customError?.(X)) ?? NX($.localeError?.(X)) ?? "Invalid input";
    Y.message = W;
  }
  if (delete Y.inst, delete Y.continue, !Q?.reportInput)
    delete Y.input;
  return Y;
}
function MW(X) {
  if (X instanceof Set)
    return "set";
  if (X instanceof Map)
    return "map";
  if (X instanceof File)
    return "file";
  return "unknown";
}
function MX(X) {
  if (Array.isArray(X))
    return "array";
  if (typeof X === "string")
    return "string";
  return "unknown";
}
function S9(...X) {
  let [Q, $, Y] = X;
  if (typeof Q === "string")
    return { message: Q, code: "custom", input: $, inst: Y };
  return { ...Q };
}
function aV(X) {
  return Object.entries(X).filter(([Q, $]) => {
    return Number.isNaN(Number.parseInt(Q, 10));
  }).map((Q) => Q[1]);
}

class jW {
  constructor(...X) {}
}
var RW = (X, Q) => {
  X.name = "$ZodError", Object.defineProperty(X, "_zod", { value: X._zod, enumerable: false }), Object.defineProperty(X, "issues", { value: Q, enumerable: false }), Object.defineProperty(X, "message", { get() {
    return JSON.stringify(Q, M9, 2);
  }, enumerable: true });
};
var C4 = O("$ZodError", RW);
var jX = O("$ZodError", RW, { Parent: Error });
function Z9(X, Q = ($) => $.message) {
  let $ = {}, Y = [];
  for (let W of X.issues)
    if (W.path.length > 0)
      $[W.path[0]] = $[W.path[0]] || [], $[W.path[0]].push(Q(W));
    else
      Y.push(Q(W));
  return { formErrors: Y, fieldErrors: $ };
}
function C9(X, Q) {
  let $ = Q || function(J) {
    return J.message;
  }, Y = { _errors: [] }, W = (J) => {
    for (let G of J.issues)
      if (G.code === "invalid_union" && G.errors.length)
        G.errors.map((H) => W({ issues: H }));
      else if (G.code === "invalid_key")
        W({ issues: G.issues });
      else if (G.code === "invalid_element")
        W({ issues: G.issues });
      else if (G.path.length === 0)
        Y._errors.push($(G));
      else {
        let H = Y, B = 0;
        while (B < G.path.length) {
          let z2 = G.path[B];
          if (B !== G.path.length - 1)
            H[z2] = H[z2] || { _errors: [] };
          else
            H[z2] = H[z2] || { _errors: [] }, H[z2]._errors.push($(G));
          H = H[z2], B++;
        }
      }
  };
  return W(X), Y;
}
var k9 = (X) => (Q, $, Y, W) => {
  let J = Y ? Object.assign(Y, { async: false }) : { async: false }, G = Q._zod.run({ value: $, issues: [] }, J);
  if (G instanceof Promise)
    throw new x1;
  if (G.issues.length) {
    let H = new (W?.Err ?? X)(G.issues.map((B) => o0(B, J, u0())));
    throw S4(H, W?.callee), H;
  }
  return G.value;
};
var v9 = k9(jX);
var T9 = (X) => async (Q, $, Y, W) => {
  let J = Y ? Object.assign(Y, { async: true }) : { async: true }, G = Q._zod.run({ value: $, issues: [] }, J);
  if (G instanceof Promise)
    G = await G;
  if (G.issues.length) {
    let H = new (W?.Err ?? X)(G.issues.map((B) => o0(B, J, u0())));
    throw S4(H, W?.callee), H;
  }
  return G.value;
};
var _9 = T9(jX);
var x9 = (X) => (Q, $, Y) => {
  let W = Y ? { ...Y, async: false } : { async: false }, J = Q._zod.run({ value: $, issues: [] }, W);
  if (J instanceof Promise)
    throw new x1;
  return J.issues.length ? { success: false, error: new (X ?? C4)(J.issues.map((G) => o0(G, W, u0()))) } : { success: true, data: J.value };
};
var $6 = x9(jX);
var y9 = (X) => async (Q, $, Y) => {
  let W = Y ? Object.assign(Y, { async: true }) : { async: true }, J = Q._zod.run({ value: $, issues: [] }, W);
  if (J instanceof Promise)
    J = await J;
  return J.issues.length ? { success: false, error: new X(J.issues.map((G) => o0(G, W, u0()))) } : { success: true, data: J.value };
};
var Y6 = y9(jX);
var IW = /^[cC][^\s-]{8,}$/;
var EW = /^[0-9a-z]+$/;
var bW = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
var PW = /^[0-9a-vA-V]{20}$/;
var SW = /^[A-Za-z0-9]{27}$/;
var ZW = /^[a-zA-Z0-9_-]{21}$/;
var CW = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
var kW = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
var g9 = (X) => {
  if (!X)
    return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/;
  return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${X}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
};
var vW = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
function TW() {
  return new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u");
}
var _W = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var xW = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/;
var yW = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
var gW = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var fW = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
var f9 = /^[A-Za-z0-9_-]*$/;
var hW = /^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+$/;
var uW = /^\+(?:[0-9]){6,14}[0-9]$/;
var lW = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
var mW = new RegExp(`^${lW}$`);
function cW(X) {
  return typeof X.precision === "number" ? X.precision === -1 ? "(?:[01]\\d|2[0-3]):[0-5]\\d" : X.precision === 0 ? "(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d" : `(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d\\.\\d{${X.precision}}` : "(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?";
}
function pW(X) {
  return new RegExp(`^${cW(X)}$`);
}
function dW(X) {
  let Q = cW({ precision: X.precision }), $ = ["Z"];
  if (X.local)
    $.push("");
  if (X.offset)
    $.push("([+-]\\d{2}:\\d{2})");
  let Y = `${Q}(?:${$.join("|")})`;
  return new RegExp(`^${lW}T(?:${Y})$`);
}
var iW = (X) => {
  let Q = X ? `[\\s\\S]{${X?.minimum ?? 0},${X?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${Q}$`);
};
var nW = /^\d+$/;
var rW = /^-?\d+(?:\.\d+)?/i;
var oW = /true|false/i;
var tW = /null/i;
var aW = /^[^A-Z]*$/;
var sW = /^[^a-z]*$/;
var A0 = O("$ZodCheck", (X, Q) => {
  var $;
  X._zod ?? (X._zod = {}), X._zod.def = Q, ($ = X._zod).onattach ?? ($.onattach = []);
});
var eW = { number: "number", bigint: "bigint", object: "date" };
var h9 = O("$ZodCheckLessThan", (X, Q) => {
  A0.init(X, Q);
  let $ = eW[typeof Q.value];
  X._zod.onattach.push((Y) => {
    let W = Y._zod.bag, J = (Q.inclusive ? W.maximum : W.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    if (Q.value < J)
      if (Q.inclusive)
        W.maximum = Q.value;
      else
        W.exclusiveMaximum = Q.value;
  }), X._zod.check = (Y) => {
    if (Q.inclusive ? Y.value <= Q.value : Y.value < Q.value)
      return;
    Y.issues.push({ origin: $, code: "too_big", maximum: Q.value, input: Y.value, inclusive: Q.inclusive, inst: X, continue: !Q.abort });
  };
});
var u9 = O("$ZodCheckGreaterThan", (X, Q) => {
  A0.init(X, Q);
  let $ = eW[typeof Q.value];
  X._zod.onattach.push((Y) => {
    let W = Y._zod.bag, J = (Q.inclusive ? W.minimum : W.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    if (Q.value > J)
      if (Q.inclusive)
        W.minimum = Q.value;
      else
        W.exclusiveMinimum = Q.value;
  }), X._zod.check = (Y) => {
    if (Q.inclusive ? Y.value >= Q.value : Y.value > Q.value)
      return;
    Y.issues.push({ origin: $, code: "too_small", minimum: Q.value, input: Y.value, inclusive: Q.inclusive, inst: X, continue: !Q.abort });
  };
});
var XJ = O("$ZodCheckMultipleOf", (X, Q) => {
  A0.init(X, Q), X._zod.onattach.push(($) => {
    var Y;
    (Y = $._zod.bag).multipleOf ?? (Y.multipleOf = Q.value);
  }), X._zod.check = ($) => {
    if (typeof $.value !== typeof Q.value)
      throw Error("Cannot mix number and bigint in multiple_of check.");
    if (typeof $.value === "bigint" ? $.value % Q.value === BigInt(0) : j9($.value, Q.value) === 0)
      return;
    $.issues.push({ origin: typeof $.value, code: "not_multiple_of", divisor: Q.value, input: $.value, inst: X, continue: !Q.abort });
  };
});
var QJ = O("$ZodCheckNumberFormat", (X, Q) => {
  A0.init(X, Q), Q.format = Q.format || "float64";
  let $ = Q.format?.includes("int"), Y = $ ? "int" : "number", [W, J] = P9[Q.format];
  X._zod.onattach.push((G) => {
    let H = G._zod.bag;
    if (H.format = Q.format, H.minimum = W, H.maximum = J, $)
      H.pattern = nW;
  }), X._zod.check = (G) => {
    let H = G.value;
    if ($) {
      if (!Number.isInteger(H)) {
        G.issues.push({ expected: Y, format: Q.format, code: "invalid_type", input: H, inst: X });
        return;
      }
      if (!Number.isSafeInteger(H)) {
        if (H > 0)
          G.issues.push({ input: H, code: "too_big", maximum: Number.MAX_SAFE_INTEGER, note: "Integers must be within the safe integer range.", inst: X, origin: Y, continue: !Q.abort });
        else
          G.issues.push({ input: H, code: "too_small", minimum: Number.MIN_SAFE_INTEGER, note: "Integers must be within the safe integer range.", inst: X, origin: Y, continue: !Q.abort });
        return;
      }
    }
    if (H < W)
      G.issues.push({ origin: "number", input: H, code: "too_small", minimum: W, inclusive: true, inst: X, continue: !Q.abort });
    if (H > J)
      G.issues.push({ origin: "number", input: H, code: "too_big", maximum: J, inst: X });
  };
});
var $J = O("$ZodCheckMaxLength", (X, Q) => {
  A0.init(X, Q), X._zod.when = ($) => {
    let Y = $.value;
    return !wX(Y) && Y.length !== undefined;
  }, X._zod.onattach.push(($) => {
    let Y = $._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    if (Q.maximum < Y)
      $._zod.bag.maximum = Q.maximum;
  }), X._zod.check = ($) => {
    let Y = $.value;
    if (Y.length <= Q.maximum)
      return;
    let J = MX(Y);
    $.issues.push({ origin: J, code: "too_big", maximum: Q.maximum, inclusive: true, input: Y, inst: X, continue: !Q.abort });
  };
});
var YJ = O("$ZodCheckMinLength", (X, Q) => {
  A0.init(X, Q), X._zod.when = ($) => {
    let Y = $.value;
    return !wX(Y) && Y.length !== undefined;
  }, X._zod.onattach.push(($) => {
    let Y = $._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    if (Q.minimum > Y)
      $._zod.bag.minimum = Q.minimum;
  }), X._zod.check = ($) => {
    let Y = $.value;
    if (Y.length >= Q.minimum)
      return;
    let J = MX(Y);
    $.issues.push({ origin: J, code: "too_small", minimum: Q.minimum, inclusive: true, input: Y, inst: X, continue: !Q.abort });
  };
});
var WJ = O("$ZodCheckLengthEquals", (X, Q) => {
  A0.init(X, Q), X._zod.when = ($) => {
    let Y = $.value;
    return !wX(Y) && Y.length !== undefined;
  }, X._zod.onattach.push(($) => {
    let Y = $._zod.bag;
    Y.minimum = Q.length, Y.maximum = Q.length, Y.length = Q.length;
  }), X._zod.check = ($) => {
    let Y = $.value, W = Y.length;
    if (W === Q.length)
      return;
    let J = MX(Y), G = W > Q.length;
    $.issues.push({ origin: J, ...G ? { code: "too_big", maximum: Q.length } : { code: "too_small", minimum: Q.length }, inclusive: true, exact: true, input: $.value, inst: X, continue: !Q.abort });
  };
});
var RX = O("$ZodCheckStringFormat", (X, Q) => {
  var $, Y;
  if (A0.init(X, Q), X._zod.onattach.push((W) => {
    let J = W._zod.bag;
    if (J.format = Q.format, Q.pattern)
      J.patterns ?? (J.patterns = new Set), J.patterns.add(Q.pattern);
  }), Q.pattern)
    ($ = X._zod).check ?? ($.check = (W) => {
      if (Q.pattern.lastIndex = 0, Q.pattern.test(W.value))
        return;
      W.issues.push({ origin: "string", code: "invalid_format", format: Q.format, input: W.value, ...Q.pattern ? { pattern: Q.pattern.toString() } : {}, inst: X, continue: !Q.abort });
    });
  else
    (Y = X._zod).check ?? (Y.check = () => {});
});
var JJ = O("$ZodCheckRegex", (X, Q) => {
  RX.init(X, Q), X._zod.check = ($) => {
    if (Q.pattern.lastIndex = 0, Q.pattern.test($.value))
      return;
    $.issues.push({ origin: "string", code: "invalid_format", format: "regex", input: $.value, pattern: Q.pattern.toString(), inst: X, continue: !Q.abort });
  };
});
var GJ = O("$ZodCheckLowerCase", (X, Q) => {
  Q.pattern ?? (Q.pattern = aW), RX.init(X, Q);
});
var HJ = O("$ZodCheckUpperCase", (X, Q) => {
  Q.pattern ?? (Q.pattern = sW), RX.init(X, Q);
});
var BJ = O("$ZodCheckIncludes", (X, Q) => {
  A0.init(X, Q);
  let $ = y1(Q.includes), Y = new RegExp(typeof Q.position === "number" ? `^.{${Q.position}}${$}` : $);
  Q.pattern = Y, X._zod.onattach.push((W) => {
    let J = W._zod.bag;
    J.patterns ?? (J.patterns = new Set), J.patterns.add(Y);
  }), X._zod.check = (W) => {
    if (W.value.includes(Q.includes, Q.position))
      return;
    W.issues.push({ origin: "string", code: "invalid_format", format: "includes", includes: Q.includes, input: W.value, inst: X, continue: !Q.abort });
  };
});
var zJ = O("$ZodCheckStartsWith", (X, Q) => {
  A0.init(X, Q);
  let $ = new RegExp(`^${y1(Q.prefix)}.*`);
  Q.pattern ?? (Q.pattern = $), X._zod.onattach.push((Y) => {
    let W = Y._zod.bag;
    W.patterns ?? (W.patterns = new Set), W.patterns.add($);
  }), X._zod.check = (Y) => {
    if (Y.value.startsWith(Q.prefix))
      return;
    Y.issues.push({ origin: "string", code: "invalid_format", format: "starts_with", prefix: Q.prefix, input: Y.value, inst: X, continue: !Q.abort });
  };
});
var KJ = O("$ZodCheckEndsWith", (X, Q) => {
  A0.init(X, Q);
  let $ = new RegExp(`.*${y1(Q.suffix)}$`);
  Q.pattern ?? (Q.pattern = $), X._zod.onattach.push((Y) => {
    let W = Y._zod.bag;
    W.patterns ?? (W.patterns = new Set), W.patterns.add($);
  }), X._zod.check = (Y) => {
    if (Y.value.endsWith(Q.suffix))
      return;
    Y.issues.push({ origin: "string", code: "invalid_format", format: "ends_with", suffix: Q.suffix, input: Y.value, inst: X, continue: !Q.abort });
  };
});
var UJ = O("$ZodCheckOverwrite", (X, Q) => {
  A0.init(X, Q), X._zod.check = ($) => {
    $.value = Q.tx($.value);
  };
});

class l9 {
  constructor(X = []) {
    if (this.content = [], this.indent = 0, this)
      this.args = X;
  }
  indented(X) {
    this.indent += 1, X(this), this.indent -= 1;
  }
  write(X) {
    if (typeof X === "function") {
      X(this, { execution: "sync" }), X(this, { execution: "async" });
      return;
    }
    let $ = X.split(`
`).filter((J) => J), Y = Math.min(...$.map((J) => J.length - J.trimStart().length)), W = $.map((J) => J.slice(Y)).map((J) => " ".repeat(this.indent * 2) + J);
    for (let J of W)
      this.content.push(J);
  }
  compile() {
    let X = Function, Q = this?.args, Y = [...(this?.content ?? [""]).map((W) => `  ${W}`)];
    return new X(...Q, Y.join(`
`));
  }
}
var LJ = { major: 4, minor: 0, patch: 0 };
var X0 = O("$ZodType", (X, Q) => {
  var $;
  X ?? (X = {}), X._zod.def = Q, X._zod.bag = X._zod.bag || {}, X._zod.version = LJ;
  let Y = [...X._zod.def.checks ?? []];
  if (X._zod.traits.has("$ZodCheck"))
    Y.unshift(X);
  for (let W of Y)
    for (let J of W._zod.onattach)
      J(X);
  if (Y.length === 0)
    ($ = X._zod).deferred ?? ($.deferred = []), X._zod.deferred?.push(() => {
      X._zod.run = X._zod.parse;
    });
  else {
    let W = (J, G, H) => {
      let B = Q6(J), z2;
      for (let K of G) {
        if (K._zod.when) {
          if (!K._zod.when(J))
            continue;
        } else if (B)
          continue;
        let V = J.issues.length, L = K._zod.check(J);
        if (L instanceof Promise && H?.async === false)
          throw new x1;
        if (z2 || L instanceof Promise)
          z2 = (z2 ?? Promise.resolve()).then(async () => {
            if (await L, J.issues.length === V)
              return;
            if (!B)
              B = Q6(J, V);
          });
        else {
          if (J.issues.length === V)
            continue;
          if (!B)
            B = Q6(J, V);
        }
      }
      if (z2)
        return z2.then(() => {
          return J;
        });
      return J;
    };
    X._zod.run = (J, G) => {
      let H = X._zod.parse(J, G);
      if (H instanceof Promise) {
        if (G.async === false)
          throw new x1;
        return H.then((B) => W(B, Y, G));
      }
      return W(H, Y, G);
    };
  }
  X["~standard"] = { validate: (W) => {
    try {
      let J = $6(X, W);
      return J.success ? { value: J.data } : { issues: J.error?.issues };
    } catch (J) {
      return Y6(X, W).then((G) => G.success ? { value: G.data } : { issues: G.error?.issues });
    }
  }, vendor: "zod", version: 1 };
});
var IX = O("$ZodString", (X, Q) => {
  X0.init(X, Q), X._zod.pattern = [...X?._zod.bag?.patterns ?? []].pop() ?? iW(X._zod.bag), X._zod.parse = ($, Y) => {
    if (Q.coerce)
      try {
        $.value = String($.value);
      } catch (W) {}
    if (typeof $.value === "string")
      return $;
    return $.issues.push({ expected: "string", code: "invalid_type", input: $.value, inst: X }), $;
  };
});
var W0 = O("$ZodStringFormat", (X, Q) => {
  RX.init(X, Q), IX.init(X, Q);
});
var c9 = O("$ZodGUID", (X, Q) => {
  Q.pattern ?? (Q.pattern = kW), W0.init(X, Q);
});
var p9 = O("$ZodUUID", (X, Q) => {
  if (Q.version) {
    let Y = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[Q.version];
    if (Y === undefined)
      throw Error(`Invalid UUID version: "${Q.version}"`);
    Q.pattern ?? (Q.pattern = g9(Y));
  } else
    Q.pattern ?? (Q.pattern = g9());
  W0.init(X, Q);
});
var d9 = O("$ZodEmail", (X, Q) => {
  Q.pattern ?? (Q.pattern = vW), W0.init(X, Q);
});
var i9 = O("$ZodURL", (X, Q) => {
  W0.init(X, Q), X._zod.check = ($) => {
    try {
      let Y = $.value, W = new URL(Y), J = W.href;
      if (Q.hostname) {
        if (Q.hostname.lastIndex = 0, !Q.hostname.test(W.hostname))
          $.issues.push({ code: "invalid_format", format: "url", note: "Invalid hostname", pattern: hW.source, input: $.value, inst: X, continue: !Q.abort });
      }
      if (Q.protocol) {
        if (Q.protocol.lastIndex = 0, !Q.protocol.test(W.protocol.endsWith(":") ? W.protocol.slice(0, -1) : W.protocol))
          $.issues.push({ code: "invalid_format", format: "url", note: "Invalid protocol", pattern: Q.protocol.source, input: $.value, inst: X, continue: !Q.abort });
      }
      if (!Y.endsWith("/") && J.endsWith("/"))
        $.value = J.slice(0, -1);
      else
        $.value = J;
      return;
    } catch (Y) {
      $.issues.push({ code: "invalid_format", format: "url", input: $.value, inst: X, continue: !Q.abort });
    }
  };
});
var n9 = O("$ZodEmoji", (X, Q) => {
  Q.pattern ?? (Q.pattern = TW()), W0.init(X, Q);
});
var r9 = O("$ZodNanoID", (X, Q) => {
  Q.pattern ?? (Q.pattern = ZW), W0.init(X, Q);
});
var o9 = O("$ZodCUID", (X, Q) => {
  Q.pattern ?? (Q.pattern = IW), W0.init(X, Q);
});
var t9 = O("$ZodCUID2", (X, Q) => {
  Q.pattern ?? (Q.pattern = EW), W0.init(X, Q);
});
var a9 = O("$ZodULID", (X, Q) => {
  Q.pattern ?? (Q.pattern = bW), W0.init(X, Q);
});
var s9 = O("$ZodXID", (X, Q) => {
  Q.pattern ?? (Q.pattern = PW), W0.init(X, Q);
});
var e9 = O("$ZodKSUID", (X, Q) => {
  Q.pattern ?? (Q.pattern = SW), W0.init(X, Q);
});
var RJ = O("$ZodISODateTime", (X, Q) => {
  Q.pattern ?? (Q.pattern = dW(Q)), W0.init(X, Q);
});
var IJ = O("$ZodISODate", (X, Q) => {
  Q.pattern ?? (Q.pattern = mW), W0.init(X, Q);
});
var EJ = O("$ZodISOTime", (X, Q) => {
  Q.pattern ?? (Q.pattern = pW(Q)), W0.init(X, Q);
});
var bJ = O("$ZodISODuration", (X, Q) => {
  Q.pattern ?? (Q.pattern = CW), W0.init(X, Q);
});
var XQ = O("$ZodIPv4", (X, Q) => {
  Q.pattern ?? (Q.pattern = _W), W0.init(X, Q), X._zod.onattach.push(($) => {
    let Y = $._zod.bag;
    Y.format = "ipv4";
  });
});
var QQ = O("$ZodIPv6", (X, Q) => {
  Q.pattern ?? (Q.pattern = xW), W0.init(X, Q), X._zod.onattach.push(($) => {
    let Y = $._zod.bag;
    Y.format = "ipv6";
  }), X._zod.check = ($) => {
    try {
      new URL(`http://[${$.value}]`);
    } catch {
      $.issues.push({ code: "invalid_format", format: "ipv6", input: $.value, inst: X, continue: !Q.abort });
    }
  };
});
var $Q = O("$ZodCIDRv4", (X, Q) => {
  Q.pattern ?? (Q.pattern = yW), W0.init(X, Q);
});
var YQ = O("$ZodCIDRv6", (X, Q) => {
  Q.pattern ?? (Q.pattern = gW), W0.init(X, Q), X._zod.check = ($) => {
    let [Y, W] = $.value.split("/");
    try {
      if (!W)
        throw Error();
      let J = Number(W);
      if (`${J}` !== W)
        throw Error();
      if (J < 0 || J > 128)
        throw Error();
      new URL(`http://[${Y}]`);
    } catch {
      $.issues.push({ code: "invalid_format", format: "cidrv6", input: $.value, inst: X, continue: !Q.abort });
    }
  };
});
function PJ(X) {
  if (X === "")
    return true;
  if (X.length % 4 !== 0)
    return false;
  try {
    return atob(X), true;
  } catch {
    return false;
  }
}
var WQ = O("$ZodBase64", (X, Q) => {
  Q.pattern ?? (Q.pattern = fW), W0.init(X, Q), X._zod.onattach.push(($) => {
    $._zod.bag.contentEncoding = "base64";
  }), X._zod.check = ($) => {
    if (PJ($.value))
      return;
    $.issues.push({ code: "invalid_format", format: "base64", input: $.value, inst: X, continue: !Q.abort });
  };
});
function eV(X) {
  if (!f9.test(X))
    return false;
  let Q = X.replace(/[-_]/g, (Y) => Y === "-" ? "+" : "/"), $ = Q.padEnd(Math.ceil(Q.length / 4) * 4, "=");
  return PJ($);
}
var JQ = O("$ZodBase64URL", (X, Q) => {
  Q.pattern ?? (Q.pattern = f9), W0.init(X, Q), X._zod.onattach.push(($) => {
    $._zod.bag.contentEncoding = "base64url";
  }), X._zod.check = ($) => {
    if (eV($.value))
      return;
    $.issues.push({ code: "invalid_format", format: "base64url", input: $.value, inst: X, continue: !Q.abort });
  };
});
var GQ = O("$ZodE164", (X, Q) => {
  Q.pattern ?? (Q.pattern = uW), W0.init(X, Q);
});
function XL(X, Q = null) {
  try {
    let $ = X.split(".");
    if ($.length !== 3)
      return false;
    let [Y] = $;
    if (!Y)
      return false;
    let W = JSON.parse(atob(Y));
    if ("typ" in W && W?.typ !== "JWT")
      return false;
    if (!W.alg)
      return false;
    if (Q && (!("alg" in W) || W.alg !== Q))
      return false;
    return true;
  } catch {
    return false;
  }
}
var HQ = O("$ZodJWT", (X, Q) => {
  W0.init(X, Q), X._zod.check = ($) => {
    if (XL($.value, Q.alg))
      return;
    $.issues.push({ code: "invalid_format", format: "jwt", input: $.value, inst: X, continue: !Q.abort });
  };
});
var T4 = O("$ZodNumber", (X, Q) => {
  X0.init(X, Q), X._zod.pattern = X._zod.bag.pattern ?? rW, X._zod.parse = ($, Y) => {
    if (Q.coerce)
      try {
        $.value = Number($.value);
      } catch (G) {}
    let W = $.value;
    if (typeof W === "number" && !Number.isNaN(W) && Number.isFinite(W))
      return $;
    let J = typeof W === "number" ? Number.isNaN(W) ? "NaN" : !Number.isFinite(W) ? "Infinity" : undefined : undefined;
    return $.issues.push({ expected: "number", code: "invalid_type", input: W, inst: X, ...J ? { received: J } : {} }), $;
  };
});
var BQ = O("$ZodNumber", (X, Q) => {
  QJ.init(X, Q), T4.init(X, Q);
});
var zQ = O("$ZodBoolean", (X, Q) => {
  X0.init(X, Q), X._zod.pattern = oW, X._zod.parse = ($, Y) => {
    if (Q.coerce)
      try {
        $.value = Boolean($.value);
      } catch (J) {}
    let W = $.value;
    if (typeof W === "boolean")
      return $;
    return $.issues.push({ expected: "boolean", code: "invalid_type", input: W, inst: X }), $;
  };
});
var KQ = O("$ZodNull", (X, Q) => {
  X0.init(X, Q), X._zod.pattern = tW, X._zod.values = new Set([null]), X._zod.parse = ($, Y) => {
    let W = $.value;
    if (W === null)
      return $;
    return $.issues.push({ expected: "null", code: "invalid_type", input: W, inst: X }), $;
  };
});
var UQ = O("$ZodUnknown", (X, Q) => {
  X0.init(X, Q), X._zod.parse = ($) => $;
});
var VQ = O("$ZodNever", (X, Q) => {
  X0.init(X, Q), X._zod.parse = ($, Y) => {
    return $.issues.push({ expected: "never", code: "invalid_type", input: $.value, inst: X }), $;
  };
});
function qJ(X, Q, $) {
  if (X.issues.length)
    Q.issues.push(...H1($, X.issues));
  Q.value[$] = X.value;
}
var LQ = O("$ZodArray", (X, Q) => {
  X0.init(X, Q), X._zod.parse = ($, Y) => {
    let W = $.value;
    if (!Array.isArray(W))
      return $.issues.push({ expected: "array", code: "invalid_type", input: W, inst: X }), $;
    $.value = Array(W.length);
    let J = [];
    for (let G = 0;G < W.length; G++) {
      let H = W[G], B = Q.element._zod.run({ value: H, issues: [] }, Y);
      if (B instanceof Promise)
        J.push(B.then((z2) => qJ(z2, $, G)));
      else
        qJ(B, $, G);
    }
    if (J.length)
      return Promise.all(J).then(() => $);
    return $;
  };
});
function v4(X, Q, $) {
  if (X.issues.length)
    Q.issues.push(...H1($, X.issues));
  Q.value[$] = X.value;
}
function FJ(X, Q, $, Y) {
  if (X.issues.length)
    if (Y[$] === undefined)
      if ($ in Y)
        Q.value[$] = undefined;
      else
        Q.value[$] = X.value;
    else
      Q.issues.push(...H1($, X.issues));
  else if (X.value === undefined) {
    if ($ in Y)
      Q.value[$] = undefined;
  } else
    Q.value[$] = X.value;
}
var _4 = O("$ZodObject", (X, Q) => {
  X0.init(X, Q);
  let $ = DX(() => {
    let V = Object.keys(Q.shape);
    for (let U of V)
      if (!(Q.shape[U] instanceof X0))
        throw Error(`Invalid element at key "${U}": expected a Zod schema`);
    let L = b9(Q.shape);
    return { shape: Q.shape, keys: V, keySet: new Set(V), numKeys: V.length, optionalKeys: new Set(L) };
  });
  Y0(X._zod, "propValues", () => {
    let V = Q.shape, L = {};
    for (let U in V) {
      let F = V[U]._zod;
      if (F.values) {
        L[U] ?? (L[U] = new Set);
        for (let q of F.values)
          L[U].add(q);
      }
    }
    return L;
  });
  let Y = (V) => {
    let L = new l9(["shape", "payload", "ctx"]), U = $.value, F = (M) => {
      let R = X6(M);
      return `shape[${R}]._zod.run({ value: input[${R}], issues: [] }, ctx)`;
    };
    L.write("const input = payload.value;");
    let q = Object.create(null), N = 0;
    for (let M of U.keys)
      q[M] = `key_${N++}`;
    L.write("const newResult = {}");
    for (let M of U.keys)
      if (U.optionalKeys.has(M)) {
        let R = q[M];
        L.write(`const ${R} = ${F(M)};`);
        let S = X6(M);
        L.write(`
        if (${R}.issues.length) {
          if (input[${S}] === undefined) {
            if (${S} in input) {
              newResult[${S}] = undefined;
            }
          } else {
            payload.issues = payload.issues.concat(
              ${R}.issues.map((iss) => ({
                ...iss,
                path: iss.path ? [${S}, ...iss.path] : [${S}],
              }))
            );
          }
        } else if (${R}.value === undefined) {
          if (${S} in input) newResult[${S}] = undefined;
        } else {
          newResult[${S}] = ${R}.value;
        }
        `);
      } else {
        let R = q[M];
        L.write(`const ${R} = ${F(M)};`), L.write(`
          if (${R}.issues.length) payload.issues = payload.issues.concat(${R}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${X6(M)}, ...iss.path] : [${X6(M)}]
          })));`), L.write(`newResult[${X6(M)}] = ${R}.value`);
      }
    L.write("payload.value = newResult;"), L.write("return payload;");
    let w = L.compile();
    return (M, R) => w(V, M, R);
  }, W, J = C6, G = !b4.jitless, B = G && I9.value, z2 = Q.catchall, K;
  X._zod.parse = (V, L) => {
    K ?? (K = $.value);
    let U = V.value;
    if (!J(U))
      return V.issues.push({ expected: "object", code: "invalid_type", input: U, inst: X }), V;
    let F = [];
    if (G && B && L?.async === false && L.jitless !== true) {
      if (!W)
        W = Y(Q.shape);
      V = W(V, L);
    } else {
      V.value = {};
      let R = K.shape;
      for (let S of K.keys) {
        let C = R[S], K0 = C._zod.run({ value: U[S], issues: [] }, L), U0 = C._zod.optin === "optional" && C._zod.optout === "optional";
        if (K0 instanceof Promise)
          F.push(K0.then((s) => U0 ? FJ(s, V, S, U) : v4(s, V, S)));
        else if (U0)
          FJ(K0, V, S, U);
        else
          v4(K0, V, S);
      }
    }
    if (!z2)
      return F.length ? Promise.all(F).then(() => V) : V;
    let q = [], N = K.keySet, w = z2._zod, M = w.def.type;
    for (let R of Object.keys(U)) {
      if (N.has(R))
        continue;
      if (M === "never") {
        q.push(R);
        continue;
      }
      let S = w.run({ value: U[R], issues: [] }, L);
      if (S instanceof Promise)
        F.push(S.then((C) => v4(C, V, R)));
      else
        v4(S, V, R);
    }
    if (q.length)
      V.issues.push({ code: "unrecognized_keys", keys: q, input: U, inst: X });
    if (!F.length)
      return V;
    return Promise.all(F).then(() => {
      return V;
    });
  };
});
function NJ(X, Q, $, Y) {
  for (let W of X)
    if (W.issues.length === 0)
      return Q.value = W.value, Q;
  return Q.issues.push({ code: "invalid_union", input: Q.value, inst: $, errors: X.map((W) => W.issues.map((J) => o0(J, Y, u0()))) }), Q;
}
var x4 = O("$ZodUnion", (X, Q) => {
  X0.init(X, Q), Y0(X._zod, "optin", () => Q.options.some(($) => $._zod.optin === "optional") ? "optional" : undefined), Y0(X._zod, "optout", () => Q.options.some(($) => $._zod.optout === "optional") ? "optional" : undefined), Y0(X._zod, "values", () => {
    if (Q.options.every(($) => $._zod.values))
      return new Set(Q.options.flatMap(($) => Array.from($._zod.values)));
    return;
  }), Y0(X._zod, "pattern", () => {
    if (Q.options.every(($) => $._zod.pattern)) {
      let $ = Q.options.map((Y) => Y._zod.pattern);
      return new RegExp(`^(${$.map((Y) => AX(Y.source)).join("|")})$`);
    }
    return;
  }), X._zod.parse = ($, Y) => {
    let W = false, J = [];
    for (let G of Q.options) {
      let H = G._zod.run({ value: $.value, issues: [] }, Y);
      if (H instanceof Promise)
        J.push(H), W = true;
      else {
        if (H.issues.length === 0)
          return H;
        J.push(H);
      }
    }
    if (!W)
      return NJ(J, $, X, Y);
    return Promise.all(J).then((G) => {
      return NJ(G, $, X, Y);
    });
  };
});
var qQ = O("$ZodDiscriminatedUnion", (X, Q) => {
  x4.init(X, Q);
  let $ = X._zod.parse;
  Y0(X._zod, "propValues", () => {
    let W = {};
    for (let J of Q.options) {
      let G = J._zod.propValues;
      if (!G || Object.keys(G).length === 0)
        throw Error(`Invalid discriminated union option at index "${Q.options.indexOf(J)}"`);
      for (let [H, B] of Object.entries(G)) {
        if (!W[H])
          W[H] = new Set;
        for (let z2 of B)
          W[H].add(z2);
      }
    }
    return W;
  });
  let Y = DX(() => {
    let W = Q.options, J = new Map;
    for (let G of W) {
      let H = G._zod.propValues[Q.discriminator];
      if (!H || H.size === 0)
        throw Error(`Invalid discriminated union option at index "${Q.options.indexOf(G)}"`);
      for (let B of H) {
        if (J.has(B))
          throw Error(`Duplicate discriminator value "${String(B)}"`);
        J.set(B, G);
      }
    }
    return J;
  });
  X._zod.parse = (W, J) => {
    let G = W.value;
    if (!C6(G))
      return W.issues.push({ code: "invalid_type", expected: "object", input: G, inst: X }), W;
    let H = Y.value.get(G?.[Q.discriminator]);
    if (H)
      return H._zod.run(W, J);
    if (Q.unionFallback)
      return $(W, J);
    return W.issues.push({ code: "invalid_union", errors: [], note: "No matching discriminator", input: G, path: [Q.discriminator], inst: X }), W;
  };
});
var FQ = O("$ZodIntersection", (X, Q) => {
  X0.init(X, Q), X._zod.parse = ($, Y) => {
    let W = $.value, J = Q.left._zod.run({ value: W, issues: [] }, Y), G = Q.right._zod.run({ value: W, issues: [] }, Y);
    if (J instanceof Promise || G instanceof Promise)
      return Promise.all([J, G]).then(([B, z2]) => {
        return OJ($, B, z2);
      });
    return OJ($, J, G);
  };
});
function m9(X, Q) {
  if (X === Q)
    return { valid: true, data: X };
  if (X instanceof Date && Q instanceof Date && +X === +Q)
    return { valid: true, data: X };
  if (k6(X) && k6(Q)) {
    let $ = Object.keys(Q), Y = Object.keys(X).filter((J) => $.indexOf(J) !== -1), W = { ...X, ...Q };
    for (let J of Y) {
      let G = m9(X[J], Q[J]);
      if (!G.valid)
        return { valid: false, mergeErrorPath: [J, ...G.mergeErrorPath] };
      W[J] = G.data;
    }
    return { valid: true, data: W };
  }
  if (Array.isArray(X) && Array.isArray(Q)) {
    if (X.length !== Q.length)
      return { valid: false, mergeErrorPath: [] };
    let $ = [];
    for (let Y = 0;Y < X.length; Y++) {
      let W = X[Y], J = Q[Y], G = m9(W, J);
      if (!G.valid)
        return { valid: false, mergeErrorPath: [Y, ...G.mergeErrorPath] };
      $.push(G.data);
    }
    return { valid: true, data: $ };
  }
  return { valid: false, mergeErrorPath: [] };
}
function OJ(X, Q, $) {
  if (Q.issues.length)
    X.issues.push(...Q.issues);
  if ($.issues.length)
    X.issues.push(...$.issues);
  if (Q6(X))
    return X;
  let Y = m9(Q.value, $.value);
  if (!Y.valid)
    throw Error(`Unmergable intersection. Error path: ${JSON.stringify(Y.mergeErrorPath)}`);
  return X.value = Y.data, X;
}
var NQ = O("$ZodRecord", (X, Q) => {
  X0.init(X, Q), X._zod.parse = ($, Y) => {
    let W = $.value;
    if (!k6(W))
      return $.issues.push({ expected: "record", code: "invalid_type", input: W, inst: X }), $;
    let J = [];
    if (Q.keyType._zod.values) {
      let G = Q.keyType._zod.values;
      $.value = {};
      for (let B of G)
        if (typeof B === "string" || typeof B === "number" || typeof B === "symbol") {
          let z2 = Q.valueType._zod.run({ value: W[B], issues: [] }, Y);
          if (z2 instanceof Promise)
            J.push(z2.then((K) => {
              if (K.issues.length)
                $.issues.push(...H1(B, K.issues));
              $.value[B] = K.value;
            }));
          else {
            if (z2.issues.length)
              $.issues.push(...H1(B, z2.issues));
            $.value[B] = z2.value;
          }
        }
      let H;
      for (let B in W)
        if (!G.has(B))
          H = H ?? [], H.push(B);
      if (H && H.length > 0)
        $.issues.push({ code: "unrecognized_keys", input: W, inst: X, keys: H });
    } else {
      $.value = {};
      for (let G of Reflect.ownKeys(W)) {
        if (G === "__proto__")
          continue;
        let H = Q.keyType._zod.run({ value: G, issues: [] }, Y);
        if (H instanceof Promise)
          throw Error("Async schemas not supported in object keys currently");
        if (H.issues.length) {
          $.issues.push({ origin: "record", code: "invalid_key", issues: H.issues.map((z2) => o0(z2, Y, u0())), input: G, path: [G], inst: X }), $.value[H.value] = H.value;
          continue;
        }
        let B = Q.valueType._zod.run({ value: W[G], issues: [] }, Y);
        if (B instanceof Promise)
          J.push(B.then((z2) => {
            if (z2.issues.length)
              $.issues.push(...H1(G, z2.issues));
            $.value[H.value] = z2.value;
          }));
        else {
          if (B.issues.length)
            $.issues.push(...H1(G, B.issues));
          $.value[H.value] = B.value;
        }
      }
    }
    if (J.length)
      return Promise.all(J).then(() => $);
    return $;
  };
});
var OQ = O("$ZodEnum", (X, Q) => {
  X0.init(X, Q);
  let $ = OX(Q.entries);
  X._zod.values = new Set($), X._zod.pattern = new RegExp(`^(${$.filter((Y) => E9.has(typeof Y)).map((Y) => typeof Y === "string" ? y1(Y) : Y.toString()).join("|")})$`), X._zod.parse = (Y, W) => {
    let J = Y.value;
    if (X._zod.values.has(J))
      return Y;
    return Y.issues.push({ code: "invalid_value", values: $, input: J, inst: X }), Y;
  };
});
var DQ = O("$ZodLiteral", (X, Q) => {
  X0.init(X, Q), X._zod.values = new Set(Q.values), X._zod.pattern = new RegExp(`^(${Q.values.map(($) => typeof $ === "string" ? y1($) : $ ? $.toString() : String($)).join("|")})$`), X._zod.parse = ($, Y) => {
    let W = $.value;
    if (X._zod.values.has(W))
      return $;
    return $.issues.push({ code: "invalid_value", values: Q.values, input: W, inst: X }), $;
  };
});
var wQ = O("$ZodTransform", (X, Q) => {
  X0.init(X, Q), X._zod.parse = ($, Y) => {
    let W = Q.transform($.value, $);
    if (Y.async)
      return (W instanceof Promise ? W : Promise.resolve(W)).then((G) => {
        return $.value = G, $;
      });
    if (W instanceof Promise)
      throw new x1;
    return $.value = W, $;
  };
});
var AQ = O("$ZodOptional", (X, Q) => {
  X0.init(X, Q), X._zod.optin = "optional", X._zod.optout = "optional", Y0(X._zod, "values", () => {
    return Q.innerType._zod.values ? new Set([...Q.innerType._zod.values, undefined]) : undefined;
  }), Y0(X._zod, "pattern", () => {
    let $ = Q.innerType._zod.pattern;
    return $ ? new RegExp(`^(${AX($.source)})?$`) : undefined;
  }), X._zod.parse = ($, Y) => {
    if (Q.innerType._zod.optin === "optional")
      return Q.innerType._zod.run($, Y);
    if ($.value === undefined)
      return $;
    return Q.innerType._zod.run($, Y);
  };
});
var MQ = O("$ZodNullable", (X, Q) => {
  X0.init(X, Q), Y0(X._zod, "optin", () => Q.innerType._zod.optin), Y0(X._zod, "optout", () => Q.innerType._zod.optout), Y0(X._zod, "pattern", () => {
    let $ = Q.innerType._zod.pattern;
    return $ ? new RegExp(`^(${AX($.source)}|null)$`) : undefined;
  }), Y0(X._zod, "values", () => {
    return Q.innerType._zod.values ? new Set([...Q.innerType._zod.values, null]) : undefined;
  }), X._zod.parse = ($, Y) => {
    if ($.value === null)
      return $;
    return Q.innerType._zod.run($, Y);
  };
});
var jQ = O("$ZodDefault", (X, Q) => {
  X0.init(X, Q), X._zod.optin = "optional", Y0(X._zod, "values", () => Q.innerType._zod.values), X._zod.parse = ($, Y) => {
    if ($.value === undefined)
      return $.value = Q.defaultValue, $;
    let W = Q.innerType._zod.run($, Y);
    if (W instanceof Promise)
      return W.then((J) => DJ(J, Q));
    return DJ(W, Q);
  };
});
function DJ(X, Q) {
  if (X.value === undefined)
    X.value = Q.defaultValue;
  return X;
}
var RQ = O("$ZodPrefault", (X, Q) => {
  X0.init(X, Q), X._zod.optin = "optional", Y0(X._zod, "values", () => Q.innerType._zod.values), X._zod.parse = ($, Y) => {
    if ($.value === undefined)
      $.value = Q.defaultValue;
    return Q.innerType._zod.run($, Y);
  };
});
var IQ = O("$ZodNonOptional", (X, Q) => {
  X0.init(X, Q), Y0(X._zod, "values", () => {
    let $ = Q.innerType._zod.values;
    return $ ? new Set([...$].filter((Y) => Y !== undefined)) : undefined;
  }), X._zod.parse = ($, Y) => {
    let W = Q.innerType._zod.run($, Y);
    if (W instanceof Promise)
      return W.then((J) => wJ(J, X));
    return wJ(W, X);
  };
});
function wJ(X, Q) {
  if (!X.issues.length && X.value === undefined)
    X.issues.push({ code: "invalid_type", expected: "nonoptional", input: X.value, inst: Q });
  return X;
}
var EQ = O("$ZodCatch", (X, Q) => {
  X0.init(X, Q), X._zod.optin = "optional", Y0(X._zod, "optout", () => Q.innerType._zod.optout), Y0(X._zod, "values", () => Q.innerType._zod.values), X._zod.parse = ($, Y) => {
    let W = Q.innerType._zod.run($, Y);
    if (W instanceof Promise)
      return W.then((J) => {
        if ($.value = J.value, J.issues.length)
          $.value = Q.catchValue({ ...$, error: { issues: J.issues.map((G) => o0(G, Y, u0())) }, input: $.value }), $.issues = [];
        return $;
      });
    if ($.value = W.value, W.issues.length)
      $.value = Q.catchValue({ ...$, error: { issues: W.issues.map((J) => o0(J, Y, u0())) }, input: $.value }), $.issues = [];
    return $;
  };
});
var bQ = O("$ZodPipe", (X, Q) => {
  X0.init(X, Q), Y0(X._zod, "values", () => Q.in._zod.values), Y0(X._zod, "optin", () => Q.in._zod.optin), Y0(X._zod, "optout", () => Q.out._zod.optout), X._zod.parse = ($, Y) => {
    let W = Q.in._zod.run($, Y);
    if (W instanceof Promise)
      return W.then((J) => AJ(J, Q, Y));
    return AJ(W, Q, Y);
  };
});
function AJ(X, Q, $) {
  if (Q6(X))
    return X;
  return Q.out._zod.run({ value: X.value, issues: X.issues }, $);
}
var PQ = O("$ZodReadonly", (X, Q) => {
  X0.init(X, Q), Y0(X._zod, "propValues", () => Q.innerType._zod.propValues), Y0(X._zod, "values", () => Q.innerType._zod.values), Y0(X._zod, "optin", () => Q.innerType._zod.optin), Y0(X._zod, "optout", () => Q.innerType._zod.optout), X._zod.parse = ($, Y) => {
    let W = Q.innerType._zod.run($, Y);
    if (W instanceof Promise)
      return W.then(MJ);
    return MJ(W);
  };
});
function MJ(X) {
  return X.value = Object.freeze(X.value), X;
}
var SQ = O("$ZodCustom", (X, Q) => {
  A0.init(X, Q), X0.init(X, Q), X._zod.parse = ($, Y) => {
    return $;
  }, X._zod.check = ($) => {
    let Y = $.value, W = Q.fn(Y);
    if (W instanceof Promise)
      return W.then((J) => jJ(J, $, Y, X));
    jJ(W, $, Y, X);
    return;
  };
});
function jJ(X, Q, $, Y) {
  if (!X) {
    let W = { code: "custom", input: $, inst: Y, path: [...Y._zod.def.path ?? []], continue: !Y._zod.def.abort };
    if (Y._zod.def.params)
      W.params = Y._zod.def.params;
    Q.issues.push(S9(W));
  }
}
var QL = (X) => {
  let Q = typeof X;
  switch (Q) {
    case "number":
      return Number.isNaN(X) ? "NaN" : "number";
    case "object": {
      if (Array.isArray(X))
        return "array";
      if (X === null)
        return "null";
      if (Object.getPrototypeOf(X) !== Object.prototype && X.constructor)
        return X.constructor.name;
    }
  }
  return Q;
};
var $L = () => {
  let X = { string: { unit: "characters", verb: "to have" }, file: { unit: "bytes", verb: "to have" }, array: { unit: "items", verb: "to have" }, set: { unit: "items", verb: "to have" } };
  function Q(Y) {
    return X[Y] ?? null;
  }
  let $ = { regex: "input", email: "email address", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO datetime", date: "ISO date", time: "ISO time", duration: "ISO duration", ipv4: "IPv4 address", ipv6: "IPv6 address", cidrv4: "IPv4 range", cidrv6: "IPv6 range", base64: "base64-encoded string", base64url: "base64url-encoded string", json_string: "JSON string", e164: "E.164 number", jwt: "JWT", template_literal: "input" };
  return (Y) => {
    switch (Y.code) {
      case "invalid_type":
        return `Invalid input: expected ${Y.expected}, received ${QL(Y.input)}`;
      case "invalid_value":
        if (Y.values.length === 1)
          return `Invalid input: expected ${Z4(Y.values[0])}`;
        return `Invalid option: expected one of ${P4(Y.values, "|")}`;
      case "too_big": {
        let W = Y.inclusive ? "<=" : "<", J = Q(Y.origin);
        if (J)
          return `Too big: expected ${Y.origin ?? "value"} to have ${W}${Y.maximum.toString()} ${J.unit ?? "elements"}`;
        return `Too big: expected ${Y.origin ?? "value"} to be ${W}${Y.maximum.toString()}`;
      }
      case "too_small": {
        let W = Y.inclusive ? ">=" : ">", J = Q(Y.origin);
        if (J)
          return `Too small: expected ${Y.origin} to have ${W}${Y.minimum.toString()} ${J.unit}`;
        return `Too small: expected ${Y.origin} to be ${W}${Y.minimum.toString()}`;
      }
      case "invalid_format": {
        let W = Y;
        if (W.format === "starts_with")
          return `Invalid string: must start with "${W.prefix}"`;
        if (W.format === "ends_with")
          return `Invalid string: must end with "${W.suffix}"`;
        if (W.format === "includes")
          return `Invalid string: must include "${W.includes}"`;
        if (W.format === "regex")
          return `Invalid string: must match pattern ${W.pattern}`;
        return `Invalid ${$[W.format] ?? Y.format}`;
      }
      case "not_multiple_of":
        return `Invalid number: must be a multiple of ${Y.divisor}`;
      case "unrecognized_keys":
        return `Unrecognized key${Y.keys.length > 1 ? "s" : ""}: ${P4(Y.keys, ", ")}`;
      case "invalid_key":
        return `Invalid key in ${Y.origin}`;
      case "invalid_union":
        return "Invalid input";
      case "invalid_element":
        return `Invalid value in ${Y.origin}`;
      default:
        return "Invalid input";
    }
  };
};
function ZQ() {
  return { localeError: $L() };
}
var YL = Symbol("ZodOutput");
var WL = Symbol("ZodInput");

class y4 {
  constructor() {
    this._map = new WeakMap, this._idmap = new Map;
  }
  add(X, ...Q) {
    let $ = Q[0];
    if (this._map.set(X, $), $ && typeof $ === "object" && "id" in $) {
      if (this._idmap.has($.id))
        throw Error(`ID ${$.id} already exists in the registry`);
      this._idmap.set($.id, X);
    }
    return this;
  }
  remove(X) {
    return this._map.delete(X), this;
  }
  get(X) {
    let Q = X._zod.parent;
    if (Q) {
      let $ = { ...this.get(Q) ?? {} };
      return delete $.id, { ...$, ...this._map.get(X) };
    }
    return this._map.get(X);
  }
  has(X) {
    return this._map.has(X);
  }
}
function SJ() {
  return new y4;
}
var g1 = SJ();
function CQ(X, Q) {
  return new X({ type: "string", ...y(Q) });
}
function kQ(X, Q) {
  return new X({ type: "string", format: "email", check: "string_format", abort: false, ...y(Q) });
}
function g4(X, Q) {
  return new X({ type: "string", format: "guid", check: "string_format", abort: false, ...y(Q) });
}
function vQ(X, Q) {
  return new X({ type: "string", format: "uuid", check: "string_format", abort: false, ...y(Q) });
}
function TQ(X, Q) {
  return new X({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v4", ...y(Q) });
}
function _Q(X, Q) {
  return new X({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v6", ...y(Q) });
}
function xQ(X, Q) {
  return new X({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v7", ...y(Q) });
}
function yQ(X, Q) {
  return new X({ type: "string", format: "url", check: "string_format", abort: false, ...y(Q) });
}
function gQ(X, Q) {
  return new X({ type: "string", format: "emoji", check: "string_format", abort: false, ...y(Q) });
}
function fQ(X, Q) {
  return new X({ type: "string", format: "nanoid", check: "string_format", abort: false, ...y(Q) });
}
function hQ(X, Q) {
  return new X({ type: "string", format: "cuid", check: "string_format", abort: false, ...y(Q) });
}
function uQ(X, Q) {
  return new X({ type: "string", format: "cuid2", check: "string_format", abort: false, ...y(Q) });
}
function lQ(X, Q) {
  return new X({ type: "string", format: "ulid", check: "string_format", abort: false, ...y(Q) });
}
function mQ(X, Q) {
  return new X({ type: "string", format: "xid", check: "string_format", abort: false, ...y(Q) });
}
function cQ(X, Q) {
  return new X({ type: "string", format: "ksuid", check: "string_format", abort: false, ...y(Q) });
}
function pQ(X, Q) {
  return new X({ type: "string", format: "ipv4", check: "string_format", abort: false, ...y(Q) });
}
function dQ(X, Q) {
  return new X({ type: "string", format: "ipv6", check: "string_format", abort: false, ...y(Q) });
}
function iQ(X, Q) {
  return new X({ type: "string", format: "cidrv4", check: "string_format", abort: false, ...y(Q) });
}
function nQ(X, Q) {
  return new X({ type: "string", format: "cidrv6", check: "string_format", abort: false, ...y(Q) });
}
function rQ(X, Q) {
  return new X({ type: "string", format: "base64", check: "string_format", abort: false, ...y(Q) });
}
function oQ(X, Q) {
  return new X({ type: "string", format: "base64url", check: "string_format", abort: false, ...y(Q) });
}
function tQ(X, Q) {
  return new X({ type: "string", format: "e164", check: "string_format", abort: false, ...y(Q) });
}
function aQ(X, Q) {
  return new X({ type: "string", format: "jwt", check: "string_format", abort: false, ...y(Q) });
}
function ZJ(X, Q) {
  return new X({ type: "string", format: "datetime", check: "string_format", offset: false, local: false, precision: null, ...y(Q) });
}
function CJ(X, Q) {
  return new X({ type: "string", format: "date", check: "string_format", ...y(Q) });
}
function kJ(X, Q) {
  return new X({ type: "string", format: "time", check: "string_format", precision: null, ...y(Q) });
}
function vJ(X, Q) {
  return new X({ type: "string", format: "duration", check: "string_format", ...y(Q) });
}
function sQ(X, Q) {
  return new X({ type: "number", checks: [], ...y(Q) });
}
function eQ(X, Q) {
  return new X({ type: "number", check: "number_format", abort: false, format: "safeint", ...y(Q) });
}
function X$(X, Q) {
  return new X({ type: "boolean", ...y(Q) });
}
function Q$(X, Q) {
  return new X({ type: "null", ...y(Q) });
}
function $$(X) {
  return new X({ type: "unknown" });
}
function Y$(X, Q) {
  return new X({ type: "never", ...y(Q) });
}
function f4(X, Q) {
  return new h9({ check: "less_than", ...y(Q), value: X, inclusive: false });
}
function EX(X, Q) {
  return new h9({ check: "less_than", ...y(Q), value: X, inclusive: true });
}
function h4(X, Q) {
  return new u9({ check: "greater_than", ...y(Q), value: X, inclusive: false });
}
function bX(X, Q) {
  return new u9({ check: "greater_than", ...y(Q), value: X, inclusive: true });
}
function u4(X, Q) {
  return new XJ({ check: "multiple_of", ...y(Q), value: X });
}
function l4(X, Q) {
  return new $J({ check: "max_length", ...y(Q), maximum: X });
}
function v6(X, Q) {
  return new YJ({ check: "min_length", ...y(Q), minimum: X });
}
function m4(X, Q) {
  return new WJ({ check: "length_equals", ...y(Q), length: X });
}
function W$(X, Q) {
  return new JJ({ check: "string_format", format: "regex", ...y(Q), pattern: X });
}
function J$(X) {
  return new GJ({ check: "string_format", format: "lowercase", ...y(X) });
}
function G$(X) {
  return new HJ({ check: "string_format", format: "uppercase", ...y(X) });
}
function H$(X, Q) {
  return new BJ({ check: "string_format", format: "includes", ...y(Q), includes: X });
}
function B$(X, Q) {
  return new zJ({ check: "string_format", format: "starts_with", ...y(Q), prefix: X });
}
function z$(X, Q) {
  return new KJ({ check: "string_format", format: "ends_with", ...y(Q), suffix: X });
}
function W6(X) {
  return new UJ({ check: "overwrite", tx: X });
}
function K$(X) {
  return W6((Q) => Q.normalize(X));
}
function U$() {
  return W6((X) => X.trim());
}
function V$() {
  return W6((X) => X.toLowerCase());
}
function L$() {
  return W6((X) => X.toUpperCase());
}
function TJ(X, Q, $) {
  return new X({ type: "array", element: Q, ...y($) });
}
function q$(X, Q, $) {
  let Y = y($);
  return Y.abort ?? (Y.abort = true), new X({ type: "custom", check: "custom", fn: Q, ...Y });
}
function F$(X, Q, $) {
  return new X({ type: "custom", check: "custom", fn: Q, ...y($) });
}
var hL = O("ZodMiniType", (X, Q) => {
  if (!X._zod)
    throw Error("Uninitialized schema in ZodMiniType.");
  X0.init(X, Q), X.def = Q, X.parse = ($, Y) => v9(X, $, Y, { callee: X.parse }), X.safeParse = ($, Y) => $6(X, $, Y), X.parseAsync = async ($, Y) => _9(X, $, Y, { callee: X.parseAsync }), X.safeParseAsync = async ($, Y) => Y6(X, $, Y), X.check = (...$) => {
    return X.clone({ ...Q, checks: [...Q.checks ?? [], ...$.map((Y) => typeof Y === "function" ? { _zod: { check: Y, def: { check: "custom" }, onattach: [] } } : Y)] });
  }, X.clone = ($, Y) => l0(X, $, Y), X.brand = () => X, X.register = ($, Y) => {
    return $.add(X, Y), X;
  };
});
var uL = O("ZodMiniObject", (X, Q) => {
  _4.init(X, Q), hL.init(X, Q), i.defineLazy(X, "shape", () => Q.shape);
});
var PX = {};
V7(PX, { time: () => M$, duration: () => j$, datetime: () => w$, date: () => A$, ZodISOTime: () => hJ, ZodISODuration: () => uJ, ZodISODateTime: () => gJ, ZodISODate: () => fJ });
var gJ = O("ZodISODateTime", (X, Q) => {
  RJ.init(X, Q), H0.init(X, Q);
});
function w$(X) {
  return ZJ(gJ, X);
}
var fJ = O("ZodISODate", (X, Q) => {
  IJ.init(X, Q), H0.init(X, Q);
});
function A$(X) {
  return CJ(fJ, X);
}
var hJ = O("ZodISOTime", (X, Q) => {
  EJ.init(X, Q), H0.init(X, Q);
});
function M$(X) {
  return kJ(hJ, X);
}
var uJ = O("ZodISODuration", (X, Q) => {
  bJ.init(X, Q), H0.init(X, Q);
});
function j$(X) {
  return vJ(uJ, X);
}
var lJ = (X, Q) => {
  C4.init(X, Q), X.name = "ZodError", Object.defineProperties(X, { format: { value: ($) => C9(X, $) }, flatten: { value: ($) => Z9(X, $) }, addIssue: { value: ($) => X.issues.push($) }, addIssues: { value: ($) => X.issues.push(...$) }, isEmpty: { get() {
    return X.issues.length === 0;
  } } });
};
var KZ = O("ZodError", lJ);
var SX = O("ZodError", lJ, { Parent: Error });
var mJ = k9(SX);
var cJ = T9(SX);
var pJ = x9(SX);
var dJ = y9(SX);
var z0 = O("ZodType", (X, Q) => {
  return X0.init(X, Q), X.def = Q, Object.defineProperty(X, "_def", { value: Q }), X.check = (...$) => {
    return X.clone({ ...Q, checks: [...Q.checks ?? [], ...$.map((Y) => typeof Y === "function" ? { _zod: { check: Y, def: { check: "custom" }, onattach: [] } } : Y)] });
  }, X.clone = ($, Y) => l0(X, $, Y), X.brand = () => X, X.register = ($, Y) => {
    return $.add(X, Y), X;
  }, X.parse = ($, Y) => mJ(X, $, Y, { callee: X.parse }), X.safeParse = ($, Y) => pJ(X, $, Y), X.parseAsync = async ($, Y) => cJ(X, $, Y, { callee: X.parseAsync }), X.safeParseAsync = async ($, Y) => dJ(X, $, Y), X.spa = X.safeParseAsync, X.refine = ($, Y) => X.check(gq($, Y)), X.superRefine = ($) => X.check(fq($)), X.overwrite = ($) => X.check(W6($)), X.optional = () => v(X), X.nullable = () => rJ(X), X.nullish = () => v(rJ(X)), X.nonoptional = ($) => Cq(X, $), X.array = () => r(X), X.or = ($) => J0([X, $]), X.and = ($) => n4(X, $), X.transform = ($) => I$(X, eJ($)), X.default = ($) => Pq(X, $), X.prefault = ($) => Zq(X, $), X.catch = ($) => vq(X, $), X.pipe = ($) => I$(X, $), X.readonly = () => xq(X), X.describe = ($) => {
    let Y = X.clone();
    return g1.add(Y, { description: $ }), Y;
  }, Object.defineProperty(X, "description", { get() {
    return g1.get(X)?.description;
  }, configurable: true }), X.meta = (...$) => {
    if ($.length === 0)
      return g1.get(X);
    let Y = X.clone();
    return g1.add(Y, $[0]), Y;
  }, X.isOptional = () => X.safeParse(undefined).success, X.isNullable = () => X.safeParse(null).success, X;
});
var oJ = O("_ZodString", (X, Q) => {
  IX.init(X, Q), z0.init(X, Q);
  let $ = X._zod.bag;
  X.format = $.format ?? null, X.minLength = $.minimum ?? null, X.maxLength = $.maximum ?? null, X.regex = (...Y) => X.check(W$(...Y)), X.includes = (...Y) => X.check(H$(...Y)), X.startsWith = (...Y) => X.check(B$(...Y)), X.endsWith = (...Y) => X.check(z$(...Y)), X.min = (...Y) => X.check(v6(...Y)), X.max = (...Y) => X.check(l4(...Y)), X.length = (...Y) => X.check(m4(...Y)), X.nonempty = (...Y) => X.check(v6(1, ...Y)), X.lowercase = (Y) => X.check(J$(Y)), X.uppercase = (Y) => X.check(G$(Y)), X.trim = () => X.check(U$()), X.normalize = (...Y) => X.check(K$(...Y)), X.toLowerCase = () => X.check(V$()), X.toUpperCase = () => X.check(L$());
});
var oL = O("ZodString", (X, Q) => {
  IX.init(X, Q), oJ.init(X, Q), X.email = ($) => X.check(kQ(tL, $)), X.url = ($) => X.check(yQ(aL, $)), X.jwt = ($) => X.check(aQ(Vq, $)), X.emoji = ($) => X.check(gQ(sL, $)), X.guid = ($) => X.check(g4(iJ, $)), X.uuid = ($) => X.check(vQ(i4, $)), X.uuidv4 = ($) => X.check(TQ(i4, $)), X.uuidv6 = ($) => X.check(_Q(i4, $)), X.uuidv7 = ($) => X.check(xQ(i4, $)), X.nanoid = ($) => X.check(fQ(eL, $)), X.guid = ($) => X.check(g4(iJ, $)), X.cuid = ($) => X.check(hQ(Xq, $)), X.cuid2 = ($) => X.check(uQ(Qq, $)), X.ulid = ($) => X.check(lQ($q, $)), X.base64 = ($) => X.check(rQ(zq, $)), X.base64url = ($) => X.check(oQ(Kq, $)), X.xid = ($) => X.check(mQ(Yq, $)), X.ksuid = ($) => X.check(cQ(Wq, $)), X.ipv4 = ($) => X.check(pQ(Jq, $)), X.ipv6 = ($) => X.check(dQ(Gq, $)), X.cidrv4 = ($) => X.check(iQ(Hq, $)), X.cidrv6 = ($) => X.check(nQ(Bq, $)), X.e164 = ($) => X.check(tQ(Uq, $)), X.datetime = ($) => X.check(w$($)), X.date = ($) => X.check(A$($)), X.time = ($) => X.check(M$($)), X.duration = ($) => X.check(j$($));
});
function D(X) {
  return CQ(oL, X);
}
var H0 = O("ZodStringFormat", (X, Q) => {
  W0.init(X, Q), oJ.init(X, Q);
});
var tL = O("ZodEmail", (X, Q) => {
  d9.init(X, Q), H0.init(X, Q);
});
var iJ = O("ZodGUID", (X, Q) => {
  c9.init(X, Q), H0.init(X, Q);
});
var i4 = O("ZodUUID", (X, Q) => {
  p9.init(X, Q), H0.init(X, Q);
});
var aL = O("ZodURL", (X, Q) => {
  i9.init(X, Q), H0.init(X, Q);
});
var sL = O("ZodEmoji", (X, Q) => {
  n9.init(X, Q), H0.init(X, Q);
});
var eL = O("ZodNanoID", (X, Q) => {
  r9.init(X, Q), H0.init(X, Q);
});
var Xq = O("ZodCUID", (X, Q) => {
  o9.init(X, Q), H0.init(X, Q);
});
var Qq = O("ZodCUID2", (X, Q) => {
  t9.init(X, Q), H0.init(X, Q);
});
var $q = O("ZodULID", (X, Q) => {
  a9.init(X, Q), H0.init(X, Q);
});
var Yq = O("ZodXID", (X, Q) => {
  s9.init(X, Q), H0.init(X, Q);
});
var Wq = O("ZodKSUID", (X, Q) => {
  e9.init(X, Q), H0.init(X, Q);
});
var Jq = O("ZodIPv4", (X, Q) => {
  XQ.init(X, Q), H0.init(X, Q);
});
var Gq = O("ZodIPv6", (X, Q) => {
  QQ.init(X, Q), H0.init(X, Q);
});
var Hq = O("ZodCIDRv4", (X, Q) => {
  $Q.init(X, Q), H0.init(X, Q);
});
var Bq = O("ZodCIDRv6", (X, Q) => {
  YQ.init(X, Q), H0.init(X, Q);
});
var zq = O("ZodBase64", (X, Q) => {
  WQ.init(X, Q), H0.init(X, Q);
});
var Kq = O("ZodBase64URL", (X, Q) => {
  JQ.init(X, Q), H0.init(X, Q);
});
var Uq = O("ZodE164", (X, Q) => {
  GQ.init(X, Q), H0.init(X, Q);
});
var Vq = O("ZodJWT", (X, Q) => {
  HQ.init(X, Q), H0.init(X, Q);
});
var tJ = O("ZodNumber", (X, Q) => {
  T4.init(X, Q), z0.init(X, Q), X.gt = (Y, W) => X.check(h4(Y, W)), X.gte = (Y, W) => X.check(bX(Y, W)), X.min = (Y, W) => X.check(bX(Y, W)), X.lt = (Y, W) => X.check(f4(Y, W)), X.lte = (Y, W) => X.check(EX(Y, W)), X.max = (Y, W) => X.check(EX(Y, W)), X.int = (Y) => X.check(nJ(Y)), X.safe = (Y) => X.check(nJ(Y)), X.positive = (Y) => X.check(h4(0, Y)), X.nonnegative = (Y) => X.check(bX(0, Y)), X.negative = (Y) => X.check(f4(0, Y)), X.nonpositive = (Y) => X.check(EX(0, Y)), X.multipleOf = (Y, W) => X.check(u4(Y, W)), X.step = (Y, W) => X.check(u4(Y, W)), X.finite = () => X;
  let $ = X._zod.bag;
  X.minValue = Math.max($.minimum ?? Number.NEGATIVE_INFINITY, $.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, X.maxValue = Math.min($.maximum ?? Number.POSITIVE_INFINITY, $.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, X.isInt = ($.format ?? "").includes("int") || Number.isSafeInteger($.multipleOf ?? 0.5), X.isFinite = true, X.format = $.format ?? null;
});
function Q0(X) {
  return sQ(tJ, X);
}
var Lq = O("ZodNumberFormat", (X, Q) => {
  BQ.init(X, Q), tJ.init(X, Q);
});
function nJ(X) {
  return eQ(Lq, X);
}
var qq = O("ZodBoolean", (X, Q) => {
  zQ.init(X, Q), z0.init(X, Q);
});
function M0(X) {
  return X$(qq, X);
}
var Fq = O("ZodNull", (X, Q) => {
  KQ.init(X, Q), z0.init(X, Q);
});
function E$(X) {
  return Q$(Fq, X);
}
var Nq = O("ZodUnknown", (X, Q) => {
  UQ.init(X, Q), z0.init(X, Q);
});
function N0() {
  return $$(Nq);
}
var Oq = O("ZodNever", (X, Q) => {
  VQ.init(X, Q), z0.init(X, Q);
});
function Dq(X) {
  return Y$(Oq, X);
}
var wq = O("ZodArray", (X, Q) => {
  LQ.init(X, Q), z0.init(X, Q), X.element = Q.element, X.min = ($, Y) => X.check(v6($, Y)), X.nonempty = ($) => X.check(v6(1, $)), X.max = ($, Y) => X.check(l4($, Y)), X.length = ($, Y) => X.check(m4($, Y)), X.unwrap = () => X.element;
});
function r(X, Q) {
  return TJ(wq, X, Q);
}
var aJ = O("ZodObject", (X, Q) => {
  _4.init(X, Q), z0.init(X, Q), i.defineLazy(X, "shape", () => Q.shape), X.keyof = () => j0(Object.keys(X._zod.def.shape)), X.catchall = ($) => X.clone({ ...X._zod.def, catchall: $ }), X.passthrough = () => X.clone({ ...X._zod.def, catchall: N0() }), X.loose = () => X.clone({ ...X._zod.def, catchall: N0() }), X.strict = () => X.clone({ ...X._zod.def, catchall: Dq() }), X.strip = () => X.clone({ ...X._zod.def, catchall: undefined }), X.extend = ($) => {
    return i.extend(X, $);
  }, X.merge = ($) => i.merge(X, $), X.pick = ($) => i.pick(X, $), X.omit = ($) => i.omit(X, $), X.partial = (...$) => i.partial(X5, X, $[0]), X.required = (...$) => i.required(Q5, X, $[0]);
});
function E(X, Q) {
  let $ = { type: "object", get shape() {
    return i.assignProp(this, "shape", { ...X }), this.shape;
  }, ...i.normalizeParams(Q) };
  return new aJ($);
}
function c0(X, Q) {
  return new aJ({ type: "object", get shape() {
    return i.assignProp(this, "shape", { ...X }), this.shape;
  }, catchall: N0(), ...i.normalizeParams(Q) });
}
var sJ = O("ZodUnion", (X, Q) => {
  x4.init(X, Q), z0.init(X, Q), X.options = Q.options;
});
function J0(X, Q) {
  return new sJ({ type: "union", options: X, ...i.normalizeParams(Q) });
}
var Aq = O("ZodDiscriminatedUnion", (X, Q) => {
  sJ.init(X, Q), qQ.init(X, Q);
});
function b$(X, Q, $) {
  return new Aq({ type: "union", options: Q, discriminator: X, ...i.normalizeParams($) });
}
var Mq = O("ZodIntersection", (X, Q) => {
  FQ.init(X, Q), z0.init(X, Q);
});
function n4(X, Q) {
  return new Mq({ type: "intersection", left: X, right: Q });
}
var jq = O("ZodRecord", (X, Q) => {
  NQ.init(X, Q), z0.init(X, Q), X.keyType = Q.keyType, X.valueType = Q.valueType;
});
function O0(X, Q, $) {
  return new jq({ type: "record", keyType: X, valueType: Q, ...i.normalizeParams($) });
}
var R$ = O("ZodEnum", (X, Q) => {
  OQ.init(X, Q), z0.init(X, Q), X.enum = Q.entries, X.options = Object.values(Q.entries);
  let $ = new Set(Object.keys(Q.entries));
  X.extract = (Y, W) => {
    let J = {};
    for (let G of Y)
      if ($.has(G))
        J[G] = Q.entries[G];
      else
        throw Error(`Key ${G} not found in enum`);
    return new R$({ ...Q, checks: [], ...i.normalizeParams(W), entries: J });
  }, X.exclude = (Y, W) => {
    let J = { ...Q.entries };
    for (let G of Y)
      if ($.has(G))
        delete J[G];
      else
        throw Error(`Key ${G} not found in enum`);
    return new R$({ ...Q, checks: [], ...i.normalizeParams(W), entries: J });
  };
});
function j0(X, Q) {
  let $ = Array.isArray(X) ? Object.fromEntries(X.map((Y) => [Y, Y])) : X;
  return new R$({ type: "enum", entries: $, ...i.normalizeParams(Q) });
}
var Rq = O("ZodLiteral", (X, Q) => {
  DQ.init(X, Q), z0.init(X, Q), X.values = new Set(Q.values), Object.defineProperty(X, "value", { get() {
    if (Q.values.length > 1)
      throw Error("This schema contains multiple valid literal values. Use `.values` instead.");
    return Q.values[0];
  } });
});
function T(X, Q) {
  return new Rq({ type: "literal", values: Array.isArray(X) ? X : [X], ...i.normalizeParams(Q) });
}
var Iq = O("ZodTransform", (X, Q) => {
  wQ.init(X, Q), z0.init(X, Q), X._zod.parse = ($, Y) => {
    $.addIssue = (J) => {
      if (typeof J === "string")
        $.issues.push(i.issue(J, $.value, Q));
      else {
        let G = J;
        if (G.fatal)
          G.continue = false;
        G.code ?? (G.code = "custom"), G.input ?? (G.input = $.value), G.inst ?? (G.inst = X), G.continue ?? (G.continue = true), $.issues.push(i.issue(G));
      }
    };
    let W = Q.transform($.value, $);
    if (W instanceof Promise)
      return W.then((J) => {
        return $.value = J, $;
      });
    return $.value = W, $;
  };
});
function eJ(X) {
  return new Iq({ type: "transform", transform: X });
}
var X5 = O("ZodOptional", (X, Q) => {
  AQ.init(X, Q), z0.init(X, Q), X.unwrap = () => X._zod.def.innerType;
});
function v(X) {
  return new X5({ type: "optional", innerType: X });
}
var Eq = O("ZodNullable", (X, Q) => {
  MQ.init(X, Q), z0.init(X, Q), X.unwrap = () => X._zod.def.innerType;
});
function rJ(X) {
  return new Eq({ type: "nullable", innerType: X });
}
var bq = O("ZodDefault", (X, Q) => {
  jQ.init(X, Q), z0.init(X, Q), X.unwrap = () => X._zod.def.innerType, X.removeDefault = X.unwrap;
});
function Pq(X, Q) {
  return new bq({ type: "default", innerType: X, get defaultValue() {
    return typeof Q === "function" ? Q() : Q;
  } });
}
var Sq = O("ZodPrefault", (X, Q) => {
  RQ.init(X, Q), z0.init(X, Q), X.unwrap = () => X._zod.def.innerType;
});
function Zq(X, Q) {
  return new Sq({ type: "prefault", innerType: X, get defaultValue() {
    return typeof Q === "function" ? Q() : Q;
  } });
}
var Q5 = O("ZodNonOptional", (X, Q) => {
  IQ.init(X, Q), z0.init(X, Q), X.unwrap = () => X._zod.def.innerType;
});
function Cq(X, Q) {
  return new Q5({ type: "nonoptional", innerType: X, ...i.normalizeParams(Q) });
}
var kq = O("ZodCatch", (X, Q) => {
  EQ.init(X, Q), z0.init(X, Q), X.unwrap = () => X._zod.def.innerType, X.removeCatch = X.unwrap;
});
function vq(X, Q) {
  return new kq({ type: "catch", innerType: X, catchValue: typeof Q === "function" ? Q : () => Q });
}
var Tq = O("ZodPipe", (X, Q) => {
  bQ.init(X, Q), z0.init(X, Q), X.in = Q.in, X.out = Q.out;
});
function I$(X, Q) {
  return new Tq({ type: "pipe", in: X, out: Q });
}
var _q = O("ZodReadonly", (X, Q) => {
  PQ.init(X, Q), z0.init(X, Q);
});
function xq(X) {
  return new _q({ type: "readonly", innerType: X });
}
var $5 = O("ZodCustom", (X, Q) => {
  SQ.init(X, Q), z0.init(X, Q);
});
function yq(X, Q) {
  let $ = new A0({ check: "custom", ...i.normalizeParams(Q) });
  return $._zod.check = X, $;
}
function Y5(X, Q) {
  return q$($5, X ?? (() => true), Q);
}
function gq(X, Q = {}) {
  return F$($5, X, Q);
}
function fq(X, Q) {
  let $ = yq((Y) => {
    return Y.addIssue = (W) => {
      if (typeof W === "string")
        Y.issues.push(i.issue(W, Y.value, $._zod.def));
      else {
        let J = W;
        if (J.fatal)
          J.continue = false;
        J.code ?? (J.code = "custom"), J.input ?? (J.input = Y.value), J.inst ?? (J.inst = $), J.continue ?? (J.continue = !$._zod.def.abort), Y.issues.push(i.issue(J));
      }
    }, X(Y.value, Y);
  }, Q);
  return $;
}
function P$(X, Q) {
  return I$(eJ(X), Q);
}
u0(ZQ());
var z1 = "io.modelcontextprotocol/related-task";
var o4 = "2.0";
var B1 = Y5((X) => X !== null && (typeof X === "object" || typeof X === "function"));
var J5 = J0([D(), Q0().int()]);
var G5 = D();
var hq = c0({ ttl: J0([Q0(), E$()]).optional(), pollInterval: Q0().optional() });
var Z$ = c0({ taskId: D() });
var uq = c0({ progressToken: J5.optional(), [z1]: Z$.optional() });
var _0 = c0({ task: hq.optional(), _meta: uq.optional() });
var R0 = E({ method: D(), params: _0.optional() });
var G6 = c0({ _meta: E({ [z1]: v(Z$) }).passthrough().optional() });
var p0 = E({ method: D(), params: G6.optional() });
var P0 = c0({ _meta: c0({ [z1]: Z$.optional() }).optional() });
var t4 = J0([D(), Q0().int()]);
var H5 = E({ jsonrpc: T(o4), id: t4, ...R0.shape }).strict();
var B5 = E({ jsonrpc: T(o4), ...p0.shape }).strict();
var K5 = E({ jsonrpc: T(o4), id: t4, result: P0 }).strict();
var x;
(function(X) {
  X[X.ConnectionClosed = -32000] = "ConnectionClosed", X[X.RequestTimeout = -32001] = "RequestTimeout", X[X.ParseError = -32700] = "ParseError", X[X.InvalidRequest = -32600] = "InvalidRequest", X[X.MethodNotFound = -32601] = "MethodNotFound", X[X.InvalidParams = -32602] = "InvalidParams", X[X.InternalError = -32603] = "InternalError", X[X.UrlElicitationRequired = -32042] = "UrlElicitationRequired";
})(x || (x = {}));
var U5 = E({ jsonrpc: T(o4), id: t4, error: E({ code: Q0().int(), message: D(), data: v(N0()) }) }).strict();
var IZ = J0([H5, B5, K5, U5]);
var a4 = P0.strict();
var lq = G6.extend({ requestId: t4, reason: D().optional() });
var s4 = p0.extend({ method: T("notifications/cancelled"), params: lq });
var mq = E({ src: D(), mimeType: D().optional(), sizes: r(D()).optional() });
var CX = E({ icons: r(mq).optional() });
var x6 = E({ name: D(), title: D().optional() });
var L5 = x6.extend({ ...x6.shape, ...CX.shape, version: D(), websiteUrl: D().optional() });
var cq = n4(E({ applyDefaults: M0().optional() }), O0(D(), N0()));
var pq = P$((X) => {
  if (X && typeof X === "object" && !Array.isArray(X)) {
    if (Object.keys(X).length === 0)
      return { form: {} };
  }
  return X;
}, n4(E({ form: cq.optional(), url: B1.optional() }), O0(D(), N0()).optional()));
var dq = E({ list: v(E({}).passthrough()), cancel: v(E({}).passthrough()), requests: v(E({ sampling: v(E({ createMessage: v(E({}).passthrough()) }).passthrough()), elicitation: v(E({ create: v(E({}).passthrough()) }).passthrough()) }).passthrough()) }).passthrough();
var iq = E({ list: v(E({}).passthrough()), cancel: v(E({}).passthrough()), requests: v(E({ tools: v(E({ call: v(E({}).passthrough()) }).passthrough()) }).passthrough()) }).passthrough();
var nq = E({ experimental: O0(D(), B1).optional(), sampling: E({ context: B1.optional(), tools: B1.optional() }).optional(), elicitation: pq.optional(), roots: E({ listChanged: M0().optional() }).optional(), tasks: v(dq) });
var rq = _0.extend({ protocolVersion: D(), capabilities: nq, clientInfo: L5 });
var k$ = R0.extend({ method: T("initialize"), params: rq });
var oq = E({ experimental: O0(D(), B1).optional(), logging: B1.optional(), completions: B1.optional(), prompts: v(E({ listChanged: v(M0()) })), resources: E({ subscribe: M0().optional(), listChanged: M0().optional() }).optional(), tools: E({ listChanged: M0().optional() }).optional(), tasks: v(iq) }).passthrough();
var tq = P0.extend({ protocolVersion: D(), capabilities: oq, serverInfo: L5, instructions: D().optional() });
var v$ = p0.extend({ method: T("notifications/initialized") });
var e4 = R0.extend({ method: T("ping") });
var aq = E({ progress: Q0(), total: v(Q0()), message: v(D()) });
var sq = E({ ...G6.shape, ...aq.shape, progressToken: J5 });
var X8 = p0.extend({ method: T("notifications/progress"), params: sq });
var eq = _0.extend({ cursor: G5.optional() });
var kX = R0.extend({ params: eq.optional() });
var vX = P0.extend({ nextCursor: v(G5) });
var TX = E({ taskId: D(), status: j0(["working", "input_required", "completed", "failed", "cancelled"]), ttl: J0([Q0(), E$()]), createdAt: D(), lastUpdatedAt: D(), pollInterval: v(Q0()), statusMessage: v(D()) });
var y6 = P0.extend({ task: TX });
var XF = G6.merge(TX);
var _X = p0.extend({ method: T("notifications/tasks/status"), params: XF });
var Q8 = R0.extend({ method: T("tasks/get"), params: _0.extend({ taskId: D() }) });
var $8 = P0.merge(TX);
var Y8 = R0.extend({ method: T("tasks/result"), params: _0.extend({ taskId: D() }) });
var W8 = kX.extend({ method: T("tasks/list") });
var J8 = vX.extend({ tasks: r(TX) });
var q5 = R0.extend({ method: T("tasks/cancel"), params: _0.extend({ taskId: D() }) });
var F5 = P0.merge(TX);
var N5 = E({ uri: D(), mimeType: v(D()), _meta: O0(D(), N0()).optional() });
var O5 = N5.extend({ text: D() });
var T$ = D().refine((X) => {
  try {
    return atob(X), true;
  } catch (Q) {
    return false;
  }
}, { message: "Invalid Base64 string" });
var D5 = N5.extend({ blob: T$ });
var g6 = E({ audience: r(j0(["user", "assistant"])).optional(), priority: Q0().min(0).max(1).optional(), lastModified: PX.datetime({ offset: true }).optional() });
var w5 = E({ ...x6.shape, ...CX.shape, uri: D(), description: v(D()), mimeType: v(D()), annotations: g6.optional(), _meta: v(c0({})) });
var QF = E({ ...x6.shape, ...CX.shape, uriTemplate: D(), description: v(D()), mimeType: v(D()), annotations: g6.optional(), _meta: v(c0({})) });
var G8 = kX.extend({ method: T("resources/list") });
var $F = vX.extend({ resources: r(w5) });
var H8 = kX.extend({ method: T("resources/templates/list") });
var YF = vX.extend({ resourceTemplates: r(QF) });
var _$ = _0.extend({ uri: D() });
var WF = _$;
var B8 = R0.extend({ method: T("resources/read"), params: WF });
var JF = P0.extend({ contents: r(J0([O5, D5])) });
var GF = p0.extend({ method: T("notifications/resources/list_changed") });
var HF = _$;
var BF = R0.extend({ method: T("resources/subscribe"), params: HF });
var zF = _$;
var KF = R0.extend({ method: T("resources/unsubscribe"), params: zF });
var UF = G6.extend({ uri: D() });
var VF = p0.extend({ method: T("notifications/resources/updated"), params: UF });
var LF = E({ name: D(), description: v(D()), required: v(M0()) });
var qF = E({ ...x6.shape, ...CX.shape, description: v(D()), arguments: v(r(LF)), _meta: v(c0({})) });
var z8 = kX.extend({ method: T("prompts/list") });
var FF = vX.extend({ prompts: r(qF) });
var NF = _0.extend({ name: D(), arguments: O0(D(), D()).optional() });
var K8 = R0.extend({ method: T("prompts/get"), params: NF });
var x$ = E({ type: T("text"), text: D(), annotations: g6.optional(), _meta: O0(D(), N0()).optional() });
var y$ = E({ type: T("image"), data: T$, mimeType: D(), annotations: g6.optional(), _meta: O0(D(), N0()).optional() });
var g$ = E({ type: T("audio"), data: T$, mimeType: D(), annotations: g6.optional(), _meta: O0(D(), N0()).optional() });
var OF = E({ type: T("tool_use"), name: D(), id: D(), input: E({}).passthrough(), _meta: v(E({}).passthrough()) }).passthrough();
var DF = E({ type: T("resource"), resource: J0([O5, D5]), annotations: g6.optional(), _meta: O0(D(), N0()).optional() });
var wF = w5.extend({ type: T("resource_link") });
var f$ = J0([x$, y$, g$, wF, DF]);
var AF = E({ role: j0(["user", "assistant"]), content: f$ });
var MF = P0.extend({ description: v(D()), messages: r(AF) });
var jF = p0.extend({ method: T("notifications/prompts/list_changed") });
var RF = E({ title: D().optional(), readOnlyHint: M0().optional(), destructiveHint: M0().optional(), idempotentHint: M0().optional(), openWorldHint: M0().optional() });
var IF = E({ taskSupport: j0(["required", "optional", "forbidden"]).optional() });
var A5 = E({ ...x6.shape, ...CX.shape, description: D().optional(), inputSchema: E({ type: T("object"), properties: O0(D(), B1).optional(), required: r(D()).optional() }).catchall(N0()), outputSchema: E({ type: T("object"), properties: O0(D(), B1).optional(), required: r(D()).optional() }).catchall(N0()).optional(), annotations: v(RF), execution: v(IF), _meta: O0(D(), N0()).optional() });
var U8 = kX.extend({ method: T("tools/list") });
var EF = vX.extend({ tools: r(A5) });
var V8 = P0.extend({ content: r(f$).default([]), structuredContent: O0(D(), N0()).optional(), isError: v(M0()) });
var EZ = V8.or(P0.extend({ toolResult: N0() }));
var bF = _0.extend({ name: D(), arguments: v(O0(D(), N0())) });
var f6 = R0.extend({ method: T("tools/call"), params: bF });
var PF = p0.extend({ method: T("notifications/tools/list_changed") });
var xX = j0(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"]);
var SF = _0.extend({ level: xX });
var h$ = R0.extend({ method: T("logging/setLevel"), params: SF });
var ZF = G6.extend({ level: xX, logger: D().optional(), data: N0() });
var CF = p0.extend({ method: T("notifications/message"), params: ZF });
var kF = E({ name: D().optional() });
var vF = E({ hints: v(r(kF)), costPriority: v(Q0().min(0).max(1)), speedPriority: v(Q0().min(0).max(1)), intelligencePriority: v(Q0().min(0).max(1)) });
var TF = E({ mode: v(j0(["auto", "required", "none"])) });
var _F = E({ type: T("tool_result"), toolUseId: D().describe("The unique identifier for the corresponding tool call."), content: r(f$).default([]), structuredContent: E({}).passthrough().optional(), isError: v(M0()), _meta: v(E({}).passthrough()) }).passthrough();
var xF = b$("type", [x$, y$, g$]);
var r4 = b$("type", [x$, y$, g$, OF, _F]);
var yF = E({ role: j0(["user", "assistant"]), content: J0([r4, r(r4)]), _meta: v(E({}).passthrough()) }).passthrough();
var gF = _0.extend({ messages: r(yF), modelPreferences: vF.optional(), systemPrompt: D().optional(), includeContext: j0(["none", "thisServer", "allServers"]).optional(), temperature: Q0().optional(), maxTokens: Q0().int(), stopSequences: r(D()).optional(), metadata: B1.optional(), tools: v(r(A5)), toolChoice: v(TF) });
var fF = R0.extend({ method: T("sampling/createMessage"), params: gF });
var u$ = P0.extend({ model: D(), stopReason: v(j0(["endTurn", "stopSequence", "maxTokens"]).or(D())), role: j0(["user", "assistant"]), content: xF });
var l$ = P0.extend({ model: D(), stopReason: v(j0(["endTurn", "stopSequence", "maxTokens", "toolUse"]).or(D())), role: j0(["user", "assistant"]), content: J0([r4, r(r4)]) });
var hF = E({ type: T("boolean"), title: D().optional(), description: D().optional(), default: M0().optional() });
var uF = E({ type: T("string"), title: D().optional(), description: D().optional(), minLength: Q0().optional(), maxLength: Q0().optional(), format: j0(["email", "uri", "date", "date-time"]).optional(), default: D().optional() });
var lF = E({ type: j0(["number", "integer"]), title: D().optional(), description: D().optional(), minimum: Q0().optional(), maximum: Q0().optional(), default: Q0().optional() });
var mF = E({ type: T("string"), title: D().optional(), description: D().optional(), enum: r(D()), default: D().optional() });
var cF = E({ type: T("string"), title: D().optional(), description: D().optional(), oneOf: r(E({ const: D(), title: D() })), default: D().optional() });
var pF = E({ type: T("string"), title: D().optional(), description: D().optional(), enum: r(D()), enumNames: r(D()).optional(), default: D().optional() });
var dF = J0([mF, cF]);
var iF = E({ type: T("array"), title: D().optional(), description: D().optional(), minItems: Q0().optional(), maxItems: Q0().optional(), items: E({ type: T("string"), enum: r(D()) }), default: r(D()).optional() });
var nF = E({ type: T("array"), title: D().optional(), description: D().optional(), minItems: Q0().optional(), maxItems: Q0().optional(), items: E({ anyOf: r(E({ const: D(), title: D() })) }), default: r(D()).optional() });
var rF = J0([iF, nF]);
var oF = J0([pF, dF, rF]);
var tF = J0([oF, hF, uF, lF]);
var aF = _0.extend({ mode: T("form").optional(), message: D(), requestedSchema: E({ type: T("object"), properties: O0(D(), tF), required: r(D()).optional() }) });
var sF = _0.extend({ mode: T("url"), message: D(), elicitationId: D(), url: D().url() });
var eF = J0([aF, sF]);
var XN = R0.extend({ method: T("elicitation/create"), params: eF });
var QN = G6.extend({ elicitationId: D() });
var $N = p0.extend({ method: T("notifications/elicitation/complete"), params: QN });
var L8 = P0.extend({ action: j0(["accept", "decline", "cancel"]), content: P$((X) => X === null ? undefined : X, O0(D(), J0([D(), Q0(), M0(), r(D())])).optional()) });
var YN = E({ type: T("ref/resource"), uri: D() });
var WN = E({ type: T("ref/prompt"), name: D() });
var JN = _0.extend({ ref: J0([WN, YN]), argument: E({ name: D(), value: D() }), context: E({ arguments: O0(D(), D()).optional() }).optional() });
var q8 = R0.extend({ method: T("completion/complete"), params: JN });
var GN = P0.extend({ completion: c0({ values: r(D()).max(100), total: v(Q0().int()), hasMore: v(M0()) }) });
var HN = E({ uri: D().startsWith("file://"), name: D().optional(), _meta: O0(D(), N0()).optional() });
var BN = R0.extend({ method: T("roots/list") });
var m$ = P0.extend({ roots: r(HN) });
var zN = p0.extend({ method: T("notifications/roots/list_changed") });
var bZ = J0([e4, k$, q8, h$, K8, z8, G8, H8, B8, BF, KF, f6, U8, Q8, Y8, W8]);
var PZ = J0([s4, X8, v$, zN, _X]);
var SZ = J0([a4, u$, l$, L8, m$, $8, J8, y6]);
var ZZ = J0([e4, fF, XN, BN, Q8, Y8, W8]);
var CZ = J0([s4, X8, CF, VF, GF, PF, jF, _X, $N]);
var kZ = J0([a4, tq, GN, MF, FF, $F, YF, JF, V8, EF, $8, J8, y6]);
var E5 = Symbol("Let zodToJsonSchema decide on which parser to use");
var VN = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
var uz = U7(pY(), 1);
var lz = U7(hz(), 1);
var dz = Symbol.for("mcp.completable");
var pz;
(function(X) {
  X.Completable = "McpCompletable";
})(pz || (pz = {}));
function Qx({ prompt: X, options: Q }) {
  let { systemPrompt: $, settingSources: Y, sandbox: W, ...J } = Q ?? {}, G, H;
  if ($ === undefined)
    G = "";
  else if (typeof $ === "string")
    G = $;
  else if ($.type === "preset")
    H = $.append;
  let B = J.pathToClaudeCodeExecutable;
  if (!B) {
    let F6 = yI(import.meta.url), N6 = az(F6, "..");
    B = az(N6, "cli.js");
  }
  process.env.CLAUDE_AGENT_SDK_VERSION = "0.2.39";
  let { abortController: z2 = O6(), additionalDirectories: K = [], agent: V, agents: L, allowedTools: U = [], betas: F, canUseTool: q, continue: N, cwd: w, debug: M, debugFile: R, disallowedTools: S = [], tools: C, env: K0, executable: U0 = R6() ? "bun" : "node", executableArgs: s = [], extraArgs: D0 = {}, fallbackModel: q0, enableFileCheckpointing: L1, forkSession: P1, hooks: o1, includePartialMessages: m, persistSession: $9, thinking: t1, effort: t6, maxThinkingTokens: a6, maxTurns: H4, maxBudgetUsd: B4, mcpServers: E0, model: S1, outputFormat: L6, permissionMode: sz = "default", allowDangerouslySkipPermissions: ez = false, permissionPromptToolName: XK, plugins: QK, resume: $K, resumeSessionAt: YK, sessionId: WK, stderr: JK, strictMcpConfig: GK } = J, H7 = L6?.type === "json_schema" ? L6.schema : undefined, q6 = K0;
  if (!q6)
    q6 = { ...process.env };
  if (!q6.CLAUDE_CODE_ENTRYPOINT)
    q6.CLAUDE_CODE_ENTRYPOINT = "sdk-ts";
  if (L1)
    q6.CLAUDE_CODE_ENABLE_SDK_FILE_CHECKPOINTING = "true";
  if (!B)
    throw Error("pathToClaudeCodeExecutable is required");
  let Y9 = {}, B7 = new Map;
  if (E0)
    for (let [F6, N6] of Object.entries(E0))
      if (N6.type === "sdk" && "instance" in N6)
        B7.set(F6, N6.instance), Y9[F6] = { type: "sdk", name: F6 };
      else
        Y9[F6] = N6;
  let HK = typeof X === "string", z4 = a6;
  if (t1)
    switch (t1.type) {
      case "adaptive":
        z4 = undefined;
        break;
      case "enabled":
        z4 = t1.budgetTokens;
        break;
      case "disabled":
        z4 = 0;
        break;
    }
  let z7 = new e6({ abortController: z2, additionalDirectories: K, agent: V, betas: F, cwd: w, debug: M, debugFile: R, executable: U0, executableArgs: s, extraArgs: D0, pathToClaudeCodeExecutable: B, env: q6, forkSession: P1, stderr: JK, maxThinkingTokens: z4, effort: t6, maxTurns: H4, maxBudgetUsd: B4, model: S1, fallbackModel: q0, jsonSchema: H7, permissionMode: sz, allowDangerouslySkipPermissions: ez, permissionPromptToolName: XK, continueConversation: N, resume: $K, resumeSessionAt: YK, sessionId: WK, settingSources: Y ?? [], allowedTools: U, disallowedTools: S, tools: C, mcpServers: Y9, strictMcpConfig: GK, canUseTool: !!q, hooks: !!o1, includePartialMessages: m, persistSession: $9, plugins: QK, sandbox: W, spawnClaudeCodeProcess: J.spawnClaudeCodeProcess }), K7 = new QX(z7, HK, q, o1, z2, B7, H7, { systemPrompt: G, appendSystemPrompt: H, agents: L });
  if (typeof X === "string")
    z7.write(Z0({ type: "user", session_id: "", message: { role: "user", content: [{ type: "text", text: X }] }, parent_tool_use_id: null }) + `
`);
  else
    K7.streamInput(X);
  return K7;
}

// src/utils/draft.ts
import { writeFile, readFile as readFile2, mkdir } from "fs/promises";
import { existsSync as existsSync2 } from "fs";
import { join as join2 } from "path";
var STOP_WORDS = new Set([
  "a",
  "an",
  "the",
  "to",
  "for",
  "in",
  "of",
  "with",
  "and",
  "or",
  "but",
  "is",
  "it",
  "on",
  "at",
  "by",
  "from",
  "add",
  "create",
  "implement",
  "build",
  "make",
  "update",
  "fix",
  "want",
  "need",
  "please",
  "should",
  "would",
  "like",
  "can",
  "do",
  "that",
  "this",
  "be",
  "have",
  "has",
  "my",
  "our",
  "i",
  "we",
  "me",
  "new"
]);
function generateTimestampPlanId() {
  const now = new Date;
  const pad = (n3) => String(n3).padStart(2, "0");
  return `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;
}
function generateSlugPlanId(description) {
  const words = description.toLowerCase().replace(/[^a-z0-9\s-]/g, "").split(/[\s-]+/).filter((w) => w.length > 0 && !STOP_WORDS.has(w));
  if (words.length === 0)
    return generateTimestampPlanId();
  return words.slice(0, 3).join("-").slice(0, 30);
}
function resolveUniqueId(base, plansRoot) {
  if (!existsSync2(join2(plansRoot, base)))
    return base;
  for (let i3 = 2;i3 <= 9; i3++) {
    const candidate = `${base}-${i3}`;
    if (!existsSync2(join2(plansRoot, candidate)))
      return candidate;
  }
  return generateTimestampPlanId();
}
async function createDraft(name, userGoal, intent, planId, plansDir) {
  const resolvedPlansDir = plansDir ?? getConfig().plansDir;
  const plansRoot = join2(process.cwd(), resolvedPlansDir);
  const resolvedPlanId = planId ?? resolveUniqueId(generateSlugPlanId(userGoal), plansRoot);
  const slug = name.toLowerCase().replace(/\s+/g, "-");
  const planDir = join2(plansRoot, resolvedPlanId);
  const draftPath = join2(planDir, `${slug}.json`);
  if (!existsSync2(planDir)) {
    await mkdir(planDir, { recursive: true });
  }
  const draft = {
    name,
    planId: resolvedPlanId,
    created: new Date().toISOString(),
    lastUpdated: new Date().toISOString(),
    findings: {
      intent,
      userGoal,
      confirmedRequirements: [],
      scopeInclusions: [],
      scopeExclusions: [],
      technicalDecisions: {},
      constraints: [],
      assumptions: [],
      openQuestions: []
    }
  };
  await writeFile(draftPath, JSON.stringify(draft, null, 2));
  return { draftPath, planId: resolvedPlanId };
}
async function readDraft(draftPath) {
  const content = await readFile2(draftPath, "utf-8");
  return JSON.parse(content);
}

// src/utils/question-strategies.ts
function getQuestionStrategy(intent) {
  switch (intent) {
    case "trivial":
      return {
        researchFirst: false,
        focusAreas: ["scope validation"],
        initialQuestions: [
          "Is this change purely cosmetic/trivial with no behavioral impact?",
          "Are there any files or areas that should NOT be touched?"
        ],
        researchPrompts: []
      };
    case "refactoring":
      return {
        researchFirst: true,
        focusAreas: ["behavior preservation", "test coverage", "safety"],
        initialQuestions: [
          "What specific behavior must be preserved exactly as-is?",
          "Are there tests covering this code? If not, should we add them first?",
          "What is the rollback plan if issues are discovered?"
        ],
        researchPrompts: [
          "Search for files matching the refactoring target",
          "Check test coverage for affected modules",
          "Look for related configuration files"
        ]
      };
    case "build-from-scratch":
      return {
        researchFirst: true,
        focusAreas: ["existing patterns", "dependencies", "architecture"],
        initialQuestions: [
          "Should this follow existing patterns in the codebase?",
          "Are there similar features I can learn from?",
          "What libraries/frameworks should be used (or avoided)?"
        ],
        researchPrompts: [
          "Find similar features in the codebase",
          "Check project structure and module patterns",
          "Identify integration points and entry files"
        ]
      };
    case "mid-sized":
      return {
        researchFirst: true,
        focusAreas: ["scope boundaries", "deliverables"],
        initialQuestions: [
          "What are the MUST-HAVE vs NICE-TO-HAVE features?",
          "What should be explicitly EXCLUDED from this work?",
          'When is this considered "done"?'
        ],
        researchPrompts: [
          "Find files related to the feature area",
          "Check existing test patterns in the project"
        ]
      };
    case "architecture":
      return {
        researchFirst: true,
        focusAreas: ["long-term impact", "trade-offs", "alternatives"],
        initialQuestions: [
          "What problem is this architectural change solving?",
          "What are the trade-offs vs alternative approaches?",
          "What is the migration path for existing code?"
        ],
        researchPrompts: [
          "Map current architecture — entry points, layers, module boundaries",
          "Find affected integration points and cross-cutting concerns",
          "Check for existing migration patterns or version compatibility"
        ]
      };
  }
}
function classifyIntent(userGoal) {
  const goal = userGoal.toLowerCase();
  if (goal.match(/\b(typo|fix\s+typo|rename|update\s+comment|formatting)\b/)) {
    return "trivial";
  }
  if (goal.match(/\b(refactor|restructure|clean\s+up|reorganize)\b/)) {
    return "refactoring";
  }
  if (goal.match(/\b(architecture|redesign|migrate|scalability|framework)\b/)) {
    return "architecture";
  }
  if (goal.match(/\b(add|implement|create|build|new\s+feature)\b/)) {
    if (goal.length > 50 || goal.match(/\b(authentication|payment|api|database)\b/)) {
      return "build-from-scratch";
    }
    return "mid-sized";
  }
  return "mid-sized";
}

// src/phases/interview.ts
console.log("\uD83D\uDD0D [DEBUG] interview.ts module loaded");
async function runInterviewPhase(userGoal, planId, config2) {
  console.log("\uD83D\uDD0D [DEBUG] runInterviewPhase called with:", userGoal);
  console.log(`  \uD83D\uDCAC Starting interview phase...
`);
  const intent = classifyIntent(userGoal);
  console.log(`  Detected intent: ${intent}
`);
  const { draftPath, planId: resolvedPlanId } = await createDraft("interview", userGoal, intent, planId);
  console.log(`  Draft created: ${draftPath}
`);
  const strategy = getQuestionStrategy(intent);
  const interviewPrompt = buildInterviewPrompt(userGoal, intent, strategy, draftPath);
  console.log(`  \uD83E\uDD16 Launching interview agent...
`);
  const cfg = { ...getConfig(), ...config2 };
  const findings = await conductInterviewWithAgent(interviewPrompt, draftPath, cfg);
  console.log(`  ✅ Interview complete!
`);
  return { findings, draftPath, planId: resolvedPlanId };
}
async function conductInterviewWithAgent(prompt, draftPath, cfg) {
  try {
    for await (const message of Qx({
      prompt,
      options: {
        allowedTools: ["AskUserQuestion", "Read", "Write", "Edit"],
        permissionMode: cfg.permissionMode
      }
    })) {
      if (message.type === "result") {
        console.log(`  ✓ Interview agent completed
`);
        const draft2 = await readDraft(draftPath);
        return draft2.findings;
      }
    }
  } catch (error48) {
    console.error("  ✗ Interview agent failed:", error48);
    throw error48;
  }
  const draft = await readDraft(draftPath);
  return draft.findings;
}
function buildInterviewPrompt(userGoal, intent, strategy, draftPath) {
  return `
You are conducting a requirements interview for the following goal:

**Goal**: ${userGoal}
**Detected Intent**: ${intent}
**Draft File**: ${draftPath}

Your task is to gather complete requirements through an iterative interview process:

## Interview Strategy

**Focus Areas**: ${strategy.focusAreas.join(", ")}

**Initial Questions to Ask**:
${strategy.initialQuestions.map((q, i3) => `${i3 + 1}. ${q}`).join(`
`)}

## Process

1. **Ask Questions**: Use the AskUserQuestion tool to ask clarifying questions
   - Ask 1-2 questions at a time (don't overwhelm the user)
   - Focus on critical gaps first (core objective, scope boundaries)
   - Use specific, actionable questions
   - Provide meaningful options that help guide the user's thinking

2. **Update Draft**: After each answer, update the draft file at ${draftPath}
   - Use Read tool to read the current draft
   - Use Edit tool to update the JSON file
   - Categorize answers into the appropriate sections:
     * confirmedRequirements: Clear, validated requirements
     * scopeInclusions: Explicitly included features/areas
     * scopeExclusions: Explicitly excluded features/areas
     * technicalDecisions: Technology choices, patterns, approaches
     * constraints: Limitations, requirements, boundaries
     * assumptions: Things we're assuming to be true

3. **Evaluate Clearance**: After gathering answers, check if you have:
   - ✓ Core objective defined (clear requirements)
   - ✓ Scope boundaries established (inclusions AND exclusions)
   - ✓ No critical ambiguities (assumptions validated)
   - ✓ Technical approach decided (for non-trivial tasks)
   - ✓ No blocking questions remaining

4. **Iterate if Needed**: If clearance fails, ask follow-up questions to fill gaps

5. **Complete**: Once all 5 clearance items pass, finalize the draft and complete

## Example AskUserQuestion Usage

Use the AskUserQuestion tool with structured options to guide the user:

\`\`\`
AskUserQuestion({
  questions: [{
    question: "What should be explicitly EXCLUDED from this work?",
    header: "Scope",
    options: [
      { label: "OAuth integration", description: "Third-party authentication providers" },
      { label: "Social login", description: "Login with Google/GitHub/etc" },
      { label: "Password reset", description: "Forgot password flow" },
      { label: "Other", description: "I'll specify something else" }
    ],
    multiSelect: true
  }]
})
\`\`\`

## Important Guidelines

- ALWAYS use AskUserQuestion tool (not text-based questions)
- Update the draft file after EVERY answer using Edit tool
- Keep iterating until clearance passes
- Be specific and actionable in your questions
- Provide meaningful options that cover common scenarios
- Use multiSelect when multiple answers make sense
- Keep headers short (max 12 chars): "Scope", "Auth", "Tech", "Feature", etc.
- Make option labels concise (1-5 words)
- Use descriptions to explain implications and trade-offs

## Draft File Structure

The draft file is a JSON file with this structure:
\`\`\`json
{
  "userGoal": "...",
  "intent": "...",
  "findings": {
    "confirmedRequirements": [],
    "scopeInclusions": [],
    "scopeExclusions": [],
    "technicalDecisions": {},
    "constraints": [],
    "assumptions": [],
    "openQuestions": []
  }
}
\`\`\`

Update the findings object as you gather information from the user.

## Your Task

Start by reading the draft file, then begin asking questions based on the strategy above.
Continue until you have enough information to pass the clearance check.
`.trim();
}
// src/phases/research.ts
async function runResearchPhase(userGoal, interviewFindings, config2) {
  const cfg = { ...getConfig(), ...config2 };
  console.log("  \uD83D\uDD0D Starting codebase analysis...");
  const contextSection = interviewFindings ? `
**Interview Context:**
- Intent: ${interviewFindings.intent}
- Confirmed Requirements: ${interviewFindings.confirmedRequirements.join(", ")}
- Scope Inclusions: ${interviewFindings.scopeInclusions.join(", ")}
- Scope Exclusions: ${interviewFindings.scopeExclusions.join(", ")}
- Technical Decisions: ${JSON.stringify(interviewFindings.technicalDecisions)}
` : "";
  const researchPrompt = `
You are conducting research for a new feature request:

**Goal**: ${userGoal}

${contextSection}

Your task is to thoroughly understand the codebase to inform implementation planning:

1. **Analyze existing patterns**:
   - Search for similar implementations
   - Identify relevant files and modules
   - Understand current architecture patterns
   - Note coding conventions and styles

2. **Identify gaps**:
   - What information is missing?
   - What dependencies might be needed?
   - Are there potential conflicts or challenges?

3. **Generate clarifying questions**:
   - What assumptions need validation?
   - What architectural decisions need to be made?
   - What are the edge cases?

4. **Document findings**:
   Output a JSON object with this structure:
   {
     "codebasePatterns": ["pattern1", "pattern2"],
     "existingImplementations": ["file:line references"],
     "potentialChallenges": ["challenge1", "challenge2"],
     "openQuestions": ["question1", "question2"],
     "assumptions": ["assumption1", "assumption2"]
   }

Use Read, Glob, and Grep tools to thoroughly explore the codebase.
Be specific with file paths and line numbers in your findings.
`;
  const findings = {
    codebasePatterns: [],
    existingImplementations: [],
    potentialChallenges: [],
    openQuestions: [],
    assumptions: []
  };
  try {
    for await (const message of Qx({
      prompt: researchPrompt,
      options: {
        allowedTools: ["Read", "Glob", "Grep"],
        permissionMode: cfg.permissionMode
      }
    })) {
      if (message.type === "assistant" && message.message?.content) {
        for (const block of message.message.content) {
          if ("text" in block) {
            const jsonMatch = block.text.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
              try {
                const parsed = JSON.parse(jsonMatch[0]);
                Object.assign(findings, parsed);
              } catch {}
            }
          }
        }
      }
      if (message.type === "result") {
        console.log("  ✓ Research phase completed");
      }
    }
  } catch (error48) {
    console.error("  ✗ Research phase failed:", error48);
    throw error48;
  }
  return findings;
}
// src/phases/decomposition.ts
function validateTaskTree(root, maxComplexity) {
  const violations = [];
  const warnings = [];
  const distribution = {};
  const dimensionSums = {};
  let dimensionCount = 0;
  function walk(task, parentId, depth, isRoot) {
    const isLeaf = !task.subtasks || task.subtasks.length === 0;
    if (isLeaf) {
      const c = task.estimatedComplexity;
      distribution[c] = (distribution[c] || 0) + 1;
      if (task.complexityDimensions) {
        dimensionCount++;
        for (const [key, val] of Object.entries(task.complexityDimensions)) {
          dimensionSums[key] = (dimensionSums[key] || 0) + val;
        }
      }
      if (c > maxComplexity) {
        violations.push({
          type: "over-complexity",
          id: task.id,
          description: task.description,
          parentId,
          depth,
          detail: `complexity ${c} exceeds max ${maxComplexity}`
        });
      }
      if (task.acceptanceCriteria.length === 0) {
        violations.push({
          type: "missing-acceptance",
          id: task.id,
          description: task.description,
          parentId,
          depth,
          detail: "leaf task has no acceptance criteria"
        });
      }
      if (task.metadata?.filesToModify === undefined) {
        violations.push({
          type: "missing-files",
          id: task.id,
          description: task.description,
          parentId,
          depth,
          detail: "leaf task missing filesToModify metadata"
        });
      }
      if (task.metadata?.testsRequired === undefined) {
        violations.push({
          type: "missing-tests-required",
          id: task.id,
          description: task.description,
          parentId,
          depth,
          detail: "leaf task missing testsRequired metadata"
        });
      }
      if (!task.metadata?.hints || task.metadata.hints.length === 0) {
        violations.push({
          type: "missing-hints",
          id: task.id,
          description: task.description,
          parentId,
          depth,
          detail: "leaf task has no implementation hints"
        });
      }
      if (!task.metadata?.guardrails || task.metadata.guardrails.length === 0) {
        violations.push({
          type: "missing-guardrails",
          id: task.id,
          description: task.description,
          parentId,
          depth,
          detail: "leaf task has no guardrails"
        });
      }
      if (task.metadata?.filesToModify && task.metadata.filesToModify.length > 0) {
        const dirs = new Set(task.metadata.filesToModify.map((f) => f.split("/").slice(0, -1).join("/")).filter(Boolean));
        if (dirs.size >= 3) {
          warnings.push({
            type: "scattered-files",
            id: task.id,
            description: task.description,
            parentId,
            depth,
            detail: `modifies files across ${dirs.size} directories — consider splitting`
          });
        }
      }
    } else {
      if (!isRoot) {
        const count = task.subtasks.length;
        if (count < 2 || count > 5) {
          violations.push({
            type: "subtask-count",
            id: task.id,
            description: task.description,
            parentId,
            depth,
            detail: `has ${count} subtask(s), expected 2-5`
          });
        }
      }
      for (const child of task.subtasks) {
        walk(child, task.id, depth + 1, false);
      }
    }
  }
  walk(root, null, 0, true);
  const dimensionAverages = dimensionCount > 0 ? Object.fromEntries(Object.entries(dimensionSums).map(([k, v3]) => [k, Math.round(v3 / dimensionCount * 10) / 10])) : undefined;
  return {
    valid: violations.length === 0,
    maxComplexity,
    totalLeafTasks: countLeafTasks(root),
    violations,
    warnings,
    stats: {
      maxDepth: calculateMaxDepth(root),
      leafComplexityDistribution: distribution,
      dimensionAverages
    }
  };
}
function countLeafTasks(task) {
  if (!task.subtasks || task.subtasks.length === 0) {
    return 1;
  }
  return task.subtasks.reduce((sum, st) => sum + countLeafTasks(st), 0);
}
function calculateMaxDepth(task, currentDepth = 0) {
  if (!task.subtasks || task.subtasks.length === 0) {
    return currentDepth;
  }
  return Math.max(...task.subtasks.map((st) => calculateMaxDepth(st, currentDepth + 1)));
}
// src/phases/planning.ts
async function createImplementationPlan(rootTask) {
  console.log("  \uD83D\uDCCB Generating implementation plan...");
  const totalTasks = countLeafTasks(rootTask);
  const maxDepth = calculateMaxDepth(rootTask);
  console.log(`  ✓ Plan created: ${totalTasks} tasks across ${maxDepth} levels`);
  return {
    rootTask,
    totalTasks,
    maxDepth
  };
}
function getExecutionOrder(rootTask, tiebreak = "document-order") {
  const allTasks = [];
  const visited = new Set;
  function traverse(task) {
    if (visited.has(task.id))
      return;
    visited.add(task.id);
    if (task.subtasks && task.subtasks.length > 0) {
      task.subtasks.forEach(traverse);
    } else {
      allTasks.push(task);
    }
  }
  traverse(rootTask);
  const sorted = [];
  const remaining = [...allTasks];
  while (remaining.length > 0) {
    const ready = remaining.filter((task) => task.dependencies.every((depId) => sorted.some((t) => t.id === depId)));
    if (ready.length === 0 && remaining.length > 0) {
      console.warn("  ⚠️  Circular dependencies detected, adding remaining tasks anyway");
      sorted.push(...remaining);
      break;
    }
    if (tiebreak === "risk-first") {
      ready.sort((a, b3) => b3.estimatedComplexity - a.estimatedComplexity);
    } else if (tiebreak === "easy-first") {
      ready.sort((a, b3) => a.estimatedComplexity - b3.estimatedComplexity);
    }
    sorted.push(...ready);
    ready.forEach((task) => {
      const idx = remaining.indexOf(task);
      remaining.splice(idx, 1);
    });
  }
  return sorted;
}
function printPlanTree(task, prefix = "", isLast = true) {
  const connector = isLast ? "└─" : "├─";
  const complexity = `[${task.estimatedComplexity}/10]`;
  console.log(`${prefix}${connector} ${task.id}: ${task.description} ${complexity}`);
  if (task.acceptanceCriteria && task.acceptanceCriteria.length > 0) {
    const criteriaPrefix = prefix + (isLast ? "   " : "│  ");
    console.log(`${criteriaPrefix}  Acceptance:`);
    task.acceptanceCriteria.forEach((criterion, idx) => {
      console.log(`${criteriaPrefix}    ${idx + 1}. ${criterion}`);
    });
  }
  if (task.subtasks && task.subtasks.length > 0) {
    const subtaskPrefix = prefix + (isLast ? "   " : "│  ");
    task.subtasks.forEach((subtask, idx) => {
      printPlanTree(subtask, subtaskPrefix, idx === task.subtasks.length - 1);
    });
  }
}
export {
  validateTaskTree,
  runResearchPhase,
  runInterviewPhase,
  resetConfig,
  printPlanTree,
  loadConfig,
  getUserConfigPath,
  getProjectConfigPath,
  getExecutionOrder,
  getConfig,
  createImplementationPlan,
  countLeafTasks,
  calculateMaxDepth,
  NudgeConfigSchema,
  LinearConfigSchema,
  IterationScalingConfigSchema,
  FractalPlannerConfigSchema,
  DEFAULT_CONFIG,
  CommentCheckerConfigSchema
};
