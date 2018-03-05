import LinkedList from '../../lib/linkedList';

function removeDups(/* linkedList */llist) {
	let outList = new LinkedList();
	let pointer = llist.node;
	let tmpArr = [];
	while (pointer != null) {
		// if this has already been stored in the array, add it to the new linkedList
		if (tmpArr.indexOf(pointer.data) === -1) {
			// outList.add(pointer.data);
			tmpArr.push(pointer.data);
		}
		pointer = pointer.next;
	}
	/* do this in reverse so that we're actually getting the thigns in the same order
	* NOTE: not sure if order matters since we're told that the linkedlist is unordered
	* */
	for (var i = tmpArr.length - 1; i >= 0; i--) {
		outList.add(tmpArr[i])
	}
	return outList;
}


export default removeDups