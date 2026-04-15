#include <iostream>
using namespace std;

class Data {
public:
    int num1;
    
    Data(int n) {
        num1 = n;
    }

//    Data operator+(Data d2) {
//        Data result(0);
//        result.num1 = num1 + d2.num1;
//        return result;
//    }

    void display() {
        cout << num1;
    }
};

int main() {
    Data d1(5);
    cout << "Entered d1: " << d1.num1 << endl;

    Data d2(5);
    cout << "Entered d2: " << d2.num1 << endl;

    Data result(0);
//    result = d1 + d2;
    cout << "Entered result: " << result.num1 << endl;

    cout<<"Result: ";
	result.display();
    return 0;
}

