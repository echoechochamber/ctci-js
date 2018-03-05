"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataNode = /** @class */ (function () {
    function DataNode(datum) {
        this.data = datum;
        this.next = null;
    }
    return DataNode;
}());
/*define linked list class*/
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    Object.defineProperty(LinkedList.prototype, "node", {
        get: function () {
            return this.head;
        },
        enumerable: true,
        configurable: true
    });
    LinkedList.prototype.add = function (datum) {
        var node = new DataNode(datum);
        if (this.head === null) {
            this.head = node;
        }
        else {
            node.next = this.head;
            this.head = node;
        }
        return this;
    };
    LinkedList.prototype.remove = function () {
        this.head = this.head.next;
        return this;
    };
    LinkedList.prototype.toArray = function () {
        var arr = [];
        var pointer = this.head;
        while (pointer !== null) {
            arr.push(pointer.data);
            pointer = pointer.next;
        }
        return arr;
    };
    return LinkedList;
}());
exports.default = LinkedList;
//# sourceMappingURL=linkedList.js.map