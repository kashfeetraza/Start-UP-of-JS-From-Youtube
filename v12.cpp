#include<iostream>
#include<vector>
using namespace std;

class Chai{
    private:
        string TeaName;
        int Serving;
        vector<string> ingredents;
    public:
        Chai(){
            TeaName = "Unknown Tea";
            Serving = 1;
            ingredents = {"Water","Tea Leave"};
        }

        Chai(string name, int serve , vector<string> ingre){
            TeaName = name;
            Serving = serve;
            ingredents = ingre;
        }

        //getter of teaname
        string getTeaName(){
            return TeaName;
        }

        //setter of teaname
        void setTeaName(string name){
            TeaName = name;
        }

        //getter of serving
        int getServing(){
            return Serving;
        }

        //setter of serving
        void setServing(int serve){
            Serving = serve;
        }

        //getter of ingredients
        vector<string> getingredents(){
            return ingredents;
        }

        //setter of ingredients
        void setingredents( vector<string> ingr){
            ingredents = ingr;
        }

        void displaychai(){
            cout << "Tea Name : " << TeaName << endl;
            cout << "Servings : " << Serving << endl;
            cout << "Ingredients : ";
            for(string ingredent : ingredents){
                cout << " " << ingredent << "";
            }
            cout << endl;
        }
};



int main(){
    
    Chai chai;

    chai.setTeaName("Masala Tea");
    chai.getTeaName();

    chai.setServing(3);
    chai.getServing();

    chai.setingredents({"Masala","Lemon"});
    chai.getingredents();

    chai.displaychai();
    return 0;
}