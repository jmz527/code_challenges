# http://stackoverflow.com/questions/3679694/a-weighted-version-of-random-choice
import random


class Bag(object):
    def __init__(self, red=0, green=0, blue=0):
        self.color = {'red': red, 'green': green, 'blue': blue}

    def select_marble(self):
        total = sum(self.color.values())
        r = random.uniform(0, total)
        upto = 0
        for color, count in self.color.iteritems():
            if upto + count > r:
                self.color[color] -= 1
                return color
            upto += count


bag = Bag(red=10, green=2, blue=1)