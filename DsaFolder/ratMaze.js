class Solution {
    findPath(m,n){
        //code here
        
        // make a visited array of same size of "m" for track which index has been visited or not 
        // visite path with 1 
        let visited=new Array(n)
        for(let i=0;i<visited.length;i++){
            visited[i]=new Array(n).fill(0)//firstly initilize with 0
        }
        
        let result=[]; // this array will contain the direction of possible path
        
        //initilize a funciton for find path 
        // x and y is coordinate which firstly initlize with 0
        function path(m,x,y,dir,n){
          
          //base case
          
          //if we are in bottom right point or desination point then push direction into result;
          
          if(x==n-1 && y===n-1){
              result.push(dir);
              return;
          }
          
          // edge case => not valid where we have to return 
          // when we enter in block path in m array or path is already visited
          
          if(m[x][y]==0 && visited[x][y]==1) return;
          
          // now here we were start move as cell contain 1 so make visited as 1
          
          visited[x][y]=1;
          
          // if x>0 then we can move up direction and when we go to the up then 
          // x and y become x-1,y and have to call path function in order to find path
          
          if(x>0) path(m,x-1,y,dir+"U",n);
          
          // when y>0 then we can move to the left and x and y become x,y-1 
          
          if(y>0) path(m,x,y-1,dir+"L",n);
          
          if(x<n-1) path(m,x+1,y,dir+"D",n);
          
          if(y<n-1) path(m,x,y+1,dir+"R",n);
          
        }
          
          // now when we back then make visited array as 0 , because there can be other path also
          
          visited[x][y]=0;
          
          
          for(let i=0;i<n;i++){
              for(let j=0;j<n;j++){
                  visited[i][j]=false;
              }
          }
          
          
          // now if top-left or bottom-right is block then return empty list
          
          if(m[0][0]===0 || m[n-1][n-1]===0) return result;
          
          
        
    
        
        
        path(m,0,0,"",n);
        result.sort()// as we have to make result as laxicrographyically sorted
        
        return result;
    }
    
}

