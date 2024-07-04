<script lang="ts">
	import { db, type Competition } from "$lib/db";
	import { onMount } from "svelte";
    let competition:Competition = {};
    let competitions: Competition[] = [];
    const getCompetitions =async ()=>competitions = await db.competitions.toArray();
    
onMount(async ()=>{
  await getCompetitions();
})
const handleSubmit =async ()=>{
    const resp = await db.competitions.add(competition);
    console.log(resp);
    alert("the competition was created");
    if(resp) await getCompetitions();
}
</script>

<form on:submit={handleSubmit}>


<input required bind:value={competition.name} type="text">

<input required bind:value={competition.startDate} type="date">

<input type="submit" value="create a competition">
</form>
<h2>Get All Competitions</h2>
<ul>
    {#each competitions  as compt}
        <li>{compt.name}</li>
    {/each}
</ul>