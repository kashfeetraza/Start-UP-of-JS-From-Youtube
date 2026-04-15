#include <iostream>
using namespace std;

class Data {
public:
    int num1;
    
    Data(int n) {
        num1 = n;
    }

    // True pre-increment
//    Data operator++() {
//        ++num1;              // increment first
//        return Data(num1);   // return new value
//    }
};

int main() {
    Data inc(5);

    cout << "Before Increment: " << inc.num1 << endl;
    inc = ++inc; 
    cout << "After Increment: " << inc.num1 << endl;

    return 0;
}

