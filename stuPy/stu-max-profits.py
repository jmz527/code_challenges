# http://stackoverflow.com/questions/7086464/maximum-single-sell-profit


def get_max_profit(navs):
    """ This is the maximum sum subsequence problem with a level of indirection

    a solution that is better than O(n2) time is possible
    """
    lo, high, max_profit = None, None, 0
    for day, x in enumerate(navs):
        for y in navs[day + 1:]:
            profit = y - x
            if profit > max_profit:
                lo, high, max_profit = x, y, profit
    return lo, high, max_profit