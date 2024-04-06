'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.Post = void 0;
const tslib_1 = require('tslib');
const TypeGraphQL = tslib_1.__importStar(require('type-graphql'));
const GraphQLScalars = tslib_1.__importStar(require('graphql-scalars'));
const client_1 = require('@prisma/client');
const PostCount_1 = require('../resolvers/outputs/PostCount');
let Post = class Post {};
exports.Post = Post;
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: false,
    }),
    tslib_1.__metadata('design:type', String),
  ],
  Post.prototype,
  'postId',
  void 0,
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: false,
    }),
    tslib_1.__metadata('design:type', String),
  ],
  Post.prototype,
  'userId',
  void 0,
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: true,
    }),
    tslib_1.__metadata('design:type', String),
  ],
  Post.prototype,
  'content',
  void 0,
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: true,
    }),
    tslib_1.__metadata('design:type', String),
  ],
  Post.prototype,
  'address',
  void 0,
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => GraphQLScalars.JSONResolver, {
      nullable: true,
    }),
    tslib_1.__metadata('design:type', Object),
  ],
  Post.prototype,
  'location',
  void 0,
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => [String], {
      nullable: false,
    }),
    tslib_1.__metadata('design:type', Array),
  ],
  Post.prototype,
  'images',
  void 0,
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => [String], {
      nullable: false,
    }),
    tslib_1.__metadata('design:type', Array),
  ],
  Post.prototype,
  'tags',
  void 0,
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => Date, {
      nullable: false,
    }),
    tslib_1.__metadata('design:type', Date),
  ],
  Post.prototype,
  'createdAt',
  void 0,
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => PostCount_1.PostCount, {
      nullable: true,
    }),
    tslib_1.__metadata('design:type', PostCount_1.PostCount),
  ],
  Post.prototype,
  '_count',
  void 0,
);
exports.Post = Post = tslib_1.__decorate(
  [TypeGraphQL.ObjectType('Post', {})],
  Post,
);
