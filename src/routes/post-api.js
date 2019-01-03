import { createController } from 'awilix-koa';

const api = postService => ({
	find: async ctx => ctx.ok(await postService.find(ctx.query)),
	findOneById: async ctx => ctx.ok(await postService.findById(ctx.params.id)),
	create: async ctx => ctx.created(await postService.create(ctx.request.body)),
	remove: async ctx => ctx.noContent(await postService.remove(ctx.params.id)),
	update: async ctx => ctx.ok(await postService.update(ctx.params.id, ctx.request.body))
});

export default createController(api)
	.prefix('/posts')
	.get('', 'find')
	.get('/:id', 'findOneById')
	.post('', 'create')
	.put('/:id', 'update')
	.delete('/:id', 'remove');
