#include<iostream>
#include<vector>
using namespace std;

class Chai{
	public:
		string teaName;
		int serving;
		vector<string> ingredients;

		void displayChaiDetail(){
			cout << "TEA Name: " << teaName << endl;
			cout << "Serving: " << serving << endl;
			cout << "Ingredients";
			for(string ingredient : ingredients){
				cout << " : "<< ingredient << "  " ;
			}
			cout << endl;
		}
};

int main(){
	Chai c1;
	c1.teaName = "Gur Wali chai";
	c1.serving = 2;
	c1.ingredients = {"Water" , "Tea" , "Sugar" , "Gur"};
	
	c1.displayChaiDetail();
	
	return 0;
}
