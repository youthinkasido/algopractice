# linked list 

# single linked list
# node that points to data and reference to the next piece of data in list


# doubly linked list
# reference to previous piece of data (node?), its own data (node?), reference to the next piece of data.

# the entry point to the linked list is the head. the only way to get through the list is by iterating until 
# you get the node or data you want.

# 2 classes require to create a linkedList. node class and linkedList class

class Node 
    attr_accessor :value, :next 

    def initialize(value, next_node)
        @value = value 
        @next_node = next_node
    end
end

