export default class Talk {

    private vote = new SpeechSynthesisUtterance();
    
    public speak(test: string){
        this.vote.text = test;
        window.speechSynthesis.speak(this.vote);
    }

    public speakEvent( test: string, event: any){
        const vote = new SpeechSynthesisUtterance(test);
        vote.addEventListener('end', ()=>{
            event();
        });

        window.speechSynthesis.speak(vote);
    }
}