var tasks = [ 
    {   
      'name'     : 'key01',   
      'duration' : 120   
    },   
    {   
      'name'     : 'key02',   
      'duration' : 60   
    },   
    {   
      'name'     : 'key03',   
      'duration' : 240   
    }   
  ];

  tasks.forEach(x=>{
      console.log(`${x.name} : ${x.duration}`);
  });

  //New Object array from another same.
  var task2 = tasks.map(x=>{
      rArr = {};
      rArr['name2'] = x.name;
      rArr['duration'] = x.duration+200;
      return(rArr);
  })

  var taski = tasks.filter((x)=>{
      return (x.duration != 120)
  }) 
  console.log(task2);
  console.log("-------------");
  console.log(taski);