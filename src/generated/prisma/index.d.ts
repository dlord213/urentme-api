
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Owner
 * 
 */
export type Owner = $Result.DefaultSelection<Prisma.$OwnerPayload>
/**
 * Model Property
 * 
 */
export type Property = $Result.DefaultSelection<Prisma.$PropertyPayload>
/**
 * Model Unit
 * 
 */
export type Unit = $Result.DefaultSelection<Prisma.$UnitPayload>
/**
 * Model Tenant
 * 
 */
export type Tenant = $Result.DefaultSelection<Prisma.$TenantPayload>
/**
 * Model Lease
 * 
 */
export type Lease = $Result.DefaultSelection<Prisma.$LeasePayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model Announcement
 * 
 */
export type Announcement = $Result.DefaultSelection<Prisma.$AnnouncementPayload>
/**
 * Model PropertyAnnouncement
 * 
 */
export type PropertyAnnouncement = $Result.DefaultSelection<Prisma.$PropertyAnnouncementPayload>
/**
 * Model UnitAnnouncement
 * 
 */
export type UnitAnnouncement = $Result.DefaultSelection<Prisma.$UnitAnnouncementPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Owners
 * const owners = await prisma.owner.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Owners
   * const owners = await prisma.owner.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.owner`: Exposes CRUD operations for the **Owner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Owners
    * const owners = await prisma.owner.findMany()
    * ```
    */
  get owner(): Prisma.OwnerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.property`: Exposes CRUD operations for the **Property** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Properties
    * const properties = await prisma.property.findMany()
    * ```
    */
  get property(): Prisma.PropertyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unit`: Exposes CRUD operations for the **Unit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Units
    * const units = await prisma.unit.findMany()
    * ```
    */
  get unit(): Prisma.UnitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tenant`: Exposes CRUD operations for the **Tenant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenants
    * const tenants = await prisma.tenant.findMany()
    * ```
    */
  get tenant(): Prisma.TenantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lease`: Exposes CRUD operations for the **Lease** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leases
    * const leases = await prisma.lease.findMany()
    * ```
    */
  get lease(): Prisma.LeaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.announcement`: Exposes CRUD operations for the **Announcement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Announcements
    * const announcements = await prisma.announcement.findMany()
    * ```
    */
  get announcement(): Prisma.AnnouncementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.propertyAnnouncement`: Exposes CRUD operations for the **PropertyAnnouncement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropertyAnnouncements
    * const propertyAnnouncements = await prisma.propertyAnnouncement.findMany()
    * ```
    */
  get propertyAnnouncement(): Prisma.PropertyAnnouncementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unitAnnouncement`: Exposes CRUD operations for the **UnitAnnouncement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UnitAnnouncements
    * const unitAnnouncements = await prisma.unitAnnouncement.findMany()
    * ```
    */
  get unitAnnouncement(): Prisma.UnitAnnouncementDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Owner: 'Owner',
    Property: 'Property',
    Unit: 'Unit',
    Tenant: 'Tenant',
    Lease: 'Lease',
    Transaction: 'Transaction',
    Announcement: 'Announcement',
    PropertyAnnouncement: 'PropertyAnnouncement',
    UnitAnnouncement: 'UnitAnnouncement'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "owner" | "property" | "unit" | "tenant" | "lease" | "transaction" | "announcement" | "propertyAnnouncement" | "unitAnnouncement"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Owner: {
        payload: Prisma.$OwnerPayload<ExtArgs>
        fields: Prisma.OwnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OwnerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OwnerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          findFirst: {
            args: Prisma.OwnerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OwnerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          findMany: {
            args: Prisma.OwnerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>[]
          }
          create: {
            args: Prisma.OwnerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          createMany: {
            args: Prisma.OwnerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OwnerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>[]
          }
          delete: {
            args: Prisma.OwnerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          update: {
            args: Prisma.OwnerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          deleteMany: {
            args: Prisma.OwnerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OwnerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OwnerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>[]
          }
          upsert: {
            args: Prisma.OwnerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          aggregate: {
            args: Prisma.OwnerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOwner>
          }
          groupBy: {
            args: Prisma.OwnerGroupByArgs<ExtArgs>
            result: $Utils.Optional<OwnerGroupByOutputType>[]
          }
          count: {
            args: Prisma.OwnerCountArgs<ExtArgs>
            result: $Utils.Optional<OwnerCountAggregateOutputType> | number
          }
        }
      }
      Property: {
        payload: Prisma.$PropertyPayload<ExtArgs>
        fields: Prisma.PropertyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findFirst: {
            args: Prisma.PropertyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findMany: {
            args: Prisma.PropertyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          create: {
            args: Prisma.PropertyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          createMany: {
            args: Prisma.PropertyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          delete: {
            args: Prisma.PropertyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          update: {
            args: Prisma.PropertyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          deleteMany: {
            args: Prisma.PropertyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropertyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          upsert: {
            args: Prisma.PropertyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          aggregate: {
            args: Prisma.PropertyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProperty>
          }
          groupBy: {
            args: Prisma.PropertyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyCountAggregateOutputType> | number
          }
        }
      }
      Unit: {
        payload: Prisma.$UnitPayload<ExtArgs>
        fields: Prisma.UnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          findFirst: {
            args: Prisma.UnitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          findMany: {
            args: Prisma.UnitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          create: {
            args: Prisma.UnitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          createMany: {
            args: Prisma.UnitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          delete: {
            args: Prisma.UnitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          update: {
            args: Prisma.UnitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          deleteMany: {
            args: Prisma.UnitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UnitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          upsert: {
            args: Prisma.UnitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          aggregate: {
            args: Prisma.UnitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnit>
          }
          groupBy: {
            args: Prisma.UnitGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnitGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnitCountArgs<ExtArgs>
            result: $Utils.Optional<UnitCountAggregateOutputType> | number
          }
        }
      }
      Tenant: {
        payload: Prisma.$TenantPayload<ExtArgs>
        fields: Prisma.TenantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findFirst: {
            args: Prisma.TenantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findMany: {
            args: Prisma.TenantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          create: {
            args: Prisma.TenantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          createMany: {
            args: Prisma.TenantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          delete: {
            args: Prisma.TenantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          update: {
            args: Prisma.TenantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          deleteMany: {
            args: Prisma.TenantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TenantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          upsert: {
            args: Prisma.TenantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          aggregate: {
            args: Prisma.TenantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenant>
          }
          groupBy: {
            args: Prisma.TenantGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantCountArgs<ExtArgs>
            result: $Utils.Optional<TenantCountAggregateOutputType> | number
          }
        }
      }
      Lease: {
        payload: Prisma.$LeasePayload<ExtArgs>
        fields: Prisma.LeaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          findFirst: {
            args: Prisma.LeaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          findMany: {
            args: Prisma.LeaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>[]
          }
          create: {
            args: Prisma.LeaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          createMany: {
            args: Prisma.LeaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>[]
          }
          delete: {
            args: Prisma.LeaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          update: {
            args: Prisma.LeaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          deleteMany: {
            args: Prisma.LeaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>[]
          }
          upsert: {
            args: Prisma.LeaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          aggregate: {
            args: Prisma.LeaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLease>
          }
          groupBy: {
            args: Prisma.LeaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeaseCountArgs<ExtArgs>
            result: $Utils.Optional<LeaseCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      Announcement: {
        payload: Prisma.$AnnouncementPayload<ExtArgs>
        fields: Prisma.AnnouncementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnnouncementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnnouncementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          findFirst: {
            args: Prisma.AnnouncementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnnouncementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          findMany: {
            args: Prisma.AnnouncementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          create: {
            args: Prisma.AnnouncementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          createMany: {
            args: Prisma.AnnouncementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnnouncementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          delete: {
            args: Prisma.AnnouncementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          update: {
            args: Prisma.AnnouncementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          deleteMany: {
            args: Prisma.AnnouncementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnnouncementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnnouncementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          upsert: {
            args: Prisma.AnnouncementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          aggregate: {
            args: Prisma.AnnouncementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnnouncement>
          }
          groupBy: {
            args: Prisma.AnnouncementGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnnouncementCountArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementCountAggregateOutputType> | number
          }
        }
      }
      PropertyAnnouncement: {
        payload: Prisma.$PropertyAnnouncementPayload<ExtArgs>
        fields: Prisma.PropertyAnnouncementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyAnnouncementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyAnnouncementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyAnnouncementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyAnnouncementPayload>
          }
          findFirst: {
            args: Prisma.PropertyAnnouncementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyAnnouncementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyAnnouncementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyAnnouncementPayload>
          }
          findMany: {
            args: Prisma.PropertyAnnouncementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyAnnouncementPayload>[]
          }
          create: {
            args: Prisma.PropertyAnnouncementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyAnnouncementPayload>
          }
          createMany: {
            args: Prisma.PropertyAnnouncementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyAnnouncementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyAnnouncementPayload>[]
          }
          delete: {
            args: Prisma.PropertyAnnouncementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyAnnouncementPayload>
          }
          update: {
            args: Prisma.PropertyAnnouncementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyAnnouncementPayload>
          }
          deleteMany: {
            args: Prisma.PropertyAnnouncementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyAnnouncementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropertyAnnouncementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyAnnouncementPayload>[]
          }
          upsert: {
            args: Prisma.PropertyAnnouncementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyAnnouncementPayload>
          }
          aggregate: {
            args: Prisma.PropertyAnnouncementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropertyAnnouncement>
          }
          groupBy: {
            args: Prisma.PropertyAnnouncementGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyAnnouncementGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyAnnouncementCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyAnnouncementCountAggregateOutputType> | number
          }
        }
      }
      UnitAnnouncement: {
        payload: Prisma.$UnitAnnouncementPayload<ExtArgs>
        fields: Prisma.UnitAnnouncementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnitAnnouncementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitAnnouncementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnitAnnouncementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitAnnouncementPayload>
          }
          findFirst: {
            args: Prisma.UnitAnnouncementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitAnnouncementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnitAnnouncementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitAnnouncementPayload>
          }
          findMany: {
            args: Prisma.UnitAnnouncementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitAnnouncementPayload>[]
          }
          create: {
            args: Prisma.UnitAnnouncementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitAnnouncementPayload>
          }
          createMany: {
            args: Prisma.UnitAnnouncementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnitAnnouncementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitAnnouncementPayload>[]
          }
          delete: {
            args: Prisma.UnitAnnouncementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitAnnouncementPayload>
          }
          update: {
            args: Prisma.UnitAnnouncementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitAnnouncementPayload>
          }
          deleteMany: {
            args: Prisma.UnitAnnouncementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnitAnnouncementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UnitAnnouncementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitAnnouncementPayload>[]
          }
          upsert: {
            args: Prisma.UnitAnnouncementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitAnnouncementPayload>
          }
          aggregate: {
            args: Prisma.UnitAnnouncementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnitAnnouncement>
          }
          groupBy: {
            args: Prisma.UnitAnnouncementGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnitAnnouncementGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnitAnnouncementCountArgs<ExtArgs>
            result: $Utils.Optional<UnitAnnouncementCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    owner?: OwnerOmit
    property?: PropertyOmit
    unit?: UnitOmit
    tenant?: TenantOmit
    lease?: LeaseOmit
    transaction?: TransactionOmit
    announcement?: AnnouncementOmit
    propertyAnnouncement?: PropertyAnnouncementOmit
    unitAnnouncement?: UnitAnnouncementOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OwnerCountOutputType
   */

  export type OwnerCountOutputType = {
    properties: number
  }

  export type OwnerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | OwnerCountOutputTypeCountPropertiesArgs
  }

  // Custom InputTypes
  /**
   * OwnerCountOutputType without action
   */
  export type OwnerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerCountOutputType
     */
    select?: OwnerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OwnerCountOutputType without action
   */
  export type OwnerCountOutputTypeCountPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
  }


  /**
   * Count Type PropertyCountOutputType
   */

  export type PropertyCountOutputType = {
    units: number
    propertyAnnouncements: number
  }

  export type PropertyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    units?: boolean | PropertyCountOutputTypeCountUnitsArgs
    propertyAnnouncements?: boolean | PropertyCountOutputTypeCountPropertyAnnouncementsArgs
  }

  // Custom InputTypes
  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCountOutputType
     */
    select?: PropertyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountUnitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountPropertyAnnouncementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyAnnouncementWhereInput
  }


  /**
   * Count Type UnitCountOutputType
   */

  export type UnitCountOutputType = {
    leases: number
    unitAnnouncements: number
  }

  export type UnitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leases?: boolean | UnitCountOutputTypeCountLeasesArgs
    unitAnnouncements?: boolean | UnitCountOutputTypeCountUnitAnnouncementsArgs
  }

  // Custom InputTypes
  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitCountOutputType
     */
    select?: UnitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeCountLeasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaseWhereInput
  }

  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeCountUnitAnnouncementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitAnnouncementWhereInput
  }


  /**
   * Count Type TenantCountOutputType
   */

  export type TenantCountOutputType = {
    leases: number
  }

  export type TenantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leases?: boolean | TenantCountOutputTypeCountLeasesArgs
  }

  // Custom InputTypes
  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCountOutputType
     */
    select?: TenantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountLeasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaseWhereInput
  }


  /**
   * Count Type LeaseCountOutputType
   */

  export type LeaseCountOutputType = {
    transactions: number
  }

  export type LeaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | LeaseCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * LeaseCountOutputType without action
   */
  export type LeaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseCountOutputType
     */
    select?: LeaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LeaseCountOutputType without action
   */
  export type LeaseCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type AnnouncementCountOutputType
   */

  export type AnnouncementCountOutputType = {
    propertyAnnouncements: number
    unitAnnouncements: number
  }

  export type AnnouncementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    propertyAnnouncements?: boolean | AnnouncementCountOutputTypeCountPropertyAnnouncementsArgs
    unitAnnouncements?: boolean | AnnouncementCountOutputTypeCountUnitAnnouncementsArgs
  }

  // Custom InputTypes
  /**
   * AnnouncementCountOutputType without action
   */
  export type AnnouncementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementCountOutputType
     */
    select?: AnnouncementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnnouncementCountOutputType without action
   */
  export type AnnouncementCountOutputTypeCountPropertyAnnouncementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyAnnouncementWhereInput
  }

  /**
   * AnnouncementCountOutputType without action
   */
  export type AnnouncementCountOutputTypeCountUnitAnnouncementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitAnnouncementWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Owner
   */

  export type AggregateOwner = {
    _count: OwnerCountAggregateOutputType | null
    _min: OwnerMinAggregateOutputType | null
    _max: OwnerMaxAggregateOutputType | null
  }

  export type OwnerMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    firstName: string | null
    lastName: string | null
    celNum: string | null
    street: string | null
    barangay: string | null
    city: string | null
    province: string | null
    region: string | null
    isActive: boolean | null
    isFlagged: boolean | null
    flagReason: string | null
    profilePictureUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OwnerMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    firstName: string | null
    lastName: string | null
    celNum: string | null
    street: string | null
    barangay: string | null
    city: string | null
    province: string | null
    region: string | null
    isActive: boolean | null
    isFlagged: boolean | null
    flagReason: string | null
    profilePictureUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OwnerCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    firstName: number
    lastName: number
    celNum: number
    street: number
    barangay: number
    city: number
    province: number
    region: number
    isActive: number
    isFlagged: number
    flagReason: number
    profilePictureUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OwnerMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    celNum?: true
    street?: true
    barangay?: true
    city?: true
    province?: true
    region?: true
    isActive?: true
    isFlagged?: true
    flagReason?: true
    profilePictureUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OwnerMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    celNum?: true
    street?: true
    barangay?: true
    city?: true
    province?: true
    region?: true
    isActive?: true
    isFlagged?: true
    flagReason?: true
    profilePictureUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OwnerCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    celNum?: true
    street?: true
    barangay?: true
    city?: true
    province?: true
    region?: true
    isActive?: true
    isFlagged?: true
    flagReason?: true
    profilePictureUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OwnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Owner to aggregate.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Owners
    **/
    _count?: true | OwnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OwnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OwnerMaxAggregateInputType
  }

  export type GetOwnerAggregateType<T extends OwnerAggregateArgs> = {
        [P in keyof T & keyof AggregateOwner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOwner[P]>
      : GetScalarType<T[P], AggregateOwner[P]>
  }




  export type OwnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OwnerWhereInput
    orderBy?: OwnerOrderByWithAggregationInput | OwnerOrderByWithAggregationInput[]
    by: OwnerScalarFieldEnum[] | OwnerScalarFieldEnum
    having?: OwnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OwnerCountAggregateInputType | true
    _min?: OwnerMinAggregateInputType
    _max?: OwnerMaxAggregateInputType
  }

  export type OwnerGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    celNum: string | null
    street: string | null
    barangay: string | null
    city: string | null
    province: string | null
    region: string | null
    isActive: boolean
    isFlagged: boolean
    flagReason: string | null
    profilePictureUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: OwnerCountAggregateOutputType | null
    _min: OwnerMinAggregateOutputType | null
    _max: OwnerMaxAggregateOutputType | null
  }

  type GetOwnerGroupByPayload<T extends OwnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OwnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OwnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OwnerGroupByOutputType[P]>
            : GetScalarType<T[P], OwnerGroupByOutputType[P]>
        }
      >
    >


  export type OwnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    celNum?: boolean
    street?: boolean
    barangay?: boolean
    city?: boolean
    province?: boolean
    region?: boolean
    isActive?: boolean
    isFlagged?: boolean
    flagReason?: boolean
    profilePictureUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    properties?: boolean | Owner$propertiesArgs<ExtArgs>
    _count?: boolean | OwnerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["owner"]>

  export type OwnerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    celNum?: boolean
    street?: boolean
    barangay?: boolean
    city?: boolean
    province?: boolean
    region?: boolean
    isActive?: boolean
    isFlagged?: boolean
    flagReason?: boolean
    profilePictureUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["owner"]>

  export type OwnerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    celNum?: boolean
    street?: boolean
    barangay?: boolean
    city?: boolean
    province?: boolean
    region?: boolean
    isActive?: boolean
    isFlagged?: boolean
    flagReason?: boolean
    profilePictureUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["owner"]>

  export type OwnerSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    celNum?: boolean
    street?: boolean
    barangay?: boolean
    city?: boolean
    province?: boolean
    region?: boolean
    isActive?: boolean
    isFlagged?: boolean
    flagReason?: boolean
    profilePictureUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OwnerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "firstName" | "lastName" | "celNum" | "street" | "barangay" | "city" | "province" | "region" | "isActive" | "isFlagged" | "flagReason" | "profilePictureUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["owner"]>
  export type OwnerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | Owner$propertiesArgs<ExtArgs>
    _count?: boolean | OwnerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OwnerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OwnerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OwnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Owner"
    objects: {
      properties: Prisma.$PropertyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      firstName: string
      lastName: string
      celNum: string | null
      street: string | null
      barangay: string | null
      city: string | null
      province: string | null
      region: string | null
      isActive: boolean
      isFlagged: boolean
      flagReason: string | null
      profilePictureUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["owner"]>
    composites: {}
  }

  type OwnerGetPayload<S extends boolean | null | undefined | OwnerDefaultArgs> = $Result.GetResult<Prisma.$OwnerPayload, S>

  type OwnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OwnerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OwnerCountAggregateInputType | true
    }

  export interface OwnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Owner'], meta: { name: 'Owner' } }
    /**
     * Find zero or one Owner that matches the filter.
     * @param {OwnerFindUniqueArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OwnerFindUniqueArgs>(args: SelectSubset<T, OwnerFindUniqueArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Owner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OwnerFindUniqueOrThrowArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OwnerFindUniqueOrThrowArgs>(args: SelectSubset<T, OwnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Owner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindFirstArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OwnerFindFirstArgs>(args?: SelectSubset<T, OwnerFindFirstArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Owner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindFirstOrThrowArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OwnerFindFirstOrThrowArgs>(args?: SelectSubset<T, OwnerFindFirstOrThrowArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Owners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Owners
     * const owners = await prisma.owner.findMany()
     * 
     * // Get first 10 Owners
     * const owners = await prisma.owner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ownerWithIdOnly = await prisma.owner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OwnerFindManyArgs>(args?: SelectSubset<T, OwnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Owner.
     * @param {OwnerCreateArgs} args - Arguments to create a Owner.
     * @example
     * // Create one Owner
     * const Owner = await prisma.owner.create({
     *   data: {
     *     // ... data to create a Owner
     *   }
     * })
     * 
     */
    create<T extends OwnerCreateArgs>(args: SelectSubset<T, OwnerCreateArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Owners.
     * @param {OwnerCreateManyArgs} args - Arguments to create many Owners.
     * @example
     * // Create many Owners
     * const owner = await prisma.owner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OwnerCreateManyArgs>(args?: SelectSubset<T, OwnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Owners and returns the data saved in the database.
     * @param {OwnerCreateManyAndReturnArgs} args - Arguments to create many Owners.
     * @example
     * // Create many Owners
     * const owner = await prisma.owner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Owners and only return the `id`
     * const ownerWithIdOnly = await prisma.owner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OwnerCreateManyAndReturnArgs>(args?: SelectSubset<T, OwnerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Owner.
     * @param {OwnerDeleteArgs} args - Arguments to delete one Owner.
     * @example
     * // Delete one Owner
     * const Owner = await prisma.owner.delete({
     *   where: {
     *     // ... filter to delete one Owner
     *   }
     * })
     * 
     */
    delete<T extends OwnerDeleteArgs>(args: SelectSubset<T, OwnerDeleteArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Owner.
     * @param {OwnerUpdateArgs} args - Arguments to update one Owner.
     * @example
     * // Update one Owner
     * const owner = await prisma.owner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OwnerUpdateArgs>(args: SelectSubset<T, OwnerUpdateArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Owners.
     * @param {OwnerDeleteManyArgs} args - Arguments to filter Owners to delete.
     * @example
     * // Delete a few Owners
     * const { count } = await prisma.owner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OwnerDeleteManyArgs>(args?: SelectSubset<T, OwnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Owners
     * const owner = await prisma.owner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OwnerUpdateManyArgs>(args: SelectSubset<T, OwnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Owners and returns the data updated in the database.
     * @param {OwnerUpdateManyAndReturnArgs} args - Arguments to update many Owners.
     * @example
     * // Update many Owners
     * const owner = await prisma.owner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Owners and only return the `id`
     * const ownerWithIdOnly = await prisma.owner.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OwnerUpdateManyAndReturnArgs>(args: SelectSubset<T, OwnerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Owner.
     * @param {OwnerUpsertArgs} args - Arguments to update or create a Owner.
     * @example
     * // Update or create a Owner
     * const owner = await prisma.owner.upsert({
     *   create: {
     *     // ... data to create a Owner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Owner we want to update
     *   }
     * })
     */
    upsert<T extends OwnerUpsertArgs>(args: SelectSubset<T, OwnerUpsertArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerCountArgs} args - Arguments to filter Owners to count.
     * @example
     * // Count the number of Owners
     * const count = await prisma.owner.count({
     *   where: {
     *     // ... the filter for the Owners we want to count
     *   }
     * })
    **/
    count<T extends OwnerCountArgs>(
      args?: Subset<T, OwnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OwnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OwnerAggregateArgs>(args: Subset<T, OwnerAggregateArgs>): Prisma.PrismaPromise<GetOwnerAggregateType<T>>

    /**
     * Group by Owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OwnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OwnerGroupByArgs['orderBy'] }
        : { orderBy?: OwnerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OwnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOwnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Owner model
   */
  readonly fields: OwnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Owner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OwnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    properties<T extends Owner$propertiesArgs<ExtArgs> = {}>(args?: Subset<T, Owner$propertiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Owner model
   */
  interface OwnerFieldRefs {
    readonly id: FieldRef<"Owner", 'String'>
    readonly email: FieldRef<"Owner", 'String'>
    readonly passwordHash: FieldRef<"Owner", 'String'>
    readonly firstName: FieldRef<"Owner", 'String'>
    readonly lastName: FieldRef<"Owner", 'String'>
    readonly celNum: FieldRef<"Owner", 'String'>
    readonly street: FieldRef<"Owner", 'String'>
    readonly barangay: FieldRef<"Owner", 'String'>
    readonly city: FieldRef<"Owner", 'String'>
    readonly province: FieldRef<"Owner", 'String'>
    readonly region: FieldRef<"Owner", 'String'>
    readonly isActive: FieldRef<"Owner", 'Boolean'>
    readonly isFlagged: FieldRef<"Owner", 'Boolean'>
    readonly flagReason: FieldRef<"Owner", 'String'>
    readonly profilePictureUrl: FieldRef<"Owner", 'String'>
    readonly createdAt: FieldRef<"Owner", 'DateTime'>
    readonly updatedAt: FieldRef<"Owner", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Owner findUnique
   */
  export type OwnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner findUniqueOrThrow
   */
  export type OwnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner findFirst
   */
  export type OwnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Owners.
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Owners.
     */
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[]
  }

  /**
   * Owner findFirstOrThrow
   */
  export type OwnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Owners.
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Owners.
     */
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[]
  }

  /**
   * Owner findMany
   */
  export type OwnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owners to fetch.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Owners.
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Owners.
     */
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[]
  }

  /**
   * Owner create
   */
  export type OwnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * The data needed to create a Owner.
     */
    data: XOR<OwnerCreateInput, OwnerUncheckedCreateInput>
  }

  /**
   * Owner createMany
   */
  export type OwnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Owners.
     */
    data: OwnerCreateManyInput | OwnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Owner createManyAndReturn
   */
  export type OwnerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * The data used to create many Owners.
     */
    data: OwnerCreateManyInput | OwnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Owner update
   */
  export type OwnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * The data needed to update a Owner.
     */
    data: XOR<OwnerUpdateInput, OwnerUncheckedUpdateInput>
    /**
     * Choose, which Owner to update.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner updateMany
   */
  export type OwnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Owners.
     */
    data: XOR<OwnerUpdateManyMutationInput, OwnerUncheckedUpdateManyInput>
    /**
     * Filter which Owners to update
     */
    where?: OwnerWhereInput
    /**
     * Limit how many Owners to update.
     */
    limit?: number
  }

  /**
   * Owner updateManyAndReturn
   */
  export type OwnerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * The data used to update Owners.
     */
    data: XOR<OwnerUpdateManyMutationInput, OwnerUncheckedUpdateManyInput>
    /**
     * Filter which Owners to update
     */
    where?: OwnerWhereInput
    /**
     * Limit how many Owners to update.
     */
    limit?: number
  }

  /**
   * Owner upsert
   */
  export type OwnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * The filter to search for the Owner to update in case it exists.
     */
    where: OwnerWhereUniqueInput
    /**
     * In case the Owner found by the `where` argument doesn't exist, create a new Owner with this data.
     */
    create: XOR<OwnerCreateInput, OwnerUncheckedCreateInput>
    /**
     * In case the Owner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OwnerUpdateInput, OwnerUncheckedUpdateInput>
  }

  /**
   * Owner delete
   */
  export type OwnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter which Owner to delete.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner deleteMany
   */
  export type OwnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Owners to delete
     */
    where?: OwnerWhereInput
    /**
     * Limit how many Owners to delete.
     */
    limit?: number
  }

  /**
   * Owner.properties
   */
  export type Owner$propertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    cursor?: PropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Owner without action
   */
  export type OwnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
  }


  /**
   * Model Property
   */

  export type AggregateProperty = {
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  export type PropertyAvgAggregateOutputType = {
    yearBuilt: number | null
  }

  export type PropertySumAggregateOutputType = {
    yearBuilt: number | null
  }

  export type PropertyMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    name: string | null
    type: string | null
    street: string | null
    barangay: string | null
    city: string | null
    province: string | null
    region: string | null
    yearBuilt: number | null
    description: string | null
    isActive: boolean | null
    isUnderRepair: boolean | null
    isUnderRenovation: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    name: string | null
    type: string | null
    street: string | null
    barangay: string | null
    city: string | null
    province: string | null
    region: string | null
    yearBuilt: number | null
    description: string | null
    isActive: boolean | null
    isUnderRepair: boolean | null
    isUnderRenovation: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyCountAggregateOutputType = {
    id: number
    ownerId: number
    name: number
    type: number
    street: number
    barangay: number
    city: number
    province: number
    region: number
    yearBuilt: number
    description: number
    imageUrls: number
    houseRules: number
    isActive: number
    isUnderRepair: number
    isUnderRenovation: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PropertyAvgAggregateInputType = {
    yearBuilt?: true
  }

  export type PropertySumAggregateInputType = {
    yearBuilt?: true
  }

  export type PropertyMinAggregateInputType = {
    id?: true
    ownerId?: true
    name?: true
    type?: true
    street?: true
    barangay?: true
    city?: true
    province?: true
    region?: true
    yearBuilt?: true
    description?: true
    isActive?: true
    isUnderRepair?: true
    isUnderRenovation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyMaxAggregateInputType = {
    id?: true
    ownerId?: true
    name?: true
    type?: true
    street?: true
    barangay?: true
    city?: true
    province?: true
    region?: true
    yearBuilt?: true
    description?: true
    isActive?: true
    isUnderRepair?: true
    isUnderRenovation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyCountAggregateInputType = {
    id?: true
    ownerId?: true
    name?: true
    type?: true
    street?: true
    barangay?: true
    city?: true
    province?: true
    region?: true
    yearBuilt?: true
    description?: true
    imageUrls?: true
    houseRules?: true
    isActive?: true
    isUnderRepair?: true
    isUnderRenovation?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PropertyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Property to aggregate.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Properties
    **/
    _count?: true | PropertyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyMaxAggregateInputType
  }

  export type GetPropertyAggregateType<T extends PropertyAggregateArgs> = {
        [P in keyof T & keyof AggregateProperty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProperty[P]>
      : GetScalarType<T[P], AggregateProperty[P]>
  }




  export type PropertyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithAggregationInput | PropertyOrderByWithAggregationInput[]
    by: PropertyScalarFieldEnum[] | PropertyScalarFieldEnum
    having?: PropertyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyCountAggregateInputType | true
    _avg?: PropertyAvgAggregateInputType
    _sum?: PropertySumAggregateInputType
    _min?: PropertyMinAggregateInputType
    _max?: PropertyMaxAggregateInputType
  }

  export type PropertyGroupByOutputType = {
    id: string
    ownerId: string
    name: string
    type: string
    street: string | null
    barangay: string | null
    city: string | null
    province: string | null
    region: string | null
    yearBuilt: number | null
    description: string | null
    imageUrls: string[]
    houseRules: string[]
    isActive: boolean
    isUnderRepair: boolean
    isUnderRenovation: boolean
    createdAt: Date
    updatedAt: Date
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  type GetPropertyGroupByPayload<T extends PropertyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyGroupByOutputType[P]>
        }
      >
    >


  export type PropertySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    name?: boolean
    type?: boolean
    street?: boolean
    barangay?: boolean
    city?: boolean
    province?: boolean
    region?: boolean
    yearBuilt?: boolean
    description?: boolean
    imageUrls?: boolean
    houseRules?: boolean
    isActive?: boolean
    isUnderRepair?: boolean
    isUnderRenovation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
    units?: boolean | Property$unitsArgs<ExtArgs>
    propertyAnnouncements?: boolean | Property$propertyAnnouncementsArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    name?: boolean
    type?: boolean
    street?: boolean
    barangay?: boolean
    city?: boolean
    province?: boolean
    region?: boolean
    yearBuilt?: boolean
    description?: boolean
    imageUrls?: boolean
    houseRules?: boolean
    isActive?: boolean
    isUnderRepair?: boolean
    isUnderRenovation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    name?: boolean
    type?: boolean
    street?: boolean
    barangay?: boolean
    city?: boolean
    province?: boolean
    region?: boolean
    yearBuilt?: boolean
    description?: boolean
    imageUrls?: boolean
    houseRules?: boolean
    isActive?: boolean
    isUnderRepair?: boolean
    isUnderRenovation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectScalar = {
    id?: boolean
    ownerId?: boolean
    name?: boolean
    type?: boolean
    street?: boolean
    barangay?: boolean
    city?: boolean
    province?: boolean
    region?: boolean
    yearBuilt?: boolean
    description?: boolean
    imageUrls?: boolean
    houseRules?: boolean
    isActive?: boolean
    isUnderRepair?: boolean
    isUnderRenovation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PropertyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "name" | "type" | "street" | "barangay" | "city" | "province" | "region" | "yearBuilt" | "description" | "imageUrls" | "houseRules" | "isActive" | "isUnderRepair" | "isUnderRenovation" | "createdAt" | "updatedAt", ExtArgs["result"]["property"]>
  export type PropertyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
    units?: boolean | Property$unitsArgs<ExtArgs>
    propertyAnnouncements?: boolean | Property$propertyAnnouncementsArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PropertyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }
  export type PropertyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }

  export type $PropertyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Property"
    objects: {
      owner: Prisma.$OwnerPayload<ExtArgs>
      units: Prisma.$UnitPayload<ExtArgs>[]
      propertyAnnouncements: Prisma.$PropertyAnnouncementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string
      name: string
      type: string
      street: string | null
      barangay: string | null
      city: string | null
      province: string | null
      region: string | null
      yearBuilt: number | null
      description: string | null
      imageUrls: string[]
      houseRules: string[]
      isActive: boolean
      isUnderRepair: boolean
      isUnderRenovation: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["property"]>
    composites: {}
  }

  type PropertyGetPayload<S extends boolean | null | undefined | PropertyDefaultArgs> = $Result.GetResult<Prisma.$PropertyPayload, S>

  type PropertyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyCountAggregateInputType | true
    }

  export interface PropertyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Property'], meta: { name: 'Property' } }
    /**
     * Find zero or one Property that matches the filter.
     * @param {PropertyFindUniqueArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyFindUniqueArgs>(args: SelectSubset<T, PropertyFindUniqueArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Property that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyFindUniqueOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyFindFirstArgs>(args?: SelectSubset<T, PropertyFindFirstArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Properties
     * const properties = await prisma.property.findMany()
     * 
     * // Get first 10 Properties
     * const properties = await prisma.property.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyWithIdOnly = await prisma.property.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyFindManyArgs>(args?: SelectSubset<T, PropertyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Property.
     * @param {PropertyCreateArgs} args - Arguments to create a Property.
     * @example
     * // Create one Property
     * const Property = await prisma.property.create({
     *   data: {
     *     // ... data to create a Property
     *   }
     * })
     * 
     */
    create<T extends PropertyCreateArgs>(args: SelectSubset<T, PropertyCreateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Properties.
     * @param {PropertyCreateManyArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyCreateManyArgs>(args?: SelectSubset<T, PropertyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Properties and returns the data saved in the database.
     * @param {PropertyCreateManyAndReturnArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Property.
     * @param {PropertyDeleteArgs} args - Arguments to delete one Property.
     * @example
     * // Delete one Property
     * const Property = await prisma.property.delete({
     *   where: {
     *     // ... filter to delete one Property
     *   }
     * })
     * 
     */
    delete<T extends PropertyDeleteArgs>(args: SelectSubset<T, PropertyDeleteArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Property.
     * @param {PropertyUpdateArgs} args - Arguments to update one Property.
     * @example
     * // Update one Property
     * const property = await prisma.property.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyUpdateArgs>(args: SelectSubset<T, PropertyUpdateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Properties.
     * @param {PropertyDeleteManyArgs} args - Arguments to filter Properties to delete.
     * @example
     * // Delete a few Properties
     * const { count } = await prisma.property.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyDeleteManyArgs>(args?: SelectSubset<T, PropertyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyUpdateManyArgs>(args: SelectSubset<T, PropertyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties and returns the data updated in the database.
     * @param {PropertyUpdateManyAndReturnArgs} args - Arguments to update many Properties.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PropertyUpdateManyAndReturnArgs>(args: SelectSubset<T, PropertyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Property.
     * @param {PropertyUpsertArgs} args - Arguments to update or create a Property.
     * @example
     * // Update or create a Property
     * const property = await prisma.property.upsert({
     *   create: {
     *     // ... data to create a Property
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Property we want to update
     *   }
     * })
     */
    upsert<T extends PropertyUpsertArgs>(args: SelectSubset<T, PropertyUpsertArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCountArgs} args - Arguments to filter Properties to count.
     * @example
     * // Count the number of Properties
     * const count = await prisma.property.count({
     *   where: {
     *     // ... the filter for the Properties we want to count
     *   }
     * })
    **/
    count<T extends PropertyCountArgs>(
      args?: Subset<T, PropertyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropertyAggregateArgs>(args: Subset<T, PropertyAggregateArgs>): Prisma.PrismaPromise<GetPropertyAggregateType<T>>

    /**
     * Group by Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropertyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyGroupByArgs['orderBy'] }
        : { orderBy?: PropertyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropertyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Property model
   */
  readonly fields: PropertyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Property.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends OwnerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OwnerDefaultArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    units<T extends Property$unitsArgs<ExtArgs> = {}>(args?: Subset<T, Property$unitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    propertyAnnouncements<T extends Property$propertyAnnouncementsArgs<ExtArgs> = {}>(args?: Subset<T, Property$propertyAnnouncementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyAnnouncementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Property model
   */
  interface PropertyFieldRefs {
    readonly id: FieldRef<"Property", 'String'>
    readonly ownerId: FieldRef<"Property", 'String'>
    readonly name: FieldRef<"Property", 'String'>
    readonly type: FieldRef<"Property", 'String'>
    readonly street: FieldRef<"Property", 'String'>
    readonly barangay: FieldRef<"Property", 'String'>
    readonly city: FieldRef<"Property", 'String'>
    readonly province: FieldRef<"Property", 'String'>
    readonly region: FieldRef<"Property", 'String'>
    readonly yearBuilt: FieldRef<"Property", 'Int'>
    readonly description: FieldRef<"Property", 'String'>
    readonly imageUrls: FieldRef<"Property", 'String[]'>
    readonly houseRules: FieldRef<"Property", 'String[]'>
    readonly isActive: FieldRef<"Property", 'Boolean'>
    readonly isUnderRepair: FieldRef<"Property", 'Boolean'>
    readonly isUnderRenovation: FieldRef<"Property", 'Boolean'>
    readonly createdAt: FieldRef<"Property", 'DateTime'>
    readonly updatedAt: FieldRef<"Property", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Property findUnique
   */
  export type PropertyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findUniqueOrThrow
   */
  export type PropertyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findFirst
   */
  export type PropertyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findFirstOrThrow
   */
  export type PropertyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findMany
   */
  export type PropertyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Properties to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property create
   */
  export type PropertyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to create a Property.
     */
    data: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
  }

  /**
   * Property createMany
   */
  export type PropertyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Property createManyAndReturn
   */
  export type PropertyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Property update
   */
  export type PropertyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to update a Property.
     */
    data: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
    /**
     * Choose, which Property to update.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property updateMany
   */
  export type PropertyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to update.
     */
    limit?: number
  }

  /**
   * Property updateManyAndReturn
   */
  export type PropertyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Property upsert
   */
  export type PropertyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The filter to search for the Property to update in case it exists.
     */
    where: PropertyWhereUniqueInput
    /**
     * In case the Property found by the `where` argument doesn't exist, create a new Property with this data.
     */
    create: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
    /**
     * In case the Property was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
  }

  /**
   * Property delete
   */
  export type PropertyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter which Property to delete.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property deleteMany
   */
  export type PropertyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Properties to delete
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to delete.
     */
    limit?: number
  }

  /**
   * Property.units
   */
  export type Property$unitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    where?: UnitWhereInput
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    cursor?: UnitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Property.propertyAnnouncements
   */
  export type Property$propertyAnnouncementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAnnouncement
     */
    select?: PropertyAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAnnouncement
     */
    omit?: PropertyAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAnnouncementInclude<ExtArgs> | null
    where?: PropertyAnnouncementWhereInput
    orderBy?: PropertyAnnouncementOrderByWithRelationInput | PropertyAnnouncementOrderByWithRelationInput[]
    cursor?: PropertyAnnouncementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyAnnouncementScalarFieldEnum | PropertyAnnouncementScalarFieldEnum[]
  }

  /**
   * Property without action
   */
  export type PropertyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
  }


  /**
   * Model Unit
   */

  export type AggregateUnit = {
    _count: UnitCountAggregateOutputType | null
    _avg: UnitAvgAggregateOutputType | null
    _sum: UnitSumAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  export type UnitAvgAggregateOutputType = {
    bedrooms: number | null
    bathrooms: number | null
    squareFeet: number | null
    monthlyRentAmount: number | null
  }

  export type UnitSumAggregateOutputType = {
    bedrooms: number | null
    bathrooms: number | null
    squareFeet: number | null
    monthlyRentAmount: number | null
  }

  export type UnitMinAggregateOutputType = {
    id: string | null
    propertyId: string | null
    unitNumber: string | null
    floor: string | null
    bedrooms: number | null
    bathrooms: number | null
    squareFeet: number | null
    monthlyRentAmount: number | null
    description: string | null
    status: string | null
    isActive: boolean | null
    isUnderRepair: boolean | null
    isUnderRenovation: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UnitMaxAggregateOutputType = {
    id: string | null
    propertyId: string | null
    unitNumber: string | null
    floor: string | null
    bedrooms: number | null
    bathrooms: number | null
    squareFeet: number | null
    monthlyRentAmount: number | null
    description: string | null
    status: string | null
    isActive: boolean | null
    isUnderRepair: boolean | null
    isUnderRenovation: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UnitCountAggregateOutputType = {
    id: number
    propertyId: number
    unitNumber: number
    floor: number
    bedrooms: number
    bathrooms: number
    squareFeet: number
    monthlyRentAmount: number
    description: number
    imageUrls: number
    status: number
    isActive: number
    isUnderRepair: number
    isUnderRenovation: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UnitAvgAggregateInputType = {
    bedrooms?: true
    bathrooms?: true
    squareFeet?: true
    monthlyRentAmount?: true
  }

  export type UnitSumAggregateInputType = {
    bedrooms?: true
    bathrooms?: true
    squareFeet?: true
    monthlyRentAmount?: true
  }

  export type UnitMinAggregateInputType = {
    id?: true
    propertyId?: true
    unitNumber?: true
    floor?: true
    bedrooms?: true
    bathrooms?: true
    squareFeet?: true
    monthlyRentAmount?: true
    description?: true
    status?: true
    isActive?: true
    isUnderRepair?: true
    isUnderRenovation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UnitMaxAggregateInputType = {
    id?: true
    propertyId?: true
    unitNumber?: true
    floor?: true
    bedrooms?: true
    bathrooms?: true
    squareFeet?: true
    monthlyRentAmount?: true
    description?: true
    status?: true
    isActive?: true
    isUnderRepair?: true
    isUnderRenovation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UnitCountAggregateInputType = {
    id?: true
    propertyId?: true
    unitNumber?: true
    floor?: true
    bedrooms?: true
    bathrooms?: true
    squareFeet?: true
    monthlyRentAmount?: true
    description?: true
    imageUrls?: true
    status?: true
    isActive?: true
    isUnderRepair?: true
    isUnderRenovation?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Unit to aggregate.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Units
    **/
    _count?: true | UnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnitMaxAggregateInputType
  }

  export type GetUnitAggregateType<T extends UnitAggregateArgs> = {
        [P in keyof T & keyof AggregateUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnit[P]>
      : GetScalarType<T[P], AggregateUnit[P]>
  }




  export type UnitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitWhereInput
    orderBy?: UnitOrderByWithAggregationInput | UnitOrderByWithAggregationInput[]
    by: UnitScalarFieldEnum[] | UnitScalarFieldEnum
    having?: UnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnitCountAggregateInputType | true
    _avg?: UnitAvgAggregateInputType
    _sum?: UnitSumAggregateInputType
    _min?: UnitMinAggregateInputType
    _max?: UnitMaxAggregateInputType
  }

  export type UnitGroupByOutputType = {
    id: string
    propertyId: string
    unitNumber: string
    floor: string | null
    bedrooms: number
    bathrooms: number
    squareFeet: number | null
    monthlyRentAmount: number
    description: string | null
    imageUrls: string[]
    status: string
    isActive: boolean
    isUnderRepair: boolean
    isUnderRenovation: boolean
    createdAt: Date
    updatedAt: Date
    _count: UnitCountAggregateOutputType | null
    _avg: UnitAvgAggregateOutputType | null
    _sum: UnitSumAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  type GetUnitGroupByPayload<T extends UnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnitGroupByOutputType[P]>
            : GetScalarType<T[P], UnitGroupByOutputType[P]>
        }
      >
    >


  export type UnitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    unitNumber?: boolean
    floor?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    squareFeet?: boolean
    monthlyRentAmount?: boolean
    description?: boolean
    imageUrls?: boolean
    status?: boolean
    isActive?: boolean
    isUnderRepair?: boolean
    isUnderRenovation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    leases?: boolean | Unit$leasesArgs<ExtArgs>
    unitAnnouncements?: boolean | Unit$unitAnnouncementsArgs<ExtArgs>
    _count?: boolean | UnitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    unitNumber?: boolean
    floor?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    squareFeet?: boolean
    monthlyRentAmount?: boolean
    description?: boolean
    imageUrls?: boolean
    status?: boolean
    isActive?: boolean
    isUnderRepair?: boolean
    isUnderRenovation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    unitNumber?: boolean
    floor?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    squareFeet?: boolean
    monthlyRentAmount?: boolean
    description?: boolean
    imageUrls?: boolean
    status?: boolean
    isActive?: boolean
    isUnderRepair?: boolean
    isUnderRenovation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectScalar = {
    id?: boolean
    propertyId?: boolean
    unitNumber?: boolean
    floor?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    squareFeet?: boolean
    monthlyRentAmount?: boolean
    description?: boolean
    imageUrls?: boolean
    status?: boolean
    isActive?: boolean
    isUnderRepair?: boolean
    isUnderRenovation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UnitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "propertyId" | "unitNumber" | "floor" | "bedrooms" | "bathrooms" | "squareFeet" | "monthlyRentAmount" | "description" | "imageUrls" | "status" | "isActive" | "isUnderRepair" | "isUnderRenovation" | "createdAt" | "updatedAt", ExtArgs["result"]["unit"]>
  export type UnitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    leases?: boolean | Unit$leasesArgs<ExtArgs>
    unitAnnouncements?: boolean | Unit$unitAnnouncementsArgs<ExtArgs>
    _count?: boolean | UnitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UnitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type UnitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $UnitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Unit"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
      leases: Prisma.$LeasePayload<ExtArgs>[]
      unitAnnouncements: Prisma.$UnitAnnouncementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      propertyId: string
      unitNumber: string
      floor: string | null
      bedrooms: number
      bathrooms: number
      squareFeet: number | null
      monthlyRentAmount: number
      description: string | null
      imageUrls: string[]
      status: string
      isActive: boolean
      isUnderRepair: boolean
      isUnderRenovation: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["unit"]>
    composites: {}
  }

  type UnitGetPayload<S extends boolean | null | undefined | UnitDefaultArgs> = $Result.GetResult<Prisma.$UnitPayload, S>

  type UnitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnitCountAggregateInputType | true
    }

  export interface UnitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Unit'], meta: { name: 'Unit' } }
    /**
     * Find zero or one Unit that matches the filter.
     * @param {UnitFindUniqueArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnitFindUniqueArgs>(args: SelectSubset<T, UnitFindUniqueArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Unit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnitFindUniqueOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnitFindUniqueOrThrowArgs>(args: SelectSubset<T, UnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindFirstArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnitFindFirstArgs>(args?: SelectSubset<T, UnitFindFirstArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindFirstOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnitFindFirstOrThrowArgs>(args?: SelectSubset<T, UnitFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Units that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Units
     * const units = await prisma.unit.findMany()
     * 
     * // Get first 10 Units
     * const units = await prisma.unit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unitWithIdOnly = await prisma.unit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnitFindManyArgs>(args?: SelectSubset<T, UnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Unit.
     * @param {UnitCreateArgs} args - Arguments to create a Unit.
     * @example
     * // Create one Unit
     * const Unit = await prisma.unit.create({
     *   data: {
     *     // ... data to create a Unit
     *   }
     * })
     * 
     */
    create<T extends UnitCreateArgs>(args: SelectSubset<T, UnitCreateArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Units.
     * @param {UnitCreateManyArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const unit = await prisma.unit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnitCreateManyArgs>(args?: SelectSubset<T, UnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Units and returns the data saved in the database.
     * @param {UnitCreateManyAndReturnArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const unit = await prisma.unit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Units and only return the `id`
     * const unitWithIdOnly = await prisma.unit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UnitCreateManyAndReturnArgs>(args?: SelectSubset<T, UnitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Unit.
     * @param {UnitDeleteArgs} args - Arguments to delete one Unit.
     * @example
     * // Delete one Unit
     * const Unit = await prisma.unit.delete({
     *   where: {
     *     // ... filter to delete one Unit
     *   }
     * })
     * 
     */
    delete<T extends UnitDeleteArgs>(args: SelectSubset<T, UnitDeleteArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Unit.
     * @param {UnitUpdateArgs} args - Arguments to update one Unit.
     * @example
     * // Update one Unit
     * const unit = await prisma.unit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnitUpdateArgs>(args: SelectSubset<T, UnitUpdateArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Units.
     * @param {UnitDeleteManyArgs} args - Arguments to filter Units to delete.
     * @example
     * // Delete a few Units
     * const { count } = await prisma.unit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnitDeleteManyArgs>(args?: SelectSubset<T, UnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Units
     * const unit = await prisma.unit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnitUpdateManyArgs>(args: SelectSubset<T, UnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units and returns the data updated in the database.
     * @param {UnitUpdateManyAndReturnArgs} args - Arguments to update many Units.
     * @example
     * // Update many Units
     * const unit = await prisma.unit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Units and only return the `id`
     * const unitWithIdOnly = await prisma.unit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UnitUpdateManyAndReturnArgs>(args: SelectSubset<T, UnitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Unit.
     * @param {UnitUpsertArgs} args - Arguments to update or create a Unit.
     * @example
     * // Update or create a Unit
     * const unit = await prisma.unit.upsert({
     *   create: {
     *     // ... data to create a Unit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Unit we want to update
     *   }
     * })
     */
    upsert<T extends UnitUpsertArgs>(args: SelectSubset<T, UnitUpsertArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitCountArgs} args - Arguments to filter Units to count.
     * @example
     * // Count the number of Units
     * const count = await prisma.unit.count({
     *   where: {
     *     // ... the filter for the Units we want to count
     *   }
     * })
    **/
    count<T extends UnitCountArgs>(
      args?: Subset<T, UnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UnitAggregateArgs>(args: Subset<T, UnitAggregateArgs>): Prisma.PrismaPromise<GetUnitAggregateType<T>>

    /**
     * Group by Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnitGroupByArgs['orderBy'] }
        : { orderBy?: UnitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Unit model
   */
  readonly fields: UnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Unit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    leases<T extends Unit$leasesArgs<ExtArgs> = {}>(args?: Subset<T, Unit$leasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    unitAnnouncements<T extends Unit$unitAnnouncementsArgs<ExtArgs> = {}>(args?: Subset<T, Unit$unitAnnouncementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitAnnouncementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Unit model
   */
  interface UnitFieldRefs {
    readonly id: FieldRef<"Unit", 'String'>
    readonly propertyId: FieldRef<"Unit", 'String'>
    readonly unitNumber: FieldRef<"Unit", 'String'>
    readonly floor: FieldRef<"Unit", 'String'>
    readonly bedrooms: FieldRef<"Unit", 'Int'>
    readonly bathrooms: FieldRef<"Unit", 'Int'>
    readonly squareFeet: FieldRef<"Unit", 'Float'>
    readonly monthlyRentAmount: FieldRef<"Unit", 'Float'>
    readonly description: FieldRef<"Unit", 'String'>
    readonly imageUrls: FieldRef<"Unit", 'String[]'>
    readonly status: FieldRef<"Unit", 'String'>
    readonly isActive: FieldRef<"Unit", 'Boolean'>
    readonly isUnderRepair: FieldRef<"Unit", 'Boolean'>
    readonly isUnderRenovation: FieldRef<"Unit", 'Boolean'>
    readonly createdAt: FieldRef<"Unit", 'DateTime'>
    readonly updatedAt: FieldRef<"Unit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Unit findUnique
   */
  export type UnitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit findUniqueOrThrow
   */
  export type UnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit findFirst
   */
  export type UnitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit findFirstOrThrow
   */
  export type UnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit findMany
   */
  export type UnitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Units to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit create
   */
  export type UnitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The data needed to create a Unit.
     */
    data: XOR<UnitCreateInput, UnitUncheckedCreateInput>
  }

  /**
   * Unit createMany
   */
  export type UnitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Units.
     */
    data: UnitCreateManyInput | UnitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Unit createManyAndReturn
   */
  export type UnitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * The data used to create many Units.
     */
    data: UnitCreateManyInput | UnitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Unit update
   */
  export type UnitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The data needed to update a Unit.
     */
    data: XOR<UnitUpdateInput, UnitUncheckedUpdateInput>
    /**
     * Choose, which Unit to update.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit updateMany
   */
  export type UnitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Units.
     */
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyInput>
    /**
     * Filter which Units to update
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to update.
     */
    limit?: number
  }

  /**
   * Unit updateManyAndReturn
   */
  export type UnitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * The data used to update Units.
     */
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyInput>
    /**
     * Filter which Units to update
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Unit upsert
   */
  export type UnitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The filter to search for the Unit to update in case it exists.
     */
    where: UnitWhereUniqueInput
    /**
     * In case the Unit found by the `where` argument doesn't exist, create a new Unit with this data.
     */
    create: XOR<UnitCreateInput, UnitUncheckedCreateInput>
    /**
     * In case the Unit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnitUpdateInput, UnitUncheckedUpdateInput>
  }

  /**
   * Unit delete
   */
  export type UnitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter which Unit to delete.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit deleteMany
   */
  export type UnitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Units to delete
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to delete.
     */
    limit?: number
  }

  /**
   * Unit.leases
   */
  export type Unit$leasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    where?: LeaseWhereInput
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    cursor?: LeaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaseScalarFieldEnum | LeaseScalarFieldEnum[]
  }

  /**
   * Unit.unitAnnouncements
   */
  export type Unit$unitAnnouncementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitAnnouncement
     */
    select?: UnitAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitAnnouncement
     */
    omit?: UnitAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitAnnouncementInclude<ExtArgs> | null
    where?: UnitAnnouncementWhereInput
    orderBy?: UnitAnnouncementOrderByWithRelationInput | UnitAnnouncementOrderByWithRelationInput[]
    cursor?: UnitAnnouncementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnitAnnouncementScalarFieldEnum | UnitAnnouncementScalarFieldEnum[]
  }

  /**
   * Unit without action
   */
  export type UnitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
  }


  /**
   * Model Tenant
   */

  export type AggregateTenant = {
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  export type TenantMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    celNum: string | null
    dateOfBirth: Date | null
    emergencyName: string | null
    emergencyPhone: string | null
    notes: string | null
    isFlagged: boolean | null
    flagReason: string | null
    isActive: boolean | null
    moveInDate: Date | null
    moveOutDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    celNum: string | null
    dateOfBirth: Date | null
    emergencyName: string | null
    emergencyPhone: string | null
    notes: string | null
    isFlagged: boolean | null
    flagReason: string | null
    isActive: boolean | null
    moveInDate: Date | null
    moveOutDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    celNum: number
    dateOfBirth: number
    emergencyName: number
    emergencyPhone: number
    notes: number
    isFlagged: number
    flagReason: number
    isActive: number
    moveInDate: number
    moveOutDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TenantMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    celNum?: true
    dateOfBirth?: true
    emergencyName?: true
    emergencyPhone?: true
    notes?: true
    isFlagged?: true
    flagReason?: true
    isActive?: true
    moveInDate?: true
    moveOutDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    celNum?: true
    dateOfBirth?: true
    emergencyName?: true
    emergencyPhone?: true
    notes?: true
    isFlagged?: true
    flagReason?: true
    isActive?: true
    moveInDate?: true
    moveOutDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    celNum?: true
    dateOfBirth?: true
    emergencyName?: true
    emergencyPhone?: true
    notes?: true
    isFlagged?: true
    flagReason?: true
    isActive?: true
    moveInDate?: true
    moveOutDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TenantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenant to aggregate.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tenants
    **/
    _count?: true | TenantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantMaxAggregateInputType
  }

  export type GetTenantAggregateType<T extends TenantAggregateArgs> = {
        [P in keyof T & keyof AggregateTenant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenant[P]>
      : GetScalarType<T[P], AggregateTenant[P]>
  }




  export type TenantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantWhereInput
    orderBy?: TenantOrderByWithAggregationInput | TenantOrderByWithAggregationInput[]
    by: TenantScalarFieldEnum[] | TenantScalarFieldEnum
    having?: TenantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantCountAggregateInputType | true
    _min?: TenantMinAggregateInputType
    _max?: TenantMaxAggregateInputType
  }

  export type TenantGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    email: string
    celNum: string | null
    dateOfBirth: Date | null
    emergencyName: string | null
    emergencyPhone: string | null
    notes: string | null
    isFlagged: boolean
    flagReason: string | null
    isActive: boolean
    moveInDate: Date | null
    moveOutDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  type GetTenantGroupByPayload<T extends TenantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantGroupByOutputType[P]>
            : GetScalarType<T[P], TenantGroupByOutputType[P]>
        }
      >
    >


  export type TenantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    celNum?: boolean
    dateOfBirth?: boolean
    emergencyName?: boolean
    emergencyPhone?: boolean
    notes?: boolean
    isFlagged?: boolean
    flagReason?: boolean
    isActive?: boolean
    moveInDate?: boolean
    moveOutDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    leases?: boolean | Tenant$leasesArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    celNum?: boolean
    dateOfBirth?: boolean
    emergencyName?: boolean
    emergencyPhone?: boolean
    notes?: boolean
    isFlagged?: boolean
    flagReason?: boolean
    isActive?: boolean
    moveInDate?: boolean
    moveOutDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    celNum?: boolean
    dateOfBirth?: boolean
    emergencyName?: boolean
    emergencyPhone?: boolean
    notes?: boolean
    isFlagged?: boolean
    flagReason?: boolean
    isActive?: boolean
    moveInDate?: boolean
    moveOutDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    celNum?: boolean
    dateOfBirth?: boolean
    emergencyName?: boolean
    emergencyPhone?: boolean
    notes?: boolean
    isFlagged?: boolean
    flagReason?: boolean
    isActive?: boolean
    moveInDate?: boolean
    moveOutDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TenantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "celNum" | "dateOfBirth" | "emergencyName" | "emergencyPhone" | "notes" | "isFlagged" | "flagReason" | "isActive" | "moveInDate" | "moveOutDate" | "createdAt" | "updatedAt", ExtArgs["result"]["tenant"]>
  export type TenantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leases?: boolean | Tenant$leasesArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TenantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TenantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TenantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tenant"
    objects: {
      leases: Prisma.$LeasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string
      celNum: string | null
      dateOfBirth: Date | null
      emergencyName: string | null
      emergencyPhone: string | null
      notes: string | null
      isFlagged: boolean
      flagReason: string | null
      isActive: boolean
      moveInDate: Date | null
      moveOutDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tenant"]>
    composites: {}
  }

  type TenantGetPayload<S extends boolean | null | undefined | TenantDefaultArgs> = $Result.GetResult<Prisma.$TenantPayload, S>

  type TenantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TenantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TenantCountAggregateInputType | true
    }

  export interface TenantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tenant'], meta: { name: 'Tenant' } }
    /**
     * Find zero or one Tenant that matches the filter.
     * @param {TenantFindUniqueArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantFindUniqueArgs>(args: SelectSubset<T, TenantFindUniqueArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tenant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TenantFindUniqueOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantFindFirstArgs>(args?: SelectSubset<T, TenantFindFirstArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenants
     * const tenants = await prisma.tenant.findMany()
     * 
     * // Get first 10 Tenants
     * const tenants = await prisma.tenant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantWithIdOnly = await prisma.tenant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenantFindManyArgs>(args?: SelectSubset<T, TenantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tenant.
     * @param {TenantCreateArgs} args - Arguments to create a Tenant.
     * @example
     * // Create one Tenant
     * const Tenant = await prisma.tenant.create({
     *   data: {
     *     // ... data to create a Tenant
     *   }
     * })
     * 
     */
    create<T extends TenantCreateArgs>(args: SelectSubset<T, TenantCreateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tenants.
     * @param {TenantCreateManyArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantCreateManyArgs>(args?: SelectSubset<T, TenantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tenants and returns the data saved in the database.
     * @param {TenantCreateManyAndReturnArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenantCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tenant.
     * @param {TenantDeleteArgs} args - Arguments to delete one Tenant.
     * @example
     * // Delete one Tenant
     * const Tenant = await prisma.tenant.delete({
     *   where: {
     *     // ... filter to delete one Tenant
     *   }
     * })
     * 
     */
    delete<T extends TenantDeleteArgs>(args: SelectSubset<T, TenantDeleteArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tenant.
     * @param {TenantUpdateArgs} args - Arguments to update one Tenant.
     * @example
     * // Update one Tenant
     * const tenant = await prisma.tenant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantUpdateArgs>(args: SelectSubset<T, TenantUpdateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tenants.
     * @param {TenantDeleteManyArgs} args - Arguments to filter Tenants to delete.
     * @example
     * // Delete a few Tenants
     * const { count } = await prisma.tenant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantDeleteManyArgs>(args?: SelectSubset<T, TenantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantUpdateManyArgs>(args: SelectSubset<T, TenantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants and returns the data updated in the database.
     * @param {TenantUpdateManyAndReturnArgs} args - Arguments to update many Tenants.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TenantUpdateManyAndReturnArgs>(args: SelectSubset<T, TenantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tenant.
     * @param {TenantUpsertArgs} args - Arguments to update or create a Tenant.
     * @example
     * // Update or create a Tenant
     * const tenant = await prisma.tenant.upsert({
     *   create: {
     *     // ... data to create a Tenant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenant we want to update
     *   }
     * })
     */
    upsert<T extends TenantUpsertArgs>(args: SelectSubset<T, TenantUpsertArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantCountArgs} args - Arguments to filter Tenants to count.
     * @example
     * // Count the number of Tenants
     * const count = await prisma.tenant.count({
     *   where: {
     *     // ... the filter for the Tenants we want to count
     *   }
     * })
    **/
    count<T extends TenantCountArgs>(
      args?: Subset<T, TenantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TenantAggregateArgs>(args: Subset<T, TenantAggregateArgs>): Prisma.PrismaPromise<GetTenantAggregateType<T>>

    /**
     * Group by Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TenantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantGroupByArgs['orderBy'] }
        : { orderBy?: TenantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tenant model
   */
  readonly fields: TenantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tenant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    leases<T extends Tenant$leasesArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$leasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tenant model
   */
  interface TenantFieldRefs {
    readonly id: FieldRef<"Tenant", 'String'>
    readonly firstName: FieldRef<"Tenant", 'String'>
    readonly lastName: FieldRef<"Tenant", 'String'>
    readonly email: FieldRef<"Tenant", 'String'>
    readonly celNum: FieldRef<"Tenant", 'String'>
    readonly dateOfBirth: FieldRef<"Tenant", 'DateTime'>
    readonly emergencyName: FieldRef<"Tenant", 'String'>
    readonly emergencyPhone: FieldRef<"Tenant", 'String'>
    readonly notes: FieldRef<"Tenant", 'String'>
    readonly isFlagged: FieldRef<"Tenant", 'Boolean'>
    readonly flagReason: FieldRef<"Tenant", 'String'>
    readonly isActive: FieldRef<"Tenant", 'Boolean'>
    readonly moveInDate: FieldRef<"Tenant", 'DateTime'>
    readonly moveOutDate: FieldRef<"Tenant", 'DateTime'>
    readonly createdAt: FieldRef<"Tenant", 'DateTime'>
    readonly updatedAt: FieldRef<"Tenant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tenant findUnique
   */
  export type TenantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findUniqueOrThrow
   */
  export type TenantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findFirst
   */
  export type TenantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findFirstOrThrow
   */
  export type TenantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findMany
   */
  export type TenantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenants to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant create
   */
  export type TenantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to create a Tenant.
     */
    data: XOR<TenantCreateInput, TenantUncheckedCreateInput>
  }

  /**
   * Tenant createMany
   */
  export type TenantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant createManyAndReturn
   */
  export type TenantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant update
   */
  export type TenantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to update a Tenant.
     */
    data: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
    /**
     * Choose, which Tenant to update.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant updateMany
   */
  export type TenantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant updateManyAndReturn
   */
  export type TenantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant upsert
   */
  export type TenantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The filter to search for the Tenant to update in case it exists.
     */
    where: TenantWhereUniqueInput
    /**
     * In case the Tenant found by the `where` argument doesn't exist, create a new Tenant with this data.
     */
    create: XOR<TenantCreateInput, TenantUncheckedCreateInput>
    /**
     * In case the Tenant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
  }

  /**
   * Tenant delete
   */
  export type TenantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter which Tenant to delete.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant deleteMany
   */
  export type TenantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenants to delete
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to delete.
     */
    limit?: number
  }

  /**
   * Tenant.leases
   */
  export type Tenant$leasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    where?: LeaseWhereInput
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    cursor?: LeaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaseScalarFieldEnum | LeaseScalarFieldEnum[]
  }

  /**
   * Tenant without action
   */
  export type TenantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
  }


  /**
   * Model Lease
   */

  export type AggregateLease = {
    _count: LeaseCountAggregateOutputType | null
    _min: LeaseMinAggregateOutputType | null
    _max: LeaseMaxAggregateOutputType | null
  }

  export type LeaseMinAggregateOutputType = {
    id: string | null
    unitId: string | null
    tenantId: string | null
    status: string | null
    leaseStartDate: Date | null
    leaseEndDate: Date | null
    terms: string | null
    notes: string | null
    signedAt: Date | null
    terminatedAt: Date | null
    terminationReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeaseMaxAggregateOutputType = {
    id: string | null
    unitId: string | null
    tenantId: string | null
    status: string | null
    leaseStartDate: Date | null
    leaseEndDate: Date | null
    terms: string | null
    notes: string | null
    signedAt: Date | null
    terminatedAt: Date | null
    terminationReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeaseCountAggregateOutputType = {
    id: number
    unitId: number
    tenantId: number
    status: number
    leaseStartDate: number
    leaseEndDate: number
    terms: number
    notes: number
    signedAt: number
    terminatedAt: number
    terminationReason: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LeaseMinAggregateInputType = {
    id?: true
    unitId?: true
    tenantId?: true
    status?: true
    leaseStartDate?: true
    leaseEndDate?: true
    terms?: true
    notes?: true
    signedAt?: true
    terminatedAt?: true
    terminationReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeaseMaxAggregateInputType = {
    id?: true
    unitId?: true
    tenantId?: true
    status?: true
    leaseStartDate?: true
    leaseEndDate?: true
    terms?: true
    notes?: true
    signedAt?: true
    terminatedAt?: true
    terminationReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeaseCountAggregateInputType = {
    id?: true
    unitId?: true
    tenantId?: true
    status?: true
    leaseStartDate?: true
    leaseEndDate?: true
    terms?: true
    notes?: true
    signedAt?: true
    terminatedAt?: true
    terminationReason?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LeaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lease to aggregate.
     */
    where?: LeaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leases to fetch.
     */
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leases
    **/
    _count?: true | LeaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeaseMaxAggregateInputType
  }

  export type GetLeaseAggregateType<T extends LeaseAggregateArgs> = {
        [P in keyof T & keyof AggregateLease]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLease[P]>
      : GetScalarType<T[P], AggregateLease[P]>
  }




  export type LeaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaseWhereInput
    orderBy?: LeaseOrderByWithAggregationInput | LeaseOrderByWithAggregationInput[]
    by: LeaseScalarFieldEnum[] | LeaseScalarFieldEnum
    having?: LeaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaseCountAggregateInputType | true
    _min?: LeaseMinAggregateInputType
    _max?: LeaseMaxAggregateInputType
  }

  export type LeaseGroupByOutputType = {
    id: string
    unitId: string
    tenantId: string
    status: string
    leaseStartDate: Date
    leaseEndDate: Date
    terms: string | null
    notes: string | null
    signedAt: Date | null
    terminatedAt: Date | null
    terminationReason: string | null
    createdAt: Date
    updatedAt: Date
    _count: LeaseCountAggregateOutputType | null
    _min: LeaseMinAggregateOutputType | null
    _max: LeaseMaxAggregateOutputType | null
  }

  type GetLeaseGroupByPayload<T extends LeaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaseGroupByOutputType[P]>
            : GetScalarType<T[P], LeaseGroupByOutputType[P]>
        }
      >
    >


  export type LeaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unitId?: boolean
    tenantId?: boolean
    status?: boolean
    leaseStartDate?: boolean
    leaseEndDate?: boolean
    terms?: boolean
    notes?: boolean
    signedAt?: boolean
    terminatedAt?: boolean
    terminationReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    transactions?: boolean | Lease$transactionsArgs<ExtArgs>
    _count?: boolean | LeaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lease"]>

  export type LeaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unitId?: boolean
    tenantId?: boolean
    status?: boolean
    leaseStartDate?: boolean
    leaseEndDate?: boolean
    terms?: boolean
    notes?: boolean
    signedAt?: boolean
    terminatedAt?: boolean
    terminationReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lease"]>

  export type LeaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unitId?: boolean
    tenantId?: boolean
    status?: boolean
    leaseStartDate?: boolean
    leaseEndDate?: boolean
    terms?: boolean
    notes?: boolean
    signedAt?: boolean
    terminatedAt?: boolean
    terminationReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lease"]>

  export type LeaseSelectScalar = {
    id?: boolean
    unitId?: boolean
    tenantId?: boolean
    status?: boolean
    leaseStartDate?: boolean
    leaseEndDate?: boolean
    terms?: boolean
    notes?: boolean
    signedAt?: boolean
    terminatedAt?: boolean
    terminationReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LeaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "unitId" | "tenantId" | "status" | "leaseStartDate" | "leaseEndDate" | "terms" | "notes" | "signedAt" | "terminatedAt" | "terminationReason" | "createdAt" | "updatedAt", ExtArgs["result"]["lease"]>
  export type LeaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    transactions?: boolean | Lease$transactionsArgs<ExtArgs>
    _count?: boolean | LeaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LeaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type LeaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $LeasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lease"
    objects: {
      unit: Prisma.$UnitPayload<ExtArgs>
      tenant: Prisma.$TenantPayload<ExtArgs>
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      unitId: string
      tenantId: string
      status: string
      leaseStartDate: Date
      leaseEndDate: Date
      terms: string | null
      notes: string | null
      signedAt: Date | null
      terminatedAt: Date | null
      terminationReason: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lease"]>
    composites: {}
  }

  type LeaseGetPayload<S extends boolean | null | undefined | LeaseDefaultArgs> = $Result.GetResult<Prisma.$LeasePayload, S>

  type LeaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeaseCountAggregateInputType | true
    }

  export interface LeaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lease'], meta: { name: 'Lease' } }
    /**
     * Find zero or one Lease that matches the filter.
     * @param {LeaseFindUniqueArgs} args - Arguments to find a Lease
     * @example
     * // Get one Lease
     * const lease = await prisma.lease.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeaseFindUniqueArgs>(args: SelectSubset<T, LeaseFindUniqueArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lease that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeaseFindUniqueOrThrowArgs} args - Arguments to find a Lease
     * @example
     * // Get one Lease
     * const lease = await prisma.lease.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeaseFindUniqueOrThrowArgs>(args: SelectSubset<T, LeaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lease that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseFindFirstArgs} args - Arguments to find a Lease
     * @example
     * // Get one Lease
     * const lease = await prisma.lease.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeaseFindFirstArgs>(args?: SelectSubset<T, LeaseFindFirstArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lease that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseFindFirstOrThrowArgs} args - Arguments to find a Lease
     * @example
     * // Get one Lease
     * const lease = await prisma.lease.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeaseFindFirstOrThrowArgs>(args?: SelectSubset<T, LeaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leases
     * const leases = await prisma.lease.findMany()
     * 
     * // Get first 10 Leases
     * const leases = await prisma.lease.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leaseWithIdOnly = await prisma.lease.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeaseFindManyArgs>(args?: SelectSubset<T, LeaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lease.
     * @param {LeaseCreateArgs} args - Arguments to create a Lease.
     * @example
     * // Create one Lease
     * const Lease = await prisma.lease.create({
     *   data: {
     *     // ... data to create a Lease
     *   }
     * })
     * 
     */
    create<T extends LeaseCreateArgs>(args: SelectSubset<T, LeaseCreateArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leases.
     * @param {LeaseCreateManyArgs} args - Arguments to create many Leases.
     * @example
     * // Create many Leases
     * const lease = await prisma.lease.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeaseCreateManyArgs>(args?: SelectSubset<T, LeaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leases and returns the data saved in the database.
     * @param {LeaseCreateManyAndReturnArgs} args - Arguments to create many Leases.
     * @example
     * // Create many Leases
     * const lease = await prisma.lease.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leases and only return the `id`
     * const leaseWithIdOnly = await prisma.lease.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeaseCreateManyAndReturnArgs>(args?: SelectSubset<T, LeaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lease.
     * @param {LeaseDeleteArgs} args - Arguments to delete one Lease.
     * @example
     * // Delete one Lease
     * const Lease = await prisma.lease.delete({
     *   where: {
     *     // ... filter to delete one Lease
     *   }
     * })
     * 
     */
    delete<T extends LeaseDeleteArgs>(args: SelectSubset<T, LeaseDeleteArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lease.
     * @param {LeaseUpdateArgs} args - Arguments to update one Lease.
     * @example
     * // Update one Lease
     * const lease = await prisma.lease.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeaseUpdateArgs>(args: SelectSubset<T, LeaseUpdateArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leases.
     * @param {LeaseDeleteManyArgs} args - Arguments to filter Leases to delete.
     * @example
     * // Delete a few Leases
     * const { count } = await prisma.lease.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeaseDeleteManyArgs>(args?: SelectSubset<T, LeaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leases
     * const lease = await prisma.lease.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeaseUpdateManyArgs>(args: SelectSubset<T, LeaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leases and returns the data updated in the database.
     * @param {LeaseUpdateManyAndReturnArgs} args - Arguments to update many Leases.
     * @example
     * // Update many Leases
     * const lease = await prisma.lease.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leases and only return the `id`
     * const leaseWithIdOnly = await prisma.lease.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LeaseUpdateManyAndReturnArgs>(args: SelectSubset<T, LeaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lease.
     * @param {LeaseUpsertArgs} args - Arguments to update or create a Lease.
     * @example
     * // Update or create a Lease
     * const lease = await prisma.lease.upsert({
     *   create: {
     *     // ... data to create a Lease
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lease we want to update
     *   }
     * })
     */
    upsert<T extends LeaseUpsertArgs>(args: SelectSubset<T, LeaseUpsertArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseCountArgs} args - Arguments to filter Leases to count.
     * @example
     * // Count the number of Leases
     * const count = await prisma.lease.count({
     *   where: {
     *     // ... the filter for the Leases we want to count
     *   }
     * })
    **/
    count<T extends LeaseCountArgs>(
      args?: Subset<T, LeaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lease.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeaseAggregateArgs>(args: Subset<T, LeaseAggregateArgs>): Prisma.PrismaPromise<GetLeaseAggregateType<T>>

    /**
     * Group by Lease.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaseGroupByArgs['orderBy'] }
        : { orderBy?: LeaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lease model
   */
  readonly fields: LeaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lease.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    unit<T extends UnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UnitDefaultArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends Lease$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Lease$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lease model
   */
  interface LeaseFieldRefs {
    readonly id: FieldRef<"Lease", 'String'>
    readonly unitId: FieldRef<"Lease", 'String'>
    readonly tenantId: FieldRef<"Lease", 'String'>
    readonly status: FieldRef<"Lease", 'String'>
    readonly leaseStartDate: FieldRef<"Lease", 'DateTime'>
    readonly leaseEndDate: FieldRef<"Lease", 'DateTime'>
    readonly terms: FieldRef<"Lease", 'String'>
    readonly notes: FieldRef<"Lease", 'String'>
    readonly signedAt: FieldRef<"Lease", 'DateTime'>
    readonly terminatedAt: FieldRef<"Lease", 'DateTime'>
    readonly terminationReason: FieldRef<"Lease", 'String'>
    readonly createdAt: FieldRef<"Lease", 'DateTime'>
    readonly updatedAt: FieldRef<"Lease", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lease findUnique
   */
  export type LeaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter, which Lease to fetch.
     */
    where: LeaseWhereUniqueInput
  }

  /**
   * Lease findUniqueOrThrow
   */
  export type LeaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter, which Lease to fetch.
     */
    where: LeaseWhereUniqueInput
  }

  /**
   * Lease findFirst
   */
  export type LeaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter, which Lease to fetch.
     */
    where?: LeaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leases to fetch.
     */
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leases.
     */
    cursor?: LeaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leases.
     */
    distinct?: LeaseScalarFieldEnum | LeaseScalarFieldEnum[]
  }

  /**
   * Lease findFirstOrThrow
   */
  export type LeaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter, which Lease to fetch.
     */
    where?: LeaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leases to fetch.
     */
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leases.
     */
    cursor?: LeaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leases.
     */
    distinct?: LeaseScalarFieldEnum | LeaseScalarFieldEnum[]
  }

  /**
   * Lease findMany
   */
  export type LeaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter, which Leases to fetch.
     */
    where?: LeaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leases to fetch.
     */
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leases.
     */
    cursor?: LeaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leases.
     */
    distinct?: LeaseScalarFieldEnum | LeaseScalarFieldEnum[]
  }

  /**
   * Lease create
   */
  export type LeaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Lease.
     */
    data: XOR<LeaseCreateInput, LeaseUncheckedCreateInput>
  }

  /**
   * Lease createMany
   */
  export type LeaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leases.
     */
    data: LeaseCreateManyInput | LeaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lease createManyAndReturn
   */
  export type LeaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * The data used to create many Leases.
     */
    data: LeaseCreateManyInput | LeaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lease update
   */
  export type LeaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Lease.
     */
    data: XOR<LeaseUpdateInput, LeaseUncheckedUpdateInput>
    /**
     * Choose, which Lease to update.
     */
    where: LeaseWhereUniqueInput
  }

  /**
   * Lease updateMany
   */
  export type LeaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leases.
     */
    data: XOR<LeaseUpdateManyMutationInput, LeaseUncheckedUpdateManyInput>
    /**
     * Filter which Leases to update
     */
    where?: LeaseWhereInput
    /**
     * Limit how many Leases to update.
     */
    limit?: number
  }

  /**
   * Lease updateManyAndReturn
   */
  export type LeaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * The data used to update Leases.
     */
    data: XOR<LeaseUpdateManyMutationInput, LeaseUncheckedUpdateManyInput>
    /**
     * Filter which Leases to update
     */
    where?: LeaseWhereInput
    /**
     * Limit how many Leases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lease upsert
   */
  export type LeaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Lease to update in case it exists.
     */
    where: LeaseWhereUniqueInput
    /**
     * In case the Lease found by the `where` argument doesn't exist, create a new Lease with this data.
     */
    create: XOR<LeaseCreateInput, LeaseUncheckedCreateInput>
    /**
     * In case the Lease was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeaseUpdateInput, LeaseUncheckedUpdateInput>
  }

  /**
   * Lease delete
   */
  export type LeaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter which Lease to delete.
     */
    where: LeaseWhereUniqueInput
  }

  /**
   * Lease deleteMany
   */
  export type LeaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leases to delete
     */
    where?: LeaseWhereInput
    /**
     * Limit how many Leases to delete.
     */
    limit?: number
  }

  /**
   * Lease.transactions
   */
  export type Lease$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Lease without action
   */
  export type LeaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    amount: number | null
  }

  export type TransactionSumAggregateOutputType = {
    amount: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    leaseId: string | null
    amount: number | null
    reference: string | null
    transactionDate: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    leaseId: string | null
    amount: number | null
    reference: string | null
    transactionDate: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    leaseId: number
    amount: number
    reference: number
    transactionDate: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    amount?: true
  }

  export type TransactionSumAggregateInputType = {
    amount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    leaseId?: true
    amount?: true
    reference?: true
    transactionDate?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    leaseId?: true
    amount?: true
    reference?: true
    transactionDate?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    leaseId?: true
    amount?: true
    reference?: true
    transactionDate?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    leaseId: string
    amount: number
    reference: string
    transactionDate: Date
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leaseId?: boolean
    amount?: boolean
    reference?: boolean
    transactionDate?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lease?: boolean | LeaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leaseId?: boolean
    amount?: boolean
    reference?: boolean
    transactionDate?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lease?: boolean | LeaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leaseId?: boolean
    amount?: boolean
    reference?: boolean
    transactionDate?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lease?: boolean | LeaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    leaseId?: boolean
    amount?: boolean
    reference?: boolean
    transactionDate?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "leaseId" | "amount" | "reference" | "transactionDate" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lease?: boolean | LeaseDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lease?: boolean | LeaseDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lease?: boolean | LeaseDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      lease: Prisma.$LeasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      leaseId: string
      amount: number
      reference: string
      transactionDate: Date
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lease<T extends LeaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeaseDefaultArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly leaseId: FieldRef<"Transaction", 'String'>
    readonly amount: FieldRef<"Transaction", 'Float'>
    readonly reference: FieldRef<"Transaction", 'String'>
    readonly transactionDate: FieldRef<"Transaction", 'DateTime'>
    readonly notes: FieldRef<"Transaction", 'String'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
    readonly updatedAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model Announcement
   */

  export type AggregateAnnouncement = {
    _count: AnnouncementCountAggregateOutputType | null
    _min: AnnouncementMinAggregateOutputType | null
    _max: AnnouncementMaxAggregateOutputType | null
  }

  export type AnnouncementMinAggregateOutputType = {
    id: string | null
    title: string | null
    body: string | null
    isActive: boolean | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnnouncementMaxAggregateOutputType = {
    id: string | null
    title: string | null
    body: string | null
    isActive: boolean | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnnouncementCountAggregateOutputType = {
    id: number
    title: number
    body: number
    isActive: number
    publishedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AnnouncementMinAggregateInputType = {
    id?: true
    title?: true
    body?: true
    isActive?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnnouncementMaxAggregateInputType = {
    id?: true
    title?: true
    body?: true
    isActive?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnnouncementCountAggregateInputType = {
    id?: true
    title?: true
    body?: true
    isActive?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AnnouncementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Announcement to aggregate.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Announcements
    **/
    _count?: true | AnnouncementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnnouncementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnnouncementMaxAggregateInputType
  }

  export type GetAnnouncementAggregateType<T extends AnnouncementAggregateArgs> = {
        [P in keyof T & keyof AggregateAnnouncement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnnouncement[P]>
      : GetScalarType<T[P], AggregateAnnouncement[P]>
  }




  export type AnnouncementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementWhereInput
    orderBy?: AnnouncementOrderByWithAggregationInput | AnnouncementOrderByWithAggregationInput[]
    by: AnnouncementScalarFieldEnum[] | AnnouncementScalarFieldEnum
    having?: AnnouncementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnnouncementCountAggregateInputType | true
    _min?: AnnouncementMinAggregateInputType
    _max?: AnnouncementMaxAggregateInputType
  }

  export type AnnouncementGroupByOutputType = {
    id: string
    title: string
    body: string
    isActive: boolean
    publishedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: AnnouncementCountAggregateOutputType | null
    _min: AnnouncementMinAggregateOutputType | null
    _max: AnnouncementMaxAggregateOutputType | null
  }

  type GetAnnouncementGroupByPayload<T extends AnnouncementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnnouncementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnnouncementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnnouncementGroupByOutputType[P]>
            : GetScalarType<T[P], AnnouncementGroupByOutputType[P]>
        }
      >
    >


  export type AnnouncementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    body?: boolean
    isActive?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    propertyAnnouncements?: boolean | Announcement$propertyAnnouncementsArgs<ExtArgs>
    unitAnnouncements?: boolean | Announcement$unitAnnouncementsArgs<ExtArgs>
    _count?: boolean | AnnouncementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    body?: boolean
    isActive?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    body?: boolean
    isActive?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectScalar = {
    id?: boolean
    title?: boolean
    body?: boolean
    isActive?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AnnouncementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "body" | "isActive" | "publishedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["announcement"]>
  export type AnnouncementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    propertyAnnouncements?: boolean | Announcement$propertyAnnouncementsArgs<ExtArgs>
    unitAnnouncements?: boolean | Announcement$unitAnnouncementsArgs<ExtArgs>
    _count?: boolean | AnnouncementCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnnouncementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AnnouncementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AnnouncementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Announcement"
    objects: {
      propertyAnnouncements: Prisma.$PropertyAnnouncementPayload<ExtArgs>[]
      unitAnnouncements: Prisma.$UnitAnnouncementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      body: string
      isActive: boolean
      publishedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["announcement"]>
    composites: {}
  }

  type AnnouncementGetPayload<S extends boolean | null | undefined | AnnouncementDefaultArgs> = $Result.GetResult<Prisma.$AnnouncementPayload, S>

  type AnnouncementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnnouncementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnnouncementCountAggregateInputType | true
    }

  export interface AnnouncementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Announcement'], meta: { name: 'Announcement' } }
    /**
     * Find zero or one Announcement that matches the filter.
     * @param {AnnouncementFindUniqueArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnnouncementFindUniqueArgs>(args: SelectSubset<T, AnnouncementFindUniqueArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Announcement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnnouncementFindUniqueOrThrowArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnnouncementFindUniqueOrThrowArgs>(args: SelectSubset<T, AnnouncementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Announcement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindFirstArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnnouncementFindFirstArgs>(args?: SelectSubset<T, AnnouncementFindFirstArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Announcement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindFirstOrThrowArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnnouncementFindFirstOrThrowArgs>(args?: SelectSubset<T, AnnouncementFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Announcements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Announcements
     * const announcements = await prisma.announcement.findMany()
     * 
     * // Get first 10 Announcements
     * const announcements = await prisma.announcement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const announcementWithIdOnly = await prisma.announcement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnnouncementFindManyArgs>(args?: SelectSubset<T, AnnouncementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Announcement.
     * @param {AnnouncementCreateArgs} args - Arguments to create a Announcement.
     * @example
     * // Create one Announcement
     * const Announcement = await prisma.announcement.create({
     *   data: {
     *     // ... data to create a Announcement
     *   }
     * })
     * 
     */
    create<T extends AnnouncementCreateArgs>(args: SelectSubset<T, AnnouncementCreateArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Announcements.
     * @param {AnnouncementCreateManyArgs} args - Arguments to create many Announcements.
     * @example
     * // Create many Announcements
     * const announcement = await prisma.announcement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnnouncementCreateManyArgs>(args?: SelectSubset<T, AnnouncementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Announcements and returns the data saved in the database.
     * @param {AnnouncementCreateManyAndReturnArgs} args - Arguments to create many Announcements.
     * @example
     * // Create many Announcements
     * const announcement = await prisma.announcement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Announcements and only return the `id`
     * const announcementWithIdOnly = await prisma.announcement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnnouncementCreateManyAndReturnArgs>(args?: SelectSubset<T, AnnouncementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Announcement.
     * @param {AnnouncementDeleteArgs} args - Arguments to delete one Announcement.
     * @example
     * // Delete one Announcement
     * const Announcement = await prisma.announcement.delete({
     *   where: {
     *     // ... filter to delete one Announcement
     *   }
     * })
     * 
     */
    delete<T extends AnnouncementDeleteArgs>(args: SelectSubset<T, AnnouncementDeleteArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Announcement.
     * @param {AnnouncementUpdateArgs} args - Arguments to update one Announcement.
     * @example
     * // Update one Announcement
     * const announcement = await prisma.announcement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnnouncementUpdateArgs>(args: SelectSubset<T, AnnouncementUpdateArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Announcements.
     * @param {AnnouncementDeleteManyArgs} args - Arguments to filter Announcements to delete.
     * @example
     * // Delete a few Announcements
     * const { count } = await prisma.announcement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnnouncementDeleteManyArgs>(args?: SelectSubset<T, AnnouncementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Announcements
     * const announcement = await prisma.announcement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnnouncementUpdateManyArgs>(args: SelectSubset<T, AnnouncementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Announcements and returns the data updated in the database.
     * @param {AnnouncementUpdateManyAndReturnArgs} args - Arguments to update many Announcements.
     * @example
     * // Update many Announcements
     * const announcement = await prisma.announcement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Announcements and only return the `id`
     * const announcementWithIdOnly = await prisma.announcement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnnouncementUpdateManyAndReturnArgs>(args: SelectSubset<T, AnnouncementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Announcement.
     * @param {AnnouncementUpsertArgs} args - Arguments to update or create a Announcement.
     * @example
     * // Update or create a Announcement
     * const announcement = await prisma.announcement.upsert({
     *   create: {
     *     // ... data to create a Announcement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Announcement we want to update
     *   }
     * })
     */
    upsert<T extends AnnouncementUpsertArgs>(args: SelectSubset<T, AnnouncementUpsertArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementCountArgs} args - Arguments to filter Announcements to count.
     * @example
     * // Count the number of Announcements
     * const count = await prisma.announcement.count({
     *   where: {
     *     // ... the filter for the Announcements we want to count
     *   }
     * })
    **/
    count<T extends AnnouncementCountArgs>(
      args?: Subset<T, AnnouncementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnnouncementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Announcement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnnouncementAggregateArgs>(args: Subset<T, AnnouncementAggregateArgs>): Prisma.PrismaPromise<GetAnnouncementAggregateType<T>>

    /**
     * Group by Announcement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnnouncementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnnouncementGroupByArgs['orderBy'] }
        : { orderBy?: AnnouncementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnnouncementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnnouncementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Announcement model
   */
  readonly fields: AnnouncementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Announcement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnnouncementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    propertyAnnouncements<T extends Announcement$propertyAnnouncementsArgs<ExtArgs> = {}>(args?: Subset<T, Announcement$propertyAnnouncementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyAnnouncementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    unitAnnouncements<T extends Announcement$unitAnnouncementsArgs<ExtArgs> = {}>(args?: Subset<T, Announcement$unitAnnouncementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitAnnouncementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Announcement model
   */
  interface AnnouncementFieldRefs {
    readonly id: FieldRef<"Announcement", 'String'>
    readonly title: FieldRef<"Announcement", 'String'>
    readonly body: FieldRef<"Announcement", 'String'>
    readonly isActive: FieldRef<"Announcement", 'Boolean'>
    readonly publishedAt: FieldRef<"Announcement", 'DateTime'>
    readonly createdAt: FieldRef<"Announcement", 'DateTime'>
    readonly updatedAt: FieldRef<"Announcement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Announcement findUnique
   */
  export type AnnouncementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement findUniqueOrThrow
   */
  export type AnnouncementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement findFirst
   */
  export type AnnouncementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement findFirstOrThrow
   */
  export type AnnouncementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement findMany
   */
  export type AnnouncementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcements to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement create
   */
  export type AnnouncementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * The data needed to create a Announcement.
     */
    data: XOR<AnnouncementCreateInput, AnnouncementUncheckedCreateInput>
  }

  /**
   * Announcement createMany
   */
  export type AnnouncementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Announcements.
     */
    data: AnnouncementCreateManyInput | AnnouncementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Announcement createManyAndReturn
   */
  export type AnnouncementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * The data used to create many Announcements.
     */
    data: AnnouncementCreateManyInput | AnnouncementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Announcement update
   */
  export type AnnouncementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * The data needed to update a Announcement.
     */
    data: XOR<AnnouncementUpdateInput, AnnouncementUncheckedUpdateInput>
    /**
     * Choose, which Announcement to update.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement updateMany
   */
  export type AnnouncementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Announcements.
     */
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyInput>
    /**
     * Filter which Announcements to update
     */
    where?: AnnouncementWhereInput
    /**
     * Limit how many Announcements to update.
     */
    limit?: number
  }

  /**
   * Announcement updateManyAndReturn
   */
  export type AnnouncementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * The data used to update Announcements.
     */
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyInput>
    /**
     * Filter which Announcements to update
     */
    where?: AnnouncementWhereInput
    /**
     * Limit how many Announcements to update.
     */
    limit?: number
  }

  /**
   * Announcement upsert
   */
  export type AnnouncementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * The filter to search for the Announcement to update in case it exists.
     */
    where: AnnouncementWhereUniqueInput
    /**
     * In case the Announcement found by the `where` argument doesn't exist, create a new Announcement with this data.
     */
    create: XOR<AnnouncementCreateInput, AnnouncementUncheckedCreateInput>
    /**
     * In case the Announcement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnnouncementUpdateInput, AnnouncementUncheckedUpdateInput>
  }

  /**
   * Announcement delete
   */
  export type AnnouncementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter which Announcement to delete.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement deleteMany
   */
  export type AnnouncementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Announcements to delete
     */
    where?: AnnouncementWhereInput
    /**
     * Limit how many Announcements to delete.
     */
    limit?: number
  }

  /**
   * Announcement.propertyAnnouncements
   */
  export type Announcement$propertyAnnouncementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAnnouncement
     */
    select?: PropertyAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAnnouncement
     */
    omit?: PropertyAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAnnouncementInclude<ExtArgs> | null
    where?: PropertyAnnouncementWhereInput
    orderBy?: PropertyAnnouncementOrderByWithRelationInput | PropertyAnnouncementOrderByWithRelationInput[]
    cursor?: PropertyAnnouncementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyAnnouncementScalarFieldEnum | PropertyAnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement.unitAnnouncements
   */
  export type Announcement$unitAnnouncementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitAnnouncement
     */
    select?: UnitAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitAnnouncement
     */
    omit?: UnitAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitAnnouncementInclude<ExtArgs> | null
    where?: UnitAnnouncementWhereInput
    orderBy?: UnitAnnouncementOrderByWithRelationInput | UnitAnnouncementOrderByWithRelationInput[]
    cursor?: UnitAnnouncementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnitAnnouncementScalarFieldEnum | UnitAnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement without action
   */
  export type AnnouncementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
  }


  /**
   * Model PropertyAnnouncement
   */

  export type AggregatePropertyAnnouncement = {
    _count: PropertyAnnouncementCountAggregateOutputType | null
    _min: PropertyAnnouncementMinAggregateOutputType | null
    _max: PropertyAnnouncementMaxAggregateOutputType | null
  }

  export type PropertyAnnouncementMinAggregateOutputType = {
    id: string | null
    announcementId: string | null
    propertyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyAnnouncementMaxAggregateOutputType = {
    id: string | null
    announcementId: string | null
    propertyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyAnnouncementCountAggregateOutputType = {
    id: number
    announcementId: number
    propertyId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PropertyAnnouncementMinAggregateInputType = {
    id?: true
    announcementId?: true
    propertyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyAnnouncementMaxAggregateInputType = {
    id?: true
    announcementId?: true
    propertyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyAnnouncementCountAggregateInputType = {
    id?: true
    announcementId?: true
    propertyId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PropertyAnnouncementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyAnnouncement to aggregate.
     */
    where?: PropertyAnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyAnnouncements to fetch.
     */
    orderBy?: PropertyAnnouncementOrderByWithRelationInput | PropertyAnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyAnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyAnnouncements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyAnnouncements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropertyAnnouncements
    **/
    _count?: true | PropertyAnnouncementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyAnnouncementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyAnnouncementMaxAggregateInputType
  }

  export type GetPropertyAnnouncementAggregateType<T extends PropertyAnnouncementAggregateArgs> = {
        [P in keyof T & keyof AggregatePropertyAnnouncement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropertyAnnouncement[P]>
      : GetScalarType<T[P], AggregatePropertyAnnouncement[P]>
  }




  export type PropertyAnnouncementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyAnnouncementWhereInput
    orderBy?: PropertyAnnouncementOrderByWithAggregationInput | PropertyAnnouncementOrderByWithAggregationInput[]
    by: PropertyAnnouncementScalarFieldEnum[] | PropertyAnnouncementScalarFieldEnum
    having?: PropertyAnnouncementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyAnnouncementCountAggregateInputType | true
    _min?: PropertyAnnouncementMinAggregateInputType
    _max?: PropertyAnnouncementMaxAggregateInputType
  }

  export type PropertyAnnouncementGroupByOutputType = {
    id: string
    announcementId: string
    propertyId: string
    createdAt: Date
    updatedAt: Date
    _count: PropertyAnnouncementCountAggregateOutputType | null
    _min: PropertyAnnouncementMinAggregateOutputType | null
    _max: PropertyAnnouncementMaxAggregateOutputType | null
  }

  type GetPropertyAnnouncementGroupByPayload<T extends PropertyAnnouncementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyAnnouncementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyAnnouncementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyAnnouncementGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyAnnouncementGroupByOutputType[P]>
        }
      >
    >


  export type PropertyAnnouncementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    announcementId?: boolean
    propertyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyAnnouncement"]>

  export type PropertyAnnouncementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    announcementId?: boolean
    propertyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyAnnouncement"]>

  export type PropertyAnnouncementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    announcementId?: boolean
    propertyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyAnnouncement"]>

  export type PropertyAnnouncementSelectScalar = {
    id?: boolean
    announcementId?: boolean
    propertyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PropertyAnnouncementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "announcementId" | "propertyId" | "createdAt" | "updatedAt", ExtArgs["result"]["propertyAnnouncement"]>
  export type PropertyAnnouncementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type PropertyAnnouncementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type PropertyAnnouncementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $PropertyAnnouncementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PropertyAnnouncement"
    objects: {
      announcement: Prisma.$AnnouncementPayload<ExtArgs>
      property: Prisma.$PropertyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      announcementId: string
      propertyId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["propertyAnnouncement"]>
    composites: {}
  }

  type PropertyAnnouncementGetPayload<S extends boolean | null | undefined | PropertyAnnouncementDefaultArgs> = $Result.GetResult<Prisma.$PropertyAnnouncementPayload, S>

  type PropertyAnnouncementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyAnnouncementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyAnnouncementCountAggregateInputType | true
    }

  export interface PropertyAnnouncementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PropertyAnnouncement'], meta: { name: 'PropertyAnnouncement' } }
    /**
     * Find zero or one PropertyAnnouncement that matches the filter.
     * @param {PropertyAnnouncementFindUniqueArgs} args - Arguments to find a PropertyAnnouncement
     * @example
     * // Get one PropertyAnnouncement
     * const propertyAnnouncement = await prisma.propertyAnnouncement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyAnnouncementFindUniqueArgs>(args: SelectSubset<T, PropertyAnnouncementFindUniqueArgs<ExtArgs>>): Prisma__PropertyAnnouncementClient<$Result.GetResult<Prisma.$PropertyAnnouncementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PropertyAnnouncement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyAnnouncementFindUniqueOrThrowArgs} args - Arguments to find a PropertyAnnouncement
     * @example
     * // Get one PropertyAnnouncement
     * const propertyAnnouncement = await prisma.propertyAnnouncement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyAnnouncementFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyAnnouncementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyAnnouncementClient<$Result.GetResult<Prisma.$PropertyAnnouncementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertyAnnouncement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAnnouncementFindFirstArgs} args - Arguments to find a PropertyAnnouncement
     * @example
     * // Get one PropertyAnnouncement
     * const propertyAnnouncement = await prisma.propertyAnnouncement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyAnnouncementFindFirstArgs>(args?: SelectSubset<T, PropertyAnnouncementFindFirstArgs<ExtArgs>>): Prisma__PropertyAnnouncementClient<$Result.GetResult<Prisma.$PropertyAnnouncementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertyAnnouncement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAnnouncementFindFirstOrThrowArgs} args - Arguments to find a PropertyAnnouncement
     * @example
     * // Get one PropertyAnnouncement
     * const propertyAnnouncement = await prisma.propertyAnnouncement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyAnnouncementFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyAnnouncementFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyAnnouncementClient<$Result.GetResult<Prisma.$PropertyAnnouncementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PropertyAnnouncements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAnnouncementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropertyAnnouncements
     * const propertyAnnouncements = await prisma.propertyAnnouncement.findMany()
     * 
     * // Get first 10 PropertyAnnouncements
     * const propertyAnnouncements = await prisma.propertyAnnouncement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyAnnouncementWithIdOnly = await prisma.propertyAnnouncement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyAnnouncementFindManyArgs>(args?: SelectSubset<T, PropertyAnnouncementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyAnnouncementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PropertyAnnouncement.
     * @param {PropertyAnnouncementCreateArgs} args - Arguments to create a PropertyAnnouncement.
     * @example
     * // Create one PropertyAnnouncement
     * const PropertyAnnouncement = await prisma.propertyAnnouncement.create({
     *   data: {
     *     // ... data to create a PropertyAnnouncement
     *   }
     * })
     * 
     */
    create<T extends PropertyAnnouncementCreateArgs>(args: SelectSubset<T, PropertyAnnouncementCreateArgs<ExtArgs>>): Prisma__PropertyAnnouncementClient<$Result.GetResult<Prisma.$PropertyAnnouncementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PropertyAnnouncements.
     * @param {PropertyAnnouncementCreateManyArgs} args - Arguments to create many PropertyAnnouncements.
     * @example
     * // Create many PropertyAnnouncements
     * const propertyAnnouncement = await prisma.propertyAnnouncement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyAnnouncementCreateManyArgs>(args?: SelectSubset<T, PropertyAnnouncementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PropertyAnnouncements and returns the data saved in the database.
     * @param {PropertyAnnouncementCreateManyAndReturnArgs} args - Arguments to create many PropertyAnnouncements.
     * @example
     * // Create many PropertyAnnouncements
     * const propertyAnnouncement = await prisma.propertyAnnouncement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PropertyAnnouncements and only return the `id`
     * const propertyAnnouncementWithIdOnly = await prisma.propertyAnnouncement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyAnnouncementCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyAnnouncementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyAnnouncementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PropertyAnnouncement.
     * @param {PropertyAnnouncementDeleteArgs} args - Arguments to delete one PropertyAnnouncement.
     * @example
     * // Delete one PropertyAnnouncement
     * const PropertyAnnouncement = await prisma.propertyAnnouncement.delete({
     *   where: {
     *     // ... filter to delete one PropertyAnnouncement
     *   }
     * })
     * 
     */
    delete<T extends PropertyAnnouncementDeleteArgs>(args: SelectSubset<T, PropertyAnnouncementDeleteArgs<ExtArgs>>): Prisma__PropertyAnnouncementClient<$Result.GetResult<Prisma.$PropertyAnnouncementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PropertyAnnouncement.
     * @param {PropertyAnnouncementUpdateArgs} args - Arguments to update one PropertyAnnouncement.
     * @example
     * // Update one PropertyAnnouncement
     * const propertyAnnouncement = await prisma.propertyAnnouncement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyAnnouncementUpdateArgs>(args: SelectSubset<T, PropertyAnnouncementUpdateArgs<ExtArgs>>): Prisma__PropertyAnnouncementClient<$Result.GetResult<Prisma.$PropertyAnnouncementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PropertyAnnouncements.
     * @param {PropertyAnnouncementDeleteManyArgs} args - Arguments to filter PropertyAnnouncements to delete.
     * @example
     * // Delete a few PropertyAnnouncements
     * const { count } = await prisma.propertyAnnouncement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyAnnouncementDeleteManyArgs>(args?: SelectSubset<T, PropertyAnnouncementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyAnnouncements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAnnouncementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropertyAnnouncements
     * const propertyAnnouncement = await prisma.propertyAnnouncement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyAnnouncementUpdateManyArgs>(args: SelectSubset<T, PropertyAnnouncementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyAnnouncements and returns the data updated in the database.
     * @param {PropertyAnnouncementUpdateManyAndReturnArgs} args - Arguments to update many PropertyAnnouncements.
     * @example
     * // Update many PropertyAnnouncements
     * const propertyAnnouncement = await prisma.propertyAnnouncement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PropertyAnnouncements and only return the `id`
     * const propertyAnnouncementWithIdOnly = await prisma.propertyAnnouncement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PropertyAnnouncementUpdateManyAndReturnArgs>(args: SelectSubset<T, PropertyAnnouncementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyAnnouncementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PropertyAnnouncement.
     * @param {PropertyAnnouncementUpsertArgs} args - Arguments to update or create a PropertyAnnouncement.
     * @example
     * // Update or create a PropertyAnnouncement
     * const propertyAnnouncement = await prisma.propertyAnnouncement.upsert({
     *   create: {
     *     // ... data to create a PropertyAnnouncement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropertyAnnouncement we want to update
     *   }
     * })
     */
    upsert<T extends PropertyAnnouncementUpsertArgs>(args: SelectSubset<T, PropertyAnnouncementUpsertArgs<ExtArgs>>): Prisma__PropertyAnnouncementClient<$Result.GetResult<Prisma.$PropertyAnnouncementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PropertyAnnouncements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAnnouncementCountArgs} args - Arguments to filter PropertyAnnouncements to count.
     * @example
     * // Count the number of PropertyAnnouncements
     * const count = await prisma.propertyAnnouncement.count({
     *   where: {
     *     // ... the filter for the PropertyAnnouncements we want to count
     *   }
     * })
    **/
    count<T extends PropertyAnnouncementCountArgs>(
      args?: Subset<T, PropertyAnnouncementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyAnnouncementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropertyAnnouncement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAnnouncementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropertyAnnouncementAggregateArgs>(args: Subset<T, PropertyAnnouncementAggregateArgs>): Prisma.PrismaPromise<GetPropertyAnnouncementAggregateType<T>>

    /**
     * Group by PropertyAnnouncement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAnnouncementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropertyAnnouncementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyAnnouncementGroupByArgs['orderBy'] }
        : { orderBy?: PropertyAnnouncementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropertyAnnouncementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyAnnouncementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PropertyAnnouncement model
   */
  readonly fields: PropertyAnnouncementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropertyAnnouncement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyAnnouncementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    announcement<T extends AnnouncementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnnouncementDefaultArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PropertyAnnouncement model
   */
  interface PropertyAnnouncementFieldRefs {
    readonly id: FieldRef<"PropertyAnnouncement", 'String'>
    readonly announcementId: FieldRef<"PropertyAnnouncement", 'String'>
    readonly propertyId: FieldRef<"PropertyAnnouncement", 'String'>
    readonly createdAt: FieldRef<"PropertyAnnouncement", 'DateTime'>
    readonly updatedAt: FieldRef<"PropertyAnnouncement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PropertyAnnouncement findUnique
   */
  export type PropertyAnnouncementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAnnouncement
     */
    select?: PropertyAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAnnouncement
     */
    omit?: PropertyAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which PropertyAnnouncement to fetch.
     */
    where: PropertyAnnouncementWhereUniqueInput
  }

  /**
   * PropertyAnnouncement findUniqueOrThrow
   */
  export type PropertyAnnouncementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAnnouncement
     */
    select?: PropertyAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAnnouncement
     */
    omit?: PropertyAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which PropertyAnnouncement to fetch.
     */
    where: PropertyAnnouncementWhereUniqueInput
  }

  /**
   * PropertyAnnouncement findFirst
   */
  export type PropertyAnnouncementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAnnouncement
     */
    select?: PropertyAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAnnouncement
     */
    omit?: PropertyAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which PropertyAnnouncement to fetch.
     */
    where?: PropertyAnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyAnnouncements to fetch.
     */
    orderBy?: PropertyAnnouncementOrderByWithRelationInput | PropertyAnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyAnnouncements.
     */
    cursor?: PropertyAnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyAnnouncements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyAnnouncements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyAnnouncements.
     */
    distinct?: PropertyAnnouncementScalarFieldEnum | PropertyAnnouncementScalarFieldEnum[]
  }

  /**
   * PropertyAnnouncement findFirstOrThrow
   */
  export type PropertyAnnouncementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAnnouncement
     */
    select?: PropertyAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAnnouncement
     */
    omit?: PropertyAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which PropertyAnnouncement to fetch.
     */
    where?: PropertyAnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyAnnouncements to fetch.
     */
    orderBy?: PropertyAnnouncementOrderByWithRelationInput | PropertyAnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyAnnouncements.
     */
    cursor?: PropertyAnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyAnnouncements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyAnnouncements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyAnnouncements.
     */
    distinct?: PropertyAnnouncementScalarFieldEnum | PropertyAnnouncementScalarFieldEnum[]
  }

  /**
   * PropertyAnnouncement findMany
   */
  export type PropertyAnnouncementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAnnouncement
     */
    select?: PropertyAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAnnouncement
     */
    omit?: PropertyAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which PropertyAnnouncements to fetch.
     */
    where?: PropertyAnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyAnnouncements to fetch.
     */
    orderBy?: PropertyAnnouncementOrderByWithRelationInput | PropertyAnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropertyAnnouncements.
     */
    cursor?: PropertyAnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyAnnouncements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyAnnouncements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyAnnouncements.
     */
    distinct?: PropertyAnnouncementScalarFieldEnum | PropertyAnnouncementScalarFieldEnum[]
  }

  /**
   * PropertyAnnouncement create
   */
  export type PropertyAnnouncementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAnnouncement
     */
    select?: PropertyAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAnnouncement
     */
    omit?: PropertyAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAnnouncementInclude<ExtArgs> | null
    /**
     * The data needed to create a PropertyAnnouncement.
     */
    data: XOR<PropertyAnnouncementCreateInput, PropertyAnnouncementUncheckedCreateInput>
  }

  /**
   * PropertyAnnouncement createMany
   */
  export type PropertyAnnouncementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropertyAnnouncements.
     */
    data: PropertyAnnouncementCreateManyInput | PropertyAnnouncementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PropertyAnnouncement createManyAndReturn
   */
  export type PropertyAnnouncementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAnnouncement
     */
    select?: PropertyAnnouncementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAnnouncement
     */
    omit?: PropertyAnnouncementOmit<ExtArgs> | null
    /**
     * The data used to create many PropertyAnnouncements.
     */
    data: PropertyAnnouncementCreateManyInput | PropertyAnnouncementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAnnouncementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropertyAnnouncement update
   */
  export type PropertyAnnouncementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAnnouncement
     */
    select?: PropertyAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAnnouncement
     */
    omit?: PropertyAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAnnouncementInclude<ExtArgs> | null
    /**
     * The data needed to update a PropertyAnnouncement.
     */
    data: XOR<PropertyAnnouncementUpdateInput, PropertyAnnouncementUncheckedUpdateInput>
    /**
     * Choose, which PropertyAnnouncement to update.
     */
    where: PropertyAnnouncementWhereUniqueInput
  }

  /**
   * PropertyAnnouncement updateMany
   */
  export type PropertyAnnouncementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PropertyAnnouncements.
     */
    data: XOR<PropertyAnnouncementUpdateManyMutationInput, PropertyAnnouncementUncheckedUpdateManyInput>
    /**
     * Filter which PropertyAnnouncements to update
     */
    where?: PropertyAnnouncementWhereInput
    /**
     * Limit how many PropertyAnnouncements to update.
     */
    limit?: number
  }

  /**
   * PropertyAnnouncement updateManyAndReturn
   */
  export type PropertyAnnouncementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAnnouncement
     */
    select?: PropertyAnnouncementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAnnouncement
     */
    omit?: PropertyAnnouncementOmit<ExtArgs> | null
    /**
     * The data used to update PropertyAnnouncements.
     */
    data: XOR<PropertyAnnouncementUpdateManyMutationInput, PropertyAnnouncementUncheckedUpdateManyInput>
    /**
     * Filter which PropertyAnnouncements to update
     */
    where?: PropertyAnnouncementWhereInput
    /**
     * Limit how many PropertyAnnouncements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAnnouncementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropertyAnnouncement upsert
   */
  export type PropertyAnnouncementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAnnouncement
     */
    select?: PropertyAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAnnouncement
     */
    omit?: PropertyAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAnnouncementInclude<ExtArgs> | null
    /**
     * The filter to search for the PropertyAnnouncement to update in case it exists.
     */
    where: PropertyAnnouncementWhereUniqueInput
    /**
     * In case the PropertyAnnouncement found by the `where` argument doesn't exist, create a new PropertyAnnouncement with this data.
     */
    create: XOR<PropertyAnnouncementCreateInput, PropertyAnnouncementUncheckedCreateInput>
    /**
     * In case the PropertyAnnouncement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyAnnouncementUpdateInput, PropertyAnnouncementUncheckedUpdateInput>
  }

  /**
   * PropertyAnnouncement delete
   */
  export type PropertyAnnouncementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAnnouncement
     */
    select?: PropertyAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAnnouncement
     */
    omit?: PropertyAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAnnouncementInclude<ExtArgs> | null
    /**
     * Filter which PropertyAnnouncement to delete.
     */
    where: PropertyAnnouncementWhereUniqueInput
  }

  /**
   * PropertyAnnouncement deleteMany
   */
  export type PropertyAnnouncementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyAnnouncements to delete
     */
    where?: PropertyAnnouncementWhereInput
    /**
     * Limit how many PropertyAnnouncements to delete.
     */
    limit?: number
  }

  /**
   * PropertyAnnouncement without action
   */
  export type PropertyAnnouncementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAnnouncement
     */
    select?: PropertyAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAnnouncement
     */
    omit?: PropertyAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAnnouncementInclude<ExtArgs> | null
  }


  /**
   * Model UnitAnnouncement
   */

  export type AggregateUnitAnnouncement = {
    _count: UnitAnnouncementCountAggregateOutputType | null
    _min: UnitAnnouncementMinAggregateOutputType | null
    _max: UnitAnnouncementMaxAggregateOutputType | null
  }

  export type UnitAnnouncementMinAggregateOutputType = {
    id: string | null
    announcementId: string | null
    unitId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UnitAnnouncementMaxAggregateOutputType = {
    id: string | null
    announcementId: string | null
    unitId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UnitAnnouncementCountAggregateOutputType = {
    id: number
    announcementId: number
    unitId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UnitAnnouncementMinAggregateInputType = {
    id?: true
    announcementId?: true
    unitId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UnitAnnouncementMaxAggregateInputType = {
    id?: true
    announcementId?: true
    unitId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UnitAnnouncementCountAggregateInputType = {
    id?: true
    announcementId?: true
    unitId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UnitAnnouncementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnitAnnouncement to aggregate.
     */
    where?: UnitAnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnitAnnouncements to fetch.
     */
    orderBy?: UnitAnnouncementOrderByWithRelationInput | UnitAnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnitAnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnitAnnouncements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnitAnnouncements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UnitAnnouncements
    **/
    _count?: true | UnitAnnouncementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnitAnnouncementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnitAnnouncementMaxAggregateInputType
  }

  export type GetUnitAnnouncementAggregateType<T extends UnitAnnouncementAggregateArgs> = {
        [P in keyof T & keyof AggregateUnitAnnouncement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnitAnnouncement[P]>
      : GetScalarType<T[P], AggregateUnitAnnouncement[P]>
  }




  export type UnitAnnouncementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitAnnouncementWhereInput
    orderBy?: UnitAnnouncementOrderByWithAggregationInput | UnitAnnouncementOrderByWithAggregationInput[]
    by: UnitAnnouncementScalarFieldEnum[] | UnitAnnouncementScalarFieldEnum
    having?: UnitAnnouncementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnitAnnouncementCountAggregateInputType | true
    _min?: UnitAnnouncementMinAggregateInputType
    _max?: UnitAnnouncementMaxAggregateInputType
  }

  export type UnitAnnouncementGroupByOutputType = {
    id: string
    announcementId: string
    unitId: string
    createdAt: Date
    updatedAt: Date
    _count: UnitAnnouncementCountAggregateOutputType | null
    _min: UnitAnnouncementMinAggregateOutputType | null
    _max: UnitAnnouncementMaxAggregateOutputType | null
  }

  type GetUnitAnnouncementGroupByPayload<T extends UnitAnnouncementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnitAnnouncementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnitAnnouncementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnitAnnouncementGroupByOutputType[P]>
            : GetScalarType<T[P], UnitAnnouncementGroupByOutputType[P]>
        }
      >
    >


  export type UnitAnnouncementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    announcementId?: boolean
    unitId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unitAnnouncement"]>

  export type UnitAnnouncementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    announcementId?: boolean
    unitId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unitAnnouncement"]>

  export type UnitAnnouncementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    announcementId?: boolean
    unitId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unitAnnouncement"]>

  export type UnitAnnouncementSelectScalar = {
    id?: boolean
    announcementId?: boolean
    unitId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UnitAnnouncementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "announcementId" | "unitId" | "createdAt" | "updatedAt", ExtArgs["result"]["unitAnnouncement"]>
  export type UnitAnnouncementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }
  export type UnitAnnouncementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }
  export type UnitAnnouncementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }

  export type $UnitAnnouncementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UnitAnnouncement"
    objects: {
      announcement: Prisma.$AnnouncementPayload<ExtArgs>
      unit: Prisma.$UnitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      announcementId: string
      unitId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["unitAnnouncement"]>
    composites: {}
  }

  type UnitAnnouncementGetPayload<S extends boolean | null | undefined | UnitAnnouncementDefaultArgs> = $Result.GetResult<Prisma.$UnitAnnouncementPayload, S>

  type UnitAnnouncementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnitAnnouncementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnitAnnouncementCountAggregateInputType | true
    }

  export interface UnitAnnouncementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UnitAnnouncement'], meta: { name: 'UnitAnnouncement' } }
    /**
     * Find zero or one UnitAnnouncement that matches the filter.
     * @param {UnitAnnouncementFindUniqueArgs} args - Arguments to find a UnitAnnouncement
     * @example
     * // Get one UnitAnnouncement
     * const unitAnnouncement = await prisma.unitAnnouncement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnitAnnouncementFindUniqueArgs>(args: SelectSubset<T, UnitAnnouncementFindUniqueArgs<ExtArgs>>): Prisma__UnitAnnouncementClient<$Result.GetResult<Prisma.$UnitAnnouncementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UnitAnnouncement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnitAnnouncementFindUniqueOrThrowArgs} args - Arguments to find a UnitAnnouncement
     * @example
     * // Get one UnitAnnouncement
     * const unitAnnouncement = await prisma.unitAnnouncement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnitAnnouncementFindUniqueOrThrowArgs>(args: SelectSubset<T, UnitAnnouncementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnitAnnouncementClient<$Result.GetResult<Prisma.$UnitAnnouncementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UnitAnnouncement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitAnnouncementFindFirstArgs} args - Arguments to find a UnitAnnouncement
     * @example
     * // Get one UnitAnnouncement
     * const unitAnnouncement = await prisma.unitAnnouncement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnitAnnouncementFindFirstArgs>(args?: SelectSubset<T, UnitAnnouncementFindFirstArgs<ExtArgs>>): Prisma__UnitAnnouncementClient<$Result.GetResult<Prisma.$UnitAnnouncementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UnitAnnouncement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitAnnouncementFindFirstOrThrowArgs} args - Arguments to find a UnitAnnouncement
     * @example
     * // Get one UnitAnnouncement
     * const unitAnnouncement = await prisma.unitAnnouncement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnitAnnouncementFindFirstOrThrowArgs>(args?: SelectSubset<T, UnitAnnouncementFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnitAnnouncementClient<$Result.GetResult<Prisma.$UnitAnnouncementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UnitAnnouncements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitAnnouncementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UnitAnnouncements
     * const unitAnnouncements = await prisma.unitAnnouncement.findMany()
     * 
     * // Get first 10 UnitAnnouncements
     * const unitAnnouncements = await prisma.unitAnnouncement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unitAnnouncementWithIdOnly = await prisma.unitAnnouncement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnitAnnouncementFindManyArgs>(args?: SelectSubset<T, UnitAnnouncementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitAnnouncementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UnitAnnouncement.
     * @param {UnitAnnouncementCreateArgs} args - Arguments to create a UnitAnnouncement.
     * @example
     * // Create one UnitAnnouncement
     * const UnitAnnouncement = await prisma.unitAnnouncement.create({
     *   data: {
     *     // ... data to create a UnitAnnouncement
     *   }
     * })
     * 
     */
    create<T extends UnitAnnouncementCreateArgs>(args: SelectSubset<T, UnitAnnouncementCreateArgs<ExtArgs>>): Prisma__UnitAnnouncementClient<$Result.GetResult<Prisma.$UnitAnnouncementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UnitAnnouncements.
     * @param {UnitAnnouncementCreateManyArgs} args - Arguments to create many UnitAnnouncements.
     * @example
     * // Create many UnitAnnouncements
     * const unitAnnouncement = await prisma.unitAnnouncement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnitAnnouncementCreateManyArgs>(args?: SelectSubset<T, UnitAnnouncementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UnitAnnouncements and returns the data saved in the database.
     * @param {UnitAnnouncementCreateManyAndReturnArgs} args - Arguments to create many UnitAnnouncements.
     * @example
     * // Create many UnitAnnouncements
     * const unitAnnouncement = await prisma.unitAnnouncement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UnitAnnouncements and only return the `id`
     * const unitAnnouncementWithIdOnly = await prisma.unitAnnouncement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UnitAnnouncementCreateManyAndReturnArgs>(args?: SelectSubset<T, UnitAnnouncementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitAnnouncementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UnitAnnouncement.
     * @param {UnitAnnouncementDeleteArgs} args - Arguments to delete one UnitAnnouncement.
     * @example
     * // Delete one UnitAnnouncement
     * const UnitAnnouncement = await prisma.unitAnnouncement.delete({
     *   where: {
     *     // ... filter to delete one UnitAnnouncement
     *   }
     * })
     * 
     */
    delete<T extends UnitAnnouncementDeleteArgs>(args: SelectSubset<T, UnitAnnouncementDeleteArgs<ExtArgs>>): Prisma__UnitAnnouncementClient<$Result.GetResult<Prisma.$UnitAnnouncementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UnitAnnouncement.
     * @param {UnitAnnouncementUpdateArgs} args - Arguments to update one UnitAnnouncement.
     * @example
     * // Update one UnitAnnouncement
     * const unitAnnouncement = await prisma.unitAnnouncement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnitAnnouncementUpdateArgs>(args: SelectSubset<T, UnitAnnouncementUpdateArgs<ExtArgs>>): Prisma__UnitAnnouncementClient<$Result.GetResult<Prisma.$UnitAnnouncementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UnitAnnouncements.
     * @param {UnitAnnouncementDeleteManyArgs} args - Arguments to filter UnitAnnouncements to delete.
     * @example
     * // Delete a few UnitAnnouncements
     * const { count } = await prisma.unitAnnouncement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnitAnnouncementDeleteManyArgs>(args?: SelectSubset<T, UnitAnnouncementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnitAnnouncements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitAnnouncementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UnitAnnouncements
     * const unitAnnouncement = await prisma.unitAnnouncement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnitAnnouncementUpdateManyArgs>(args: SelectSubset<T, UnitAnnouncementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnitAnnouncements and returns the data updated in the database.
     * @param {UnitAnnouncementUpdateManyAndReturnArgs} args - Arguments to update many UnitAnnouncements.
     * @example
     * // Update many UnitAnnouncements
     * const unitAnnouncement = await prisma.unitAnnouncement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UnitAnnouncements and only return the `id`
     * const unitAnnouncementWithIdOnly = await prisma.unitAnnouncement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UnitAnnouncementUpdateManyAndReturnArgs>(args: SelectSubset<T, UnitAnnouncementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitAnnouncementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UnitAnnouncement.
     * @param {UnitAnnouncementUpsertArgs} args - Arguments to update or create a UnitAnnouncement.
     * @example
     * // Update or create a UnitAnnouncement
     * const unitAnnouncement = await prisma.unitAnnouncement.upsert({
     *   create: {
     *     // ... data to create a UnitAnnouncement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UnitAnnouncement we want to update
     *   }
     * })
     */
    upsert<T extends UnitAnnouncementUpsertArgs>(args: SelectSubset<T, UnitAnnouncementUpsertArgs<ExtArgs>>): Prisma__UnitAnnouncementClient<$Result.GetResult<Prisma.$UnitAnnouncementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UnitAnnouncements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitAnnouncementCountArgs} args - Arguments to filter UnitAnnouncements to count.
     * @example
     * // Count the number of UnitAnnouncements
     * const count = await prisma.unitAnnouncement.count({
     *   where: {
     *     // ... the filter for the UnitAnnouncements we want to count
     *   }
     * })
    **/
    count<T extends UnitAnnouncementCountArgs>(
      args?: Subset<T, UnitAnnouncementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnitAnnouncementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UnitAnnouncement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitAnnouncementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UnitAnnouncementAggregateArgs>(args: Subset<T, UnitAnnouncementAggregateArgs>): Prisma.PrismaPromise<GetUnitAnnouncementAggregateType<T>>

    /**
     * Group by UnitAnnouncement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitAnnouncementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UnitAnnouncementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnitAnnouncementGroupByArgs['orderBy'] }
        : { orderBy?: UnitAnnouncementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UnitAnnouncementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnitAnnouncementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UnitAnnouncement model
   */
  readonly fields: UnitAnnouncementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UnitAnnouncement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnitAnnouncementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    announcement<T extends AnnouncementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnnouncementDefaultArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    unit<T extends UnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UnitDefaultArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UnitAnnouncement model
   */
  interface UnitAnnouncementFieldRefs {
    readonly id: FieldRef<"UnitAnnouncement", 'String'>
    readonly announcementId: FieldRef<"UnitAnnouncement", 'String'>
    readonly unitId: FieldRef<"UnitAnnouncement", 'String'>
    readonly createdAt: FieldRef<"UnitAnnouncement", 'DateTime'>
    readonly updatedAt: FieldRef<"UnitAnnouncement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UnitAnnouncement findUnique
   */
  export type UnitAnnouncementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitAnnouncement
     */
    select?: UnitAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitAnnouncement
     */
    omit?: UnitAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitAnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which UnitAnnouncement to fetch.
     */
    where: UnitAnnouncementWhereUniqueInput
  }

  /**
   * UnitAnnouncement findUniqueOrThrow
   */
  export type UnitAnnouncementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitAnnouncement
     */
    select?: UnitAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitAnnouncement
     */
    omit?: UnitAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitAnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which UnitAnnouncement to fetch.
     */
    where: UnitAnnouncementWhereUniqueInput
  }

  /**
   * UnitAnnouncement findFirst
   */
  export type UnitAnnouncementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitAnnouncement
     */
    select?: UnitAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitAnnouncement
     */
    omit?: UnitAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitAnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which UnitAnnouncement to fetch.
     */
    where?: UnitAnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnitAnnouncements to fetch.
     */
    orderBy?: UnitAnnouncementOrderByWithRelationInput | UnitAnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnitAnnouncements.
     */
    cursor?: UnitAnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnitAnnouncements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnitAnnouncements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnitAnnouncements.
     */
    distinct?: UnitAnnouncementScalarFieldEnum | UnitAnnouncementScalarFieldEnum[]
  }

  /**
   * UnitAnnouncement findFirstOrThrow
   */
  export type UnitAnnouncementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitAnnouncement
     */
    select?: UnitAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitAnnouncement
     */
    omit?: UnitAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitAnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which UnitAnnouncement to fetch.
     */
    where?: UnitAnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnitAnnouncements to fetch.
     */
    orderBy?: UnitAnnouncementOrderByWithRelationInput | UnitAnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnitAnnouncements.
     */
    cursor?: UnitAnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnitAnnouncements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnitAnnouncements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnitAnnouncements.
     */
    distinct?: UnitAnnouncementScalarFieldEnum | UnitAnnouncementScalarFieldEnum[]
  }

  /**
   * UnitAnnouncement findMany
   */
  export type UnitAnnouncementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitAnnouncement
     */
    select?: UnitAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitAnnouncement
     */
    omit?: UnitAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitAnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which UnitAnnouncements to fetch.
     */
    where?: UnitAnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnitAnnouncements to fetch.
     */
    orderBy?: UnitAnnouncementOrderByWithRelationInput | UnitAnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UnitAnnouncements.
     */
    cursor?: UnitAnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnitAnnouncements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnitAnnouncements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnitAnnouncements.
     */
    distinct?: UnitAnnouncementScalarFieldEnum | UnitAnnouncementScalarFieldEnum[]
  }

  /**
   * UnitAnnouncement create
   */
  export type UnitAnnouncementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitAnnouncement
     */
    select?: UnitAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitAnnouncement
     */
    omit?: UnitAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitAnnouncementInclude<ExtArgs> | null
    /**
     * The data needed to create a UnitAnnouncement.
     */
    data: XOR<UnitAnnouncementCreateInput, UnitAnnouncementUncheckedCreateInput>
  }

  /**
   * UnitAnnouncement createMany
   */
  export type UnitAnnouncementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UnitAnnouncements.
     */
    data: UnitAnnouncementCreateManyInput | UnitAnnouncementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UnitAnnouncement createManyAndReturn
   */
  export type UnitAnnouncementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitAnnouncement
     */
    select?: UnitAnnouncementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UnitAnnouncement
     */
    omit?: UnitAnnouncementOmit<ExtArgs> | null
    /**
     * The data used to create many UnitAnnouncements.
     */
    data: UnitAnnouncementCreateManyInput | UnitAnnouncementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitAnnouncementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UnitAnnouncement update
   */
  export type UnitAnnouncementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitAnnouncement
     */
    select?: UnitAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitAnnouncement
     */
    omit?: UnitAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitAnnouncementInclude<ExtArgs> | null
    /**
     * The data needed to update a UnitAnnouncement.
     */
    data: XOR<UnitAnnouncementUpdateInput, UnitAnnouncementUncheckedUpdateInput>
    /**
     * Choose, which UnitAnnouncement to update.
     */
    where: UnitAnnouncementWhereUniqueInput
  }

  /**
   * UnitAnnouncement updateMany
   */
  export type UnitAnnouncementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UnitAnnouncements.
     */
    data: XOR<UnitAnnouncementUpdateManyMutationInput, UnitAnnouncementUncheckedUpdateManyInput>
    /**
     * Filter which UnitAnnouncements to update
     */
    where?: UnitAnnouncementWhereInput
    /**
     * Limit how many UnitAnnouncements to update.
     */
    limit?: number
  }

  /**
   * UnitAnnouncement updateManyAndReturn
   */
  export type UnitAnnouncementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitAnnouncement
     */
    select?: UnitAnnouncementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UnitAnnouncement
     */
    omit?: UnitAnnouncementOmit<ExtArgs> | null
    /**
     * The data used to update UnitAnnouncements.
     */
    data: XOR<UnitAnnouncementUpdateManyMutationInput, UnitAnnouncementUncheckedUpdateManyInput>
    /**
     * Filter which UnitAnnouncements to update
     */
    where?: UnitAnnouncementWhereInput
    /**
     * Limit how many UnitAnnouncements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitAnnouncementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UnitAnnouncement upsert
   */
  export type UnitAnnouncementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitAnnouncement
     */
    select?: UnitAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitAnnouncement
     */
    omit?: UnitAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitAnnouncementInclude<ExtArgs> | null
    /**
     * The filter to search for the UnitAnnouncement to update in case it exists.
     */
    where: UnitAnnouncementWhereUniqueInput
    /**
     * In case the UnitAnnouncement found by the `where` argument doesn't exist, create a new UnitAnnouncement with this data.
     */
    create: XOR<UnitAnnouncementCreateInput, UnitAnnouncementUncheckedCreateInput>
    /**
     * In case the UnitAnnouncement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnitAnnouncementUpdateInput, UnitAnnouncementUncheckedUpdateInput>
  }

  /**
   * UnitAnnouncement delete
   */
  export type UnitAnnouncementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitAnnouncement
     */
    select?: UnitAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitAnnouncement
     */
    omit?: UnitAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitAnnouncementInclude<ExtArgs> | null
    /**
     * Filter which UnitAnnouncement to delete.
     */
    where: UnitAnnouncementWhereUniqueInput
  }

  /**
   * UnitAnnouncement deleteMany
   */
  export type UnitAnnouncementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnitAnnouncements to delete
     */
    where?: UnitAnnouncementWhereInput
    /**
     * Limit how many UnitAnnouncements to delete.
     */
    limit?: number
  }

  /**
   * UnitAnnouncement without action
   */
  export type UnitAnnouncementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitAnnouncement
     */
    select?: UnitAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitAnnouncement
     */
    omit?: UnitAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitAnnouncementInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OwnerScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    firstName: 'firstName',
    lastName: 'lastName',
    celNum: 'celNum',
    street: 'street',
    barangay: 'barangay',
    city: 'city',
    province: 'province',
    region: 'region',
    isActive: 'isActive',
    isFlagged: 'isFlagged',
    flagReason: 'flagReason',
    profilePictureUrl: 'profilePictureUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OwnerScalarFieldEnum = (typeof OwnerScalarFieldEnum)[keyof typeof OwnerScalarFieldEnum]


  export const PropertyScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    name: 'name',
    type: 'type',
    street: 'street',
    barangay: 'barangay',
    city: 'city',
    province: 'province',
    region: 'region',
    yearBuilt: 'yearBuilt',
    description: 'description',
    imageUrls: 'imageUrls',
    houseRules: 'houseRules',
    isActive: 'isActive',
    isUnderRepair: 'isUnderRepair',
    isUnderRenovation: 'isUnderRenovation',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PropertyScalarFieldEnum = (typeof PropertyScalarFieldEnum)[keyof typeof PropertyScalarFieldEnum]


  export const UnitScalarFieldEnum: {
    id: 'id',
    propertyId: 'propertyId',
    unitNumber: 'unitNumber',
    floor: 'floor',
    bedrooms: 'bedrooms',
    bathrooms: 'bathrooms',
    squareFeet: 'squareFeet',
    monthlyRentAmount: 'monthlyRentAmount',
    description: 'description',
    imageUrls: 'imageUrls',
    status: 'status',
    isActive: 'isActive',
    isUnderRepair: 'isUnderRepair',
    isUnderRenovation: 'isUnderRenovation',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UnitScalarFieldEnum = (typeof UnitScalarFieldEnum)[keyof typeof UnitScalarFieldEnum]


  export const TenantScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    celNum: 'celNum',
    dateOfBirth: 'dateOfBirth',
    emergencyName: 'emergencyName',
    emergencyPhone: 'emergencyPhone',
    notes: 'notes',
    isFlagged: 'isFlagged',
    flagReason: 'flagReason',
    isActive: 'isActive',
    moveInDate: 'moveInDate',
    moveOutDate: 'moveOutDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum]


  export const LeaseScalarFieldEnum: {
    id: 'id',
    unitId: 'unitId',
    tenantId: 'tenantId',
    status: 'status',
    leaseStartDate: 'leaseStartDate',
    leaseEndDate: 'leaseEndDate',
    terms: 'terms',
    notes: 'notes',
    signedAt: 'signedAt',
    terminatedAt: 'terminatedAt',
    terminationReason: 'terminationReason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LeaseScalarFieldEnum = (typeof LeaseScalarFieldEnum)[keyof typeof LeaseScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    leaseId: 'leaseId',
    amount: 'amount',
    reference: 'reference',
    transactionDate: 'transactionDate',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const AnnouncementScalarFieldEnum: {
    id: 'id',
    title: 'title',
    body: 'body',
    isActive: 'isActive',
    publishedAt: 'publishedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AnnouncementScalarFieldEnum = (typeof AnnouncementScalarFieldEnum)[keyof typeof AnnouncementScalarFieldEnum]


  export const PropertyAnnouncementScalarFieldEnum: {
    id: 'id',
    announcementId: 'announcementId',
    propertyId: 'propertyId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PropertyAnnouncementScalarFieldEnum = (typeof PropertyAnnouncementScalarFieldEnum)[keyof typeof PropertyAnnouncementScalarFieldEnum]


  export const UnitAnnouncementScalarFieldEnum: {
    id: 'id',
    announcementId: 'announcementId',
    unitId: 'unitId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UnitAnnouncementScalarFieldEnum = (typeof UnitAnnouncementScalarFieldEnum)[keyof typeof UnitAnnouncementScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type OwnerWhereInput = {
    AND?: OwnerWhereInput | OwnerWhereInput[]
    OR?: OwnerWhereInput[]
    NOT?: OwnerWhereInput | OwnerWhereInput[]
    id?: StringFilter<"Owner"> | string
    email?: StringFilter<"Owner"> | string
    passwordHash?: StringFilter<"Owner"> | string
    firstName?: StringFilter<"Owner"> | string
    lastName?: StringFilter<"Owner"> | string
    celNum?: StringNullableFilter<"Owner"> | string | null
    street?: StringNullableFilter<"Owner"> | string | null
    barangay?: StringNullableFilter<"Owner"> | string | null
    city?: StringNullableFilter<"Owner"> | string | null
    province?: StringNullableFilter<"Owner"> | string | null
    region?: StringNullableFilter<"Owner"> | string | null
    isActive?: BoolFilter<"Owner"> | boolean
    isFlagged?: BoolFilter<"Owner"> | boolean
    flagReason?: StringNullableFilter<"Owner"> | string | null
    profilePictureUrl?: StringNullableFilter<"Owner"> | string | null
    createdAt?: DateTimeFilter<"Owner"> | Date | string
    updatedAt?: DateTimeFilter<"Owner"> | Date | string
    properties?: PropertyListRelationFilter
  }

  export type OwnerOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    celNum?: SortOrderInput | SortOrder
    street?: SortOrderInput | SortOrder
    barangay?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    province?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isFlagged?: SortOrder
    flagReason?: SortOrderInput | SortOrder
    profilePictureUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    properties?: PropertyOrderByRelationAggregateInput
  }

  export type OwnerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: OwnerWhereInput | OwnerWhereInput[]
    OR?: OwnerWhereInput[]
    NOT?: OwnerWhereInput | OwnerWhereInput[]
    passwordHash?: StringFilter<"Owner"> | string
    firstName?: StringFilter<"Owner"> | string
    lastName?: StringFilter<"Owner"> | string
    celNum?: StringNullableFilter<"Owner"> | string | null
    street?: StringNullableFilter<"Owner"> | string | null
    barangay?: StringNullableFilter<"Owner"> | string | null
    city?: StringNullableFilter<"Owner"> | string | null
    province?: StringNullableFilter<"Owner"> | string | null
    region?: StringNullableFilter<"Owner"> | string | null
    isActive?: BoolFilter<"Owner"> | boolean
    isFlagged?: BoolFilter<"Owner"> | boolean
    flagReason?: StringNullableFilter<"Owner"> | string | null
    profilePictureUrl?: StringNullableFilter<"Owner"> | string | null
    createdAt?: DateTimeFilter<"Owner"> | Date | string
    updatedAt?: DateTimeFilter<"Owner"> | Date | string
    properties?: PropertyListRelationFilter
  }, "id" | "email">

  export type OwnerOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    celNum?: SortOrderInput | SortOrder
    street?: SortOrderInput | SortOrder
    barangay?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    province?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isFlagged?: SortOrder
    flagReason?: SortOrderInput | SortOrder
    profilePictureUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OwnerCountOrderByAggregateInput
    _max?: OwnerMaxOrderByAggregateInput
    _min?: OwnerMinOrderByAggregateInput
  }

  export type OwnerScalarWhereWithAggregatesInput = {
    AND?: OwnerScalarWhereWithAggregatesInput | OwnerScalarWhereWithAggregatesInput[]
    OR?: OwnerScalarWhereWithAggregatesInput[]
    NOT?: OwnerScalarWhereWithAggregatesInput | OwnerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Owner"> | string
    email?: StringWithAggregatesFilter<"Owner"> | string
    passwordHash?: StringWithAggregatesFilter<"Owner"> | string
    firstName?: StringWithAggregatesFilter<"Owner"> | string
    lastName?: StringWithAggregatesFilter<"Owner"> | string
    celNum?: StringNullableWithAggregatesFilter<"Owner"> | string | null
    street?: StringNullableWithAggregatesFilter<"Owner"> | string | null
    barangay?: StringNullableWithAggregatesFilter<"Owner"> | string | null
    city?: StringNullableWithAggregatesFilter<"Owner"> | string | null
    province?: StringNullableWithAggregatesFilter<"Owner"> | string | null
    region?: StringNullableWithAggregatesFilter<"Owner"> | string | null
    isActive?: BoolWithAggregatesFilter<"Owner"> | boolean
    isFlagged?: BoolWithAggregatesFilter<"Owner"> | boolean
    flagReason?: StringNullableWithAggregatesFilter<"Owner"> | string | null
    profilePictureUrl?: StringNullableWithAggregatesFilter<"Owner"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Owner"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Owner"> | Date | string
  }

  export type PropertyWhereInput = {
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    id?: StringFilter<"Property"> | string
    ownerId?: StringFilter<"Property"> | string
    name?: StringFilter<"Property"> | string
    type?: StringFilter<"Property"> | string
    street?: StringNullableFilter<"Property"> | string | null
    barangay?: StringNullableFilter<"Property"> | string | null
    city?: StringNullableFilter<"Property"> | string | null
    province?: StringNullableFilter<"Property"> | string | null
    region?: StringNullableFilter<"Property"> | string | null
    yearBuilt?: IntNullableFilter<"Property"> | number | null
    description?: StringNullableFilter<"Property"> | string | null
    imageUrls?: StringNullableListFilter<"Property">
    houseRules?: StringNullableListFilter<"Property">
    isActive?: BoolFilter<"Property"> | boolean
    isUnderRepair?: BoolFilter<"Property"> | boolean
    isUnderRenovation?: BoolFilter<"Property"> | boolean
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    owner?: XOR<OwnerScalarRelationFilter, OwnerWhereInput>
    units?: UnitListRelationFilter
    propertyAnnouncements?: PropertyAnnouncementListRelationFilter
  }

  export type PropertyOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    street?: SortOrderInput | SortOrder
    barangay?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    province?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    yearBuilt?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    imageUrls?: SortOrder
    houseRules?: SortOrder
    isActive?: SortOrder
    isUnderRepair?: SortOrder
    isUnderRenovation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: OwnerOrderByWithRelationInput
    units?: UnitOrderByRelationAggregateInput
    propertyAnnouncements?: PropertyAnnouncementOrderByRelationAggregateInput
  }

  export type PropertyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    ownerId?: StringFilter<"Property"> | string
    name?: StringFilter<"Property"> | string
    type?: StringFilter<"Property"> | string
    street?: StringNullableFilter<"Property"> | string | null
    barangay?: StringNullableFilter<"Property"> | string | null
    city?: StringNullableFilter<"Property"> | string | null
    province?: StringNullableFilter<"Property"> | string | null
    region?: StringNullableFilter<"Property"> | string | null
    yearBuilt?: IntNullableFilter<"Property"> | number | null
    description?: StringNullableFilter<"Property"> | string | null
    imageUrls?: StringNullableListFilter<"Property">
    houseRules?: StringNullableListFilter<"Property">
    isActive?: BoolFilter<"Property"> | boolean
    isUnderRepair?: BoolFilter<"Property"> | boolean
    isUnderRenovation?: BoolFilter<"Property"> | boolean
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    owner?: XOR<OwnerScalarRelationFilter, OwnerWhereInput>
    units?: UnitListRelationFilter
    propertyAnnouncements?: PropertyAnnouncementListRelationFilter
  }, "id">

  export type PropertyOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    street?: SortOrderInput | SortOrder
    barangay?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    province?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    yearBuilt?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    imageUrls?: SortOrder
    houseRules?: SortOrder
    isActive?: SortOrder
    isUnderRepair?: SortOrder
    isUnderRenovation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PropertyCountOrderByAggregateInput
    _avg?: PropertyAvgOrderByAggregateInput
    _max?: PropertyMaxOrderByAggregateInput
    _min?: PropertyMinOrderByAggregateInput
    _sum?: PropertySumOrderByAggregateInput
  }

  export type PropertyScalarWhereWithAggregatesInput = {
    AND?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    OR?: PropertyScalarWhereWithAggregatesInput[]
    NOT?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Property"> | string
    ownerId?: StringWithAggregatesFilter<"Property"> | string
    name?: StringWithAggregatesFilter<"Property"> | string
    type?: StringWithAggregatesFilter<"Property"> | string
    street?: StringNullableWithAggregatesFilter<"Property"> | string | null
    barangay?: StringNullableWithAggregatesFilter<"Property"> | string | null
    city?: StringNullableWithAggregatesFilter<"Property"> | string | null
    province?: StringNullableWithAggregatesFilter<"Property"> | string | null
    region?: StringNullableWithAggregatesFilter<"Property"> | string | null
    yearBuilt?: IntNullableWithAggregatesFilter<"Property"> | number | null
    description?: StringNullableWithAggregatesFilter<"Property"> | string | null
    imageUrls?: StringNullableListFilter<"Property">
    houseRules?: StringNullableListFilter<"Property">
    isActive?: BoolWithAggregatesFilter<"Property"> | boolean
    isUnderRepair?: BoolWithAggregatesFilter<"Property"> | boolean
    isUnderRenovation?: BoolWithAggregatesFilter<"Property"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
  }

  export type UnitWhereInput = {
    AND?: UnitWhereInput | UnitWhereInput[]
    OR?: UnitWhereInput[]
    NOT?: UnitWhereInput | UnitWhereInput[]
    id?: StringFilter<"Unit"> | string
    propertyId?: StringFilter<"Unit"> | string
    unitNumber?: StringFilter<"Unit"> | string
    floor?: StringNullableFilter<"Unit"> | string | null
    bedrooms?: IntFilter<"Unit"> | number
    bathrooms?: IntFilter<"Unit"> | number
    squareFeet?: FloatNullableFilter<"Unit"> | number | null
    monthlyRentAmount?: FloatFilter<"Unit"> | number
    description?: StringNullableFilter<"Unit"> | string | null
    imageUrls?: StringNullableListFilter<"Unit">
    status?: StringFilter<"Unit"> | string
    isActive?: BoolFilter<"Unit"> | boolean
    isUnderRepair?: BoolFilter<"Unit"> | boolean
    isUnderRenovation?: BoolFilter<"Unit"> | boolean
    createdAt?: DateTimeFilter<"Unit"> | Date | string
    updatedAt?: DateTimeFilter<"Unit"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    leases?: LeaseListRelationFilter
    unitAnnouncements?: UnitAnnouncementListRelationFilter
  }

  export type UnitOrderByWithRelationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    unitNumber?: SortOrder
    floor?: SortOrderInput | SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    squareFeet?: SortOrderInput | SortOrder
    monthlyRentAmount?: SortOrder
    description?: SortOrderInput | SortOrder
    imageUrls?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    isUnderRepair?: SortOrder
    isUnderRenovation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    property?: PropertyOrderByWithRelationInput
    leases?: LeaseOrderByRelationAggregateInput
    unitAnnouncements?: UnitAnnouncementOrderByRelationAggregateInput
  }

  export type UnitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UnitWhereInput | UnitWhereInput[]
    OR?: UnitWhereInput[]
    NOT?: UnitWhereInput | UnitWhereInput[]
    propertyId?: StringFilter<"Unit"> | string
    unitNumber?: StringFilter<"Unit"> | string
    floor?: StringNullableFilter<"Unit"> | string | null
    bedrooms?: IntFilter<"Unit"> | number
    bathrooms?: IntFilter<"Unit"> | number
    squareFeet?: FloatNullableFilter<"Unit"> | number | null
    monthlyRentAmount?: FloatFilter<"Unit"> | number
    description?: StringNullableFilter<"Unit"> | string | null
    imageUrls?: StringNullableListFilter<"Unit">
    status?: StringFilter<"Unit"> | string
    isActive?: BoolFilter<"Unit"> | boolean
    isUnderRepair?: BoolFilter<"Unit"> | boolean
    isUnderRenovation?: BoolFilter<"Unit"> | boolean
    createdAt?: DateTimeFilter<"Unit"> | Date | string
    updatedAt?: DateTimeFilter<"Unit"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    leases?: LeaseListRelationFilter
    unitAnnouncements?: UnitAnnouncementListRelationFilter
  }, "id">

  export type UnitOrderByWithAggregationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    unitNumber?: SortOrder
    floor?: SortOrderInput | SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    squareFeet?: SortOrderInput | SortOrder
    monthlyRentAmount?: SortOrder
    description?: SortOrderInput | SortOrder
    imageUrls?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    isUnderRepair?: SortOrder
    isUnderRenovation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UnitCountOrderByAggregateInput
    _avg?: UnitAvgOrderByAggregateInput
    _max?: UnitMaxOrderByAggregateInput
    _min?: UnitMinOrderByAggregateInput
    _sum?: UnitSumOrderByAggregateInput
  }

  export type UnitScalarWhereWithAggregatesInput = {
    AND?: UnitScalarWhereWithAggregatesInput | UnitScalarWhereWithAggregatesInput[]
    OR?: UnitScalarWhereWithAggregatesInput[]
    NOT?: UnitScalarWhereWithAggregatesInput | UnitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Unit"> | string
    propertyId?: StringWithAggregatesFilter<"Unit"> | string
    unitNumber?: StringWithAggregatesFilter<"Unit"> | string
    floor?: StringNullableWithAggregatesFilter<"Unit"> | string | null
    bedrooms?: IntWithAggregatesFilter<"Unit"> | number
    bathrooms?: IntWithAggregatesFilter<"Unit"> | number
    squareFeet?: FloatNullableWithAggregatesFilter<"Unit"> | number | null
    monthlyRentAmount?: FloatWithAggregatesFilter<"Unit"> | number
    description?: StringNullableWithAggregatesFilter<"Unit"> | string | null
    imageUrls?: StringNullableListFilter<"Unit">
    status?: StringWithAggregatesFilter<"Unit"> | string
    isActive?: BoolWithAggregatesFilter<"Unit"> | boolean
    isUnderRepair?: BoolWithAggregatesFilter<"Unit"> | boolean
    isUnderRenovation?: BoolWithAggregatesFilter<"Unit"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Unit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Unit"> | Date | string
  }

  export type TenantWhereInput = {
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    id?: StringFilter<"Tenant"> | string
    firstName?: StringFilter<"Tenant"> | string
    lastName?: StringFilter<"Tenant"> | string
    email?: StringFilter<"Tenant"> | string
    celNum?: StringNullableFilter<"Tenant"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"Tenant"> | Date | string | null
    emergencyName?: StringNullableFilter<"Tenant"> | string | null
    emergencyPhone?: StringNullableFilter<"Tenant"> | string | null
    notes?: StringNullableFilter<"Tenant"> | string | null
    isFlagged?: BoolFilter<"Tenant"> | boolean
    flagReason?: StringNullableFilter<"Tenant"> | string | null
    isActive?: BoolFilter<"Tenant"> | boolean
    moveInDate?: DateTimeNullableFilter<"Tenant"> | Date | string | null
    moveOutDate?: DateTimeNullableFilter<"Tenant"> | Date | string | null
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    leases?: LeaseListRelationFilter
  }

  export type TenantOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    celNum?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    emergencyName?: SortOrderInput | SortOrder
    emergencyPhone?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    isFlagged?: SortOrder
    flagReason?: SortOrderInput | SortOrder
    isActive?: SortOrder
    moveInDate?: SortOrderInput | SortOrder
    moveOutDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    leases?: LeaseOrderByRelationAggregateInput
  }

  export type TenantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    firstName?: StringFilter<"Tenant"> | string
    lastName?: StringFilter<"Tenant"> | string
    celNum?: StringNullableFilter<"Tenant"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"Tenant"> | Date | string | null
    emergencyName?: StringNullableFilter<"Tenant"> | string | null
    emergencyPhone?: StringNullableFilter<"Tenant"> | string | null
    notes?: StringNullableFilter<"Tenant"> | string | null
    isFlagged?: BoolFilter<"Tenant"> | boolean
    flagReason?: StringNullableFilter<"Tenant"> | string | null
    isActive?: BoolFilter<"Tenant"> | boolean
    moveInDate?: DateTimeNullableFilter<"Tenant"> | Date | string | null
    moveOutDate?: DateTimeNullableFilter<"Tenant"> | Date | string | null
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    leases?: LeaseListRelationFilter
  }, "id" | "email">

  export type TenantOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    celNum?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    emergencyName?: SortOrderInput | SortOrder
    emergencyPhone?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    isFlagged?: SortOrder
    flagReason?: SortOrderInput | SortOrder
    isActive?: SortOrder
    moveInDate?: SortOrderInput | SortOrder
    moveOutDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TenantCountOrderByAggregateInput
    _max?: TenantMaxOrderByAggregateInput
    _min?: TenantMinOrderByAggregateInput
  }

  export type TenantScalarWhereWithAggregatesInput = {
    AND?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    OR?: TenantScalarWhereWithAggregatesInput[]
    NOT?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tenant"> | string
    firstName?: StringWithAggregatesFilter<"Tenant"> | string
    lastName?: StringWithAggregatesFilter<"Tenant"> | string
    email?: StringWithAggregatesFilter<"Tenant"> | string
    celNum?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"Tenant"> | Date | string | null
    emergencyName?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    emergencyPhone?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    isFlagged?: BoolWithAggregatesFilter<"Tenant"> | boolean
    flagReason?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    isActive?: BoolWithAggregatesFilter<"Tenant"> | boolean
    moveInDate?: DateTimeNullableWithAggregatesFilter<"Tenant"> | Date | string | null
    moveOutDate?: DateTimeNullableWithAggregatesFilter<"Tenant"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
  }

  export type LeaseWhereInput = {
    AND?: LeaseWhereInput | LeaseWhereInput[]
    OR?: LeaseWhereInput[]
    NOT?: LeaseWhereInput | LeaseWhereInput[]
    id?: StringFilter<"Lease"> | string
    unitId?: StringFilter<"Lease"> | string
    tenantId?: StringFilter<"Lease"> | string
    status?: StringFilter<"Lease"> | string
    leaseStartDate?: DateTimeFilter<"Lease"> | Date | string
    leaseEndDate?: DateTimeFilter<"Lease"> | Date | string
    terms?: StringNullableFilter<"Lease"> | string | null
    notes?: StringNullableFilter<"Lease"> | string | null
    signedAt?: DateTimeNullableFilter<"Lease"> | Date | string | null
    terminatedAt?: DateTimeNullableFilter<"Lease"> | Date | string | null
    terminationReason?: StringNullableFilter<"Lease"> | string | null
    createdAt?: DateTimeFilter<"Lease"> | Date | string
    updatedAt?: DateTimeFilter<"Lease"> | Date | string
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    transactions?: TransactionListRelationFilter
  }

  export type LeaseOrderByWithRelationInput = {
    id?: SortOrder
    unitId?: SortOrder
    tenantId?: SortOrder
    status?: SortOrder
    leaseStartDate?: SortOrder
    leaseEndDate?: SortOrder
    terms?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    signedAt?: SortOrderInput | SortOrder
    terminatedAt?: SortOrderInput | SortOrder
    terminationReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    unit?: UnitOrderByWithRelationInput
    tenant?: TenantOrderByWithRelationInput
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type LeaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeaseWhereInput | LeaseWhereInput[]
    OR?: LeaseWhereInput[]
    NOT?: LeaseWhereInput | LeaseWhereInput[]
    unitId?: StringFilter<"Lease"> | string
    tenantId?: StringFilter<"Lease"> | string
    status?: StringFilter<"Lease"> | string
    leaseStartDate?: DateTimeFilter<"Lease"> | Date | string
    leaseEndDate?: DateTimeFilter<"Lease"> | Date | string
    terms?: StringNullableFilter<"Lease"> | string | null
    notes?: StringNullableFilter<"Lease"> | string | null
    signedAt?: DateTimeNullableFilter<"Lease"> | Date | string | null
    terminatedAt?: DateTimeNullableFilter<"Lease"> | Date | string | null
    terminationReason?: StringNullableFilter<"Lease"> | string | null
    createdAt?: DateTimeFilter<"Lease"> | Date | string
    updatedAt?: DateTimeFilter<"Lease"> | Date | string
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    transactions?: TransactionListRelationFilter
  }, "id">

  export type LeaseOrderByWithAggregationInput = {
    id?: SortOrder
    unitId?: SortOrder
    tenantId?: SortOrder
    status?: SortOrder
    leaseStartDate?: SortOrder
    leaseEndDate?: SortOrder
    terms?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    signedAt?: SortOrderInput | SortOrder
    terminatedAt?: SortOrderInput | SortOrder
    terminationReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LeaseCountOrderByAggregateInput
    _max?: LeaseMaxOrderByAggregateInput
    _min?: LeaseMinOrderByAggregateInput
  }

  export type LeaseScalarWhereWithAggregatesInput = {
    AND?: LeaseScalarWhereWithAggregatesInput | LeaseScalarWhereWithAggregatesInput[]
    OR?: LeaseScalarWhereWithAggregatesInput[]
    NOT?: LeaseScalarWhereWithAggregatesInput | LeaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lease"> | string
    unitId?: StringWithAggregatesFilter<"Lease"> | string
    tenantId?: StringWithAggregatesFilter<"Lease"> | string
    status?: StringWithAggregatesFilter<"Lease"> | string
    leaseStartDate?: DateTimeWithAggregatesFilter<"Lease"> | Date | string
    leaseEndDate?: DateTimeWithAggregatesFilter<"Lease"> | Date | string
    terms?: StringNullableWithAggregatesFilter<"Lease"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Lease"> | string | null
    signedAt?: DateTimeNullableWithAggregatesFilter<"Lease"> | Date | string | null
    terminatedAt?: DateTimeNullableWithAggregatesFilter<"Lease"> | Date | string | null
    terminationReason?: StringNullableWithAggregatesFilter<"Lease"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Lease"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lease"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    leaseId?: StringFilter<"Transaction"> | string
    amount?: FloatFilter<"Transaction"> | number
    reference?: StringFilter<"Transaction"> | string
    transactionDate?: DateTimeFilter<"Transaction"> | Date | string
    notes?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    lease?: XOR<LeaseScalarRelationFilter, LeaseWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    leaseId?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    transactionDate?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lease?: LeaseOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reference?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    leaseId?: StringFilter<"Transaction"> | string
    amount?: FloatFilter<"Transaction"> | number
    transactionDate?: DateTimeFilter<"Transaction"> | Date | string
    notes?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    lease?: XOR<LeaseScalarRelationFilter, LeaseWhereInput>
  }, "id" | "reference">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    leaseId?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    transactionDate?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    leaseId?: StringWithAggregatesFilter<"Transaction"> | string
    amount?: FloatWithAggregatesFilter<"Transaction"> | number
    reference?: StringWithAggregatesFilter<"Transaction"> | string
    transactionDate?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type AnnouncementWhereInput = {
    AND?: AnnouncementWhereInput | AnnouncementWhereInput[]
    OR?: AnnouncementWhereInput[]
    NOT?: AnnouncementWhereInput | AnnouncementWhereInput[]
    id?: StringFilter<"Announcement"> | string
    title?: StringFilter<"Announcement"> | string
    body?: StringFilter<"Announcement"> | string
    isActive?: BoolFilter<"Announcement"> | boolean
    publishedAt?: DateTimeNullableFilter<"Announcement"> | Date | string | null
    createdAt?: DateTimeFilter<"Announcement"> | Date | string
    updatedAt?: DateTimeFilter<"Announcement"> | Date | string
    propertyAnnouncements?: PropertyAnnouncementListRelationFilter
    unitAnnouncements?: UnitAnnouncementListRelationFilter
  }

  export type AnnouncementOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    isActive?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    propertyAnnouncements?: PropertyAnnouncementOrderByRelationAggregateInput
    unitAnnouncements?: UnitAnnouncementOrderByRelationAggregateInput
  }

  export type AnnouncementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnnouncementWhereInput | AnnouncementWhereInput[]
    OR?: AnnouncementWhereInput[]
    NOT?: AnnouncementWhereInput | AnnouncementWhereInput[]
    title?: StringFilter<"Announcement"> | string
    body?: StringFilter<"Announcement"> | string
    isActive?: BoolFilter<"Announcement"> | boolean
    publishedAt?: DateTimeNullableFilter<"Announcement"> | Date | string | null
    createdAt?: DateTimeFilter<"Announcement"> | Date | string
    updatedAt?: DateTimeFilter<"Announcement"> | Date | string
    propertyAnnouncements?: PropertyAnnouncementListRelationFilter
    unitAnnouncements?: UnitAnnouncementListRelationFilter
  }, "id">

  export type AnnouncementOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    isActive?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AnnouncementCountOrderByAggregateInput
    _max?: AnnouncementMaxOrderByAggregateInput
    _min?: AnnouncementMinOrderByAggregateInput
  }

  export type AnnouncementScalarWhereWithAggregatesInput = {
    AND?: AnnouncementScalarWhereWithAggregatesInput | AnnouncementScalarWhereWithAggregatesInput[]
    OR?: AnnouncementScalarWhereWithAggregatesInput[]
    NOT?: AnnouncementScalarWhereWithAggregatesInput | AnnouncementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Announcement"> | string
    title?: StringWithAggregatesFilter<"Announcement"> | string
    body?: StringWithAggregatesFilter<"Announcement"> | string
    isActive?: BoolWithAggregatesFilter<"Announcement"> | boolean
    publishedAt?: DateTimeNullableWithAggregatesFilter<"Announcement"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Announcement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Announcement"> | Date | string
  }

  export type PropertyAnnouncementWhereInput = {
    AND?: PropertyAnnouncementWhereInput | PropertyAnnouncementWhereInput[]
    OR?: PropertyAnnouncementWhereInput[]
    NOT?: PropertyAnnouncementWhereInput | PropertyAnnouncementWhereInput[]
    id?: StringFilter<"PropertyAnnouncement"> | string
    announcementId?: StringFilter<"PropertyAnnouncement"> | string
    propertyId?: StringFilter<"PropertyAnnouncement"> | string
    createdAt?: DateTimeFilter<"PropertyAnnouncement"> | Date | string
    updatedAt?: DateTimeFilter<"PropertyAnnouncement"> | Date | string
    announcement?: XOR<AnnouncementScalarRelationFilter, AnnouncementWhereInput>
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }

  export type PropertyAnnouncementOrderByWithRelationInput = {
    id?: SortOrder
    announcementId?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    announcement?: AnnouncementOrderByWithRelationInput
    property?: PropertyOrderByWithRelationInput
  }

  export type PropertyAnnouncementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PropertyAnnouncementWhereInput | PropertyAnnouncementWhereInput[]
    OR?: PropertyAnnouncementWhereInput[]
    NOT?: PropertyAnnouncementWhereInput | PropertyAnnouncementWhereInput[]
    announcementId?: StringFilter<"PropertyAnnouncement"> | string
    propertyId?: StringFilter<"PropertyAnnouncement"> | string
    createdAt?: DateTimeFilter<"PropertyAnnouncement"> | Date | string
    updatedAt?: DateTimeFilter<"PropertyAnnouncement"> | Date | string
    announcement?: XOR<AnnouncementScalarRelationFilter, AnnouncementWhereInput>
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }, "id">

  export type PropertyAnnouncementOrderByWithAggregationInput = {
    id?: SortOrder
    announcementId?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PropertyAnnouncementCountOrderByAggregateInput
    _max?: PropertyAnnouncementMaxOrderByAggregateInput
    _min?: PropertyAnnouncementMinOrderByAggregateInput
  }

  export type PropertyAnnouncementScalarWhereWithAggregatesInput = {
    AND?: PropertyAnnouncementScalarWhereWithAggregatesInput | PropertyAnnouncementScalarWhereWithAggregatesInput[]
    OR?: PropertyAnnouncementScalarWhereWithAggregatesInput[]
    NOT?: PropertyAnnouncementScalarWhereWithAggregatesInput | PropertyAnnouncementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PropertyAnnouncement"> | string
    announcementId?: StringWithAggregatesFilter<"PropertyAnnouncement"> | string
    propertyId?: StringWithAggregatesFilter<"PropertyAnnouncement"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PropertyAnnouncement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PropertyAnnouncement"> | Date | string
  }

  export type UnitAnnouncementWhereInput = {
    AND?: UnitAnnouncementWhereInput | UnitAnnouncementWhereInput[]
    OR?: UnitAnnouncementWhereInput[]
    NOT?: UnitAnnouncementWhereInput | UnitAnnouncementWhereInput[]
    id?: StringFilter<"UnitAnnouncement"> | string
    announcementId?: StringFilter<"UnitAnnouncement"> | string
    unitId?: StringFilter<"UnitAnnouncement"> | string
    createdAt?: DateTimeFilter<"UnitAnnouncement"> | Date | string
    updatedAt?: DateTimeFilter<"UnitAnnouncement"> | Date | string
    announcement?: XOR<AnnouncementScalarRelationFilter, AnnouncementWhereInput>
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
  }

  export type UnitAnnouncementOrderByWithRelationInput = {
    id?: SortOrder
    announcementId?: SortOrder
    unitId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    announcement?: AnnouncementOrderByWithRelationInput
    unit?: UnitOrderByWithRelationInput
  }

  export type UnitAnnouncementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UnitAnnouncementWhereInput | UnitAnnouncementWhereInput[]
    OR?: UnitAnnouncementWhereInput[]
    NOT?: UnitAnnouncementWhereInput | UnitAnnouncementWhereInput[]
    announcementId?: StringFilter<"UnitAnnouncement"> | string
    unitId?: StringFilter<"UnitAnnouncement"> | string
    createdAt?: DateTimeFilter<"UnitAnnouncement"> | Date | string
    updatedAt?: DateTimeFilter<"UnitAnnouncement"> | Date | string
    announcement?: XOR<AnnouncementScalarRelationFilter, AnnouncementWhereInput>
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
  }, "id">

  export type UnitAnnouncementOrderByWithAggregationInput = {
    id?: SortOrder
    announcementId?: SortOrder
    unitId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UnitAnnouncementCountOrderByAggregateInput
    _max?: UnitAnnouncementMaxOrderByAggregateInput
    _min?: UnitAnnouncementMinOrderByAggregateInput
  }

  export type UnitAnnouncementScalarWhereWithAggregatesInput = {
    AND?: UnitAnnouncementScalarWhereWithAggregatesInput | UnitAnnouncementScalarWhereWithAggregatesInput[]
    OR?: UnitAnnouncementScalarWhereWithAggregatesInput[]
    NOT?: UnitAnnouncementScalarWhereWithAggregatesInput | UnitAnnouncementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UnitAnnouncement"> | string
    announcementId?: StringWithAggregatesFilter<"UnitAnnouncement"> | string
    unitId?: StringWithAggregatesFilter<"UnitAnnouncement"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UnitAnnouncement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UnitAnnouncement"> | Date | string
  }

  export type OwnerCreateInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    celNum?: string | null
    street?: string | null
    barangay?: string | null
    city?: string | null
    province?: string | null
    region?: string | null
    isActive?: boolean
    isFlagged?: boolean
    flagReason?: string | null
    profilePictureUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyCreateNestedManyWithoutOwnerInput
  }

  export type OwnerUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    celNum?: string | null
    street?: string | null
    barangay?: string | null
    city?: string | null
    province?: string | null
    region?: string | null
    isActive?: boolean
    isFlagged?: boolean
    flagReason?: string | null
    profilePictureUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type OwnerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    celNum?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    barangay?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFlagged?: BoolFieldUpdateOperationsInput | boolean
    flagReason?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUpdateManyWithoutOwnerNestedInput
  }

  export type OwnerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    celNum?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    barangay?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFlagged?: BoolFieldUpdateOperationsInput | boolean
    flagReason?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type OwnerCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    celNum?: string | null
    street?: string | null
    barangay?: string | null
    city?: string | null
    province?: string | null
    region?: string | null
    isActive?: boolean
    isFlagged?: boolean
    flagReason?: string | null
    profilePictureUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OwnerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    celNum?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    barangay?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFlagged?: BoolFieldUpdateOperationsInput | boolean
    flagReason?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OwnerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    celNum?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    barangay?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFlagged?: BoolFieldUpdateOperationsInput | boolean
    flagReason?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCreateInput = {
    id?: string
    name: string
    type: string
    street?: string | null
    barangay?: string | null
    city?: string | null
    province?: string | null
    region?: string | null
    yearBuilt?: number | null
    description?: string | null
    imageUrls?: PropertyCreateimageUrlsInput | string[]
    houseRules?: PropertyCreatehouseRulesInput | string[]
    isActive?: boolean
    isUnderRepair?: boolean
    isUnderRenovation?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: OwnerCreateNestedOneWithoutPropertiesInput
    units?: UnitCreateNestedManyWithoutPropertyInput
    propertyAnnouncements?: PropertyAnnouncementCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateInput = {
    id?: string
    ownerId: string
    name: string
    type: string
    street?: string | null
    barangay?: string | null
    city?: string | null
    province?: string | null
    region?: string | null
    yearBuilt?: number | null
    description?: string | null
    imageUrls?: PropertyCreateimageUrlsInput | string[]
    houseRules?: PropertyCreatehouseRulesInput | string[]
    isActive?: boolean
    isUnderRepair?: boolean
    isUnderRenovation?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    units?: UnitUncheckedCreateNestedManyWithoutPropertyInput
    propertyAnnouncements?: PropertyAnnouncementUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    barangay?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrls?: PropertyUpdateimageUrlsInput | string[]
    houseRules?: PropertyUpdatehouseRulesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isUnderRepair?: BoolFieldUpdateOperationsInput | boolean
    isUnderRenovation?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: OwnerUpdateOneRequiredWithoutPropertiesNestedInput
    units?: UnitUpdateManyWithoutPropertyNestedInput
    propertyAnnouncements?: PropertyAnnouncementUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    barangay?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrls?: PropertyUpdateimageUrlsInput | string[]
    houseRules?: PropertyUpdatehouseRulesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isUnderRepair?: BoolFieldUpdateOperationsInput | boolean
    isUnderRenovation?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: UnitUncheckedUpdateManyWithoutPropertyNestedInput
    propertyAnnouncements?: PropertyAnnouncementUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateManyInput = {
    id?: string
    ownerId: string
    name: string
    type: string
    street?: string | null
    barangay?: string | null
    city?: string | null
    province?: string | null
    region?: string | null
    yearBuilt?: number | null
    description?: string | null
    imageUrls?: PropertyCreateimageUrlsInput | string[]
    houseRules?: PropertyCreatehouseRulesInput | string[]
    isActive?: boolean
    isUnderRepair?: boolean
    isUnderRenovation?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    barangay?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrls?: PropertyUpdateimageUrlsInput | string[]
    houseRules?: PropertyUpdatehouseRulesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isUnderRepair?: BoolFieldUpdateOperationsInput | boolean
    isUnderRenovation?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    barangay?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrls?: PropertyUpdateimageUrlsInput | string[]
    houseRules?: PropertyUpdatehouseRulesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isUnderRepair?: BoolFieldUpdateOperationsInput | boolean
    isUnderRenovation?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitCreateInput = {
    id?: string
    unitNumber: string
    floor?: string | null
    bedrooms?: number
    bathrooms?: number
    squareFeet?: number | null
    monthlyRentAmount: number
    description?: string | null
    imageUrls?: UnitCreateimageUrlsInput | string[]
    status?: string
    isActive?: boolean
    isUnderRepair?: boolean
    isUnderRenovation?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutUnitsInput
    leases?: LeaseCreateNestedManyWithoutUnitInput
    unitAnnouncements?: UnitAnnouncementCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateInput = {
    id?: string
    propertyId: string
    unitNumber: string
    floor?: string | null
    bedrooms?: number
    bathrooms?: number
    squareFeet?: number | null
    monthlyRentAmount: number
    description?: string | null
    imageUrls?: UnitCreateimageUrlsInput | string[]
    status?: string
    isActive?: boolean
    isUnderRepair?: boolean
    isUnderRenovation?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    leases?: LeaseUncheckedCreateNestedManyWithoutUnitInput
    unitAnnouncements?: UnitAnnouncementUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitNumber?: StringFieldUpdateOperationsInput | string
    floor?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    squareFeet?: NullableFloatFieldUpdateOperationsInput | number | null
    monthlyRentAmount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrls?: UnitUpdateimageUrlsInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isUnderRepair?: BoolFieldUpdateOperationsInput | boolean
    isUnderRenovation?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutUnitsNestedInput
    leases?: LeaseUpdateManyWithoutUnitNestedInput
    unitAnnouncements?: UnitAnnouncementUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    unitNumber?: StringFieldUpdateOperationsInput | string
    floor?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    squareFeet?: NullableFloatFieldUpdateOperationsInput | number | null
    monthlyRentAmount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrls?: UnitUpdateimageUrlsInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isUnderRepair?: BoolFieldUpdateOperationsInput | boolean
    isUnderRenovation?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leases?: LeaseUncheckedUpdateManyWithoutUnitNestedInput
    unitAnnouncements?: UnitAnnouncementUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type UnitCreateManyInput = {
    id?: string
    propertyId: string
    unitNumber: string
    floor?: string | null
    bedrooms?: number
    bathrooms?: number
    squareFeet?: number | null
    monthlyRentAmount: number
    description?: string | null
    imageUrls?: UnitCreateimageUrlsInput | string[]
    status?: string
    isActive?: boolean
    isUnderRepair?: boolean
    isUnderRenovation?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitNumber?: StringFieldUpdateOperationsInput | string
    floor?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    squareFeet?: NullableFloatFieldUpdateOperationsInput | number | null
    monthlyRentAmount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrls?: UnitUpdateimageUrlsInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isUnderRepair?: BoolFieldUpdateOperationsInput | boolean
    isUnderRenovation?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    unitNumber?: StringFieldUpdateOperationsInput | string
    floor?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    squareFeet?: NullableFloatFieldUpdateOperationsInput | number | null
    monthlyRentAmount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrls?: UnitUpdateimageUrlsInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isUnderRepair?: BoolFieldUpdateOperationsInput | boolean
    isUnderRenovation?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    celNum?: string | null
    dateOfBirth?: Date | string | null
    emergencyName?: string | null
    emergencyPhone?: string | null
    notes?: string | null
    isFlagged?: boolean
    flagReason?: string | null
    isActive?: boolean
    moveInDate?: Date | string | null
    moveOutDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leases?: LeaseCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    celNum?: string | null
    dateOfBirth?: Date | string | null
    emergencyName?: string | null
    emergencyPhone?: string | null
    notes?: string | null
    isFlagged?: boolean
    flagReason?: string | null
    isActive?: boolean
    moveInDate?: Date | string | null
    moveOutDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leases?: LeaseUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    celNum?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emergencyName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isFlagged?: BoolFieldUpdateOperationsInput | boolean
    flagReason?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    moveInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    moveOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leases?: LeaseUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    celNum?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emergencyName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isFlagged?: BoolFieldUpdateOperationsInput | boolean
    flagReason?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    moveInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    moveOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leases?: LeaseUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    celNum?: string | null
    dateOfBirth?: Date | string | null
    emergencyName?: string | null
    emergencyPhone?: string | null
    notes?: string | null
    isFlagged?: boolean
    flagReason?: string | null
    isActive?: boolean
    moveInDate?: Date | string | null
    moveOutDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    celNum?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emergencyName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isFlagged?: BoolFieldUpdateOperationsInput | boolean
    flagReason?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    moveInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    moveOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    celNum?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emergencyName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isFlagged?: BoolFieldUpdateOperationsInput | boolean
    flagReason?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    moveInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    moveOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaseCreateInput = {
    id?: string
    status?: string
    leaseStartDate: Date | string
    leaseEndDate: Date | string
    terms?: string | null
    notes?: string | null
    signedAt?: Date | string | null
    terminatedAt?: Date | string | null
    terminationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    unit: UnitCreateNestedOneWithoutLeasesInput
    tenant: TenantCreateNestedOneWithoutLeasesInput
    transactions?: TransactionCreateNestedManyWithoutLeaseInput
  }

  export type LeaseUncheckedCreateInput = {
    id?: string
    unitId: string
    tenantId: string
    status?: string
    leaseStartDate: Date | string
    leaseEndDate: Date | string
    terms?: string | null
    notes?: string | null
    signedAt?: Date | string | null
    terminatedAt?: Date | string | null
    terminationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutLeaseInput
  }

  export type LeaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    leaseStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leaseEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    signedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    terminatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    terminationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneRequiredWithoutLeasesNestedInput
    tenant?: TenantUpdateOneRequiredWithoutLeasesNestedInput
    transactions?: TransactionUpdateManyWithoutLeaseNestedInput
  }

  export type LeaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    leaseStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leaseEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    signedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    terminatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    terminationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutLeaseNestedInput
  }

  export type LeaseCreateManyInput = {
    id?: string
    unitId: string
    tenantId: string
    status?: string
    leaseStartDate: Date | string
    leaseEndDate: Date | string
    terms?: string | null
    notes?: string | null
    signedAt?: Date | string | null
    terminatedAt?: Date | string | null
    terminationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    leaseStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leaseEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    signedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    terminatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    terminationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    leaseStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leaseEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    signedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    terminatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    terminationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    id?: string
    amount: number
    reference: string
    transactionDate?: Date | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lease: LeaseCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    leaseId: string
    amount: number
    reference: string
    transactionDate?: Date | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lease?: LeaseUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaseId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id?: string
    leaseId: string
    amount: number
    reference: string
    transactionDate?: Date | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaseId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementCreateInput = {
    id?: string
    title: string
    body: string
    isActive?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    propertyAnnouncements?: PropertyAnnouncementCreateNestedManyWithoutAnnouncementInput
    unitAnnouncements?: UnitAnnouncementCreateNestedManyWithoutAnnouncementInput
  }

  export type AnnouncementUncheckedCreateInput = {
    id?: string
    title: string
    body: string
    isActive?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    propertyAnnouncements?: PropertyAnnouncementUncheckedCreateNestedManyWithoutAnnouncementInput
    unitAnnouncements?: UnitAnnouncementUncheckedCreateNestedManyWithoutAnnouncementInput
  }

  export type AnnouncementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    propertyAnnouncements?: PropertyAnnouncementUpdateManyWithoutAnnouncementNestedInput
    unitAnnouncements?: UnitAnnouncementUpdateManyWithoutAnnouncementNestedInput
  }

  export type AnnouncementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    propertyAnnouncements?: PropertyAnnouncementUncheckedUpdateManyWithoutAnnouncementNestedInput
    unitAnnouncements?: UnitAnnouncementUncheckedUpdateManyWithoutAnnouncementNestedInput
  }

  export type AnnouncementCreateManyInput = {
    id?: string
    title: string
    body: string
    isActive?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnouncementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyAnnouncementCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    announcement: AnnouncementCreateNestedOneWithoutPropertyAnnouncementsInput
    property: PropertyCreateNestedOneWithoutPropertyAnnouncementsInput
  }

  export type PropertyAnnouncementUncheckedCreateInput = {
    id?: string
    announcementId: string
    propertyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyAnnouncementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    announcement?: AnnouncementUpdateOneRequiredWithoutPropertyAnnouncementsNestedInput
    property?: PropertyUpdateOneRequiredWithoutPropertyAnnouncementsNestedInput
  }

  export type PropertyAnnouncementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    announcementId?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyAnnouncementCreateManyInput = {
    id?: string
    announcementId: string
    propertyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyAnnouncementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyAnnouncementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    announcementId?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitAnnouncementCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    announcement: AnnouncementCreateNestedOneWithoutUnitAnnouncementsInput
    unit: UnitCreateNestedOneWithoutUnitAnnouncementsInput
  }

  export type UnitAnnouncementUncheckedCreateInput = {
    id?: string
    announcementId: string
    unitId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnitAnnouncementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    announcement?: AnnouncementUpdateOneRequiredWithoutUnitAnnouncementsNestedInput
    unit?: UnitUpdateOneRequiredWithoutUnitAnnouncementsNestedInput
  }

  export type UnitAnnouncementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    announcementId?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitAnnouncementCreateManyInput = {
    id?: string
    announcementId: string
    unitId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnitAnnouncementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitAnnouncementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    announcementId?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PropertyListRelationFilter = {
    every?: PropertyWhereInput
    some?: PropertyWhereInput
    none?: PropertyWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PropertyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OwnerCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    celNum?: SortOrder
    street?: SortOrder
    barangay?: SortOrder
    city?: SortOrder
    province?: SortOrder
    region?: SortOrder
    isActive?: SortOrder
    isFlagged?: SortOrder
    flagReason?: SortOrder
    profilePictureUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OwnerMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    celNum?: SortOrder
    street?: SortOrder
    barangay?: SortOrder
    city?: SortOrder
    province?: SortOrder
    region?: SortOrder
    isActive?: SortOrder
    isFlagged?: SortOrder
    flagReason?: SortOrder
    profilePictureUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OwnerMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    celNum?: SortOrder
    street?: SortOrder
    barangay?: SortOrder
    city?: SortOrder
    province?: SortOrder
    region?: SortOrder
    isActive?: SortOrder
    isFlagged?: SortOrder
    flagReason?: SortOrder
    profilePictureUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type OwnerScalarRelationFilter = {
    is?: OwnerWhereInput
    isNot?: OwnerWhereInput
  }

  export type UnitListRelationFilter = {
    every?: UnitWhereInput
    some?: UnitWhereInput
    none?: UnitWhereInput
  }

  export type PropertyAnnouncementListRelationFilter = {
    every?: PropertyAnnouncementWhereInput
    some?: PropertyAnnouncementWhereInput
    none?: PropertyAnnouncementWhereInput
  }

  export type UnitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyAnnouncementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    street?: SortOrder
    barangay?: SortOrder
    city?: SortOrder
    province?: SortOrder
    region?: SortOrder
    yearBuilt?: SortOrder
    description?: SortOrder
    imageUrls?: SortOrder
    houseRules?: SortOrder
    isActive?: SortOrder
    isUnderRepair?: SortOrder
    isUnderRenovation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyAvgOrderByAggregateInput = {
    yearBuilt?: SortOrder
  }

  export type PropertyMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    street?: SortOrder
    barangay?: SortOrder
    city?: SortOrder
    province?: SortOrder
    region?: SortOrder
    yearBuilt?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    isUnderRepair?: SortOrder
    isUnderRenovation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    street?: SortOrder
    barangay?: SortOrder
    city?: SortOrder
    province?: SortOrder
    region?: SortOrder
    yearBuilt?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    isUnderRepair?: SortOrder
    isUnderRenovation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertySumOrderByAggregateInput = {
    yearBuilt?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type PropertyScalarRelationFilter = {
    is?: PropertyWhereInput
    isNot?: PropertyWhereInput
  }

  export type LeaseListRelationFilter = {
    every?: LeaseWhereInput
    some?: LeaseWhereInput
    none?: LeaseWhereInput
  }

  export type UnitAnnouncementListRelationFilter = {
    every?: UnitAnnouncementWhereInput
    some?: UnitAnnouncementWhereInput
    none?: UnitAnnouncementWhereInput
  }

  export type LeaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UnitAnnouncementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UnitCountOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    unitNumber?: SortOrder
    floor?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    squareFeet?: SortOrder
    monthlyRentAmount?: SortOrder
    description?: SortOrder
    imageUrls?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    isUnderRepair?: SortOrder
    isUnderRenovation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnitAvgOrderByAggregateInput = {
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    squareFeet?: SortOrder
    monthlyRentAmount?: SortOrder
  }

  export type UnitMaxOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    unitNumber?: SortOrder
    floor?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    squareFeet?: SortOrder
    monthlyRentAmount?: SortOrder
    description?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    isUnderRepair?: SortOrder
    isUnderRenovation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnitMinOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    unitNumber?: SortOrder
    floor?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    squareFeet?: SortOrder
    monthlyRentAmount?: SortOrder
    description?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    isUnderRepair?: SortOrder
    isUnderRenovation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnitSumOrderByAggregateInput = {
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    squareFeet?: SortOrder
    monthlyRentAmount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TenantCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    celNum?: SortOrder
    dateOfBirth?: SortOrder
    emergencyName?: SortOrder
    emergencyPhone?: SortOrder
    notes?: SortOrder
    isFlagged?: SortOrder
    flagReason?: SortOrder
    isActive?: SortOrder
    moveInDate?: SortOrder
    moveOutDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    celNum?: SortOrder
    dateOfBirth?: SortOrder
    emergencyName?: SortOrder
    emergencyPhone?: SortOrder
    notes?: SortOrder
    isFlagged?: SortOrder
    flagReason?: SortOrder
    isActive?: SortOrder
    moveInDate?: SortOrder
    moveOutDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    celNum?: SortOrder
    dateOfBirth?: SortOrder
    emergencyName?: SortOrder
    emergencyPhone?: SortOrder
    notes?: SortOrder
    isFlagged?: SortOrder
    flagReason?: SortOrder
    isActive?: SortOrder
    moveInDate?: SortOrder
    moveOutDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UnitScalarRelationFilter = {
    is?: UnitWhereInput
    isNot?: UnitWhereInput
  }

  export type TenantScalarRelationFilter = {
    is?: TenantWhereInput
    isNot?: TenantWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeaseCountOrderByAggregateInput = {
    id?: SortOrder
    unitId?: SortOrder
    tenantId?: SortOrder
    status?: SortOrder
    leaseStartDate?: SortOrder
    leaseEndDate?: SortOrder
    terms?: SortOrder
    notes?: SortOrder
    signedAt?: SortOrder
    terminatedAt?: SortOrder
    terminationReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaseMaxOrderByAggregateInput = {
    id?: SortOrder
    unitId?: SortOrder
    tenantId?: SortOrder
    status?: SortOrder
    leaseStartDate?: SortOrder
    leaseEndDate?: SortOrder
    terms?: SortOrder
    notes?: SortOrder
    signedAt?: SortOrder
    terminatedAt?: SortOrder
    terminationReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaseMinOrderByAggregateInput = {
    id?: SortOrder
    unitId?: SortOrder
    tenantId?: SortOrder
    status?: SortOrder
    leaseStartDate?: SortOrder
    leaseEndDate?: SortOrder
    terms?: SortOrder
    notes?: SortOrder
    signedAt?: SortOrder
    terminatedAt?: SortOrder
    terminationReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaseScalarRelationFilter = {
    is?: LeaseWhereInput
    isNot?: LeaseWhereInput
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    leaseId?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    transactionDate?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    leaseId?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    transactionDate?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    leaseId?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    transactionDate?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type AnnouncementCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    isActive?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnnouncementMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    isActive?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnnouncementMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    isActive?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnnouncementScalarRelationFilter = {
    is?: AnnouncementWhereInput
    isNot?: AnnouncementWhereInput
  }

  export type PropertyAnnouncementCountOrderByAggregateInput = {
    id?: SortOrder
    announcementId?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyAnnouncementMaxOrderByAggregateInput = {
    id?: SortOrder
    announcementId?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyAnnouncementMinOrderByAggregateInput = {
    id?: SortOrder
    announcementId?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnitAnnouncementCountOrderByAggregateInput = {
    id?: SortOrder
    announcementId?: SortOrder
    unitId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnitAnnouncementMaxOrderByAggregateInput = {
    id?: SortOrder
    announcementId?: SortOrder
    unitId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnitAnnouncementMinOrderByAggregateInput = {
    id?: SortOrder
    announcementId?: SortOrder
    unitId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyCreateNestedManyWithoutOwnerInput = {
    create?: XOR<PropertyCreateWithoutOwnerInput, PropertyUncheckedCreateWithoutOwnerInput> | PropertyCreateWithoutOwnerInput[] | PropertyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutOwnerInput | PropertyCreateOrConnectWithoutOwnerInput[]
    createMany?: PropertyCreateManyOwnerInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type PropertyUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<PropertyCreateWithoutOwnerInput, PropertyUncheckedCreateWithoutOwnerInput> | PropertyCreateWithoutOwnerInput[] | PropertyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutOwnerInput | PropertyCreateOrConnectWithoutOwnerInput[]
    createMany?: PropertyCreateManyOwnerInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PropertyUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<PropertyCreateWithoutOwnerInput, PropertyUncheckedCreateWithoutOwnerInput> | PropertyCreateWithoutOwnerInput[] | PropertyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutOwnerInput | PropertyCreateOrConnectWithoutOwnerInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutOwnerInput | PropertyUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: PropertyCreateManyOwnerInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutOwnerInput | PropertyUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutOwnerInput | PropertyUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type PropertyUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<PropertyCreateWithoutOwnerInput, PropertyUncheckedCreateWithoutOwnerInput> | PropertyCreateWithoutOwnerInput[] | PropertyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutOwnerInput | PropertyCreateOrConnectWithoutOwnerInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutOwnerInput | PropertyUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: PropertyCreateManyOwnerInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutOwnerInput | PropertyUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutOwnerInput | PropertyUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type PropertyCreateimageUrlsInput = {
    set: string[]
  }

  export type PropertyCreatehouseRulesInput = {
    set: string[]
  }

  export type OwnerCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<OwnerCreateWithoutPropertiesInput, OwnerUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: OwnerCreateOrConnectWithoutPropertiesInput
    connect?: OwnerWhereUniqueInput
  }

  export type UnitCreateNestedManyWithoutPropertyInput = {
    create?: XOR<UnitCreateWithoutPropertyInput, UnitUncheckedCreateWithoutPropertyInput> | UnitCreateWithoutPropertyInput[] | UnitUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutPropertyInput | UnitCreateOrConnectWithoutPropertyInput[]
    createMany?: UnitCreateManyPropertyInputEnvelope
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
  }

  export type PropertyAnnouncementCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PropertyAnnouncementCreateWithoutPropertyInput, PropertyAnnouncementUncheckedCreateWithoutPropertyInput> | PropertyAnnouncementCreateWithoutPropertyInput[] | PropertyAnnouncementUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyAnnouncementCreateOrConnectWithoutPropertyInput | PropertyAnnouncementCreateOrConnectWithoutPropertyInput[]
    createMany?: PropertyAnnouncementCreateManyPropertyInputEnvelope
    connect?: PropertyAnnouncementWhereUniqueInput | PropertyAnnouncementWhereUniqueInput[]
  }

  export type UnitUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<UnitCreateWithoutPropertyInput, UnitUncheckedCreateWithoutPropertyInput> | UnitCreateWithoutPropertyInput[] | UnitUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutPropertyInput | UnitCreateOrConnectWithoutPropertyInput[]
    createMany?: UnitCreateManyPropertyInputEnvelope
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
  }

  export type PropertyAnnouncementUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PropertyAnnouncementCreateWithoutPropertyInput, PropertyAnnouncementUncheckedCreateWithoutPropertyInput> | PropertyAnnouncementCreateWithoutPropertyInput[] | PropertyAnnouncementUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyAnnouncementCreateOrConnectWithoutPropertyInput | PropertyAnnouncementCreateOrConnectWithoutPropertyInput[]
    createMany?: PropertyAnnouncementCreateManyPropertyInputEnvelope
    connect?: PropertyAnnouncementWhereUniqueInput | PropertyAnnouncementWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PropertyUpdateimageUrlsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PropertyUpdatehouseRulesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type OwnerUpdateOneRequiredWithoutPropertiesNestedInput = {
    create?: XOR<OwnerCreateWithoutPropertiesInput, OwnerUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: OwnerCreateOrConnectWithoutPropertiesInput
    upsert?: OwnerUpsertWithoutPropertiesInput
    connect?: OwnerWhereUniqueInput
    update?: XOR<XOR<OwnerUpdateToOneWithWhereWithoutPropertiesInput, OwnerUpdateWithoutPropertiesInput>, OwnerUncheckedUpdateWithoutPropertiesInput>
  }

  export type UnitUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<UnitCreateWithoutPropertyInput, UnitUncheckedCreateWithoutPropertyInput> | UnitCreateWithoutPropertyInput[] | UnitUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutPropertyInput | UnitCreateOrConnectWithoutPropertyInput[]
    upsert?: UnitUpsertWithWhereUniqueWithoutPropertyInput | UnitUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: UnitCreateManyPropertyInputEnvelope
    set?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    disconnect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    delete?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    update?: UnitUpdateWithWhereUniqueWithoutPropertyInput | UnitUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: UnitUpdateManyWithWhereWithoutPropertyInput | UnitUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: UnitScalarWhereInput | UnitScalarWhereInput[]
  }

  export type PropertyAnnouncementUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PropertyAnnouncementCreateWithoutPropertyInput, PropertyAnnouncementUncheckedCreateWithoutPropertyInput> | PropertyAnnouncementCreateWithoutPropertyInput[] | PropertyAnnouncementUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyAnnouncementCreateOrConnectWithoutPropertyInput | PropertyAnnouncementCreateOrConnectWithoutPropertyInput[]
    upsert?: PropertyAnnouncementUpsertWithWhereUniqueWithoutPropertyInput | PropertyAnnouncementUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PropertyAnnouncementCreateManyPropertyInputEnvelope
    set?: PropertyAnnouncementWhereUniqueInput | PropertyAnnouncementWhereUniqueInput[]
    disconnect?: PropertyAnnouncementWhereUniqueInput | PropertyAnnouncementWhereUniqueInput[]
    delete?: PropertyAnnouncementWhereUniqueInput | PropertyAnnouncementWhereUniqueInput[]
    connect?: PropertyAnnouncementWhereUniqueInput | PropertyAnnouncementWhereUniqueInput[]
    update?: PropertyAnnouncementUpdateWithWhereUniqueWithoutPropertyInput | PropertyAnnouncementUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PropertyAnnouncementUpdateManyWithWhereWithoutPropertyInput | PropertyAnnouncementUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PropertyAnnouncementScalarWhereInput | PropertyAnnouncementScalarWhereInput[]
  }

  export type UnitUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<UnitCreateWithoutPropertyInput, UnitUncheckedCreateWithoutPropertyInput> | UnitCreateWithoutPropertyInput[] | UnitUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutPropertyInput | UnitCreateOrConnectWithoutPropertyInput[]
    upsert?: UnitUpsertWithWhereUniqueWithoutPropertyInput | UnitUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: UnitCreateManyPropertyInputEnvelope
    set?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    disconnect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    delete?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    update?: UnitUpdateWithWhereUniqueWithoutPropertyInput | UnitUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: UnitUpdateManyWithWhereWithoutPropertyInput | UnitUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: UnitScalarWhereInput | UnitScalarWhereInput[]
  }

  export type PropertyAnnouncementUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PropertyAnnouncementCreateWithoutPropertyInput, PropertyAnnouncementUncheckedCreateWithoutPropertyInput> | PropertyAnnouncementCreateWithoutPropertyInput[] | PropertyAnnouncementUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyAnnouncementCreateOrConnectWithoutPropertyInput | PropertyAnnouncementCreateOrConnectWithoutPropertyInput[]
    upsert?: PropertyAnnouncementUpsertWithWhereUniqueWithoutPropertyInput | PropertyAnnouncementUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PropertyAnnouncementCreateManyPropertyInputEnvelope
    set?: PropertyAnnouncementWhereUniqueInput | PropertyAnnouncementWhereUniqueInput[]
    disconnect?: PropertyAnnouncementWhereUniqueInput | PropertyAnnouncementWhereUniqueInput[]
    delete?: PropertyAnnouncementWhereUniqueInput | PropertyAnnouncementWhereUniqueInput[]
    connect?: PropertyAnnouncementWhereUniqueInput | PropertyAnnouncementWhereUniqueInput[]
    update?: PropertyAnnouncementUpdateWithWhereUniqueWithoutPropertyInput | PropertyAnnouncementUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PropertyAnnouncementUpdateManyWithWhereWithoutPropertyInput | PropertyAnnouncementUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PropertyAnnouncementScalarWhereInput | PropertyAnnouncementScalarWhereInput[]
  }

  export type UnitCreateimageUrlsInput = {
    set: string[]
  }

  export type PropertyCreateNestedOneWithoutUnitsInput = {
    create?: XOR<PropertyCreateWithoutUnitsInput, PropertyUncheckedCreateWithoutUnitsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutUnitsInput
    connect?: PropertyWhereUniqueInput
  }

  export type LeaseCreateNestedManyWithoutUnitInput = {
    create?: XOR<LeaseCreateWithoutUnitInput, LeaseUncheckedCreateWithoutUnitInput> | LeaseCreateWithoutUnitInput[] | LeaseUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutUnitInput | LeaseCreateOrConnectWithoutUnitInput[]
    createMany?: LeaseCreateManyUnitInputEnvelope
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
  }

  export type UnitAnnouncementCreateNestedManyWithoutUnitInput = {
    create?: XOR<UnitAnnouncementCreateWithoutUnitInput, UnitAnnouncementUncheckedCreateWithoutUnitInput> | UnitAnnouncementCreateWithoutUnitInput[] | UnitAnnouncementUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: UnitAnnouncementCreateOrConnectWithoutUnitInput | UnitAnnouncementCreateOrConnectWithoutUnitInput[]
    createMany?: UnitAnnouncementCreateManyUnitInputEnvelope
    connect?: UnitAnnouncementWhereUniqueInput | UnitAnnouncementWhereUniqueInput[]
  }

  export type LeaseUncheckedCreateNestedManyWithoutUnitInput = {
    create?: XOR<LeaseCreateWithoutUnitInput, LeaseUncheckedCreateWithoutUnitInput> | LeaseCreateWithoutUnitInput[] | LeaseUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutUnitInput | LeaseCreateOrConnectWithoutUnitInput[]
    createMany?: LeaseCreateManyUnitInputEnvelope
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
  }

  export type UnitAnnouncementUncheckedCreateNestedManyWithoutUnitInput = {
    create?: XOR<UnitAnnouncementCreateWithoutUnitInput, UnitAnnouncementUncheckedCreateWithoutUnitInput> | UnitAnnouncementCreateWithoutUnitInput[] | UnitAnnouncementUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: UnitAnnouncementCreateOrConnectWithoutUnitInput | UnitAnnouncementCreateOrConnectWithoutUnitInput[]
    createMany?: UnitAnnouncementCreateManyUnitInputEnvelope
    connect?: UnitAnnouncementWhereUniqueInput | UnitAnnouncementWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UnitUpdateimageUrlsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PropertyUpdateOneRequiredWithoutUnitsNestedInput = {
    create?: XOR<PropertyCreateWithoutUnitsInput, PropertyUncheckedCreateWithoutUnitsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutUnitsInput
    upsert?: PropertyUpsertWithoutUnitsInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutUnitsInput, PropertyUpdateWithoutUnitsInput>, PropertyUncheckedUpdateWithoutUnitsInput>
  }

  export type LeaseUpdateManyWithoutUnitNestedInput = {
    create?: XOR<LeaseCreateWithoutUnitInput, LeaseUncheckedCreateWithoutUnitInput> | LeaseCreateWithoutUnitInput[] | LeaseUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutUnitInput | LeaseCreateOrConnectWithoutUnitInput[]
    upsert?: LeaseUpsertWithWhereUniqueWithoutUnitInput | LeaseUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: LeaseCreateManyUnitInputEnvelope
    set?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    disconnect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    delete?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    update?: LeaseUpdateWithWhereUniqueWithoutUnitInput | LeaseUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: LeaseUpdateManyWithWhereWithoutUnitInput | LeaseUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
  }

  export type UnitAnnouncementUpdateManyWithoutUnitNestedInput = {
    create?: XOR<UnitAnnouncementCreateWithoutUnitInput, UnitAnnouncementUncheckedCreateWithoutUnitInput> | UnitAnnouncementCreateWithoutUnitInput[] | UnitAnnouncementUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: UnitAnnouncementCreateOrConnectWithoutUnitInput | UnitAnnouncementCreateOrConnectWithoutUnitInput[]
    upsert?: UnitAnnouncementUpsertWithWhereUniqueWithoutUnitInput | UnitAnnouncementUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: UnitAnnouncementCreateManyUnitInputEnvelope
    set?: UnitAnnouncementWhereUniqueInput | UnitAnnouncementWhereUniqueInput[]
    disconnect?: UnitAnnouncementWhereUniqueInput | UnitAnnouncementWhereUniqueInput[]
    delete?: UnitAnnouncementWhereUniqueInput | UnitAnnouncementWhereUniqueInput[]
    connect?: UnitAnnouncementWhereUniqueInput | UnitAnnouncementWhereUniqueInput[]
    update?: UnitAnnouncementUpdateWithWhereUniqueWithoutUnitInput | UnitAnnouncementUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: UnitAnnouncementUpdateManyWithWhereWithoutUnitInput | UnitAnnouncementUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: UnitAnnouncementScalarWhereInput | UnitAnnouncementScalarWhereInput[]
  }

  export type LeaseUncheckedUpdateManyWithoutUnitNestedInput = {
    create?: XOR<LeaseCreateWithoutUnitInput, LeaseUncheckedCreateWithoutUnitInput> | LeaseCreateWithoutUnitInput[] | LeaseUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutUnitInput | LeaseCreateOrConnectWithoutUnitInput[]
    upsert?: LeaseUpsertWithWhereUniqueWithoutUnitInput | LeaseUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: LeaseCreateManyUnitInputEnvelope
    set?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    disconnect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    delete?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    update?: LeaseUpdateWithWhereUniqueWithoutUnitInput | LeaseUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: LeaseUpdateManyWithWhereWithoutUnitInput | LeaseUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
  }

  export type UnitAnnouncementUncheckedUpdateManyWithoutUnitNestedInput = {
    create?: XOR<UnitAnnouncementCreateWithoutUnitInput, UnitAnnouncementUncheckedCreateWithoutUnitInput> | UnitAnnouncementCreateWithoutUnitInput[] | UnitAnnouncementUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: UnitAnnouncementCreateOrConnectWithoutUnitInput | UnitAnnouncementCreateOrConnectWithoutUnitInput[]
    upsert?: UnitAnnouncementUpsertWithWhereUniqueWithoutUnitInput | UnitAnnouncementUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: UnitAnnouncementCreateManyUnitInputEnvelope
    set?: UnitAnnouncementWhereUniqueInput | UnitAnnouncementWhereUniqueInput[]
    disconnect?: UnitAnnouncementWhereUniqueInput | UnitAnnouncementWhereUniqueInput[]
    delete?: UnitAnnouncementWhereUniqueInput | UnitAnnouncementWhereUniqueInput[]
    connect?: UnitAnnouncementWhereUniqueInput | UnitAnnouncementWhereUniqueInput[]
    update?: UnitAnnouncementUpdateWithWhereUniqueWithoutUnitInput | UnitAnnouncementUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: UnitAnnouncementUpdateManyWithWhereWithoutUnitInput | UnitAnnouncementUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: UnitAnnouncementScalarWhereInput | UnitAnnouncementScalarWhereInput[]
  }

  export type LeaseCreateNestedManyWithoutTenantInput = {
    create?: XOR<LeaseCreateWithoutTenantInput, LeaseUncheckedCreateWithoutTenantInput> | LeaseCreateWithoutTenantInput[] | LeaseUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutTenantInput | LeaseCreateOrConnectWithoutTenantInput[]
    createMany?: LeaseCreateManyTenantInputEnvelope
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
  }

  export type LeaseUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<LeaseCreateWithoutTenantInput, LeaseUncheckedCreateWithoutTenantInput> | LeaseCreateWithoutTenantInput[] | LeaseUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutTenantInput | LeaseCreateOrConnectWithoutTenantInput[]
    createMany?: LeaseCreateManyTenantInputEnvelope
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type LeaseUpdateManyWithoutTenantNestedInput = {
    create?: XOR<LeaseCreateWithoutTenantInput, LeaseUncheckedCreateWithoutTenantInput> | LeaseCreateWithoutTenantInput[] | LeaseUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutTenantInput | LeaseCreateOrConnectWithoutTenantInput[]
    upsert?: LeaseUpsertWithWhereUniqueWithoutTenantInput | LeaseUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: LeaseCreateManyTenantInputEnvelope
    set?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    disconnect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    delete?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    update?: LeaseUpdateWithWhereUniqueWithoutTenantInput | LeaseUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: LeaseUpdateManyWithWhereWithoutTenantInput | LeaseUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
  }

  export type LeaseUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<LeaseCreateWithoutTenantInput, LeaseUncheckedCreateWithoutTenantInput> | LeaseCreateWithoutTenantInput[] | LeaseUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutTenantInput | LeaseCreateOrConnectWithoutTenantInput[]
    upsert?: LeaseUpsertWithWhereUniqueWithoutTenantInput | LeaseUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: LeaseCreateManyTenantInputEnvelope
    set?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    disconnect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    delete?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    update?: LeaseUpdateWithWhereUniqueWithoutTenantInput | LeaseUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: LeaseUpdateManyWithWhereWithoutTenantInput | LeaseUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
  }

  export type UnitCreateNestedOneWithoutLeasesInput = {
    create?: XOR<UnitCreateWithoutLeasesInput, UnitUncheckedCreateWithoutLeasesInput>
    connectOrCreate?: UnitCreateOrConnectWithoutLeasesInput
    connect?: UnitWhereUniqueInput
  }

  export type TenantCreateNestedOneWithoutLeasesInput = {
    create?: XOR<TenantCreateWithoutLeasesInput, TenantUncheckedCreateWithoutLeasesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutLeasesInput
    connect?: TenantWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutLeaseInput = {
    create?: XOR<TransactionCreateWithoutLeaseInput, TransactionUncheckedCreateWithoutLeaseInput> | TransactionCreateWithoutLeaseInput[] | TransactionUncheckedCreateWithoutLeaseInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutLeaseInput | TransactionCreateOrConnectWithoutLeaseInput[]
    createMany?: TransactionCreateManyLeaseInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutLeaseInput = {
    create?: XOR<TransactionCreateWithoutLeaseInput, TransactionUncheckedCreateWithoutLeaseInput> | TransactionCreateWithoutLeaseInput[] | TransactionUncheckedCreateWithoutLeaseInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutLeaseInput | TransactionCreateOrConnectWithoutLeaseInput[]
    createMany?: TransactionCreateManyLeaseInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type UnitUpdateOneRequiredWithoutLeasesNestedInput = {
    create?: XOR<UnitCreateWithoutLeasesInput, UnitUncheckedCreateWithoutLeasesInput>
    connectOrCreate?: UnitCreateOrConnectWithoutLeasesInput
    upsert?: UnitUpsertWithoutLeasesInput
    connect?: UnitWhereUniqueInput
    update?: XOR<XOR<UnitUpdateToOneWithWhereWithoutLeasesInput, UnitUpdateWithoutLeasesInput>, UnitUncheckedUpdateWithoutLeasesInput>
  }

  export type TenantUpdateOneRequiredWithoutLeasesNestedInput = {
    create?: XOR<TenantCreateWithoutLeasesInput, TenantUncheckedCreateWithoutLeasesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutLeasesInput
    upsert?: TenantUpsertWithoutLeasesInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutLeasesInput, TenantUpdateWithoutLeasesInput>, TenantUncheckedUpdateWithoutLeasesInput>
  }

  export type TransactionUpdateManyWithoutLeaseNestedInput = {
    create?: XOR<TransactionCreateWithoutLeaseInput, TransactionUncheckedCreateWithoutLeaseInput> | TransactionCreateWithoutLeaseInput[] | TransactionUncheckedCreateWithoutLeaseInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutLeaseInput | TransactionCreateOrConnectWithoutLeaseInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutLeaseInput | TransactionUpsertWithWhereUniqueWithoutLeaseInput[]
    createMany?: TransactionCreateManyLeaseInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutLeaseInput | TransactionUpdateWithWhereUniqueWithoutLeaseInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutLeaseInput | TransactionUpdateManyWithWhereWithoutLeaseInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutLeaseNestedInput = {
    create?: XOR<TransactionCreateWithoutLeaseInput, TransactionUncheckedCreateWithoutLeaseInput> | TransactionCreateWithoutLeaseInput[] | TransactionUncheckedCreateWithoutLeaseInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutLeaseInput | TransactionCreateOrConnectWithoutLeaseInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutLeaseInput | TransactionUpsertWithWhereUniqueWithoutLeaseInput[]
    createMany?: TransactionCreateManyLeaseInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutLeaseInput | TransactionUpdateWithWhereUniqueWithoutLeaseInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutLeaseInput | TransactionUpdateManyWithWhereWithoutLeaseInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type LeaseCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<LeaseCreateWithoutTransactionsInput, LeaseUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: LeaseCreateOrConnectWithoutTransactionsInput
    connect?: LeaseWhereUniqueInput
  }

  export type LeaseUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<LeaseCreateWithoutTransactionsInput, LeaseUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: LeaseCreateOrConnectWithoutTransactionsInput
    upsert?: LeaseUpsertWithoutTransactionsInput
    connect?: LeaseWhereUniqueInput
    update?: XOR<XOR<LeaseUpdateToOneWithWhereWithoutTransactionsInput, LeaseUpdateWithoutTransactionsInput>, LeaseUncheckedUpdateWithoutTransactionsInput>
  }

  export type PropertyAnnouncementCreateNestedManyWithoutAnnouncementInput = {
    create?: XOR<PropertyAnnouncementCreateWithoutAnnouncementInput, PropertyAnnouncementUncheckedCreateWithoutAnnouncementInput> | PropertyAnnouncementCreateWithoutAnnouncementInput[] | PropertyAnnouncementUncheckedCreateWithoutAnnouncementInput[]
    connectOrCreate?: PropertyAnnouncementCreateOrConnectWithoutAnnouncementInput | PropertyAnnouncementCreateOrConnectWithoutAnnouncementInput[]
    createMany?: PropertyAnnouncementCreateManyAnnouncementInputEnvelope
    connect?: PropertyAnnouncementWhereUniqueInput | PropertyAnnouncementWhereUniqueInput[]
  }

  export type UnitAnnouncementCreateNestedManyWithoutAnnouncementInput = {
    create?: XOR<UnitAnnouncementCreateWithoutAnnouncementInput, UnitAnnouncementUncheckedCreateWithoutAnnouncementInput> | UnitAnnouncementCreateWithoutAnnouncementInput[] | UnitAnnouncementUncheckedCreateWithoutAnnouncementInput[]
    connectOrCreate?: UnitAnnouncementCreateOrConnectWithoutAnnouncementInput | UnitAnnouncementCreateOrConnectWithoutAnnouncementInput[]
    createMany?: UnitAnnouncementCreateManyAnnouncementInputEnvelope
    connect?: UnitAnnouncementWhereUniqueInput | UnitAnnouncementWhereUniqueInput[]
  }

  export type PropertyAnnouncementUncheckedCreateNestedManyWithoutAnnouncementInput = {
    create?: XOR<PropertyAnnouncementCreateWithoutAnnouncementInput, PropertyAnnouncementUncheckedCreateWithoutAnnouncementInput> | PropertyAnnouncementCreateWithoutAnnouncementInput[] | PropertyAnnouncementUncheckedCreateWithoutAnnouncementInput[]
    connectOrCreate?: PropertyAnnouncementCreateOrConnectWithoutAnnouncementInput | PropertyAnnouncementCreateOrConnectWithoutAnnouncementInput[]
    createMany?: PropertyAnnouncementCreateManyAnnouncementInputEnvelope
    connect?: PropertyAnnouncementWhereUniqueInput | PropertyAnnouncementWhereUniqueInput[]
  }

  export type UnitAnnouncementUncheckedCreateNestedManyWithoutAnnouncementInput = {
    create?: XOR<UnitAnnouncementCreateWithoutAnnouncementInput, UnitAnnouncementUncheckedCreateWithoutAnnouncementInput> | UnitAnnouncementCreateWithoutAnnouncementInput[] | UnitAnnouncementUncheckedCreateWithoutAnnouncementInput[]
    connectOrCreate?: UnitAnnouncementCreateOrConnectWithoutAnnouncementInput | UnitAnnouncementCreateOrConnectWithoutAnnouncementInput[]
    createMany?: UnitAnnouncementCreateManyAnnouncementInputEnvelope
    connect?: UnitAnnouncementWhereUniqueInput | UnitAnnouncementWhereUniqueInput[]
  }

  export type PropertyAnnouncementUpdateManyWithoutAnnouncementNestedInput = {
    create?: XOR<PropertyAnnouncementCreateWithoutAnnouncementInput, PropertyAnnouncementUncheckedCreateWithoutAnnouncementInput> | PropertyAnnouncementCreateWithoutAnnouncementInput[] | PropertyAnnouncementUncheckedCreateWithoutAnnouncementInput[]
    connectOrCreate?: PropertyAnnouncementCreateOrConnectWithoutAnnouncementInput | PropertyAnnouncementCreateOrConnectWithoutAnnouncementInput[]
    upsert?: PropertyAnnouncementUpsertWithWhereUniqueWithoutAnnouncementInput | PropertyAnnouncementUpsertWithWhereUniqueWithoutAnnouncementInput[]
    createMany?: PropertyAnnouncementCreateManyAnnouncementInputEnvelope
    set?: PropertyAnnouncementWhereUniqueInput | PropertyAnnouncementWhereUniqueInput[]
    disconnect?: PropertyAnnouncementWhereUniqueInput | PropertyAnnouncementWhereUniqueInput[]
    delete?: PropertyAnnouncementWhereUniqueInput | PropertyAnnouncementWhereUniqueInput[]
    connect?: PropertyAnnouncementWhereUniqueInput | PropertyAnnouncementWhereUniqueInput[]
    update?: PropertyAnnouncementUpdateWithWhereUniqueWithoutAnnouncementInput | PropertyAnnouncementUpdateWithWhereUniqueWithoutAnnouncementInput[]
    updateMany?: PropertyAnnouncementUpdateManyWithWhereWithoutAnnouncementInput | PropertyAnnouncementUpdateManyWithWhereWithoutAnnouncementInput[]
    deleteMany?: PropertyAnnouncementScalarWhereInput | PropertyAnnouncementScalarWhereInput[]
  }

  export type UnitAnnouncementUpdateManyWithoutAnnouncementNestedInput = {
    create?: XOR<UnitAnnouncementCreateWithoutAnnouncementInput, UnitAnnouncementUncheckedCreateWithoutAnnouncementInput> | UnitAnnouncementCreateWithoutAnnouncementInput[] | UnitAnnouncementUncheckedCreateWithoutAnnouncementInput[]
    connectOrCreate?: UnitAnnouncementCreateOrConnectWithoutAnnouncementInput | UnitAnnouncementCreateOrConnectWithoutAnnouncementInput[]
    upsert?: UnitAnnouncementUpsertWithWhereUniqueWithoutAnnouncementInput | UnitAnnouncementUpsertWithWhereUniqueWithoutAnnouncementInput[]
    createMany?: UnitAnnouncementCreateManyAnnouncementInputEnvelope
    set?: UnitAnnouncementWhereUniqueInput | UnitAnnouncementWhereUniqueInput[]
    disconnect?: UnitAnnouncementWhereUniqueInput | UnitAnnouncementWhereUniqueInput[]
    delete?: UnitAnnouncementWhereUniqueInput | UnitAnnouncementWhereUniqueInput[]
    connect?: UnitAnnouncementWhereUniqueInput | UnitAnnouncementWhereUniqueInput[]
    update?: UnitAnnouncementUpdateWithWhereUniqueWithoutAnnouncementInput | UnitAnnouncementUpdateWithWhereUniqueWithoutAnnouncementInput[]
    updateMany?: UnitAnnouncementUpdateManyWithWhereWithoutAnnouncementInput | UnitAnnouncementUpdateManyWithWhereWithoutAnnouncementInput[]
    deleteMany?: UnitAnnouncementScalarWhereInput | UnitAnnouncementScalarWhereInput[]
  }

  export type PropertyAnnouncementUncheckedUpdateManyWithoutAnnouncementNestedInput = {
    create?: XOR<PropertyAnnouncementCreateWithoutAnnouncementInput, PropertyAnnouncementUncheckedCreateWithoutAnnouncementInput> | PropertyAnnouncementCreateWithoutAnnouncementInput[] | PropertyAnnouncementUncheckedCreateWithoutAnnouncementInput[]
    connectOrCreate?: PropertyAnnouncementCreateOrConnectWithoutAnnouncementInput | PropertyAnnouncementCreateOrConnectWithoutAnnouncementInput[]
    upsert?: PropertyAnnouncementUpsertWithWhereUniqueWithoutAnnouncementInput | PropertyAnnouncementUpsertWithWhereUniqueWithoutAnnouncementInput[]
    createMany?: PropertyAnnouncementCreateManyAnnouncementInputEnvelope
    set?: PropertyAnnouncementWhereUniqueInput | PropertyAnnouncementWhereUniqueInput[]
    disconnect?: PropertyAnnouncementWhereUniqueInput | PropertyAnnouncementWhereUniqueInput[]
    delete?: PropertyAnnouncementWhereUniqueInput | PropertyAnnouncementWhereUniqueInput[]
    connect?: PropertyAnnouncementWhereUniqueInput | PropertyAnnouncementWhereUniqueInput[]
    update?: PropertyAnnouncementUpdateWithWhereUniqueWithoutAnnouncementInput | PropertyAnnouncementUpdateWithWhereUniqueWithoutAnnouncementInput[]
    updateMany?: PropertyAnnouncementUpdateManyWithWhereWithoutAnnouncementInput | PropertyAnnouncementUpdateManyWithWhereWithoutAnnouncementInput[]
    deleteMany?: PropertyAnnouncementScalarWhereInput | PropertyAnnouncementScalarWhereInput[]
  }

  export type UnitAnnouncementUncheckedUpdateManyWithoutAnnouncementNestedInput = {
    create?: XOR<UnitAnnouncementCreateWithoutAnnouncementInput, UnitAnnouncementUncheckedCreateWithoutAnnouncementInput> | UnitAnnouncementCreateWithoutAnnouncementInput[] | UnitAnnouncementUncheckedCreateWithoutAnnouncementInput[]
    connectOrCreate?: UnitAnnouncementCreateOrConnectWithoutAnnouncementInput | UnitAnnouncementCreateOrConnectWithoutAnnouncementInput[]
    upsert?: UnitAnnouncementUpsertWithWhereUniqueWithoutAnnouncementInput | UnitAnnouncementUpsertWithWhereUniqueWithoutAnnouncementInput[]
    createMany?: UnitAnnouncementCreateManyAnnouncementInputEnvelope
    set?: UnitAnnouncementWhereUniqueInput | UnitAnnouncementWhereUniqueInput[]
    disconnect?: UnitAnnouncementWhereUniqueInput | UnitAnnouncementWhereUniqueInput[]
    delete?: UnitAnnouncementWhereUniqueInput | UnitAnnouncementWhereUniqueInput[]
    connect?: UnitAnnouncementWhereUniqueInput | UnitAnnouncementWhereUniqueInput[]
    update?: UnitAnnouncementUpdateWithWhereUniqueWithoutAnnouncementInput | UnitAnnouncementUpdateWithWhereUniqueWithoutAnnouncementInput[]
    updateMany?: UnitAnnouncementUpdateManyWithWhereWithoutAnnouncementInput | UnitAnnouncementUpdateManyWithWhereWithoutAnnouncementInput[]
    deleteMany?: UnitAnnouncementScalarWhereInput | UnitAnnouncementScalarWhereInput[]
  }

  export type AnnouncementCreateNestedOneWithoutPropertyAnnouncementsInput = {
    create?: XOR<AnnouncementCreateWithoutPropertyAnnouncementsInput, AnnouncementUncheckedCreateWithoutPropertyAnnouncementsInput>
    connectOrCreate?: AnnouncementCreateOrConnectWithoutPropertyAnnouncementsInput
    connect?: AnnouncementWhereUniqueInput
  }

  export type PropertyCreateNestedOneWithoutPropertyAnnouncementsInput = {
    create?: XOR<PropertyCreateWithoutPropertyAnnouncementsInput, PropertyUncheckedCreateWithoutPropertyAnnouncementsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutPropertyAnnouncementsInput
    connect?: PropertyWhereUniqueInput
  }

  export type AnnouncementUpdateOneRequiredWithoutPropertyAnnouncementsNestedInput = {
    create?: XOR<AnnouncementCreateWithoutPropertyAnnouncementsInput, AnnouncementUncheckedCreateWithoutPropertyAnnouncementsInput>
    connectOrCreate?: AnnouncementCreateOrConnectWithoutPropertyAnnouncementsInput
    upsert?: AnnouncementUpsertWithoutPropertyAnnouncementsInput
    connect?: AnnouncementWhereUniqueInput
    update?: XOR<XOR<AnnouncementUpdateToOneWithWhereWithoutPropertyAnnouncementsInput, AnnouncementUpdateWithoutPropertyAnnouncementsInput>, AnnouncementUncheckedUpdateWithoutPropertyAnnouncementsInput>
  }

  export type PropertyUpdateOneRequiredWithoutPropertyAnnouncementsNestedInput = {
    create?: XOR<PropertyCreateWithoutPropertyAnnouncementsInput, PropertyUncheckedCreateWithoutPropertyAnnouncementsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutPropertyAnnouncementsInput
    upsert?: PropertyUpsertWithoutPropertyAnnouncementsInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutPropertyAnnouncementsInput, PropertyUpdateWithoutPropertyAnnouncementsInput>, PropertyUncheckedUpdateWithoutPropertyAnnouncementsInput>
  }

  export type AnnouncementCreateNestedOneWithoutUnitAnnouncementsInput = {
    create?: XOR<AnnouncementCreateWithoutUnitAnnouncementsInput, AnnouncementUncheckedCreateWithoutUnitAnnouncementsInput>
    connectOrCreate?: AnnouncementCreateOrConnectWithoutUnitAnnouncementsInput
    connect?: AnnouncementWhereUniqueInput
  }

  export type UnitCreateNestedOneWithoutUnitAnnouncementsInput = {
    create?: XOR<UnitCreateWithoutUnitAnnouncementsInput, UnitUncheckedCreateWithoutUnitAnnouncementsInput>
    connectOrCreate?: UnitCreateOrConnectWithoutUnitAnnouncementsInput
    connect?: UnitWhereUniqueInput
  }

  export type AnnouncementUpdateOneRequiredWithoutUnitAnnouncementsNestedInput = {
    create?: XOR<AnnouncementCreateWithoutUnitAnnouncementsInput, AnnouncementUncheckedCreateWithoutUnitAnnouncementsInput>
    connectOrCreate?: AnnouncementCreateOrConnectWithoutUnitAnnouncementsInput
    upsert?: AnnouncementUpsertWithoutUnitAnnouncementsInput
    connect?: AnnouncementWhereUniqueInput
    update?: XOR<XOR<AnnouncementUpdateToOneWithWhereWithoutUnitAnnouncementsInput, AnnouncementUpdateWithoutUnitAnnouncementsInput>, AnnouncementUncheckedUpdateWithoutUnitAnnouncementsInput>
  }

  export type UnitUpdateOneRequiredWithoutUnitAnnouncementsNestedInput = {
    create?: XOR<UnitCreateWithoutUnitAnnouncementsInput, UnitUncheckedCreateWithoutUnitAnnouncementsInput>
    connectOrCreate?: UnitCreateOrConnectWithoutUnitAnnouncementsInput
    upsert?: UnitUpsertWithoutUnitAnnouncementsInput
    connect?: UnitWhereUniqueInput
    update?: XOR<XOR<UnitUpdateToOneWithWhereWithoutUnitAnnouncementsInput, UnitUpdateWithoutUnitAnnouncementsInput>, UnitUncheckedUpdateWithoutUnitAnnouncementsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PropertyCreateWithoutOwnerInput = {
    id?: string
    name: string
    type: string
    street?: string | null
    barangay?: string | null
    city?: string | null
    province?: string | null
    region?: string | null
    yearBuilt?: number | null
    description?: string | null
    imageUrls?: PropertyCreateimageUrlsInput | string[]
    houseRules?: PropertyCreatehouseRulesInput | string[]
    isActive?: boolean
    isUnderRepair?: boolean
    isUnderRenovation?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    units?: UnitCreateNestedManyWithoutPropertyInput
    propertyAnnouncements?: PropertyAnnouncementCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    type: string
    street?: string | null
    barangay?: string | null
    city?: string | null
    province?: string | null
    region?: string | null
    yearBuilt?: number | null
    description?: string | null
    imageUrls?: PropertyCreateimageUrlsInput | string[]
    houseRules?: PropertyCreatehouseRulesInput | string[]
    isActive?: boolean
    isUnderRepair?: boolean
    isUnderRenovation?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    units?: UnitUncheckedCreateNestedManyWithoutPropertyInput
    propertyAnnouncements?: PropertyAnnouncementUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutOwnerInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutOwnerInput, PropertyUncheckedCreateWithoutOwnerInput>
  }

  export type PropertyCreateManyOwnerInputEnvelope = {
    data: PropertyCreateManyOwnerInput | PropertyCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type PropertyUpsertWithWhereUniqueWithoutOwnerInput = {
    where: PropertyWhereUniqueInput
    update: XOR<PropertyUpdateWithoutOwnerInput, PropertyUncheckedUpdateWithoutOwnerInput>
    create: XOR<PropertyCreateWithoutOwnerInput, PropertyUncheckedCreateWithoutOwnerInput>
  }

  export type PropertyUpdateWithWhereUniqueWithoutOwnerInput = {
    where: PropertyWhereUniqueInput
    data: XOR<PropertyUpdateWithoutOwnerInput, PropertyUncheckedUpdateWithoutOwnerInput>
  }

  export type PropertyUpdateManyWithWhereWithoutOwnerInput = {
    where: PropertyScalarWhereInput
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyWithoutOwnerInput>
  }

  export type PropertyScalarWhereInput = {
    AND?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    OR?: PropertyScalarWhereInput[]
    NOT?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    id?: StringFilter<"Property"> | string
    ownerId?: StringFilter<"Property"> | string
    name?: StringFilter<"Property"> | string
    type?: StringFilter<"Property"> | string
    street?: StringNullableFilter<"Property"> | string | null
    barangay?: StringNullableFilter<"Property"> | string | null
    city?: StringNullableFilter<"Property"> | string | null
    province?: StringNullableFilter<"Property"> | string | null
    region?: StringNullableFilter<"Property"> | string | null
    yearBuilt?: IntNullableFilter<"Property"> | number | null
    description?: StringNullableFilter<"Property"> | string | null
    imageUrls?: StringNullableListFilter<"Property">
    houseRules?: StringNullableListFilter<"Property">
    isActive?: BoolFilter<"Property"> | boolean
    isUnderRepair?: BoolFilter<"Property"> | boolean
    isUnderRenovation?: BoolFilter<"Property"> | boolean
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
  }

  export type OwnerCreateWithoutPropertiesInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    celNum?: string | null
    street?: string | null
    barangay?: string | null
    city?: string | null
    province?: string | null
    region?: string | null
    isActive?: boolean
    isFlagged?: boolean
    flagReason?: string | null
    profilePictureUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OwnerUncheckedCreateWithoutPropertiesInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    celNum?: string | null
    street?: string | null
    barangay?: string | null
    city?: string | null
    province?: string | null
    region?: string | null
    isActive?: boolean
    isFlagged?: boolean
    flagReason?: string | null
    profilePictureUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OwnerCreateOrConnectWithoutPropertiesInput = {
    where: OwnerWhereUniqueInput
    create: XOR<OwnerCreateWithoutPropertiesInput, OwnerUncheckedCreateWithoutPropertiesInput>
  }

  export type UnitCreateWithoutPropertyInput = {
    id?: string
    unitNumber: string
    floor?: string | null
    bedrooms?: number
    bathrooms?: number
    squareFeet?: number | null
    monthlyRentAmount: number
    description?: string | null
    imageUrls?: UnitCreateimageUrlsInput | string[]
    status?: string
    isActive?: boolean
    isUnderRepair?: boolean
    isUnderRenovation?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    leases?: LeaseCreateNestedManyWithoutUnitInput
    unitAnnouncements?: UnitAnnouncementCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateWithoutPropertyInput = {
    id?: string
    unitNumber: string
    floor?: string | null
    bedrooms?: number
    bathrooms?: number
    squareFeet?: number | null
    monthlyRentAmount: number
    description?: string | null
    imageUrls?: UnitCreateimageUrlsInput | string[]
    status?: string
    isActive?: boolean
    isUnderRepair?: boolean
    isUnderRenovation?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    leases?: LeaseUncheckedCreateNestedManyWithoutUnitInput
    unitAnnouncements?: UnitAnnouncementUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutPropertyInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutPropertyInput, UnitUncheckedCreateWithoutPropertyInput>
  }

  export type UnitCreateManyPropertyInputEnvelope = {
    data: UnitCreateManyPropertyInput | UnitCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type PropertyAnnouncementCreateWithoutPropertyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    announcement: AnnouncementCreateNestedOneWithoutPropertyAnnouncementsInput
  }

  export type PropertyAnnouncementUncheckedCreateWithoutPropertyInput = {
    id?: string
    announcementId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyAnnouncementCreateOrConnectWithoutPropertyInput = {
    where: PropertyAnnouncementWhereUniqueInput
    create: XOR<PropertyAnnouncementCreateWithoutPropertyInput, PropertyAnnouncementUncheckedCreateWithoutPropertyInput>
  }

  export type PropertyAnnouncementCreateManyPropertyInputEnvelope = {
    data: PropertyAnnouncementCreateManyPropertyInput | PropertyAnnouncementCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type OwnerUpsertWithoutPropertiesInput = {
    update: XOR<OwnerUpdateWithoutPropertiesInput, OwnerUncheckedUpdateWithoutPropertiesInput>
    create: XOR<OwnerCreateWithoutPropertiesInput, OwnerUncheckedCreateWithoutPropertiesInput>
    where?: OwnerWhereInput
  }

  export type OwnerUpdateToOneWithWhereWithoutPropertiesInput = {
    where?: OwnerWhereInput
    data: XOR<OwnerUpdateWithoutPropertiesInput, OwnerUncheckedUpdateWithoutPropertiesInput>
  }

  export type OwnerUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    celNum?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    barangay?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFlagged?: BoolFieldUpdateOperationsInput | boolean
    flagReason?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OwnerUncheckedUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    celNum?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    barangay?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFlagged?: BoolFieldUpdateOperationsInput | boolean
    flagReason?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitUpsertWithWhereUniqueWithoutPropertyInput = {
    where: UnitWhereUniqueInput
    update: XOR<UnitUpdateWithoutPropertyInput, UnitUncheckedUpdateWithoutPropertyInput>
    create: XOR<UnitCreateWithoutPropertyInput, UnitUncheckedCreateWithoutPropertyInput>
  }

  export type UnitUpdateWithWhereUniqueWithoutPropertyInput = {
    where: UnitWhereUniqueInput
    data: XOR<UnitUpdateWithoutPropertyInput, UnitUncheckedUpdateWithoutPropertyInput>
  }

  export type UnitUpdateManyWithWhereWithoutPropertyInput = {
    where: UnitScalarWhereInput
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyWithoutPropertyInput>
  }

  export type UnitScalarWhereInput = {
    AND?: UnitScalarWhereInput | UnitScalarWhereInput[]
    OR?: UnitScalarWhereInput[]
    NOT?: UnitScalarWhereInput | UnitScalarWhereInput[]
    id?: StringFilter<"Unit"> | string
    propertyId?: StringFilter<"Unit"> | string
    unitNumber?: StringFilter<"Unit"> | string
    floor?: StringNullableFilter<"Unit"> | string | null
    bedrooms?: IntFilter<"Unit"> | number
    bathrooms?: IntFilter<"Unit"> | number
    squareFeet?: FloatNullableFilter<"Unit"> | number | null
    monthlyRentAmount?: FloatFilter<"Unit"> | number
    description?: StringNullableFilter<"Unit"> | string | null
    imageUrls?: StringNullableListFilter<"Unit">
    status?: StringFilter<"Unit"> | string
    isActive?: BoolFilter<"Unit"> | boolean
    isUnderRepair?: BoolFilter<"Unit"> | boolean
    isUnderRenovation?: BoolFilter<"Unit"> | boolean
    createdAt?: DateTimeFilter<"Unit"> | Date | string
    updatedAt?: DateTimeFilter<"Unit"> | Date | string
  }

  export type PropertyAnnouncementUpsertWithWhereUniqueWithoutPropertyInput = {
    where: PropertyAnnouncementWhereUniqueInput
    update: XOR<PropertyAnnouncementUpdateWithoutPropertyInput, PropertyAnnouncementUncheckedUpdateWithoutPropertyInput>
    create: XOR<PropertyAnnouncementCreateWithoutPropertyInput, PropertyAnnouncementUncheckedCreateWithoutPropertyInput>
  }

  export type PropertyAnnouncementUpdateWithWhereUniqueWithoutPropertyInput = {
    where: PropertyAnnouncementWhereUniqueInput
    data: XOR<PropertyAnnouncementUpdateWithoutPropertyInput, PropertyAnnouncementUncheckedUpdateWithoutPropertyInput>
  }

  export type PropertyAnnouncementUpdateManyWithWhereWithoutPropertyInput = {
    where: PropertyAnnouncementScalarWhereInput
    data: XOR<PropertyAnnouncementUpdateManyMutationInput, PropertyAnnouncementUncheckedUpdateManyWithoutPropertyInput>
  }

  export type PropertyAnnouncementScalarWhereInput = {
    AND?: PropertyAnnouncementScalarWhereInput | PropertyAnnouncementScalarWhereInput[]
    OR?: PropertyAnnouncementScalarWhereInput[]
    NOT?: PropertyAnnouncementScalarWhereInput | PropertyAnnouncementScalarWhereInput[]
    id?: StringFilter<"PropertyAnnouncement"> | string
    announcementId?: StringFilter<"PropertyAnnouncement"> | string
    propertyId?: StringFilter<"PropertyAnnouncement"> | string
    createdAt?: DateTimeFilter<"PropertyAnnouncement"> | Date | string
    updatedAt?: DateTimeFilter<"PropertyAnnouncement"> | Date | string
  }

  export type PropertyCreateWithoutUnitsInput = {
    id?: string
    name: string
    type: string
    street?: string | null
    barangay?: string | null
    city?: string | null
    province?: string | null
    region?: string | null
    yearBuilt?: number | null
    description?: string | null
    imageUrls?: PropertyCreateimageUrlsInput | string[]
    houseRules?: PropertyCreatehouseRulesInput | string[]
    isActive?: boolean
    isUnderRepair?: boolean
    isUnderRenovation?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: OwnerCreateNestedOneWithoutPropertiesInput
    propertyAnnouncements?: PropertyAnnouncementCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutUnitsInput = {
    id?: string
    ownerId: string
    name: string
    type: string
    street?: string | null
    barangay?: string | null
    city?: string | null
    province?: string | null
    region?: string | null
    yearBuilt?: number | null
    description?: string | null
    imageUrls?: PropertyCreateimageUrlsInput | string[]
    houseRules?: PropertyCreatehouseRulesInput | string[]
    isActive?: boolean
    isUnderRepair?: boolean
    isUnderRenovation?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    propertyAnnouncements?: PropertyAnnouncementUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutUnitsInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutUnitsInput, PropertyUncheckedCreateWithoutUnitsInput>
  }

  export type LeaseCreateWithoutUnitInput = {
    id?: string
    status?: string
    leaseStartDate: Date | string
    leaseEndDate: Date | string
    terms?: string | null
    notes?: string | null
    signedAt?: Date | string | null
    terminatedAt?: Date | string | null
    terminationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutLeasesInput
    transactions?: TransactionCreateNestedManyWithoutLeaseInput
  }

  export type LeaseUncheckedCreateWithoutUnitInput = {
    id?: string
    tenantId: string
    status?: string
    leaseStartDate: Date | string
    leaseEndDate: Date | string
    terms?: string | null
    notes?: string | null
    signedAt?: Date | string | null
    terminatedAt?: Date | string | null
    terminationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutLeaseInput
  }

  export type LeaseCreateOrConnectWithoutUnitInput = {
    where: LeaseWhereUniqueInput
    create: XOR<LeaseCreateWithoutUnitInput, LeaseUncheckedCreateWithoutUnitInput>
  }

  export type LeaseCreateManyUnitInputEnvelope = {
    data: LeaseCreateManyUnitInput | LeaseCreateManyUnitInput[]
    skipDuplicates?: boolean
  }

  export type UnitAnnouncementCreateWithoutUnitInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    announcement: AnnouncementCreateNestedOneWithoutUnitAnnouncementsInput
  }

  export type UnitAnnouncementUncheckedCreateWithoutUnitInput = {
    id?: string
    announcementId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnitAnnouncementCreateOrConnectWithoutUnitInput = {
    where: UnitAnnouncementWhereUniqueInput
    create: XOR<UnitAnnouncementCreateWithoutUnitInput, UnitAnnouncementUncheckedCreateWithoutUnitInput>
  }

  export type UnitAnnouncementCreateManyUnitInputEnvelope = {
    data: UnitAnnouncementCreateManyUnitInput | UnitAnnouncementCreateManyUnitInput[]
    skipDuplicates?: boolean
  }

  export type PropertyUpsertWithoutUnitsInput = {
    update: XOR<PropertyUpdateWithoutUnitsInput, PropertyUncheckedUpdateWithoutUnitsInput>
    create: XOR<PropertyCreateWithoutUnitsInput, PropertyUncheckedCreateWithoutUnitsInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutUnitsInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutUnitsInput, PropertyUncheckedUpdateWithoutUnitsInput>
  }

  export type PropertyUpdateWithoutUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    barangay?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrls?: PropertyUpdateimageUrlsInput | string[]
    houseRules?: PropertyUpdatehouseRulesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isUnderRepair?: BoolFieldUpdateOperationsInput | boolean
    isUnderRenovation?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: OwnerUpdateOneRequiredWithoutPropertiesNestedInput
    propertyAnnouncements?: PropertyAnnouncementUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    barangay?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrls?: PropertyUpdateimageUrlsInput | string[]
    houseRules?: PropertyUpdatehouseRulesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isUnderRepair?: BoolFieldUpdateOperationsInput | boolean
    isUnderRenovation?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    propertyAnnouncements?: PropertyAnnouncementUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type LeaseUpsertWithWhereUniqueWithoutUnitInput = {
    where: LeaseWhereUniqueInput
    update: XOR<LeaseUpdateWithoutUnitInput, LeaseUncheckedUpdateWithoutUnitInput>
    create: XOR<LeaseCreateWithoutUnitInput, LeaseUncheckedCreateWithoutUnitInput>
  }

  export type LeaseUpdateWithWhereUniqueWithoutUnitInput = {
    where: LeaseWhereUniqueInput
    data: XOR<LeaseUpdateWithoutUnitInput, LeaseUncheckedUpdateWithoutUnitInput>
  }

  export type LeaseUpdateManyWithWhereWithoutUnitInput = {
    where: LeaseScalarWhereInput
    data: XOR<LeaseUpdateManyMutationInput, LeaseUncheckedUpdateManyWithoutUnitInput>
  }

  export type LeaseScalarWhereInput = {
    AND?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
    OR?: LeaseScalarWhereInput[]
    NOT?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
    id?: StringFilter<"Lease"> | string
    unitId?: StringFilter<"Lease"> | string
    tenantId?: StringFilter<"Lease"> | string
    status?: StringFilter<"Lease"> | string
    leaseStartDate?: DateTimeFilter<"Lease"> | Date | string
    leaseEndDate?: DateTimeFilter<"Lease"> | Date | string
    terms?: StringNullableFilter<"Lease"> | string | null
    notes?: StringNullableFilter<"Lease"> | string | null
    signedAt?: DateTimeNullableFilter<"Lease"> | Date | string | null
    terminatedAt?: DateTimeNullableFilter<"Lease"> | Date | string | null
    terminationReason?: StringNullableFilter<"Lease"> | string | null
    createdAt?: DateTimeFilter<"Lease"> | Date | string
    updatedAt?: DateTimeFilter<"Lease"> | Date | string
  }

  export type UnitAnnouncementUpsertWithWhereUniqueWithoutUnitInput = {
    where: UnitAnnouncementWhereUniqueInput
    update: XOR<UnitAnnouncementUpdateWithoutUnitInput, UnitAnnouncementUncheckedUpdateWithoutUnitInput>
    create: XOR<UnitAnnouncementCreateWithoutUnitInput, UnitAnnouncementUncheckedCreateWithoutUnitInput>
  }

  export type UnitAnnouncementUpdateWithWhereUniqueWithoutUnitInput = {
    where: UnitAnnouncementWhereUniqueInput
    data: XOR<UnitAnnouncementUpdateWithoutUnitInput, UnitAnnouncementUncheckedUpdateWithoutUnitInput>
  }

  export type UnitAnnouncementUpdateManyWithWhereWithoutUnitInput = {
    where: UnitAnnouncementScalarWhereInput
    data: XOR<UnitAnnouncementUpdateManyMutationInput, UnitAnnouncementUncheckedUpdateManyWithoutUnitInput>
  }

  export type UnitAnnouncementScalarWhereInput = {
    AND?: UnitAnnouncementScalarWhereInput | UnitAnnouncementScalarWhereInput[]
    OR?: UnitAnnouncementScalarWhereInput[]
    NOT?: UnitAnnouncementScalarWhereInput | UnitAnnouncementScalarWhereInput[]
    id?: StringFilter<"UnitAnnouncement"> | string
    announcementId?: StringFilter<"UnitAnnouncement"> | string
    unitId?: StringFilter<"UnitAnnouncement"> | string
    createdAt?: DateTimeFilter<"UnitAnnouncement"> | Date | string
    updatedAt?: DateTimeFilter<"UnitAnnouncement"> | Date | string
  }

  export type LeaseCreateWithoutTenantInput = {
    id?: string
    status?: string
    leaseStartDate: Date | string
    leaseEndDate: Date | string
    terms?: string | null
    notes?: string | null
    signedAt?: Date | string | null
    terminatedAt?: Date | string | null
    terminationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    unit: UnitCreateNestedOneWithoutLeasesInput
    transactions?: TransactionCreateNestedManyWithoutLeaseInput
  }

  export type LeaseUncheckedCreateWithoutTenantInput = {
    id?: string
    unitId: string
    status?: string
    leaseStartDate: Date | string
    leaseEndDate: Date | string
    terms?: string | null
    notes?: string | null
    signedAt?: Date | string | null
    terminatedAt?: Date | string | null
    terminationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutLeaseInput
  }

  export type LeaseCreateOrConnectWithoutTenantInput = {
    where: LeaseWhereUniqueInput
    create: XOR<LeaseCreateWithoutTenantInput, LeaseUncheckedCreateWithoutTenantInput>
  }

  export type LeaseCreateManyTenantInputEnvelope = {
    data: LeaseCreateManyTenantInput | LeaseCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type LeaseUpsertWithWhereUniqueWithoutTenantInput = {
    where: LeaseWhereUniqueInput
    update: XOR<LeaseUpdateWithoutTenantInput, LeaseUncheckedUpdateWithoutTenantInput>
    create: XOR<LeaseCreateWithoutTenantInput, LeaseUncheckedCreateWithoutTenantInput>
  }

  export type LeaseUpdateWithWhereUniqueWithoutTenantInput = {
    where: LeaseWhereUniqueInput
    data: XOR<LeaseUpdateWithoutTenantInput, LeaseUncheckedUpdateWithoutTenantInput>
  }

  export type LeaseUpdateManyWithWhereWithoutTenantInput = {
    where: LeaseScalarWhereInput
    data: XOR<LeaseUpdateManyMutationInput, LeaseUncheckedUpdateManyWithoutTenantInput>
  }

  export type UnitCreateWithoutLeasesInput = {
    id?: string
    unitNumber: string
    floor?: string | null
    bedrooms?: number
    bathrooms?: number
    squareFeet?: number | null
    monthlyRentAmount: number
    description?: string | null
    imageUrls?: UnitCreateimageUrlsInput | string[]
    status?: string
    isActive?: boolean
    isUnderRepair?: boolean
    isUnderRenovation?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutUnitsInput
    unitAnnouncements?: UnitAnnouncementCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateWithoutLeasesInput = {
    id?: string
    propertyId: string
    unitNumber: string
    floor?: string | null
    bedrooms?: number
    bathrooms?: number
    squareFeet?: number | null
    monthlyRentAmount: number
    description?: string | null
    imageUrls?: UnitCreateimageUrlsInput | string[]
    status?: string
    isActive?: boolean
    isUnderRepair?: boolean
    isUnderRenovation?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    unitAnnouncements?: UnitAnnouncementUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutLeasesInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutLeasesInput, UnitUncheckedCreateWithoutLeasesInput>
  }

  export type TenantCreateWithoutLeasesInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    celNum?: string | null
    dateOfBirth?: Date | string | null
    emergencyName?: string | null
    emergencyPhone?: string | null
    notes?: string | null
    isFlagged?: boolean
    flagReason?: string | null
    isActive?: boolean
    moveInDate?: Date | string | null
    moveOutDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantUncheckedCreateWithoutLeasesInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    celNum?: string | null
    dateOfBirth?: Date | string | null
    emergencyName?: string | null
    emergencyPhone?: string | null
    notes?: string | null
    isFlagged?: boolean
    flagReason?: string | null
    isActive?: boolean
    moveInDate?: Date | string | null
    moveOutDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantCreateOrConnectWithoutLeasesInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutLeasesInput, TenantUncheckedCreateWithoutLeasesInput>
  }

  export type TransactionCreateWithoutLeaseInput = {
    id?: string
    amount: number
    reference: string
    transactionDate?: Date | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUncheckedCreateWithoutLeaseInput = {
    id?: string
    amount: number
    reference: string
    transactionDate?: Date | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutLeaseInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutLeaseInput, TransactionUncheckedCreateWithoutLeaseInput>
  }

  export type TransactionCreateManyLeaseInputEnvelope = {
    data: TransactionCreateManyLeaseInput | TransactionCreateManyLeaseInput[]
    skipDuplicates?: boolean
  }

  export type UnitUpsertWithoutLeasesInput = {
    update: XOR<UnitUpdateWithoutLeasesInput, UnitUncheckedUpdateWithoutLeasesInput>
    create: XOR<UnitCreateWithoutLeasesInput, UnitUncheckedCreateWithoutLeasesInput>
    where?: UnitWhereInput
  }

  export type UnitUpdateToOneWithWhereWithoutLeasesInput = {
    where?: UnitWhereInput
    data: XOR<UnitUpdateWithoutLeasesInput, UnitUncheckedUpdateWithoutLeasesInput>
  }

  export type UnitUpdateWithoutLeasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitNumber?: StringFieldUpdateOperationsInput | string
    floor?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    squareFeet?: NullableFloatFieldUpdateOperationsInput | number | null
    monthlyRentAmount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrls?: UnitUpdateimageUrlsInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isUnderRepair?: BoolFieldUpdateOperationsInput | boolean
    isUnderRenovation?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutUnitsNestedInput
    unitAnnouncements?: UnitAnnouncementUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutLeasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    unitNumber?: StringFieldUpdateOperationsInput | string
    floor?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    squareFeet?: NullableFloatFieldUpdateOperationsInput | number | null
    monthlyRentAmount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrls?: UnitUpdateimageUrlsInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isUnderRepair?: BoolFieldUpdateOperationsInput | boolean
    isUnderRenovation?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unitAnnouncements?: UnitAnnouncementUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type TenantUpsertWithoutLeasesInput = {
    update: XOR<TenantUpdateWithoutLeasesInput, TenantUncheckedUpdateWithoutLeasesInput>
    create: XOR<TenantCreateWithoutLeasesInput, TenantUncheckedCreateWithoutLeasesInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutLeasesInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutLeasesInput, TenantUncheckedUpdateWithoutLeasesInput>
  }

  export type TenantUpdateWithoutLeasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    celNum?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emergencyName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isFlagged?: BoolFieldUpdateOperationsInput | boolean
    flagReason?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    moveInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    moveOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUncheckedUpdateWithoutLeasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    celNum?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emergencyName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isFlagged?: BoolFieldUpdateOperationsInput | boolean
    flagReason?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    moveInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    moveOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutLeaseInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutLeaseInput, TransactionUncheckedUpdateWithoutLeaseInput>
    create: XOR<TransactionCreateWithoutLeaseInput, TransactionUncheckedCreateWithoutLeaseInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutLeaseInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutLeaseInput, TransactionUncheckedUpdateWithoutLeaseInput>
  }

  export type TransactionUpdateManyWithWhereWithoutLeaseInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutLeaseInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    leaseId?: StringFilter<"Transaction"> | string
    amount?: FloatFilter<"Transaction"> | number
    reference?: StringFilter<"Transaction"> | string
    transactionDate?: DateTimeFilter<"Transaction"> | Date | string
    notes?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type LeaseCreateWithoutTransactionsInput = {
    id?: string
    status?: string
    leaseStartDate: Date | string
    leaseEndDate: Date | string
    terms?: string | null
    notes?: string | null
    signedAt?: Date | string | null
    terminatedAt?: Date | string | null
    terminationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    unit: UnitCreateNestedOneWithoutLeasesInput
    tenant: TenantCreateNestedOneWithoutLeasesInput
  }

  export type LeaseUncheckedCreateWithoutTransactionsInput = {
    id?: string
    unitId: string
    tenantId: string
    status?: string
    leaseStartDate: Date | string
    leaseEndDate: Date | string
    terms?: string | null
    notes?: string | null
    signedAt?: Date | string | null
    terminatedAt?: Date | string | null
    terminationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaseCreateOrConnectWithoutTransactionsInput = {
    where: LeaseWhereUniqueInput
    create: XOR<LeaseCreateWithoutTransactionsInput, LeaseUncheckedCreateWithoutTransactionsInput>
  }

  export type LeaseUpsertWithoutTransactionsInput = {
    update: XOR<LeaseUpdateWithoutTransactionsInput, LeaseUncheckedUpdateWithoutTransactionsInput>
    create: XOR<LeaseCreateWithoutTransactionsInput, LeaseUncheckedCreateWithoutTransactionsInput>
    where?: LeaseWhereInput
  }

  export type LeaseUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: LeaseWhereInput
    data: XOR<LeaseUpdateWithoutTransactionsInput, LeaseUncheckedUpdateWithoutTransactionsInput>
  }

  export type LeaseUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    leaseStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leaseEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    signedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    terminatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    terminationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneRequiredWithoutLeasesNestedInput
    tenant?: TenantUpdateOneRequiredWithoutLeasesNestedInput
  }

  export type LeaseUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    leaseStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leaseEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    signedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    terminatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    terminationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyAnnouncementCreateWithoutAnnouncementInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutPropertyAnnouncementsInput
  }

  export type PropertyAnnouncementUncheckedCreateWithoutAnnouncementInput = {
    id?: string
    propertyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyAnnouncementCreateOrConnectWithoutAnnouncementInput = {
    where: PropertyAnnouncementWhereUniqueInput
    create: XOR<PropertyAnnouncementCreateWithoutAnnouncementInput, PropertyAnnouncementUncheckedCreateWithoutAnnouncementInput>
  }

  export type PropertyAnnouncementCreateManyAnnouncementInputEnvelope = {
    data: PropertyAnnouncementCreateManyAnnouncementInput | PropertyAnnouncementCreateManyAnnouncementInput[]
    skipDuplicates?: boolean
  }

  export type UnitAnnouncementCreateWithoutAnnouncementInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    unit: UnitCreateNestedOneWithoutUnitAnnouncementsInput
  }

  export type UnitAnnouncementUncheckedCreateWithoutAnnouncementInput = {
    id?: string
    unitId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnitAnnouncementCreateOrConnectWithoutAnnouncementInput = {
    where: UnitAnnouncementWhereUniqueInput
    create: XOR<UnitAnnouncementCreateWithoutAnnouncementInput, UnitAnnouncementUncheckedCreateWithoutAnnouncementInput>
  }

  export type UnitAnnouncementCreateManyAnnouncementInputEnvelope = {
    data: UnitAnnouncementCreateManyAnnouncementInput | UnitAnnouncementCreateManyAnnouncementInput[]
    skipDuplicates?: boolean
  }

  export type PropertyAnnouncementUpsertWithWhereUniqueWithoutAnnouncementInput = {
    where: PropertyAnnouncementWhereUniqueInput
    update: XOR<PropertyAnnouncementUpdateWithoutAnnouncementInput, PropertyAnnouncementUncheckedUpdateWithoutAnnouncementInput>
    create: XOR<PropertyAnnouncementCreateWithoutAnnouncementInput, PropertyAnnouncementUncheckedCreateWithoutAnnouncementInput>
  }

  export type PropertyAnnouncementUpdateWithWhereUniqueWithoutAnnouncementInput = {
    where: PropertyAnnouncementWhereUniqueInput
    data: XOR<PropertyAnnouncementUpdateWithoutAnnouncementInput, PropertyAnnouncementUncheckedUpdateWithoutAnnouncementInput>
  }

  export type PropertyAnnouncementUpdateManyWithWhereWithoutAnnouncementInput = {
    where: PropertyAnnouncementScalarWhereInput
    data: XOR<PropertyAnnouncementUpdateManyMutationInput, PropertyAnnouncementUncheckedUpdateManyWithoutAnnouncementInput>
  }

  export type UnitAnnouncementUpsertWithWhereUniqueWithoutAnnouncementInput = {
    where: UnitAnnouncementWhereUniqueInput
    update: XOR<UnitAnnouncementUpdateWithoutAnnouncementInput, UnitAnnouncementUncheckedUpdateWithoutAnnouncementInput>
    create: XOR<UnitAnnouncementCreateWithoutAnnouncementInput, UnitAnnouncementUncheckedCreateWithoutAnnouncementInput>
  }

  export type UnitAnnouncementUpdateWithWhereUniqueWithoutAnnouncementInput = {
    where: UnitAnnouncementWhereUniqueInput
    data: XOR<UnitAnnouncementUpdateWithoutAnnouncementInput, UnitAnnouncementUncheckedUpdateWithoutAnnouncementInput>
  }

  export type UnitAnnouncementUpdateManyWithWhereWithoutAnnouncementInput = {
    where: UnitAnnouncementScalarWhereInput
    data: XOR<UnitAnnouncementUpdateManyMutationInput, UnitAnnouncementUncheckedUpdateManyWithoutAnnouncementInput>
  }

  export type AnnouncementCreateWithoutPropertyAnnouncementsInput = {
    id?: string
    title: string
    body: string
    isActive?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    unitAnnouncements?: UnitAnnouncementCreateNestedManyWithoutAnnouncementInput
  }

  export type AnnouncementUncheckedCreateWithoutPropertyAnnouncementsInput = {
    id?: string
    title: string
    body: string
    isActive?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    unitAnnouncements?: UnitAnnouncementUncheckedCreateNestedManyWithoutAnnouncementInput
  }

  export type AnnouncementCreateOrConnectWithoutPropertyAnnouncementsInput = {
    where: AnnouncementWhereUniqueInput
    create: XOR<AnnouncementCreateWithoutPropertyAnnouncementsInput, AnnouncementUncheckedCreateWithoutPropertyAnnouncementsInput>
  }

  export type PropertyCreateWithoutPropertyAnnouncementsInput = {
    id?: string
    name: string
    type: string
    street?: string | null
    barangay?: string | null
    city?: string | null
    province?: string | null
    region?: string | null
    yearBuilt?: number | null
    description?: string | null
    imageUrls?: PropertyCreateimageUrlsInput | string[]
    houseRules?: PropertyCreatehouseRulesInput | string[]
    isActive?: boolean
    isUnderRepair?: boolean
    isUnderRenovation?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: OwnerCreateNestedOneWithoutPropertiesInput
    units?: UnitCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutPropertyAnnouncementsInput = {
    id?: string
    ownerId: string
    name: string
    type: string
    street?: string | null
    barangay?: string | null
    city?: string | null
    province?: string | null
    region?: string | null
    yearBuilt?: number | null
    description?: string | null
    imageUrls?: PropertyCreateimageUrlsInput | string[]
    houseRules?: PropertyCreatehouseRulesInput | string[]
    isActive?: boolean
    isUnderRepair?: boolean
    isUnderRenovation?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    units?: UnitUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutPropertyAnnouncementsInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutPropertyAnnouncementsInput, PropertyUncheckedCreateWithoutPropertyAnnouncementsInput>
  }

  export type AnnouncementUpsertWithoutPropertyAnnouncementsInput = {
    update: XOR<AnnouncementUpdateWithoutPropertyAnnouncementsInput, AnnouncementUncheckedUpdateWithoutPropertyAnnouncementsInput>
    create: XOR<AnnouncementCreateWithoutPropertyAnnouncementsInput, AnnouncementUncheckedCreateWithoutPropertyAnnouncementsInput>
    where?: AnnouncementWhereInput
  }

  export type AnnouncementUpdateToOneWithWhereWithoutPropertyAnnouncementsInput = {
    where?: AnnouncementWhereInput
    data: XOR<AnnouncementUpdateWithoutPropertyAnnouncementsInput, AnnouncementUncheckedUpdateWithoutPropertyAnnouncementsInput>
  }

  export type AnnouncementUpdateWithoutPropertyAnnouncementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unitAnnouncements?: UnitAnnouncementUpdateManyWithoutAnnouncementNestedInput
  }

  export type AnnouncementUncheckedUpdateWithoutPropertyAnnouncementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unitAnnouncements?: UnitAnnouncementUncheckedUpdateManyWithoutAnnouncementNestedInput
  }

  export type PropertyUpsertWithoutPropertyAnnouncementsInput = {
    update: XOR<PropertyUpdateWithoutPropertyAnnouncementsInput, PropertyUncheckedUpdateWithoutPropertyAnnouncementsInput>
    create: XOR<PropertyCreateWithoutPropertyAnnouncementsInput, PropertyUncheckedCreateWithoutPropertyAnnouncementsInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutPropertyAnnouncementsInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutPropertyAnnouncementsInput, PropertyUncheckedUpdateWithoutPropertyAnnouncementsInput>
  }

  export type PropertyUpdateWithoutPropertyAnnouncementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    barangay?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrls?: PropertyUpdateimageUrlsInput | string[]
    houseRules?: PropertyUpdatehouseRulesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isUnderRepair?: BoolFieldUpdateOperationsInput | boolean
    isUnderRenovation?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: OwnerUpdateOneRequiredWithoutPropertiesNestedInput
    units?: UnitUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutPropertyAnnouncementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    barangay?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrls?: PropertyUpdateimageUrlsInput | string[]
    houseRules?: PropertyUpdatehouseRulesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isUnderRepair?: BoolFieldUpdateOperationsInput | boolean
    isUnderRenovation?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: UnitUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type AnnouncementCreateWithoutUnitAnnouncementsInput = {
    id?: string
    title: string
    body: string
    isActive?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    propertyAnnouncements?: PropertyAnnouncementCreateNestedManyWithoutAnnouncementInput
  }

  export type AnnouncementUncheckedCreateWithoutUnitAnnouncementsInput = {
    id?: string
    title: string
    body: string
    isActive?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    propertyAnnouncements?: PropertyAnnouncementUncheckedCreateNestedManyWithoutAnnouncementInput
  }

  export type AnnouncementCreateOrConnectWithoutUnitAnnouncementsInput = {
    where: AnnouncementWhereUniqueInput
    create: XOR<AnnouncementCreateWithoutUnitAnnouncementsInput, AnnouncementUncheckedCreateWithoutUnitAnnouncementsInput>
  }

  export type UnitCreateWithoutUnitAnnouncementsInput = {
    id?: string
    unitNumber: string
    floor?: string | null
    bedrooms?: number
    bathrooms?: number
    squareFeet?: number | null
    monthlyRentAmount: number
    description?: string | null
    imageUrls?: UnitCreateimageUrlsInput | string[]
    status?: string
    isActive?: boolean
    isUnderRepair?: boolean
    isUnderRenovation?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutUnitsInput
    leases?: LeaseCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateWithoutUnitAnnouncementsInput = {
    id?: string
    propertyId: string
    unitNumber: string
    floor?: string | null
    bedrooms?: number
    bathrooms?: number
    squareFeet?: number | null
    monthlyRentAmount: number
    description?: string | null
    imageUrls?: UnitCreateimageUrlsInput | string[]
    status?: string
    isActive?: boolean
    isUnderRepair?: boolean
    isUnderRenovation?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    leases?: LeaseUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutUnitAnnouncementsInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutUnitAnnouncementsInput, UnitUncheckedCreateWithoutUnitAnnouncementsInput>
  }

  export type AnnouncementUpsertWithoutUnitAnnouncementsInput = {
    update: XOR<AnnouncementUpdateWithoutUnitAnnouncementsInput, AnnouncementUncheckedUpdateWithoutUnitAnnouncementsInput>
    create: XOR<AnnouncementCreateWithoutUnitAnnouncementsInput, AnnouncementUncheckedCreateWithoutUnitAnnouncementsInput>
    where?: AnnouncementWhereInput
  }

  export type AnnouncementUpdateToOneWithWhereWithoutUnitAnnouncementsInput = {
    where?: AnnouncementWhereInput
    data: XOR<AnnouncementUpdateWithoutUnitAnnouncementsInput, AnnouncementUncheckedUpdateWithoutUnitAnnouncementsInput>
  }

  export type AnnouncementUpdateWithoutUnitAnnouncementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    propertyAnnouncements?: PropertyAnnouncementUpdateManyWithoutAnnouncementNestedInput
  }

  export type AnnouncementUncheckedUpdateWithoutUnitAnnouncementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    propertyAnnouncements?: PropertyAnnouncementUncheckedUpdateManyWithoutAnnouncementNestedInput
  }

  export type UnitUpsertWithoutUnitAnnouncementsInput = {
    update: XOR<UnitUpdateWithoutUnitAnnouncementsInput, UnitUncheckedUpdateWithoutUnitAnnouncementsInput>
    create: XOR<UnitCreateWithoutUnitAnnouncementsInput, UnitUncheckedCreateWithoutUnitAnnouncementsInput>
    where?: UnitWhereInput
  }

  export type UnitUpdateToOneWithWhereWithoutUnitAnnouncementsInput = {
    where?: UnitWhereInput
    data: XOR<UnitUpdateWithoutUnitAnnouncementsInput, UnitUncheckedUpdateWithoutUnitAnnouncementsInput>
  }

  export type UnitUpdateWithoutUnitAnnouncementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitNumber?: StringFieldUpdateOperationsInput | string
    floor?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    squareFeet?: NullableFloatFieldUpdateOperationsInput | number | null
    monthlyRentAmount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrls?: UnitUpdateimageUrlsInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isUnderRepair?: BoolFieldUpdateOperationsInput | boolean
    isUnderRenovation?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutUnitsNestedInput
    leases?: LeaseUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutUnitAnnouncementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    unitNumber?: StringFieldUpdateOperationsInput | string
    floor?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    squareFeet?: NullableFloatFieldUpdateOperationsInput | number | null
    monthlyRentAmount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrls?: UnitUpdateimageUrlsInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isUnderRepair?: BoolFieldUpdateOperationsInput | boolean
    isUnderRenovation?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leases?: LeaseUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type PropertyCreateManyOwnerInput = {
    id?: string
    name: string
    type: string
    street?: string | null
    barangay?: string | null
    city?: string | null
    province?: string | null
    region?: string | null
    yearBuilt?: number | null
    description?: string | null
    imageUrls?: PropertyCreateimageUrlsInput | string[]
    houseRules?: PropertyCreatehouseRulesInput | string[]
    isActive?: boolean
    isUnderRepair?: boolean
    isUnderRenovation?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    barangay?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrls?: PropertyUpdateimageUrlsInput | string[]
    houseRules?: PropertyUpdatehouseRulesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isUnderRepair?: BoolFieldUpdateOperationsInput | boolean
    isUnderRenovation?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: UnitUpdateManyWithoutPropertyNestedInput
    propertyAnnouncements?: PropertyAnnouncementUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    barangay?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrls?: PropertyUpdateimageUrlsInput | string[]
    houseRules?: PropertyUpdatehouseRulesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isUnderRepair?: BoolFieldUpdateOperationsInput | boolean
    isUnderRenovation?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: UnitUncheckedUpdateManyWithoutPropertyNestedInput
    propertyAnnouncements?: PropertyAnnouncementUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    barangay?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrls?: PropertyUpdateimageUrlsInput | string[]
    houseRules?: PropertyUpdatehouseRulesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isUnderRepair?: BoolFieldUpdateOperationsInput | boolean
    isUnderRenovation?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitCreateManyPropertyInput = {
    id?: string
    unitNumber: string
    floor?: string | null
    bedrooms?: number
    bathrooms?: number
    squareFeet?: number | null
    monthlyRentAmount: number
    description?: string | null
    imageUrls?: UnitCreateimageUrlsInput | string[]
    status?: string
    isActive?: boolean
    isUnderRepair?: boolean
    isUnderRenovation?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyAnnouncementCreateManyPropertyInput = {
    id?: string
    announcementId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnitUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitNumber?: StringFieldUpdateOperationsInput | string
    floor?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    squareFeet?: NullableFloatFieldUpdateOperationsInput | number | null
    monthlyRentAmount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrls?: UnitUpdateimageUrlsInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isUnderRepair?: BoolFieldUpdateOperationsInput | boolean
    isUnderRenovation?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leases?: LeaseUpdateManyWithoutUnitNestedInput
    unitAnnouncements?: UnitAnnouncementUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitNumber?: StringFieldUpdateOperationsInput | string
    floor?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    squareFeet?: NullableFloatFieldUpdateOperationsInput | number | null
    monthlyRentAmount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrls?: UnitUpdateimageUrlsInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isUnderRepair?: BoolFieldUpdateOperationsInput | boolean
    isUnderRenovation?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leases?: LeaseUncheckedUpdateManyWithoutUnitNestedInput
    unitAnnouncements?: UnitAnnouncementUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitNumber?: StringFieldUpdateOperationsInput | string
    floor?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    squareFeet?: NullableFloatFieldUpdateOperationsInput | number | null
    monthlyRentAmount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrls?: UnitUpdateimageUrlsInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isUnderRepair?: BoolFieldUpdateOperationsInput | boolean
    isUnderRenovation?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyAnnouncementUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    announcement?: AnnouncementUpdateOneRequiredWithoutPropertyAnnouncementsNestedInput
  }

  export type PropertyAnnouncementUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    announcementId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyAnnouncementUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    announcementId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaseCreateManyUnitInput = {
    id?: string
    tenantId: string
    status?: string
    leaseStartDate: Date | string
    leaseEndDate: Date | string
    terms?: string | null
    notes?: string | null
    signedAt?: Date | string | null
    terminatedAt?: Date | string | null
    terminationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnitAnnouncementCreateManyUnitInput = {
    id?: string
    announcementId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaseUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    leaseStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leaseEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    signedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    terminatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    terminationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutLeasesNestedInput
    transactions?: TransactionUpdateManyWithoutLeaseNestedInput
  }

  export type LeaseUncheckedUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    leaseStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leaseEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    signedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    terminatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    terminationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutLeaseNestedInput
  }

  export type LeaseUncheckedUpdateManyWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    leaseStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leaseEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    signedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    terminatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    terminationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitAnnouncementUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    announcement?: AnnouncementUpdateOneRequiredWithoutUnitAnnouncementsNestedInput
  }

  export type UnitAnnouncementUncheckedUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    announcementId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitAnnouncementUncheckedUpdateManyWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    announcementId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaseCreateManyTenantInput = {
    id?: string
    unitId: string
    status?: string
    leaseStartDate: Date | string
    leaseEndDate: Date | string
    terms?: string | null
    notes?: string | null
    signedAt?: Date | string | null
    terminatedAt?: Date | string | null
    terminationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaseUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    leaseStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leaseEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    signedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    terminatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    terminationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneRequiredWithoutLeasesNestedInput
    transactions?: TransactionUpdateManyWithoutLeaseNestedInput
  }

  export type LeaseUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    leaseStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leaseEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    signedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    terminatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    terminationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutLeaseNestedInput
  }

  export type LeaseUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    leaseStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leaseEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    signedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    terminatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    terminationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyLeaseInput = {
    id?: string
    amount: number
    reference: string
    transactionDate?: Date | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateWithoutLeaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateWithoutLeaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutLeaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyAnnouncementCreateManyAnnouncementInput = {
    id?: string
    propertyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnitAnnouncementCreateManyAnnouncementInput = {
    id?: string
    unitId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyAnnouncementUpdateWithoutAnnouncementInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutPropertyAnnouncementsNestedInput
  }

  export type PropertyAnnouncementUncheckedUpdateWithoutAnnouncementInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyAnnouncementUncheckedUpdateManyWithoutAnnouncementInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitAnnouncementUpdateWithoutAnnouncementInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneRequiredWithoutUnitAnnouncementsNestedInput
  }

  export type UnitAnnouncementUncheckedUpdateWithoutAnnouncementInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitAnnouncementUncheckedUpdateManyWithoutAnnouncementInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}