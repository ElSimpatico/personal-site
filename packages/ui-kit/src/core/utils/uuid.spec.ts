import { UniqueIdSingleton } from './uuid';

let uuid = UniqueIdSingleton.getInstance();

describe('UUID utils', () => {
    beforeEach(async () => {
        uuid = UniqueIdSingleton.getInstance();
    });
    it('generate with prefix', () => {
        expect(uuid.generate('test').includes('test_1')).toBeTruthy();
    });
    it('generate with prefix and increment counter', () => {
        expect(uuid.generate('test').includes('test_2')).toBeTruthy();
    });
});
