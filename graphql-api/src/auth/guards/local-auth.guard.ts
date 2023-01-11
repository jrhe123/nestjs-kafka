import { AuthGuard } from '@nestjs/passport';

// use local strategy, special case to obtain token
export class LocalAuthGuard extends AuthGuard('local') {}
