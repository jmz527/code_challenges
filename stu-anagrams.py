import collections

def find_anagrams(dictionary):
    # build a dict whose keys are the alphabetically sorted letters of the word
    d = collections.defaultdict(list)
    for word in dictionary:
        key = ''.join(sorted(word))
        d[key].append(word)

    # return a list containing the groups of matching anagrams
    return [x for x in d.values() if len(x) > 1]