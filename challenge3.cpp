#include<iostream>
using namespace std;

int main(){
    string favourite_Tea = "Adrik Tea";
    int Tea_Quality;
    float Price_Tea;
    double Total_Bill;


    cout << "What is your favourite Tea that you like?" << endl;
    getline(cin, favourite_Tea);

    cout << "How much Tea_cup We bring with you?" << endl;
    cin>> Tea_Quality;

    Price_Tea = 29.99;

    cout << "Price of Tea =" << Price_Tea <<endl;

    Total_Bill = Price_Tea * Tea_Quality;

    cout << "Total bill of customer:" << Total_Bill << endl;
    return 0;
}
