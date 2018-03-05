import LinkedList from "./lib/linkedList";

describe("LINKED LIST IMPLEMENTATION", () => {
	test("should add to LinkedList", () => {
		let llist = new LinkedList();
		expect(llist.node).toBe(null);
		llist.add(4);
		expect(llist.node.data).not.toBe(null);
	});
	test("should-remove-from-LinkedList", () => {
		let llist = new LinkedList();
		expect(llist.node).toBe(null);
		llist.add(4);
		expect(llist.node.data).not.toBe(null);
		llist.remove();
		expect(llist.node).toBe(null);
	});
	test('linked-list-arraymethod', () => {
		let llist = new LinkedList();
		llist.add(1).add(2).add(4).add(5);
		expect(llist.toArray()).toEqual([5, 4, 2, 1])
	})
});