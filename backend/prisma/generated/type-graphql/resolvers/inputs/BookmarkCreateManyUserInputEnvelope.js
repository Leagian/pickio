"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkCreateManyUserInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookmarkCreateManyUserInput_1 = require("../inputs/BookmarkCreateManyUserInput");
let BookmarkCreateManyUserInputEnvelope = class BookmarkCreateManyUserInputEnvelope {
};
exports.BookmarkCreateManyUserInputEnvelope = BookmarkCreateManyUserInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookmarkCreateManyUserInput_1.BookmarkCreateManyUserInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], BookmarkCreateManyUserInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], BookmarkCreateManyUserInputEnvelope.prototype, "skipDuplicates", void 0);
exports.BookmarkCreateManyUserInputEnvelope = BookmarkCreateManyUserInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("BookmarkCreateManyUserInputEnvelope", {})
], BookmarkCreateManyUserInputEnvelope);
