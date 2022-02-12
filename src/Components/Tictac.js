import React, {useState} from 'react';
import './tictac.css';
 

const Tictac = () =>{
    const[turn,setTurn]=useState('x');
    const[cells,setCells]=useState(Array(9).fill(''));
     const [winner,setWinner]=useState();
    const checkForWinner=(squares)=>{

        let combos ={
            across:[
                [0,1,2],
                [3,4,5],
                [6,7,8],
            
            ],
            down:[
                [0,3,6],
                [1,4,7],
                [2,5,8],
            ],

            diagnol:[
                [0,4,8],
                [2,4,6],
            ],
        };

        for (let combo in combos){
            combos[combo].forEach((pattern)=>{
                if(
                    squares[pattern[0]]=== ''||
                    squares[pattern[1]]=== ''||
                    squares[pattern[2]]=== ''

                ){

                } else if(
                    squares[pattern[0]]=== squares[pattern[1]]&&
                    squares[pattern[1]]=== squares[pattern[2]]
                    )
                {
                    setWinner(squares[pattern[0]]);
                     }
            });
        }

    };


    const restart =()=>{
        setWinner(null);
        setCells(Array(9).fill(''));
      
    }

    const handleClick = (num) =>{

        if(cells[num] !== ''){
            alert('already clicked');
            return;
        }
        let squares = [...cells];

        if(turn==='x'){
            squares[num]='x';
            setTurn('o');
        }else{
            squares[num]='0';
            setTurn('x');
        }
        setCells(squares);
        checkForWinner(squares);
    }

    const Cell = ({num}) => {
        return <td onClick={()=>handleClick(num)}>{cells[num]}</td>;
    };
    return(
        <div className='container'>
          <div className='cont'>
            {/* <input type="text"  onChange={getData} placeholder='First player'/>
            <input type="text"   onChange={getData} placeholder='second player'/>  */}
            <table>
               <div className='turn'> Turn:{turn} </div>
                <tbody>
                    <tr>
                        <Cell num={0}/>
                        <Cell num={1}/>
                        <Cell num={2}/>
                    </tr>
                    <tr>
                        <Cell num={3}/>
                        <Cell num={4}/>
                        <Cell num={5}/>
                    </tr>

                    <tr>
                        <Cell num={6}/>
                        <Cell num={7}/>
                        <Cell num={8}/>
                    </tr>
                </tbody>

            </table>

            
            {winner&&(
                <>
                <h3>{winner}  is the Winner !</h3>
                {/* <button onClick={()=>restart()}>play Again</button> */}
              </>
            )}
             <button onClick={()=>restart()}>play Again</button>
         </div>
        </div>

    );
};
export default Tictac;