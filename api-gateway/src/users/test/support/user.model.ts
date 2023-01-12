import { MockModel } from '../../../share/test/support/mock.model';
import { User } from '../../schemas/user.schema';
import { userStub } from '../stubs/user.stub';

export class UserModel extends MockModel<User> {
  protected entityStub = userStub();
}
