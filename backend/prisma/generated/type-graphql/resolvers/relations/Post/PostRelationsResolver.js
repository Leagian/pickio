'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.PostRelationsResolver = void 0;
const tslib_1 = require('tslib');
const TypeGraphQL = tslib_1.__importStar(require('type-graphql'));
const Bookmark_1 = require('../../../models/Bookmark');
const Comment_1 = require('../../../models/Comment');
const Like_1 = require('../../../models/Like');
const Post_1 = require('../../../models/Post');
const Share_1 = require('../../../models/Share');
const User_1 = require('../../../models/User');
const PostBookmarksArgs_1 = require('./args/PostBookmarksArgs');
const PostCommentsArgs_1 = require('./args/PostCommentsArgs');
const PostLikesArgs_1 = require('./args/PostLikesArgs');
const PostSharesArgs_1 = require('./args/PostSharesArgs');
const helpers_1 = require('../../../helpers');
let PostRelationsResolver = class PostRelationsResolver {
  async User(post, ctx, info) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx)
      .post.findUniqueOrThrow({
        where: {
          postId: post.postId,
        },
      })
      .User({
        ...(_count &&
          (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
      });
  }
  async comments(post, ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx)
      .post.findUniqueOrThrow({
        where: {
          postId: post.postId,
        },
      })
      .comments({
        ...args,
        ...(_count &&
          (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
      });
  }
  async likes(post, ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx)
      .post.findUniqueOrThrow({
        where: {
          postId: post.postId,
        },
      })
      .likes({
        ...args,
        ...(_count &&
          (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
      });
  }
  async shares(post, ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx)
      .post.findUniqueOrThrow({
        where: {
          postId: post.postId,
        },
      })
      .shares({
        ...args,
        ...(_count &&
          (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
      });
  }
  async bookmarks(post, ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx)
      .post.findUniqueOrThrow({
        where: {
          postId: post.postId,
        },
      })
      .bookmarks({
        ...args,
        ...(_count &&
          (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
      });
  }
};
exports.PostRelationsResolver = PostRelationsResolver;
tslib_1.__decorate(
  [
    TypeGraphQL.FieldResolver((_type) => User_1.User, {
      nullable: false,
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata('design:type', Function),
    tslib_1.__metadata('design:paramtypes', [Post_1.Post, Object, Object]),
    tslib_1.__metadata('design:returntype', Promise),
  ],
  PostRelationsResolver.prototype,
  'User',
  null,
);
tslib_1.__decorate(
  [
    TypeGraphQL.FieldResolver((_type) => [Comment_1.Comment], {
      nullable: false,
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata('design:type', Function),
    tslib_1.__metadata('design:paramtypes', [
      Post_1.Post,
      Object,
      Object,
      PostCommentsArgs_1.PostCommentsArgs,
    ]),
    tslib_1.__metadata('design:returntype', Promise),
  ],
  PostRelationsResolver.prototype,
  'comments',
  null,
);
tslib_1.__decorate(
  [
    TypeGraphQL.FieldResolver((_type) => [Like_1.Like], {
      nullable: false,
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata('design:type', Function),
    tslib_1.__metadata('design:paramtypes', [
      Post_1.Post,
      Object,
      Object,
      PostLikesArgs_1.PostLikesArgs,
    ]),
    tslib_1.__metadata('design:returntype', Promise),
  ],
  PostRelationsResolver.prototype,
  'likes',
  null,
);
tslib_1.__decorate(
  [
    TypeGraphQL.FieldResolver((_type) => [Share_1.Share], {
      nullable: false,
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata('design:type', Function),
    tslib_1.__metadata('design:paramtypes', [
      Post_1.Post,
      Object,
      Object,
      PostSharesArgs_1.PostSharesArgs,
    ]),
    tslib_1.__metadata('design:returntype', Promise),
  ],
  PostRelationsResolver.prototype,
  'shares',
  null,
);
tslib_1.__decorate(
  [
    TypeGraphQL.FieldResolver((_type) => [Bookmark_1.Bookmark], {
      nullable: false,
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata('design:type', Function),
    tslib_1.__metadata('design:paramtypes', [
      Post_1.Post,
      Object,
      Object,
      PostBookmarksArgs_1.PostBookmarksArgs,
    ]),
    tslib_1.__metadata('design:returntype', Promise),
  ],
  PostRelationsResolver.prototype,
  'bookmarks',
  null,
);
exports.PostRelationsResolver = PostRelationsResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => Post_1.Post)],
  PostRelationsResolver,
);
