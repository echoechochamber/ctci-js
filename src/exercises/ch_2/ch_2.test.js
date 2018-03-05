import removeDups from './2_1';
import LinkedList from '../../lib/linkedList';

describe("LINKED LIST EXERCISES", () => {
	test("should-remove-dupes", () => {
		var llist = new LinkedList();
		llist.add(1).add(2).add(2).add(3).add(4).add(4).add(5);
		console.log(llist)
		expect(llist.node).not.toBe(null);
		let noDups = removeDups(llist);
		expect(noDups.toArray()).toEqual([5, 4, 3, 2, 1])
	})
});