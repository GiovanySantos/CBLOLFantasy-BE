import { getUsers } from '../get-users';
import { getUsersFromDB } from '../../../clients/user';

jest.mock('../../../clients/user');

const mockUsers = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 24 },
];

describe('get-users', () => {
  describe('when it is called', () => {
    describe('and there is valid users', () => {
      beforeAll(() => {
        getUsersFromDB.mockReturnValue(mockUsers);
      });

      it('should return valid users', () => {
        expect(getUsers()).toEqual(mockUsers);
      });
    });

    describe('and there is no valid users', () => {
      beforeAll(() => {
        getUsersFromDB.mockReturnValue([]);
      });

      it('should return null', () => {
        expect(getUsers()).toBeNull();
      });
    });
  });
});
