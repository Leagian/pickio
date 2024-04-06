'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.CreateManyBookmarkResolver = void 0;
const tslib_1 = require('tslib');
const TypeGraphQL = tslib_1.__importStar(require('type-graphql'));
const CreateManyBookmarkArgs_1 = require('./args/CreateManyBookmarkArgs');
const Bookmark_1 = require('../../../models/Bookmark');
const AffectedRowsOutput_1 = require('../../outputs/AffectedRowsOutput');
const helpers_1 = require('../../../helpers');
let CreateManyBookmarkResolver = class CreateManyBookmarkResolver {
  async createManyBookmark(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).bookmark.createMany({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
};
exports.CreateManyBookmarkResolver = CreateManyBookmarkResolver;
tslib_1.__decorate(
  [
    TypeGraphQL.Mutation(
      (_returns) => AffectedRowsOutput_1.AffectedRowsOutput,
      {
        nullable: false,
      },
    ),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata('design:type', Function),
    tslib_1.__metadata('design:paramtypes', [
      Object,
      Object,
      CreateManyBookmarkArgs_1.CreateManyBookmarkArgs,
    ]),
    tslib_1.__metadata('design:returntype', Promise),
  ],
  CreateManyBookmarkResolver.prototype,
  'createManyBookmark',
  null,
);
exports.CreateManyBookmarkResolver = CreateManyBookmarkResolver =
  tslib_1.__decorate(
    [TypeGraphQL.Resolver((_of) => Bookmark_1.Bookmark)],
    CreateManyBookmarkResolver,
  );
