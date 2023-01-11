import { AuthGuard } from '@nestjs/passport';

// will use in REST api
export class JwtAuthGuard extends AuthGuard('jwt') {}
