"""
Modify pleaseConformOnepass to print more natural commands
as in exercise 1, and ensure that it does not crash on an empty list.
Hint: You will need to remember the beginning of the interval (and not print
on line 6).
"""
# a one pass algorithm
def pleaseConformOnePass(caps):
    if caps:
        caps = caps + [caps[0]]
    else:
        return

    start = None
    for i in range(1, len(caps)):
        if caps[i] != caps[i-1]:
            if caps[i] != caps[0]:
                start = i
            else:
                if start is not None:
                    if i - 1 == start:
                        print("Person in position", start, "flip your cap!")
                    else:
                        print('People in positions', start, "through", i - 1, 'flip your caps!')
                    start = None

if __name__ == "__main__":
    cap1 = ['F', 'F', 'B', 'B', 'B', 'F', 'B', 'B', 'B', 'F', 'F', 'B', 'F']
    cap2 = ['B', 'F', 'B', 'B', 'B', 'F', 'B', 'B', 'B', 'F', 'F', 'F', 'F']
    pleaseConformOnePass(cap1)
    print("---------")
    pleaseConformOnePass(cap2)
    print("---------")
    pleaseConformOnePass([])
