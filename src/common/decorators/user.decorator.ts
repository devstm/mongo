import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    console.log(request.params.id);
    const id = +request.params.id;
    const userId = request.userId;
    return { id, userId };
  },
);