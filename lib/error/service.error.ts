import { ErrorKey } from './error.types';
import { ErrorClass } from './error';

export const createServiceErrorClass = <T extends string>(ParentErrorClass: ErrorClass) => {
  return class ServiceError extends ParentErrorClass {
    key: ErrorKey<T> = 'UNKNOWN';

    static from(e: unknown, key: ErrorKey<T> = 'UNKNOWN') {
      console.log(key, e);
      if (e instanceof ServiceError) {
        return e;
      }
      return new ServiceError(key, { cause: e });
    }
  };
};

export type ServiceErrorClass<T extends string> = ReturnType<typeof createServiceErrorClass<T>>;
export type ServiceErrorInstance<T extends string> = InstanceType<ServiceErrorClass<T>>;
