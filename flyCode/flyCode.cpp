#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class Fly {
public:
    int airport(vector<int>& nums) {
        for (int i = 1; i < nums.size(); i++) {
            nums[i] = max(nums[i] + i, nums[i - 1]);
        }

        int ind = 0;
        int ans = 0;

        while (ind < nums.size() - 1) {
            ans++;
            ind = nums[ind];
        }

        return ans;
    }
};

int main() {
    int n;
    cout << "Enter total airports ";
    cin >> n;

    vector<int> fuel(n);
    cout << "Enter the fuel at each stop ";
    for (int i = 0; i < n; i++) {
        cin >> fuel[i];
    }

    Fly x;
    int result = x.airport(fuel);
    cout << "Number of planes needed " << result << endl;

    return 0;
}
