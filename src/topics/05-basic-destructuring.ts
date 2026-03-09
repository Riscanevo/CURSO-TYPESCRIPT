interface AudioPlayer {
    audioVolume: number;
    sonDuration: number;
    song: string;
    details: Details;

}
interface Details {
    author: string;
    year: number;


}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    sonDuration: 36,
    song: 'Mess',
    details: {
        author: 'Ed Sheeran',
        year: 2020
    }
}


const {} = audioPlayer;



//console.log('song: ', audioPlayer.song);
//console.log('author: ', audioPlayer.details.author);
//console.log('year: ', audioPlayer.details.year);

const dbz:string [] = ['Goku','Vegeta','Trunks'];

console.log('dbz: ',dbz[2]); 
export{};