#include <stdio.h>
#include <iostream>

using namespace std;

int main()
{
	int W[12]={6, 2, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4};
	int y, m, d, w;
	scanf("%d %d %d",&y, &m, &d);

	cout << W[m-1] << endl;

	cout << y << endl;

	cout << (y/4) << endl;

	cout << (y/100) << endl;
	
	cout << (y/400) << endl;

	w=W[m-1]+y+(y/4)-(y/100)+(y/400);
	if( ((y%4)==0) && (m<3) ) {
		w--;
		if((y%100)==0) w++;
		if((y%400)==0) w--;
	}
	printf("%d\n", (w+d)%7);

	return 0;
}