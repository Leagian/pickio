'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.AggregateBookmarkResolver = void 0;
const tslib_1 = require('tslib');
const TypeGraphQL = tslib_1.__importStar(require('type-graphql'));
const AggregateBookmarkArgs_1 = require('./args/AggregateBookmarkArgs');
const Bookmark_1 = require('../../../models/Bookmark');
const AggregateBookmark_1 = require('../../outputs/AggregateBookmark');
const helpers_1 = require('../../../helpers');
let AggregateBookmarkResolver = class AggregateBookmarkResolver {
  async aggregateBookmark(ctx, info, args) {
    return (0, helpers_1.getPrismaFromContext)(ctx).bookmark.aggregate({
      ...args,
      ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
    });
  }
};
exports.AggregateBookmarkResolver = AggregateBookmarkResolver;
tslib_1.__decorate(
  [
    TypeGraphQL.Query((_returns) => AggregateBookmark_1.AggregateBookmark, {
      nullable: false,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata('design:type', Function),
    tslib_1.__metadata('design:paramtypes', [
      Object,
      Object,
      AggregateBookmarkArgs_1.AggregateBookmarkArgs,
    ]),
    tslib_1.__metadata('design:returntype', Promise),
  ],
  AggregateBookmarkResolver.prototype,
  'aggregateBookmark',
  null,
);
exports.AggregateBookmarkResolver = AggregateBookmarkResolver =
  tslib_1.__decorate(
    [TypeGraphQL.Resolver((_of) => Bookmark_1.Bookmark)],
    AggregateBookmarkResolver,
  );
