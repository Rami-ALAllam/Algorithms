class Node:
    def __init__(self,value):
        self.value = value
        self.next = None

class linkedlist:
    def __init__(self):
        self.head = None

    def addfornt(self,value):
        node1 = Node(value)
        node1.next = self.head
        self.head = node1

    def front(self):
        if self.head is not None:
            print(self.head.value)
        else:
            print("null")

    def removefront(self):
        temp = self.head
        self.head = self.head.next
        temp = None

    def addlast(self,value):
        if self.head is not None:
            runner = self.head
            while runner.next is not None:
                runner = runner.next
            runner.next = Node(value)
        else:
            node1 = Node(value)
            node1.next = self.head
            self.head = node1

    def last(self):
        runner = self.head
        while runner.next is not None:
            runner = runner.next
        print(runner.value)

    def removelast(self):
        runner = self.head
        while runner.next.next is not None:
            runner = runner.next
        temp = runner.next 
        runner.next = None
        temp = None

    def Display(self): #same as traverse
        runner = self.head
        while runner is not None:
            print(runner.value, end=', ')
            runner = runner.next

    def addinPos(self,value,pos):
        runner = self.head
        for i in range(pos-1):
            runner = runner.next
        newnode = Node(value)
        newnode.next = runner.next
        runner.next = newnode


link1 = linkedlist()

link1.addfornt(10)
link1.addfornt("Rami")
link1.addlast(40)
link1.addlast(50)
link1.addinPos("HELOOOOOOO",2)

link1.removefront()
link1.removelast()
link1.Display()
link1.front()
link1.last()


