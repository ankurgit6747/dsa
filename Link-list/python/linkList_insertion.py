class Node:
    def __init__(self, data, next=None):
        self.data = data
        self.next = next

class LinkList:
    def __init__(self):
        self.head = None
        self.size = 0

    # Insert first Node
    def insert_first_node(self, data):
        self.head = Node(data, self.head)
        self.size += 1

    # Print data
    def print_data(self):
        current = self.head
        while current:
            print(current.data)
            current = current.next
            


ll = LinkList()
ll.insert_first_node(100)
ll.print_data()
    