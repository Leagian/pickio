"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkCreateManyPostInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookmarkCreateManyPostInput_1 = require("../inputs/BookmarkCreateManyPostInput");
let BookmarkCreateManyPostInputEnvelope = class BookmarkCreateManyPostInputEnvelope {
};
exports.BookmarkCreateManyPostInputEnvelope = BookmarkCreateManyPostInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookmarkCreateManyPostInput_1.BookmarkCreateManyPostInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], BookmarkCreateManyPostInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], BookmarkCreateManyPostInputEnvelope.prototype, "skipDuplicates", void 0);
exports.BookmarkCreateManyPostInputEnvelope = BookmarkCreateManyPostInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("BookmarkCreateManyPostInputEnvelope", {})
], BookmarkCreateManyPostInputEnvelope);
