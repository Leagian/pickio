"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ShareCountOrderByAggregateInput = class ShareCountOrderByAggregateInput {
};
exports.ShareCountOrderByAggregateInput = ShareCountOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShareCountOrderByAggregateInput.prototype, "shareId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShareCountOrderByAggregateInput.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShareCountOrderByAggregateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShareCountOrderByAggregateInput.prototype, "createdAt", void 0);
exports.ShareCountOrderByAggregateInput = ShareCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShareCountOrderByAggregateInput", {})
], ShareCountOrderByAggregateInput);
