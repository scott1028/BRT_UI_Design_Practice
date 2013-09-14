#include <iostream.h>
#include <stdlib.h>
#include <stdio.h>
#include <malloc.h>

void main()
{
  char* lpszContentLength = getenv("CONTENT_LENGTH");
  char* lpszBuffer;
  int nContentLength = atoi(lpszContentLength);

  lpszBuffer = malloc(lpszContentLength+1);  // allocate a buffer
  memset(lpszBuffer, 0, lpszContentLength+1);  // zero it out

  fread(lpszBuffer,1,lpszContentLength,stdin);  // get data

  cout << "Content-type: text/html" << endl << endl
   << "<html>" << endl
   << "<body>" << endl
   << "<p>" << endl
   << "Hello! You sent " << lpszContentLength << " bytes of data which read: <br>" << endl
   << lpszBuffer << endl
   << "</p>" << endl
   << "</body>" << endl
   << "</html>";

  free(lpszBuffer);
}