window.SIDEBAR_ITEMS = {"derive":[["ScheduleLabel","Derive macro generating an impl of the trait `ScheduleLabel`."],["States",""],["SystemSet","Derive macro generating an impl of the trait `SystemSet`."]],"enum":[["BaseSetMembership","Describes which base set (i.e. [`SystemSet`] where [`SystemSet::is_base`] returns true) a system belongs to."],["ExecutorKind","Specifies how a `Schedule` will be run."],["LogLevel","Specifies how schedule construction should respond to detecting a certain kind of issue."],["NodeId","Unique identifier for a system or system set."],["ScheduleBuildError","Category of errors encountered during schedule construction."]],"fn":[["apply_state_transition","If a new state is queued in [`NextState<S>`], this system:"],["apply_system_buffers","Instructs the executor to call `apply_buffers` on the systems that have run but not applied their buffers."],["run_enter_schedule","Run the enter schedule for the current state"]],"mod":[["common_conditions",""]],"struct":[["Dag","A directed acylic graph structure."],["MainThreadExecutor","New-typed [`ThreadExecutor`] [`Resource`] that is used to run systems on the main thread"],["MultiThreadedExecutor","Runs the schedule using a thread pool. Non-conflicting systems can run in parallel."],["NextState","The next state of [`State<S>`]."],["OnEnter","The label of a `Schedule` that runs whenever [`State<S>`] enters this state."],["OnExit","The label of a `Schedule` that runs whenever [`State<S>`] exits this state."],["OnUpdate","A [`SystemSet`] that will run within `CoreSet::Update` when this state is active."],["Schedule","A collection of systems, and the metadata and executor needed to run them in a certain order under certain conditions."],["ScheduleBuildSettings","Specifies miscellaneous settings for schedule construction."],["ScheduleGraph","Metadata for a [`Schedule`]."],["Schedules","Resource that stores [`Schedule`]s mapped to [`ScheduleLabel`]s."],["SimpleExecutor","A variant of `SingleThreadedExecutor` that calls `apply_buffers` immediately after running each system."],["SingleThreadedExecutor","Runs the schedule using a single thread."],["State","A finite-state machine whose transitions have associated schedules ([`OnEnter(state)`] and [`OnExit(state)`])."],["SystemConfig","A [`System`] with scheduling metadata."],["SystemConfigs","A collection of [`SystemConfig`]."],["SystemSchedule","Holds systems and conditions of a `Schedule` sorted in topological order (along with dependency information for multi-threaded execution)."],["SystemSetConfig","A [`SystemSet`] with scheduling metadata."],["SystemSetConfigs","A collection of [`SystemSetConfig`]."],["SystemTypeSet","A [`SystemSet`] grouping instances of the same function."]],"trait":[["Condition","A system that determines if one or more scheduled systems should run."],["IntoSystemConfig","Types that can be converted into a [`SystemConfig`]."],["IntoSystemConfigs","Types that can convert into a [`SystemConfigs`]."],["IntoSystemSet","Types that can be converted into a [`SystemSet`]."],["IntoSystemSetConfig","Types that can be converted into a [`SystemSetConfig`]."],["IntoSystemSetConfigs","Types that can convert into a [`SystemSetConfigs`]."],["ScheduleLabel","A strongly-typed label."],["States","Types that can define world-wide states in a finite-state machine."],["SystemSet","Types that identify logical groups of systems."]],"type":[["BoxedCondition",""],["BoxedScheduleLabel",""],["BoxedSystemSet",""]]};