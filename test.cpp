#include<bits/stdc++.h>
using namespace std;
int main(){
// for(int i=1;i<100;i++){
//     if(7*i > 4+i){
//         cout<<i<<endl;
//     }
// }
int t;
cin>>t;
while(t--){
    int n;
    cin>>n;
    vector<int> v(n);
    vector<int> ans;
    for(int i=0;i<n;i++){
        cin>>v[i];
    }
    ans.push_back(1);
    // int sum=1;
    for(int i=1;i<n-1;i++){
        ans.push_back(v[i-1]*ans[i-1] + 1);
    }
    for(int i=1;i<1e8;i++){
        if(v[n-1]*i > ans[n-2] + i){
            ans.push_back(i);
            break;
        }
    }
    // for(int i=2;i<1e8;i++){
    //     if(v[0]*i > ans[n-1] + i - 1){
    //         // ans.push_back(i);
    //         ans[0]=i;
    //         break;
    //     }
    // }
    // for(int i=1;i<1e8;i++){
    //     if(v[0]*i > ans[0] + i){
    //         ans.push_back(i);
    //         break;
    //     }
    // }
    int sum=0;
    
    for(int i=0;i<n;i++){
        sum+=ans[i];
    }
    bool b= true;
    // cout<<sum<<endl;
    for(int i=0;i<n;i++){
        if(v[i]*ans[i] < sum){
            b = true;
            break;
        }
    }
    if(b){
        for(int i=0;i<n;i++){
        cout<<ans[i]<<" ";
        }
        cout<<endl;
    }else{
        cout<<-1<<endl;
    }

    // cout<<endl;

}
return 0;
}