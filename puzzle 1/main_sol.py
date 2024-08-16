# first approche
# def pleaseConform(caps):
#     start = forward = backward = 0
#     intervals = []
#     caps = caps + ['END']
#     for i in range(1, len(caps)):
#         if caps[start] != caps[i]:
#             intervals.append((start, i - 1, caps[start]))
#             if caps[start] == 'F':
#                 forward += 1
#             else:
#                 backward += 1
#             start = i
#     # intervals.append((start, len(caps) - 1, caps[start]))
#     # if caps[start] == 'F':
#     #     forward += 1
#     # else:
#     #     backward += 1
#     if forward < backward:
#         flip = 'F'
#     else:
#         flip = 'B'
#     for t in intervals:
#         if t[2] == flip:
#             print('People in positions', t[0],
#                   'through', t[1], 'flip your caps!')

# a one pass algorithm
def pleaseConformOnePass(caps):
    caps = caps + caps[0]
    for i in range(1, len(caps)):
        if caps[i] != caps[i-1]:
            if caps[i] != caps[0]:
                print('People in positions', i, end="")
            else:
                print('through', i-1, 'flip your caps!')

if __name__ == "__main__":
    cap1 = ['F', 'F', 'B', 'B', 'B', 'F', 'B', 'B', 'B', 'F', 'F', 'B', 'F']  # ans = 3
    cap2 = ['F', 'F', 'B', 'B', 'B', 'F', 'B', 'B', 'B', 'F', 'F', 'F', 'F']  # ans = 2
    # pleaseConform(cap1)
    # print("---------")
    # pleaseConform(cap2)
    # print("---------")
    # pleaseConform([])
    pleaseConformOnePass(cap1)
    print("---------")
    pleaseConformOnePass(cap2)
    print("---------")
    pleaseConformOnePass([])
