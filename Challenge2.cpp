#include<iostream>
using namespace std;

int main(){
    float Teaprice = 99.89;
    float roundedTeaPrice = (float) Teaprice * 0.1;
    float Total_Price = Teaprice-roundedTeaPrice;

	cout << "Tea Price:"<< Teaprice << endl;
    cout << "Rounded Price:" << roundedTeaPrice <<endl;
    cout << "After Applying 10% Discount:" <<endl;
    cout << "Total price = " << Total_Price;
    return 0;
}
