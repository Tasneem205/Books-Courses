"""
Suppose there are bareheaded people in the line.
We'll represent them with the 'H' character. So for example we might have:
cap3 = ['F','F','B','H','B','F','B',
'B','B','F','H','F','F']
We don't want to confuse the bareheaded people by telling them to flip their
nonexistent caps and perhaps cause one of them to try to steal a cap from the
person ahead in line. Therefore, we want to skip over all the 'B' positions.
Modify pleaseConform so it generates a correct and minimal set of commands.
For the above example it should generate:
Person in position 2 flip your cap!
Person in position 4 flip your cap!
People in positions 6 through 8 flip your caps!
"""

def pleaseConformOnePass(caps):
    if caps:
        caps = caps + [caps[0]]
    else:
        return

    start = None
    for i in range(1, len(caps)):
        if caps[i] != 'H' and caps[i] != caps[i-1]:
            flip = caps[i]
            break

    for i in range(1, len(caps)):
        if caps[i] != caps[i-1]:
            if caps[i] == flip :
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
    cap2 = ['F', 'F', 'B', 'B', 'B', 'F', 'B', 'B', 'B', 'F', 'F', 'F', 'F']
    cap3 = ['F','F','B','H','B','F','B','B','B','F','H','F','F']
    pleaseConformOnePass(cap1)
    print("---------")
    pleaseConformOnePass(cap2)
    print("---------")
    pleaseConformOnePass([])
    print("---------")
    pleaseConformOnePass(cap3)
