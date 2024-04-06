'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.Bookmark = void 0;
const tslib_1 = require('tslib');
const TypeGraphQL = tslib_1.__importStar(require('type-graphql'));
let Bookmark = class Bookmark {};
exports.Bookmark = Bookmark;
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: false,
    }),
    tslib_1.__metadata('design:type', String),
  ],
  Bookmark.prototype,
  'bookmarkId',
  void 0,
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: false,
    }),
    tslib_1.__metadata('design:type', String),
  ],
  Bookmark.prototype,
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
  Bookmark.prototype,
  'userId',
  void 0,
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => Date, {
      nullable: false,
    }),
    tslib_1.__metadata('design:type', Date),
  ],
  Bookmark.prototype,
  'createdAt',
  void 0,
);
exports.Bookmark = Bookmark = tslib_1.__decorate(
  [TypeGraphQL.ObjectType('Bookmark', {})],
  Bookmark,
);
