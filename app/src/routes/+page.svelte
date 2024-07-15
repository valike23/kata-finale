<script lang="ts">
	import Topbar from "$lib/components/Topbar.svelte";
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

<div>
    <Topbar></Topbar>
</div>