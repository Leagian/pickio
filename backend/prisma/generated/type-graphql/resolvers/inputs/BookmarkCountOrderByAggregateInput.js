'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.BookmarkCountOrderByAggregateInput = void 0;
const tslib_1 = require('tslib');
const TypeGraphQL = tslib_1.__importStar(require('type-graphql'));
const SortOrder_1 = require('../../enums/SortOrder');
let BookmarkCountOrderByAggregateInput = class BookmarkCountOrderByAggregateInput {};
exports.BookmarkCountOrderByAggregateInput = BookmarkCountOrderByAggregateInput;
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata('design:type', String),
  ],
  BookmarkCountOrderByAggregateInput.prototype,
  'bookmarkId',
  void 0,
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata('design:type', String),
  ],
  BookmarkCountOrderByAggregateInput.prototype,
  'postId',
  void 0,
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata('design:type', String),
  ],
  BookmarkCountOrderByAggregateInput.prototype,
  'userId',
  void 0,
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata('design:type', String),
  ],
  BookmarkCountOrderByAggregateInput.prototype,
  'createdAt',
  void 0,
);
exports.BookmarkCountOrderByAggregateInput =
  BookmarkCountOrderByAggregateInput = tslib_1.__decorate(
    [TypeGraphQL.InputType('BookmarkCountOrderByAggregateInput', {})],
    BookmarkCountOrderByAggregateInput,
  );
