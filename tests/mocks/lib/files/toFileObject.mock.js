import * as toFileObject from '@/lib/files/toFileObject';

toFileObject.default = jest.fn(() => ({ mock: true }));

export default toFileObject;
